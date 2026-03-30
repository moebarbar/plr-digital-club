'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export async function updateProfile(formData: FormData): Promise<{ error?: string }> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return { error: 'Not authenticated' }

  const full_name = formData.get('full_name') as string

  const { error } = await supabase
    .from('profiles')
    .update({ full_name })
    .eq('id', user.id)

  if (error) return { error: error.message }

  revalidatePath('/dashboard/profile')
  return {}
}
