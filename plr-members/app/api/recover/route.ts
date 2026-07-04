import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { sendRecoveryEmail } from '@/lib/email/sendRecoveryEmail'

// Abandoned-checkout recovery, triggered by an external cron ONCE PER DAY:
//
//   GET/POST https://plrdigitalclub.com/api/recover
//   Header:  x-cron-secret: <DIGEST_CRON_SECRET>
//
// Emails accounts that were created at checkout 24–48h ago but never paid
// (is_active = false, no order row). The fixed 24h window + daily cadence
// means each person is emailed at most once, with no tracking column needed.
// Anyone who paid but wasn't activated (webhook failure) has an order row
// and is explicitly excluded — they must never get a "complete purchase" email.

async function runRecovery(request: Request): Promise<NextResponse> {
  const secret = process.env.DIGEST_CRON_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'Recovery disabled: DIGEST_CRON_SECRET is not set.' }, { status: 503 })
  }

  const provided =
    request.headers.get('x-cron-secret') ??
    request.headers.get('authorization')?.replace(/^Bearer\s+/i, '')
  if (provided !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const admin = getSupabaseAdmin()
  const now = Date.now()
  const windowStart = new Date(now - 48 * 60 * 60 * 1000).toISOString()
  const windowEnd = new Date(now - 24 * 60 * 60 * 1000).toISOString()

  const { data: candidates, error: profilesError } = await admin
    .from('profiles')
    .select('id, email, full_name')
    .eq('is_active', false)
    .not('email', 'is', null)
    .gte('created_at', windowStart)
    .lt('created_at', windowEnd)

  if (profilesError) {
    return NextResponse.json({ error: `Failed to load profiles: ${profilesError.message}` }, { status: 500 })
  }
  if (!candidates || candidates.length === 0) {
    return NextResponse.json({ sent: 0, skipped: 'no abandoned checkouts in window' }, { status: 200 })
  }

  // Exclude anyone who actually paid (order exists) — inactive-with-order is a
  // webhook failure, not an abandoned checkout.
  const ids = candidates.map((c) => c.id)
  const { data: paidOrders, error: ordersError } = await admin
    .from('orders')
    .select('user_id')
    .in('user_id', ids)

  if (ordersError) {
    return NextResponse.json({ error: `Failed to load orders: ${ordersError.message}` }, { status: 500 })
  }
  const paidIds = new Set((paidOrders ?? []).map((o) => o.user_id as string))

  let sent = 0
  let failed = 0
  for (const c of candidates) {
    if (paidIds.has(c.id) || !c.email) continue
    const firstName = c.full_name?.split(' ')[0] ?? 'there'
    try {
      await sendRecoveryEmail(c.email, firstName)
      sent++
    } catch (err) {
      failed++
      console.error(`Recovery send failed for ${c.email}:`, err)
    }
  }

  return NextResponse.json({ sent, failed, excludedPaid: paidIds.size }, { status: 200 })
}

export async function POST(request: Request) {
  return runRecovery(request)
}

export async function GET(request: Request) {
  return runRecovery(request)
}
