import { redirect } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'
import ResumePaymentButton from '@/components/checkout/ResumePaymentButton'

export default async function PendingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('is_active')
    .eq('id', user.id)
    .single()

  if (profile?.is_active) {
    redirect('/dashboard')
  }

  // Two audiences land here: people who just paid (webhook still processing —
  // the auto-refresh picks them up within seconds) and people who created an
  // account but abandoned Stripe checkout. The second group needs a way to pay.
  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="8" />
      </head>
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-center p-8">
        <Image src="/logo-white.png" alt="PLR Digital Club" width={160} height={40} className="h-10 w-auto mb-10" priority />
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-6" />
        <h1 className="text-xl font-semibold text-white">Checking your payment...</h1>
        <p className="text-blue-200 text-sm mt-2 max-w-sm">
          Just paid? Activation usually takes under a minute — this page refreshes automatically.
        </p>

        <div className="mt-10 pt-8 border-t border-white/15 max-w-sm w-full">
          <p className="text-blue-200 text-sm mb-4">
            Haven&apos;t completed your payment yet? Finish it now to unlock your 1,000+ products.
          </p>
          <ResumePaymentButton />
        </div>

        <p className="text-blue-400 text-sm mt-8">
          Having issues?{' '}
          <a href="mailto:support@plrdigitalclub.com" className="text-white hover:underline">
            support@plrdigitalclub.com
          </a>
        </p>
      </div>
    </>
  )
}
