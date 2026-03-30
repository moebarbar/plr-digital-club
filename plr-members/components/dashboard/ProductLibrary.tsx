'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import ProductGridSkeleton from './ProductGridSkeleton'
import type { Product, Category } from '@/types/database'

type SortOption = 'newest' | 'alpha' | 'featured'

interface ProductLibraryProps {
  products: (Product & { categories: Category | null })[]
  categories: Category[]
  initialCategory?: string
}

export default function ProductLibrary({ products, categories, initialCategory }: ProductLibraryProps) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? 'all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')

  const filtered = useMemo(() => {
    let result = [...products]

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.categories?.slug === activeCategory)
    }

    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.description ?? '').toLowerCase().includes(q)
      )
    }

    if (sortBy === 'alpha') {
      result.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortBy === 'featured') {
      result.sort((a, b) => (b.is_featured ? 1 : 0) - (a.is_featured ? 1 : 0))
    }
    // 'newest' is already ordered by created_at desc from server

    return result
  }, [products, activeCategory, query, sortBy])

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
          className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
        />
      </div>

      {/* Filters + sort */}
      <div className="flex items-center justify-between mt-4 gap-4">
        <div className="flex gap-2 overflow-x-auto pb-1 flex-1">
          {[{ name: 'All', slug: 'all' }, ...categories.map((c) => ({ name: c.name, slug: c.slug }))].map(
            (cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  activeCategory === cat.slug
                    ? 'bg-[#1A1A4E] text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-[#1A1A4E]'
                }`}
              >
                {cat.name}
              </button>
            )
          )}
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortOption)}
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
