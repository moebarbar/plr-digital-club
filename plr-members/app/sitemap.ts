import { MetadataRoute } from 'next'

const BASE = 'https://plrdigitalclub.com'

const STATIC_PAGES = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' },
  { url: '/plr-digital-products', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/mrr-digital-products', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/sell-digital-products-online', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/plr-ebooks', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/plr-canva-templates', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/plr-social-media-templates', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/mrr-courses', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/best-plr-sites-2026', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/login', priority: 0.3, changeFrequency: 'yearly' },
  { url: '/reset-password', priority: 0.2, changeFrequency: 'yearly' },
] as const

const BLOG_SLUGS = [
  'what-are-plr-digital-products',
  'what-is-master-resell-rights',
  'plr-vs-mrr-difference',
  'best-plr-digital-products-to-resell',
  'passive-income-plr-products',
  'best-digital-products-to-sell-2026',
  'plr-digital-club-review',
  'canva-plr-templates-etsy',
  'digital-product-business-for-beginners',
  'mrr-vs-plr-courses-profitable',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: page.priority,
  }))

  const blogEntries: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
