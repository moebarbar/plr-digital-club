import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { sendDigestEmail, type DigestProduct } from '@/lib/email/sendDigestEmail'

// Weekly "what's new" digest, triggered by an external cron (e.g. cron-job.org)
// hitting this endpoint once a week with the shared secret:
//
//   GET/POST https://plrdigitalclub.com/api/digest
//   Header:  x-cron-secret: <DIGEST_CRON_SECRET>
//
// Finds products added in the last 7 days and emails every active member.
// If no products were added, it sends nothing and reports why.

const WINDOW_DAYS = 7

// Guard against an accidentally double-configured cron firing twice in a row.
// In-memory only (single instance); a restart clears it, which is fine — the
// cron cadence is weekly, not minutes.
let lastRunAt = 0
const MIN_INTERVAL_MS = 20 * 60 * 60 * 1000 // 20h

async function runDigest(request: Request): Promise<NextResponse> {
  const secret = process.env.DIGEST_CRON_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'Digest disabled: DIGEST_CRON_SECRET is not set.' }, { status: 503 })
  }

  const provided =
    request.headers.get('x-cron-secret') ??
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')
  if (provided !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const now = Date.now()
  if (now - lastRunAt < MIN_INTERVAL_MS) {
    return NextResponse.json({ sent: 0, skipped: 'ran recently' }, { status: 200 })
  }

  const admin = getSupabaseAdmin()
  const since = new Date(now - WINDOW_DAYS * 24 * 60 * 60 * 1000).toISOString()

  const { data: products, error: productsError } = await admin
    .from('products')
    .select('title, description, image_url, created_at, categories(name)')
    .gte('created_at', since)
    .order('created_at', { ascending: false })
    .limit(12)

  if (productsError) {
    return NextResponse.json({ error: `Failed to load products: ${productsError.message}` }, { status: 500 })
  }
  if (!products || products.length === 0) {
    return NextResponse.json({ sent: 0, skipped: 'no new products this week' }, { status: 200 })
  }

  const digestProducts: DigestProduct[] = products.map((p) => ({
    title: p.title,
    description: p.description,
    image_url: p.image_url,
    categoryName: (p.categories as unknown as { name: string } | null)?.name ?? null,
  }))

  const { data: members, error: membersError } = await admin
    .from('profiles')
    .select('email, full_name')
    .eq('is_active', true)
    .not('email', 'is', null)

  if (membersError) {
    return NextResponse.json({ error: `Failed to load members: ${membersError.message}` }, { status: 500 })
  }

  let sent = 0
  let failed = 0
  for (const member of members ?? []) {
    if (!member.email) continue
    const firstName = member.full_name?.split(' ')[0] ?? 'there'
    try {
      await sendDigestEmail(member.email, firstName, digestProducts)
      sent++
    } catch (err) {
      // One bad address must not abort the whole run.
      failed++
      console.error(`Digest send failed for ${member.email}:`, err)
    }
  }

  lastRunAt = now
  return NextResponse.json({ sent, failed, products: digestProducts.length }, { status: 200 })
}

export async function POST(request: Request) {
  return runDigest(request)
}

// cron-job.org defaults to GET; support it with the same secret check.
export async function GET(request: Request) {
  return runDigest(request)
}
