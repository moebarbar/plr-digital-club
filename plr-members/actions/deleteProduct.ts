'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.email !== process.env.ADMIN_EMAIL) throw new Error('Unauthorized')
}

export async function deleteProduct(formData: FormData): Promise<void> {
  await requireAdmin()
  const id = formData.get('id') as string
  const admin = getSupabaseAdmin()
  await admin.from('products').delete().eq('id', id)
  revalidatePath('/admin/admin/products')
}
