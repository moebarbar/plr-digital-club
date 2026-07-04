'use server'

import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'

/**
 * Create a fresh Stripe Checkout session for the signed-in-but-inactive user
 * (someone who created an account at checkout but never completed payment).
 * Session-scoped: users can only ever resume payment for their own account.
 */
export async function resumeCheckout(): Promise<{ url?: string; error?: string }> {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { error: 'Please log in first.' }

    const { data: profile } = await supabase
      .from('profiles')
      .select('is_active, stripe_customer_id, full_name')
      .eq('id', user.id)
      .single()

    if (profile?.is_active) {
      // Already paid/activated — nothing to resume.
      return { url: '/dashboard' }
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    let customerId = profile?.stripe_customer_id
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: profile?.full_name ?? undefined,
        metadata: { supabase_user_id: user.id },
      })
      customerId = customer.id
      await supabase.from('profiles').update({ stripe_customer_id: customerId }).eq('id', user.id)
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer: customerId,
      line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pending`,
      metadata: { supabase_user_id: user.id },
    })

    return { url: session.url ?? undefined }
  } catch (err) {
    console.error('resumeCheckout error:', err)
    return { error: 'Could not start checkout. Please try again or contact support.' }
  }
}
