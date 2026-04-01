import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog/posts'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'PLR & MRR Blog — Guides, Tips & Strategies for Digital Product Sellers',
  description: 'Free guides on PLR products, master resell rights, and how to sell digital products online. Practical strategies for building a digital product business.',
  alternates: { canonical: 'https://plrdigitalclub.com/blog' },
  openGraph: {
    title: 'PLR & MRR Blog — Guides, Tips & Strategies for Digital Product Sellers',
    description: 'Free guides on PLR products, MRR, and selling digital products online.',
    url: 'https://plrdigitalclub.com/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'Blog', url: 'https://plrdigitalclub.com/blog' },
      ]} />

      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">PLR Digital Club Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            PLR & Digital Product Guides
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Free guides on PLR products, master resell rights, selling on Etsy, and building a passive income digital product business.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-xl border border-gray-200 p-6 hover:border-[#1565C0] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[#1565C0] bg-blue-50 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(post.datePublished).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#1565C0] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">{post.description}</p>
                <span className="inline-block mt-4 text-[#1565C0] text-sm font-medium">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Explore Topics</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'What are PLR Products?', href: '/plr-digital-products' },
              { label: 'What is MRR?', href: '/mrr-digital-products' },
              { label: 'How to Sell Digital Products', href: '/sell-digital-products-online' },
              { label: 'PLR Canva Templates', href: '/plr-canva-templates' },
              { label: 'PLR eBooks', href: '/plr-ebooks' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-[#F8F8FF] border border-gray-200 text-[#1565C0] text-sm font-medium px-4 py-2 rounded-full hover:border-[#1565C0] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A4E] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Get 1,000+ done-for-you PLR & MRR products. One payment, lifetime access.</p>
        <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Get Instant Access — $197 →
        </Link>
      </section>
    </>
  )
}
