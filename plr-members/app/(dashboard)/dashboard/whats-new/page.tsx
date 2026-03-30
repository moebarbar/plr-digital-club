import { createClient } from '@/lib/supabase/server'
import type { Product, Category } from '@/types/database'

// Group products by the week they were added
function groupByWeek(products: (Product & { categories: Category | null })[]) {
  const groups: Record<string, (Product & { categories: Category | null })[]> = {}
  for (const p of products) {
    const d = new Date(p.created_at)
    // Get start of week (Monday)
    const day = d.getDay()
    const diff = d.getDate() - day + (day === 0 ? -6 : 1)
    const monday = new Date(d.setDate(diff))
    const key = monday.toISOString().split('T')[0]
    if (!groups[key]) groups[key] = []
    groups[key].push(p)
  }
  return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a))
}

function weekLabel(isoDate: string) {
  const d = new Date(isoDate)
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000))
  if (diffWeeks === 0) return 'This Week'
  if (diffWeeks === 1) return 'Last Week'
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default async function WhatsNewPage() {
  const supabase = await createClient()

  const { data: products } = await supabase
    .from('products')
    .select('*, categories(name, slug)')
    .order('created_at', { ascending: false })
    .limit(60)

  const grouped = groupByWeek(
    (products as (Product & { categories: Category | null })[]) ?? []
  )

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">What's New ✨</h1>
        <p className="text-gray-500 text-sm mt-1">
          Latest products added to your library, grouped by week.
        </p>
      </div>

      {grouped.length === 0 && (
        <div className="text-center py-16 text-gray-400 text-sm">
          No products yet — check back soon!
        </div>
      )}

      <div className="space-y-10">
        {grouped.map(([weekStart, items]) => (
          <div key={weekStart}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                {weekLabel(weekStart)}
              </h2>
              <span className="text-xs bg-blue-100 text-blue-700 rounded-full px-2.5 py-0.5 font-medium">
                {items.length} {items.length === 1 ? 'product' : 'products'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="h-36 bg-[#1A1A4E] relative overflow-hidden">
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20 text-4xl">
                        ⚡
                      </div>
                    )}
                    {product.is_new && (
                      <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    {product.categories && (
                      <span className="text-xs bg-blue-50 text-[#1565C0] rounded-full px-2 py-0.5 font-medium">
                        {(product.categories as unknown as Category).name}
                      </span>
                    )}
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2 mt-2 mb-1">
                      {product.title}
                    </p>
                    {product.description && (
                      <p className="text-xs text-gray-500 line-clamp-2 mb-3">{product.description}</p>
                    )}
                    <a
                      href={product.access_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#1A1A4E] text-white text-xs text-center py-2 rounded-lg hover:bg-[#1565C0] transition-colors font-medium"
                    >
                      Access Product →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
