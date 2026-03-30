import { getSupabaseAdmin } from '@/lib/supabase/admin'
import type { Profile } from '@/types/database'

export default async function AdminDashboard() {
  const admin = getSupabaseAdmin()

  const [
    { count: totalMembers },
    { count: activeMembers },
    { count: totalProducts },
    { count: newSignups },
    { data: recentProfiles },
  ] = await Promise.all([
    admin.from('profiles').select('*', { count: 'exact', head: true }),
    admin.from('profiles').select('*', { count: 'exact', head: true }).eq('is_active', true),
    admin.from('products').select('*', { count: 'exact', head: true }),
    admin.from('profiles').select('*', { count: 'exact', head: true }).gte(
      'created_at',
      new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString()
    ),
    admin.from('profiles').select('*').order('created_at', { ascending: false }).limit(10),
  ])

  const stats = [
    { label: 'Total Members', value: totalMembers ?? 0 },
    { label: 'Active Members', value: activeMembers ?? 0 },
    { label: 'Total Products', value: totalProducts ?? 0 },
    { label: "This Month's Signups", value: newSignups ?? 0 },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-3xl font-bold text-[#1A1A4E]">{stat.value}</p>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent members */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Recent Signups</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['Name', 'Email', 'Joined', 'Status'].map((h) => (
                <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(recentProfiles as Profile[])?.map((profile) => (
              <tr key={profile.id}>
                <td className="px-6 py-4 text-sm text-gray-900">{profile.full_name ?? '—'}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{profile.email}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(profile.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    profile.is_active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {profile.is_active ? 'Active' : 'Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick links */}
      <div className="flex gap-4">
        <a
          href="/admin/admin/import"
          className="bg-[#1A1A4E] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#1565C0] transition-colors"
        >
          → Import Products
        </a>
        <a
          href="/admin/admin/products"
          className="border border-[#1A1A4E] text-[#1A1A4E] px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          → Manage Products
        </a>
      </div>
    </div>
  )
}
