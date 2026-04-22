'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

async function requireAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || user.email !== process.env.ADMIN_EMAIL) throw new Error('Unauthorized')
}

export async function addProduct(formData: FormData): Promise<void> {
  await requireAdmin()
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
