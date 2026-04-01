import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSection } from '@/components/seo/FAQSection'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'How to Sell Digital Products Online in 2026 — Complete Guide',
  description: 'Learn how to sell digital products online and keep 100% profit. Step-by-step guide for beginners — no experience needed. Start with PLR & MRR products today.',
  alternates: { canonical: 'https://plrdigitalclub.com/sell-digital-products-online' },
  openGraph: {
    title: 'How to Sell Digital Products Online in 2026 — Complete Guide',
    description: 'The complete beginner guide to selling digital products online. Earn passive income with PLR & MRR products.',
    url: 'https://plrdigitalclub.com/sell-digital-products-online',
  },
}

const FAQ_ITEMS = [
  { q: 'What is the easiest digital product to sell online?', a: 'Templates — especially Canva templates — are among the easiest digital products to start with. They are visual, in high demand on Etsy, and PLR Digital Club has 300+ Canva templates ready to sell.' },
  { q: 'Do I need a website to sell digital products?', a: 'No. You can start on Etsy, Gumroad or Payhip without a website. These platforms handle payments and delivery for you. A website is useful later but is not required to get started.' },
  { q: 'How do I deliver digital products to customers?', a: 'Platforms like Etsy, Gumroad and Payhip automatically deliver download links to buyers after purchase. You upload the file once and they handle everything.' },
  { q: 'How much can I make selling digital products?', a: 'Income varies widely. Many PLR sellers earn $500–$3,000/month starting part-time. Top sellers make $10,000+/month. The key is listing volume, consistent marketing, and choosing the right platform.' },
  { q: 'Is it legal to resell PLR products?', a: 'Yes, 100% legal. When you buy PLR products, you are buying a licence that explicitly grants resell rights. PLR Digital Club products come with clear licence terms allowing you to resell.' },
]

export default function SellDigitalProductsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'How to Sell Digital Products Online', url: 'https://plrdigitalclub.com/sell-digital-products-online' },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">Complete Guide for 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            How to Sell Digital Products Online and Keep 100% of the Profit
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            The complete beginner guide to building a digital product business. No experience, no inventory, no shipping. Start with done-for-you PLR products and earn passive income from day one.
          </p>
          <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get 1,000+ Products Ready to Sell →
          </Link>
        </div>
      </section>

      {/* Why digital products */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">Why Sell Digital Products in 2026?</h2>
          <div className="text-gray-600 space-y-4 text-lg">
            <p>Selling digital products is one of the best online business models available today. Here is why:</p>
            <ul className="space-y-3">
              {[
                'Zero inventory — no physical stock to manage or ship',
                'Infinite copies — sell the same file thousands of times',
                'Passive income — products keep selling while you sleep',
                '100% profit margin — no cost of goods once created',
                'Low startup cost — you can start for under $200',
                'Global market — sell to anyone, anywhere, any time',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">
              The smartest way to get started is with <strong>PLR and MRR digital products</strong> — pre-made files that come with full rights to resell. Instead of spending months creating products, you can start selling today using someone else&apos;s work, legally and profitably.
            </p>
          </div>
        </div>
      </section>

      {/* Step by step */}
      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-8">How to Start Selling Digital Products (Step by Step)</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Choose Your Products',
                body: 'Start with a niche you understand or products with proven demand. Canva templates and planners sell extremely well on Etsy. eBooks and guides work well on Gumroad. With PLR Digital Club, you get 1,000+ products across 13 categories — pick what fits your audience.',
              },
              {
                step: 2,
                title: 'Get Your Resell Rights',
                body: 'Join PLR Digital Club for a one-time $197 lifetime membership. You instantly get access to every PLR and MRR product in the library, with new products added every week. All products come with clear resell rights licences.',
                link: { label: 'Get your PLR licence →', href: '/' },
              },
              {
                step: 3,
                title: 'Set Up Your Storefront',
                body: 'For beginners, Etsy and Gumroad are the fastest to launch. Create a free account, upload your product files, write a keyword-rich description, set your price (typically $5–$47 per product), and publish.',
              },
              {
                step: 4,
                title: 'Optimise for Discoverability',
                body: 'Use keyword research to optimise your Etsy listings and product titles. For example, "Canva social media templates PLR" and "digital planner with resell rights" are high-intent search terms. Good thumbnails matter too — Canva makes this easy.',
              },
              {
                step: 5,
                title: 'Market Your Products',
                body: 'Use the ready-made social media captions and email copy inside your PLR Digital Club dashboard. Post on Pinterest (high buyer intent), TikTok (organic reach), and Instagram. Pinterest in particular drives consistent traffic to Etsy digital product listings.',
              },
              {
                step: 6,
                title: 'Scale What Works',
                body: 'Once you see which products and platforms perform best, add more listings in those categories. The more products you list, the more income streams you create. Many top sellers have 50–200+ listings.',
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-[#1A1A4E] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">{s.step}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-600">{s.body}</p>
                    {s.link && (
                      <Link href={s.link.href} className="text-[#1565C0] font-medium hover:underline mt-2 inline-block text-sm">
                        {s.link.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-8">Best Platforms to Sell Digital Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { name: 'Etsy', emoji: '🛍️', best: 'Templates, planners, printables', pros: 'Built-in buyer traffic, easy setup, great for visual products' },
              { name: 'Gumroad', emoji: '📦', best: 'eBooks, courses, bundles', pros: 'Zero listing fees, simple to use, instant payouts' },
              { name: 'Payhip', emoji: '💳', best: 'All digital products', pros: 'Free plan available, EU VAT handled automatically' },
              { name: 'Your Own Website', emoji: '🌐', best: 'Full control, higher margins', pros: 'Brand building, no platform fees, email list ownership' },
            ].map((p) => (
              <div key={p.name} className="bg-[#F8F8FF] rounded-xl p-5 border border-gray-200">
                <p className="text-2xl mb-2">{p.emoji}</p>
                <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-xs text-[#1565C0] font-medium mb-2">Best for: {p.best}</p>
                <p className="text-gray-500 text-sm">{p.pros}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'What are PLR Products?', href: '/plr-digital-products' },
              { label: 'What is MRR?', href: '/mrr-digital-products' },
              { label: 'PLR vs MRR Explained', href: '/blog/plr-vs-mrr-difference' },
              { label: 'Passive Income with PLR', href: '/blog/passive-income-plr-products' },
              { label: 'Digital Products for Beginners', href: '/blog/digital-product-business-for-beginners' },
              { label: 'PLR Canva Templates', href: '/plr-canva-templates' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-white border border-gray-200 text-[#1565C0] text-sm font-medium px-4 py-2 rounded-full hover:border-[#1565C0] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A4E] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Start Your Digital Product Business Today</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Get 1,000+ done-for-you PLR & MRR products, ready to sell. One payment of $197 — lifetime access, no monthly fees.</p>
        <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Get Instant Access — $197 →
        </Link>
      </section>

      <FAQSection items={FAQ_ITEMS} title="Selling Digital Products — FAQs" />
    </>
  )
}
