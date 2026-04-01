import { redirect } from 'next/navigation'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/server'

export default async function PendingPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('is_active')
      .eq('id', user.id)
      .single()

    if (profile?.is_active) {
      redirect('/dashboard')
    }
  }

  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="8" />
      </head>
      <div className="min-h-screen bg-[#1A1A4E] flex flex-col items-center justify-center text-center p-8">
        <Image src="/logo.png" alt="PLR Digital Club" width={160} height={40} className="h-10 w-auto mb-10" priority />
        <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-6" />
        <h1 className="text-xl font-semibold text-white">Activating your account...</h1>
        <p className="text-blue-200 text-sm mt-2 max-w-sm">
          Your payment was received. This usually takes under a minute. This page refreshes automatically.
        </p>
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
