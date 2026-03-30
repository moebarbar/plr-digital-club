'use server'

import { createClient } from '@/lib/supabase/server'

export async function logAccess(productId: string): Promise<void> {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase.from('access_log').insert({ user_id: user.id, product_id: productId })
  } catch {
    // Fail silently — never block the user
  }
}
