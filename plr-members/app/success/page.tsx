import Stripe from 'stripe'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!)
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id } = await searchParams

  if (!session_id) {
    return <ErrorCard message="No session ID provided." />
  }

  let session: Stripe.Checkout.Session
  try {
    session = await getStripe().checkout.sessions.retrieve(session_id)
  } catch {
    return <ErrorCard message="Could not retrieve your session. Please contact support." />
  }

  if (session.payment_status !== 'paid') {
    return <ErrorCard message="Payment not confirmed. Please contact support if you believe this is an error." />
  }

  // Eagerly activate the user in case the webhook hasn't fired yet
  const userId = session.metadata?.supabase_user_id
  if (userId) {
    const admin = getSupabaseAdmin()
    await admin.from('profiles').update({ is_active: true }).eq('id', userId)
  }

  return (
    <div className="min-h-screen bg-[#1A1A4E] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="PLR Digital Club" width={160} height={40} className="h-10 w-auto" priority />
        </div>
        <p className="text-5xl mb-4">🎉</p>
        <h1 className="text-3xl font-bold text-[#1A1A4E]">You&apos;re in!</h1>
        <p className="text-gray-600 mt-2">Your lifetime membership is now active.</p>
        <p className="text-gray-500 text-sm mt-1">Check your email for your welcome message.</p>
        <Link
          href="/dashboard"
          className="inline-block mt-8 w-full bg-[#1565C0] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1A1A4E] transition-colors text-center"
        >
          Access Your Products →
        </Link>
        <p className="text-xs text-gray-400 mt-4">
          Having trouble?{' '}
          <a href="mailto:support@plrdigitalclub.com" className="text-[#1565C0] hover:underline">
            support@plrdigitalclub.com
          </a>
        </p>
      </div>
    </div>
  )
}

function ErrorCard({ message }: { message: string }) {
  return (
    <div className="min-h-screen bg-[#1A1A4E] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
        <div className="flex justify-center mb-6">
          <Image src="/logo.png" alt="PLR Digital Club" width={160} height={40} className="h-10 w-auto" />
        </div>
        <p className="text-5xl mb-4">⚠️</p>
        <h1 className="text-2xl font-bold text-gray-900">Payment Not Confirmed</h1>
        <p className="text-gray-600 text-sm mt-2">{message}</p>
        <Link
          href="/"
          className="inline-block mt-6 border border-[#1A1A4E] text-[#1A1A4E] px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
