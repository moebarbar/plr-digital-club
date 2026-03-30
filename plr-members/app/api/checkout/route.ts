import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!)
}

export async function POST(request: Request) {
  const stripe = getStripe()
  const { name, email, password } = await request.json()

  // Validate
  if (!name || !email || !password) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
  }

  // Create Supabase user
  const admin = getSupabaseAdmin()

  const { data: userData, error: userError } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: name },
  })

  if (userError) {
    if (userError.message.toLowerCase().includes('already been registered') || userError.code === 'email_exists') {
      return NextResponse.json(
        { error: 'An account with this email already exists. Please log in.' },
        { status: 409 }
      )
    }
    return NextResponse.json({ error: userError.message }, { status: 400 })
  }

  const userId = userData.user.id

  // Update profile with full_name
  await admin.from('profiles').update({ full_name: name }).eq('id', userId)

  // Create Stripe customer
  const customer = await stripe.customers.create({
    email,
    name,
    metadata: { supabase_user_id: userId },
  })

  // Update profile with stripe_customer_id
  await admin.from('profiles').update({ stripe_customer_id: customer.id }).eq('id', userId)

  // Create Stripe Checkout Session
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer: customer.id,
    line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
    metadata: { supabase_user_id: userId },
  })

  return NextResponse.json({ url: session.url })
}
