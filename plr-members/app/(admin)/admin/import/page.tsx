'use client'

import { useState, useEffect } from 'react'
import { importProducts } from '@/actions/importProducts'
import { addProduct } from '@/actions/addProduct'
import { createClient } from '@/lib/supabase/client'
import type { Category } from '@/types/database'

type ParsedRow = { title: string; description: string; image_url: string; access_url: string; category_name: string }

function parseCSV(raw: string): ParsedRow[] {
  const lines = raw.trim().split('\n')
  if (lines.length < 2) return []
  const headers = lines[0].split(',').map((h) => h.trim().toLowerCase())
  return lines.slice(1).map((line) => {
    const vals = line.split(',').map((v) => v.trim())
    const row: Record<string, string> = {}
    headers.forEach((h, i) => { row[h] = vals[i] ?? '' })
    return {
      title: row['title'] ?? '',
      description: row['description'] ?? '',
      image_url: row['image_url'] ?? '',
      access_url: row['access_url'] ?? '',
      category_name: row['category_name'] ?? '',
    }
  }).filter((r) => r.title && r.access_url)
}

export default function ImportPage() {
  const [activeTab, setActiveTab] = useState<'csv' | 'single'>('csv')

  // CSV tab state
  const [csv, setCsv] = useState('')
  const [preview, setPreview] = useState<ParsedRow[]>([])
  const [importing, setImporting] = useState(false)
  const [result, setResult] = useState<{ inserted: number; errors: string[] } | null>(null)

  // Single product state
  const [categories, setCategories] = useState<Category[]>([])
  const [form, setForm] = useState({ title: '', description: '', image_url: '', access_url: '', category_id: '', is_new: true, is_featured: false })
  const [adding, setAdding] = useState(false)
  const [addSuccess, setAddSuccess] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    supabase.from('categories').select('*').order('display_order').then(({ data }) => {
      if (data) setCategories(data as Category[])
    })
  }, [])

  function handlePreview() {
    setPreview(parseCSV(csv).slice(0, 5))
  }

  async function handleImport() {
    const rows = parseCSV(csv)
    if (!rows.length) return
    setImporting(true)
    setResult(null)
    const res = await importProducts(rows)
    setResult(res)
    setImporting(false)
  }

  async function handleAddProduct(e: React.FormEvent) {
    e.preventDefault()
    setAdding(true)
    const fd = new FormData()
    Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)))
    await addProduct(fd)
    setAdding(false)
    setAddSuccess(true)
    setForm({ title: '', description: '', image_url: '', access_url: '', category_id: '', is_new: true, is_featured: false })
    setTimeout(() => setAddSuccess(false), 3000)
  }

  const parsed = parseCSV(csv)

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Import Products</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(['csv', 'single'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-[#1A1A4E] text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-[#1A1A4E]'
            }`}
          >
            {tab === 'csv' ? 'CSV Import' : 'Add Product'}
          </button>
        ))}
      </div>

      {activeTab === 'csv' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500 mb-3">
            Required columns: <code className="bg-gray-100 px-1 rounded">title</code>, <code className="bg-gray-100 px-1 rounded">access_url</code> — Optional: <code className="bg-gray-100 px-1 rounded">description</code>, <code className="bg-gray-100 px-1 rounded">image_url</code>, <code className="bg-gray-100 px-1 rounded">category_name</code>
          </p>
          <textarea
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
            placeholder="title,description,image_url,access_url,category_name&#10;My Product,Description,https://...,https://...,Canva Templates"
            className="font-mono text-sm w-full h-48 border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1565C0] resize-none"
          />

          <div className="flex gap-3 mt-4">
            <button
              onClick={handlePreview}
              className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:border-[#1A1A4E] transition-colors"
            >
              Preview
            </button>
            <button
              onClick={handleImport}
              disabled={importing || !parsed.length}
              className="bg-[#1A1A4E] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1565C0] transition-colors disabled:opacity-60"
            >
              {importing ? 'Importing...' : `Import ${parsed.length} Products`}
            </button>
          </div>

          {preview.length > 0 && (
            <div className="mt-4 overflow-x-auto">
              <p className="text-xs text-gray-500 mb-2">Preview (first 5 rows):</p>
              <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    {['title', 'description', 'image_url', 'access_url', 'category_name'].map((h) => (
                      <th key={h} className="px-3 py-2 text-left font-medium text-gray-600">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {preview.map((row, i) => (
                    <tr key={i}>
                      <td className="px-3 py-2 truncate max-w-[120px]">{row.title}</td>
                      <td className="px-3 py-2 truncate max-w-[120px]">{row.description}</td>
                      <td className="px-3 py-2 truncate max-w-[120px]">{row.image_url}</td>
                      <td className="px-3 py-2 truncate max-w-[120px]">{row.access_url}</td>
                      <td className="px-3 py-2 truncate max-w-[120px]">{row.category_name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {result && (
            <div className="mt-4 p-4 rounded-lg bg-gray-50 border border-gray-200 text-sm">
              <p className="text-green-700 font-medium">✅ {result.inserted} imported</p>
              {result.errors.length > 0 && (
                <ul className="mt-2 text-red-600 space-y-1">
                  {result.errors.map((err, i) => <li key={i}>❌ {err}</li>)}
                </ul>
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === 'single' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-lg">
          {addSuccess && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg p-3 mb-4">
              ✅ Product added successfully!
            </div>
          )}
          <form onSubmit={handleAddProduct} className="space-y-4">
            {[
              { label: 'Title *', key: 'title', type: 'text', required: true },
              { label: 'Image URL', key: 'image_url', type: 'url', required: false },
              { label: 'Access URL *', key: 'access_url', type: 'url', required: true },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                <input
                  type={field.type}
                  required={field.required}
                  value={form[field.key as keyof typeof form] as string}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0] resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={form.category_id}
                onChange={(e) => setForm({ ...form, category_id: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
              >
                <option value="">— Select category —</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_new}
                  onChange={(e) => setForm({ ...form, is_new: e.target.checked })}
                  className="rounded"
                />
                Mark as New
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_featured}
                  onChange={(e) => setForm({ ...form, is_featured: e.target.checked })}
                  className="rounded"
                />
                Featured
              </label>
            </div>

            <button
              type="submit"
              disabled={adding}
              className="w-full bg-[#1A1A4E] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#1565C0] transition-colors disabled:opacity-60"
            >
              {adding ? 'Adding...' : 'Add Product'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
