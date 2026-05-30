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
          '/best-plr-sites-2026',
          '/products',
          '/about',
          '/contact',
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
