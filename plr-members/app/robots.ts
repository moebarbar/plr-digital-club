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
          '/plr-for-etsy-sellers',
          '/plr-for-coaches',
          '/plr-for-digital-marketers',
          '/plr-planners-and-journals',
          '/plr-notion-templates',
          '/plr-printables',
          '/faceless-digital-marketing',
          '/how-to-start-a-digital-product-business',
          '/done-for-you-digital-products',
          '/plr-health-and-wellness',
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
