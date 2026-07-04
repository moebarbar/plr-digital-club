'use server'

import { createClient } from '@/lib/supabase/server'

/**
 * Add or remove a product from the signed-in user's favorites.
 * Returns the new state, or null if the toggle failed (e.g. the favorites
 * table hasn't been created yet) — callers should revert optimistic UI.
 *
 * Uses the session-scoped client, so RLS guarantees users can only touch
 * their own rows.
 */
export async function toggleFavorite(productId: string, makeFavorite: boolean): Promise<boolean | null> {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    if (makeFavorite) {
      const { error } = await supabase
        .from('favorites')
        .upsert({ user_id: user.id, product_id: productId }, { onConflict: 'user_id,product_id' })
      if (error) return null
      return true
    } else {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId)
      if (error) return null
      return false
    }
  } catch {
    return null
  }
}
