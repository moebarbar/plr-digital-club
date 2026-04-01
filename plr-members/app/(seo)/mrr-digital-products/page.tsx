import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSection } from '@/components/seo/FAQSection'
import { ProductSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'MRR Digital Products — Master Resell Rights Products Library',
  description: 'Access 1,000+ MRR digital products with master resell rights. Sell courses, templates & eBooks and keep 100% profit. Lifetime access for a one-time $197 payment.',
  alternates: { canonical: 'https://plrdigitalclub.com/mrr-digital-products' },
  openGraph: {
    title: 'MRR Digital Products — Master Resell Rights Products Library',
    description: 'Get lifetime access to 1,000+ MRR digital products. Sell and keep 100% profit.',
    url: 'https://plrdigitalclub.com/mrr-digital-products',
  },
}

const FAQ_ITEMS = [
  { q: 'What is Master Resell Rights (MRR)?', a: 'Master Resell Rights (MRR) means you can resell a product AND pass on the resell rights to your customers. Your buyers can then sell the product themselves. This creates a chain of resellers, all starting with the product you bought.' },
  { q: 'What is the difference between PLR and MRR?', a: 'PLR (Private Label Rights) lets you rebrand and modify the product as your own. MRR (Master Resell Rights) lets you resell the product and give your customers resell rights too, but you typically cannot rebrand it. PLR Digital Club offers both.' },
  { q: 'Can I sell MRR products on Etsy?', a: 'Yes. MRR digital products — particularly templates, eBooks and guides — sell very well on Etsy. Many of our members generate consistent monthly income selling our MRR products on Etsy.' },
  { q: 'Do MRR products come with sales materials?', a: 'Yes. Inside your PLR Digital Club dashboard, the Reseller Tools section includes ready-made sales copy, email swipes, and social media captions you can use to promote any product.' },
  { q: 'Is there a limit on how many times I can sell MRR products?', a: 'No limit. Sell as many copies as you can. The more you sell, the more you earn — and you keep 100% of every sale.' },
  { q: 'How much can I realistically make selling MRR products?', a: 'It depends on your effort and platform. Many members earn $500–$5,000/month selling PLR and MRR products on Etsy, Gumroad and their own stores. Your earnings scale with the number of products you list and how you promote them.' },
]

export default function MRRDigitalProductsPage() {
  return (
    <>
      <ProductSchema
        name="PLR Digital Club — Master Resell Rights Products"
        description="1,000+ MRR digital products with master resell rights. Sell and keep 100% of every sale."
        price="197"
        url="https://plrdigitalclub.com/mrr-digital-products"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'MRR Digital Products', url: 'https://plrdigitalclub.com/mrr-digital-products' },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">Master Resell Rights Digital Products</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            MRR Digital Products — Sell Once, Earn Forever
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Get lifetime access to 1,000+ digital products with master resell rights. Keep 100% of every sale. No experience needed — products are done-for-you and ready to list.
          </p>
          <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get Instant Access — $197 Lifetime →
          </Link>
          <p className="text-blue-300 text-sm mt-3">One payment · Lifetime access · New products every week</p>
        </div>
      </section>

      {/* What is MRR */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">What Are MRR Digital Products?</h2>
          <div className="text-gray-600 space-y-4 text-lg">
            <p>
              <strong>MRR (Master Resell Rights)</strong> digital products are pre-made digital files — courses, eBooks, templates, guides — that come with a special licence allowing you to <strong>resell the product and pass those same resell rights on to your customers</strong>. It is one of the most powerful business models in the digital product space.
            </p>
            <p>
              When you join PLR Digital Club, you get access to a library of both <strong>PLR and MRR products</strong>. The difference: PLR lets you rebrand and modify, MRR lets you resell AND give your customers the right to sell too — multiplying the value proposition of every product you sell.
            </p>
            <p>
              Both models share the same core benefit: <strong>you keep 100% of every sale</strong>. No royalties, no revenue share, no middleman.
            </p>
          </div>
        </div>
      </section>

      {/* PLR vs MRR comparison */}
      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-8 text-center">PLR vs MRR — Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 text-sm">
              <thead>
                <tr className="bg-[#1A1A4E] text-white">
                  <th className="text-left px-5 py-3 rounded-tl-xl">Feature</th>
                  <th className="text-center px-5 py-3">PLR</th>
                  <th className="text-center px-5 py-3 rounded-tr-xl">MRR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Resell the product', '✅', '✅'],
                  ['Keep 100% profit', '✅', '✅'],
                  ['Rebrand as your own', '✅', '❌'],
                  ['Edit / modify content', '✅', '❌'],
                  ['Pass resell rights to buyers', '❌', '✅'],
                  ['Sell rights to resell', '❌', '✅'],
                ].map(([feature, plr, mrr]) => (
                  <tr key={feature} className="border-t border-gray-100">
                    <td className="px-5 py-3 text-gray-700 font-medium">{feature}</td>
                    <td className="px-5 py-3 text-center text-lg">{plr}</td>
                    <td className="px-5 py-3 text-center text-lg">{mrr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-5 text-sm text-gray-500">
            PLR Digital Club includes both PLR and MRR products.{' '}
            <Link href="/blog/plr-vs-mrr-difference" className="text-[#1565C0] hover:underline">Read the full PLR vs MRR guide →</Link>
          </p>
        </div>
      </section>

      {/* Related internal links */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'PLR Digital Products', href: '/plr-digital-products' },
              { label: 'PLR vs MRR Guide', href: '/blog/plr-vs-mrr-difference' },
              { label: 'How to Sell Digital Products', href: '/sell-digital-products-online' },
              { label: 'PLR eBooks', href: '/plr-ebooks' },
              { label: 'Best PLR Sites 2026', href: '/best-plr-sites-2026' },
              { label: 'Blog', href: '/blog' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-[#F8F8FF] border border-gray-200 text-[#1565C0] text-sm font-medium px-4 py-2 rounded-full hover:border-[#1565C0] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A4E] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Get 1,000+ MRR & PLR Products Today</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">One payment of $197. Lifetime access. No monthly fees. Start selling digital products with master resell rights today.</p>
        <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Join Now — $197 Lifetime →
        </Link>
      </section>

      <FAQSection items={FAQ_ITEMS} title="MRR Digital Products — FAQs" />
    </>
  )
}
