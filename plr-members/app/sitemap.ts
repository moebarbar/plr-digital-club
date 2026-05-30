import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog/posts'

const BASE = 'https://plrdigitalclub.com'

// NOTE: login / reset-password / update-password are intentionally excluded —
// they carry no SEO value and are set to noindex. Auth/dashboard/admin routes
// are excluded here and disallowed in robots.ts.
const STATIC_PAGES = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' },
  { url: '/plr-digital-products', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/mrr-digital-products', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/sell-digital-products-online', priority: 0.9, changeFrequency: 'weekly' },
  { url: '/plr-ebooks', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/plr-canva-templates', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/plr-social-media-templates', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/best-plr-sites-2026', priority: 0.7, changeFrequency: 'monthly' },
  { url: '/blog', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/products', priority: 0.8, changeFrequency: 'weekly' },
  { url: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { url: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  { url: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
  { url: '/terms', priority: 0.3, changeFrequency: 'yearly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: `${BASE}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency as MetadataRoute.Sitemap[0]['changeFrequency'],
    priority: page.priority,
  }))

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
