'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'pdc-start-checklist'

const ITEMS = [
  { id: 'browse', label: 'Browse the Product Library', desc: 'Get a feel for the 1,000+ products you now own.', href: '/library' },
  { id: 'download', label: 'Download your first product', desc: 'Pick one product that fits your niche and download it.', href: '/library' },
  { id: 'marketplaces', label: 'Read the Marketplaces Guide', desc: 'Decide where you’ll sell — Etsy, Gumroad, or your own store.', href: '/dashboard/reseller-tools/marketplaces-guide' },
  { id: 'pricing', label: 'Read the Pricing Guide', desc: 'Price your first product for profit.', href: '/dashboard/reseller-tools/pricing-guide' },
  { id: 'list', label: 'List your first product for sale', desc: 'Rebrand it, write a listing, and go live. This is the big one!', href: '/dashboard/reseller-tools' },
] as const

export default function StartChecklist() {
  const [done, setDone] = useState<Set<string>>(new Set())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setDone(new Set(JSON.parse(raw) as string[]))
    } catch {}
    setLoaded(true)
  }, [])

  function toggle(id: string) {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]))
      } catch {}
      return next
    })
  }

  // Avoid a hydration flash: render at 0 progress until localStorage is read.
  const completed = loaded ? done.size : 0
  const pct = Math.round((completed / ITEMS.length) * 100)
  const allDone = completed === ITEMS.length

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-lg font-bold text-gray-900">Your First-Week Roadmap</h2>
        <span className="text-sm font-semibold text-accent">{completed}/{ITEMS.length}</span>
      </div>
      <p className="text-sm text-gray-500 mb-4">
        {allDone
          ? '🎉 All done — you’re officially up and running!'
          : 'Tick these off to go from new member to first listing.'}
      </p>

      {/* Progress bar */}
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="space-y-2">
        {ITEMS.map((item) => {
          const checked = done.has(item.id)
          return (
            <div
              key={item.id}
              className={`flex items-start gap-3 p-3 rounded-xl border transition-colors ${
                checked ? 'bg-green-50/60 border-green-200' : 'bg-white border-gray-200'
              }`}
            >
              <button
                onClick={() => toggle(item.id)}
                aria-label={checked ? `Mark "${item.label}" as not done` : `Mark "${item.label}" as done`}
                className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center text-xs flex-shrink-0 cursor-pointer transition-colors ${
                  checked
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'border-gray-300 text-transparent hover:border-accent'
                }`}
              >
                ✓
              </button>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold ${checked ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                  {item.label}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
              </div>
              <a
                href={item.href}
                className="text-accent text-xs font-semibold whitespace-nowrap hover:underline mt-1"
              >
                Go →
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
