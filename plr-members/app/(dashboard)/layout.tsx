import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import DashboardShell from '@/components/dashboard/DashboardShell'
import OnboardingModal from '@/components/dashboard/OnboardingModal'
import type { Profile } from '@/types/database'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile?.is_active) redirect('/pending')

  return (
    <DashboardShell profile={profile as Profile}>
      {!profile.onboarding_complete && <OnboardingModal userId={profile.id} />}
      {children}
    </DashboardShell>
  )
}
