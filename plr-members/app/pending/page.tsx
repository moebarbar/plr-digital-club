import { redirect } from 'next/navigation'
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
        <meta httpEquiv="refresh" content="10" />
      </head>
      <div className="min-h-screen bg-surface flex flex-col items-center justify-center text-center p-8">
        <div className="w-12 h-12 border-4 border-[#1565C0] border-t-transparent rounded-full animate-spin mb-6" />
        <h1 className="text-xl font-semibold text-[#1A1A4E]">Activating your account...</h1>
        <p className="text-gray-600 text-sm mt-2 max-w-sm">
          Your payment was received. This usually takes under a minute.
        </p>
        <p className="text-gray-400 text-sm mt-8">
          Having issues?{' '}
          <a
            href="mailto:support@plrdigitalclub.com"
            className="text-[#1565C0] hover:underline"
          >
            support@plrdigitalclub.com
          </a>
        </p>
      </div>
    </>
  )
}
