import { createClient } from '@/lib/supabase/server'
import ProductLibrary from '@/components/dashboard/ProductLibrary'
import type { Product, Category } from '@/types/database'

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const supabase = await createClient()

  const [{ data: products }, { data: categories }] = await Promise.all([
    supabase.from('products').select('*, categories(*)').order('created_at', { ascending: false }),
    supabase.from('categories').select('*').order('display_order'),
  ])

  return (
    <ProductLibrary
      products={(products as (Product & { categories: Category | null })[]) ?? []}
      categories={(categories as Category[]) ?? []}
      initialCategory={category}
    />
  )
}
