import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/lib/blog/posts'

const BASE = 'https://plrdigitalclub.com'

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
  { url: '/login', priority: 0.3, changeFrequency: 'yearly' },
  { url: '/reset-password', priority: 0.2, changeFrequency: 'yearly' },
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
