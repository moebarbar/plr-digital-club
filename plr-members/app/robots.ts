import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/blog',
          '/blog/',
          '/plr-digital-products',
          '/mrr-digital-products',
          '/sell-digital-products-online',
          '/plr-ebooks',
          '/plr-canva-templates',
          '/plr-social-media-templates',
          '/mrr-courses',
          '/best-plr-sites-2026',
        ],
        disallow: [
          '/dashboard',
          '/dashboard/',
          '/admin',
          '/admin/',
          '/profile',
          '/library',
          '/api/',
          '/pending',
          '/success',
          '/update-password',
        ],
      },
    ],
    sitemap: 'https://plrdigitalclub.com/sitemap.xml',
  }
}
