'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import ProductGridSkeleton from './ProductGridSkeleton'
import { toggleFavorite } from '@/actions/toggleFavorite'
import type { Product, Category } from '@/types/database'

type SortOption = 'newest' | 'alpha' | 'featured'

interface ProductLibraryProps {
  products: (Product & { categories: Category | null })[]
  categories: Category[]
  initialCategory?: string
  /** Product ids the user has favorited, or null when the feature is unavailable. */
  favoriteIds?: string[] | null
}

export default function ProductLibrary({ products, categories, initialCategory, favoriteIds = null }: ProductLibraryProps) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? 'all')
  const [newOnly, setNewOnly] = useState(false)
  const [favOnly, setFavOnly] = useState(false)
  const [favs, setFavs] = useState<Set<string>>(() => new Set(favoriteIds ?? []))
  const [sortBy, setSortBy] = useState<SortOption>('newest')

  const favoritesEnabled = favoriteIds !== null

  async function handleToggleFavorite(productId: string) {
    const makeFavorite = !favs.has(productId)
    // Optimistic update; revert if the server action fails.
    setFavs((prev) => {
      const next = new Set(prev)
      if (makeFavorite) next.add(productId)
      else next.delete(productId)
      return next
    })
    const result = await toggleFavorite(productId, makeFavorite)
    if (result === null) {
      setFavs((prev) => {
        const next = new Set(prev)
        if (makeFavorite) next.delete(productId)
        else next.add(productId)
        return next
      })
    }
  }

  // Product count per category slug, so the filter chips show real numbers.
  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>()
    for (const p of products) {
      const slug = p.categories?.slug
      if (slug) counts.set(slug, (counts.get(slug) ?? 0) + 1)
    }
    return counts
  }, [products])

  const newCount = useMemo(() => products.filter((p) => p.is_new).length, [products])

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.categories?.slug === activeCategory)
    }

    if (newOnly) {
      result = result.filter((p) => p.is_new)
    }

    if (favOnly) {
      result = result.filter((p) => favs.has(p.id))
    }

    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.description ?? '').toLowerCase().includes(q) ||
          (p.categories?.name ?? '').toLowerCase().includes(q)
      )
    }

    if (sortBy === 'alpha') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'featured') {
      result.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0))
    }
    // 'newest' is already ordered by created_at desc from server

    return result
  }, [products, activeCategory, newOnly, favOnly, favs, query, sortBy])

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <span className="absolute left-3 top-3.5 text-gray-400 text-sm">🔍</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search 1,000+ products..."
          className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      {/* Filters + sort */}
      <div className="flex items-center justify-between mt-4 gap-4">
        <div className="flex gap-2 overflow-x-auto pb-1 flex-1">
          {favoritesEnabled && favs.size > 0 && (
            <button
              onClick={() => setFavOnly((v) => !v)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                favOnly
                  ? 'bg-accent text-white'
                  : 'bg-white border border-accent/40 text-accent hover:border-accent'
              }`}
            >
              ♥ Favorites ({favs.size})
            </button>
          )}
          {newCount > 0 && (
            <button
              onClick={() => setNewOnly((v) => !v)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                newOnly
                  ? 'bg-accent text-white'
                  : 'bg-white border border-accent/40 text-accent hover:border-accent'
              }`}
            >
              ✨ New ({newCount})
            </button>
          )}
          {[{ name: 'All', slug: 'all', count: products.length }, ...categories.map((c) => ({ name: c.name, slug: c.slug, count: categoryCounts.get(c.slug) ?? 0 }))].map(
            (cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  activeCategory === cat.slug
                    ? 'bg-primary text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-primary'
                }`}
              >
                {cat.name}
                <span className={`ml-1.5 text-xs ${activeCategory === cat.slug ? 'text-blue-200' : 'text-gray-400'}`}>
                  {cat.count}
                </span>
              </button>
            )
          )}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 shrink-0 focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="newest">Newest First</option>
          <option value="alpha">Alphabetical A–Z</option>
          <option value="featured">Featured First</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mt-4 mb-4">Showing {filtered.length} products</p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-medium">No products found.</p>
          <p className="text-sm mt-1">Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favoritesEnabled ? favs.has(product.id) : undefined}
              onToggleFavorite={favoritesEnabled ? handleToggleFavorite : undefined}
            />
          ))}
        </div>
      )}
    </div>
  )
}
