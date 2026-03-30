import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { sendWelcomeEmail } from '@/lib/email/sendWelcomeEmail'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!)
}

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Return 200 immediately — process async
  const response = NextResponse.json({ received: true }, { status: 200 })

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const userId = session.metadata?.supabase_user_id
    if (userId) {
      const admin = getSupabaseAdmin()

      await admin.from('profiles').update({ is_active: true }).eq('id', userId)

      await admin.from('orders').insert({
        user_id: userId,
        stripe_session_id: session.id,
        amount: session.amount_total,
        status: 'paid',
        plan: 'lifetime',
      })

      const { data: profile } = await admin
        .from('profiles')
        .select('email, full_name')
        .eq('id', userId)
        .single()

      if (profile?.email) {
        const firstName = profile.full_name?.split(' ')[0] ?? 'there'
        await sendWelcomeEmail(profile.email, firstName)
      }
    }
  }

  if (event.type === 'payment_intent.payment_failed') {
    console.error('Payment failed:', event.data.object)
  }

  return response
}
