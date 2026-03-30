import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user || user.email !== process.env.ADMIN_EMAIL) {
    redirect('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#1A1A4E] text-white px-8 py-4 flex items-center gap-8">
        <span className="font-bold text-sm">⚡ PLR ADMIN</span>
        <a href="/admin" className="text-blue-200 hover:text-white text-sm transition-colors">Dashboard</a>
        <a href="/admin/admin/products" className="text-blue-200 hover:text-white text-sm transition-colors">Products</a>
        <a href="/admin/admin/import" className="text-blue-200 hover:text-white text-sm transition-colors">Import</a>
      </nav>
      <div className="max-w-6xl mx-auto px-8 py-8">
        {children}
      </div>
    </div>
  )
}
