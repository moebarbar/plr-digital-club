'use client'

import { useState } from 'react'
import { logAccess } from '@/actions/logAccess'
import type { Product, Category } from '@/types/database'

interface ProductCardProps {
  product: Product & { categories: Category | null }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [clicking, setClicking] = useState(false)

  async function handleAccess() {
    setClicking(true)
    logAccess(product.id)
    window.open(product.access_url, '_blank')
    setTimeout(() => setClicking(false), 600)
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
      {/* Image */}
      <div className="relative overflow-hidden bg-[#1A1A4E] aspect-[4/3]">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/30 text-3xl font-bold">
            ⚡
          </div>
        )}
        {product.is_new && (
          <span className="absolute top-2 left-2 bg-[#1565C0] text-white text-xs px-2.5 py-1 rounded-full font-semibold">
            NEW
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        {product.categories && (
          <span className="text-xs bg-blue-50 text-[#1565C0] px-2.5 py-1 rounded-full font-medium inline-block mb-2">
            {product.categories.name}
          </span>
        )}
        <p className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug">
          {product.title}
        </p>
        {product.description && (
          <p className="text-xs text-gray-500 line-clamp-2 mt-1 mb-3">{product.description}</p>
        )}
        <button
          onClick={handleAccess}
          className={`w-full bg-[#1A1A4E] hover:bg-[#1565C0] text-white text-sm font-medium py-2.5 rounded-lg transition-colors mt-2 ${
            clicking ? 'cursor-wait opacity-80' : ''
          }`}
        >
          {clicking ? 'Accessing...' : 'Access Product →'}
        </button>
      </div>
    </div>
  )
}
