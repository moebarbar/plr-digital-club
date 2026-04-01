'use client'

import { useState } from 'react'
import { FAQSchema } from './JsonLd'

interface FAQItem { q: string; a: string }

export function FAQSection({ items, title = 'Frequently Asked Questions' }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <FAQSchema items={items} />
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1A1A4E] mb-8 text-center">{title}</h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                <span>{item.q}</span>
                <span className={`text-[#1565C0] text-xl transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
