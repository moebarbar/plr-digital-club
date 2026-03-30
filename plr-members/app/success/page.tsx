import Stripe from 'stripe'
import Link from 'next/link'

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

  return (
    <div className="min-h-screen bg-[#1A1A4E] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
        <p className="text-6xl mb-4">✅</p>
        <h1 className="text-3xl font-bold text-[#1A1A4E]">You&apos;re in! 🎉</h1>
        <p className="text-gray-600 mt-2">Your lifetime membership is now active.</p>
        <p className="text-gray-500 text-sm mt-1">Check your email for your welcome message.</p>
        <Link
          href="/dashboard"
          className="inline-block mt-8 bg-[#1A1A4E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1565C0] transition-colors"
        >
          Access Your Products →
        </Link>
      </div>
    </div>
  )
}

function ErrorCard({ message }: { message: string }) {
  return (
    <div className="min-h-screen bg-[#1A1A4E] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
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
