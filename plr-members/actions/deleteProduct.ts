'use server'

import { revalidatePath } from 'next/cache'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

export async function deleteProduct(formData: FormData): Promise<void> {
  const id = formData.get('id') as string
  const admin = getSupabaseAdmin()
  await admin.from('products').delete().eq('id', id)
  revalidatePath('/admin/admin/products')
}
