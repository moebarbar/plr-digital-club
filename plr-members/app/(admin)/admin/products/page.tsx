import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { deleteProduct } from '@/actions/deleteProduct'
import type { Product, Category } from '@/types/database'

export default async function AdminProductsPage() {
  const admin = getSupabaseAdmin()
  const { data: products } = await admin
    .from('products')
    .select('*, categories(name)')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <a
          href="/admin/admin/import"
          className="bg-[#1A1A4E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1565C0] transition-colors"
        >
          + Import Products
        </a>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {['', 'Title', 'Category', 'Date', 'Is New', 'Actions'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(products as (Product & { categories: Pick<Category, 'name'> | null })[])?.map((product) => (
              <tr key={product.id}>
                {/* Thumbnail */}
                <td className="px-4 py-3">
                  <div className="w-10 h-10 rounded bg-[#1A1A4E] overflow-hidden flex-shrink-0">
                    {product.image_url ? (
                      <img src={product.image_url} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/40 text-xs">⚡</div>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm font-medium text-gray-900 max-w-[200px] truncate">
                  {product.title}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {product.categories?.name ?? '—'}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">
                  {new Date(product.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    product.is_new ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {product.is_new ? 'New' : 'No'}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button
                      type="submit"
                      className="text-red-500 hover:text-red-700 text-xs font-medium transition-colors"
                      onClick={(e) => {
                        if (!confirm('Delete this product?')) e.preventDefault()
                      }}
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!products?.length && (
          <div className="text-center py-12 text-gray-400 text-sm">
            No products yet. <a href="/admin/admin/import" className="text-[#1565C0] hover:underline">Import some →</a>
          </div>
        )}
      </div>
    </div>
  )
}
