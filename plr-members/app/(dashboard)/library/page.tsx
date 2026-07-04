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

  const [{ data: products }, { data: categories }, favoritesResult] = await Promise.all([
    supabase.from('products').select('*, categories(*)').order('created_at', { ascending: false }),
    supabase.from('categories').select('*').order('display_order'),
    supabase.from('favorites').select('product_id'),
  ])

  // Favorites degrade gracefully: if the table doesn't exist yet (migration
  // not run), pass null and the UI hides hearts + the Favorites filter.
  const favoriteIds = favoritesResult.error
    ? null
    : (favoritesResult.data ?? []).map((f) => f.product_id as string)

  return (
    <ProductLibrary
      products={(products as (Product & { categories: Category | null })[]) ?? []}
      categories={(categories as Category[]) ?? []}
      initialCategory={category}
      favoriteIds={favoriteIds}
    />
  )
}
