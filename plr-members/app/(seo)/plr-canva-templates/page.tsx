import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSection } from '@/components/seo/FAQSection'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'PLR Canva Templates — 300+ Canva Templates With Resell Rights',
  description: 'Get 300+ Canva templates with full PLR & resell rights. Social media, business, branding, Etsy-ready designs. Lifetime access from $197. Sell and keep 100% profit.',
  alternates: { canonical: 'https://plrdigitalclub.com/plr-canva-templates' },
}

const FAQ_ITEMS = [
  { q: 'Can I sell Canva templates with PLR rights on Etsy?', a: 'Yes. Canva templates are one of the best-selling digital products on Etsy. With PLR rights from PLR Digital Club, you can list and sell them on Etsy and keep 100% of every sale.' },
  { q: 'Do I need a Canva Pro account to use PLR Canva templates?', a: 'Most templates work with the free Canva account. Some advanced templates may use Canva Pro elements, but these can be swapped out with free alternatives if needed.' },
  { q: 'Can I rebrand PLR Canva templates with my own logo?', a: 'Yes. PLR rights specifically allow you to rebrand. You can change the colours, fonts, logo, and any text to match your brand before selling.' },
  { q: 'What types of Canva templates are included?', a: 'PLR Digital Club includes Instagram posts, stories, Pinterest pins, Facebook covers, business cards, presentation templates, logo kits, planner covers, and more.' },
]

export default function PLRCanvaTemplatesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'PLR Digital Products', url: 'https://plrdigitalclub.com/plr-digital-products' },
        { name: 'PLR Canva Templates', url: 'https://plrdigitalclub.com/plr-canva-templates' },
      ]} />

      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">Canva Templates With PLR Rights</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            300+ Canva PLR Templates — Sell on Etsy and Keep 100% Profit
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Get instant access to 300+ done-for-you Canva templates with full private label and resell rights. Rebrand in minutes, list on Etsy today.
          </p>
          <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get All 300+ Templates — $197 Lifetime →
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">Why Canva PLR Templates Are the Best Digital Product to Sell</h2>
          <div className="text-gray-600 space-y-4 text-lg">
            <p>
              <strong>Canva PLR templates</strong> are consistently among the top-selling digital products on Etsy and Gumroad. The reason is simple: businesses, content creators, and entrepreneurs always need high-quality design assets — and most do not have the time or skills to create them.
            </p>
            <p>
              With PLR rights, you can take professional, ready-made Canva templates, brand them as your own in minutes, and sell them for $5–$47 each. A single bundle of 20 templates can sell for $17–$47. With 300+ templates available, the earning potential is enormous.
            </p>
            <p>
              All Canva templates in PLR Digital Club are designed by professionals, ready to customise, and come with a licence allowing you to <strong>rebrand and resell on any platform</strong> — Etsy, Gumroad, your own store, or as bonuses in your own courses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'All PLR Digital Products', href: '/plr-digital-products' },
              { label: 'PLR Social Media Templates', href: '/plr-social-media-templates' },
              { label: 'Canva PLR Templates for Etsy', href: '/blog/canva-plr-templates-etsy' },
              { label: 'How to Sell Digital Products', href: '/sell-digital-products-online' },
              { label: 'PLR eBooks', href: '/plr-ebooks' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-white border border-gray-200 text-[#1565C0] text-sm font-medium px-4 py-2 rounded-full hover:border-[#1565C0] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A4E] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Get 300+ Canva PLR Templates Today</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Plus 700+ more digital products. One payment, lifetime access, full resell rights.</p>
        <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Join PLR Digital Club — $197 →
        </Link>
      </section>

      <FAQSection items={FAQ_ITEMS} title="Canva PLR Templates — FAQs" />
    </>
  )
}
