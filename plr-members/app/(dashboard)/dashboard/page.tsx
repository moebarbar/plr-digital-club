import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { Profile, Category, Product } from '@/types/database'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const [
    { data: profile },
    { count: totalProducts },
    { count: newCount },
    { data: recentProducts },
    { data: categories },
  ] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', user.id).single(),
    supabase.from('products').select('*', { count: 'exact', head: true }),
    supabase.from('products').select('*', { count: 'exact', head: true }).eq('is_new', true),
    supabase.from('products').select('*, categories(*)').order('created_at', { ascending: false }).limit(6),
    supabase.from('categories').select('*').order('display_order'),
  ])

  const firstName = (profile as Profile)?.full_name?.split(' ')[0] ?? 'there'
  const memberSince = new Date((profile as Profile)?.created_at).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <div>
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-[#1A1A4E] to-[#1565C0] rounded-2xl p-8 text-white mb-8">
        <h1 className="text-2xl font-bold">Welcome back, {firstName}! 👋</h1>
        <p className="text-blue-200 text-sm mt-1">Your lifetime membership is active.</p>
        <p className="text-blue-300 text-xs mt-1">Member since {memberSince}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { value: '1,000+', label: 'Products Available' },
          { value: String(newCount ?? 0), label: 'New This Month' },
          { value: 'Lifetime', label: 'Access Type' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-3xl font-bold text-[#1A1A4E]">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recently Added */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Recently Added ✨</h2>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {(recentProducts as (Product & { categories: Category | null })[])?.map((product) => (
            <div
              key={product.id}
              className="min-w-[190px] bg-white rounded-xl border border-gray-200 overflow-hidden flex-shrink-0"
            >
              <div className="h-28 w-full bg-[#1A1A4E] relative overflow-hidden">
                {product.image_url && (
                  <img src={product.image_url} alt={product.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-3">
                {product.categories && (
                  <span className="text-xs bg-blue-50 text-[#1565C0] rounded-full px-2 py-0.5">
                    {product.categories.name}
                  </span>
                )}
                <p className="text-xs font-semibold text-gray-900 line-clamp-2 mt-1">{product.title}</p>
                <a
                  href={product.access_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#1A1A4E] text-white text-xs text-center py-1.5 rounded-lg mt-2 hover:bg-[#1565C0] transition-colors"
                >
                  Access →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category grid */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {(categories as Category[])?.map((cat) => (
            <a
              key={cat.id}
              href={`/dashboard/library?category=${cat.slug}`}
              className="bg-white rounded-xl border border-gray-200 p-4 text-center hover:border-[#1565C0] transition-colors"
            >
              <p className="text-sm font-medium text-gray-700">{cat.name}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Reseller callout */}
      <a
        href="/dashboard/reseller-tools"
        className="flex items-center justify-between bg-blue-50 border-l-4 border-[#1565C0] rounded-xl p-6 hover:bg-blue-100 transition-colors"
      >
        <div>
          <p className="font-semibold text-[#1A1A4E]">Ready to start selling? 🚀</p>
          <p className="text-gray-600 text-sm mt-1">Access your reseller tools →</p>
        </div>
        <span className="text-[#1565C0] text-xl">→</span>
      </a>
    </div>
  )
}
