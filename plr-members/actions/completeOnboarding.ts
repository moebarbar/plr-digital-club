'use server'

import { revalidatePath } from 'next/cache'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

export async function completeOnboarding(userId: string): Promise<{ error?: string }> {
  const admin = getSupabaseAdmin()
  const { error } = await admin
    .from('profiles')
    .update({ onboarding_complete: true })
    .eq('id', userId)

  if (error) return { error: error.message }

  revalidatePath('/dashboard')
  return {}
}
