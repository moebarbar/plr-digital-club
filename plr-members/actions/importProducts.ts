'use server'

import { getSupabaseAdmin } from '@/lib/supabase/admin'

interface ProductRow {
  title: string
  description?: string
  image_url?: string
  access_url: string
  category_name?: string
}

export async function importProducts(
  rows: ProductRow[]
): Promise<{ inserted: number; errors: string[] }> {
  const admin = getSupabaseAdmin()
  const errors: string[] = []
  const categoryCache: Record<string, string> = {}

  async function getCategoryId(name: string): Promise<string | null> {
    if (!name) return null
    const key = name.toLowerCase()
    if (categoryCache[key]) return categoryCache[key]

    const { data: existing } = await admin
      .from('categories')
      .select('id')
      .ilike('name', name)
      .single()

    if (existing) {
      categoryCache[key] = existing.id
      return existing.id
    }

    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    const { data: created } = await admin
      .from('categories')
      .insert({ name, slug })
      .select('id')
      .single()

    if (created) {
      categoryCache[key] = created.id
      return created.id
    }

    return null
  }

  const toInsert = await Promise.all(
    rows.map(async (row, i) => {
      try {
        const category_id = row.category_name
          ? await getCategoryId(row.category_name)
          : null
        return {
          title: row.title,
          description: row.description || null,
          image_url: row.image_url || null,
          access_url: row.access_url,
          category_id,
        }
      } catch (err) {
        errors.push(`Row ${i + 1} (${row.title}): ${String(err)}`)
        return null
      }
    })
  )

  const valid = toInsert.filter(Boolean)

  const { error } = await admin.from('products').insert(valid)
  if (error) {
    errors.push(`Insert error: ${error.message}`)
    return { inserted: 0, errors }
  }

  return { inserted: valid.length, errors }
}
