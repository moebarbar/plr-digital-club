'use server'

import { revalidatePath } from 'next/cache'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

export async function addProduct(formData: FormData): Promise<void> {
  const admin = getSupabaseAdmin()
  await admin.from('products').insert({
    title: formData.get('title') as string,
    description: (formData.get('description') as string) || null,
    image_url: (formData.get('image_url') as string) || null,
    access_url: formData.get('access_url') as string,
    category_id: (formData.get('category_id') as string) || null,
    is_new: formData.get('is_new') === 'true',
    is_featured: formData.get('is_featured') === 'true',
  })
  revalidatePath('/admin/admin')
}
