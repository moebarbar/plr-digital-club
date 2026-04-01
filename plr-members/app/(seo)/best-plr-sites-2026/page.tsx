import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSection } from '@/components/seo/FAQSection'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Best PLR Sites 2026 — Top PLR Websites Reviewed & Ranked',
  description: 'Reviewed and ranked: the best PLR sites in 2026. Compare PLR Digital Club, IDPLR, BuyQualityPLR, and more. Find the best value PLR membership for your business.',
  alternates: { canonical: 'https://plrdigitalclub.com/best-plr-sites-2026' },
  openGraph: {
    title: 'Best PLR Sites 2026 — Top PLR Websites Reviewed & Ranked',
    description: 'The definitive guide to the best PLR sites in 2026. Honest comparison of PLR libraries, pricing, and licensing.',
    url: 'https://plrdigitalclub.com/best-plr-sites-2026',
  },
}

const PLR_SITES = [
  {
    rank: 1,
    name: 'PLR Digital Club',
    url: 'https://plrdigitalclub.com',
    internal: true,
    badge: 'Best Overall 2026',
    pricing: '$197 one-time lifetime',
    products: '1,000+ (Canva, eBooks, planners, social media)',
    licence: 'PLR + MRR — rebrand, resell, pass rights to buyers',
    pros: ['Lifetime access, one payment', 'Both PLR and MRR products', 'Canva templates included', 'New products added weekly', 'Reseller Tools (email swipes, social captions)'],
    cons: ['Newer platform vs legacy sites'],
    verdict: 'The best all-in-one PLR membership for digital entrepreneurs in 2026. Modern Canva templates, full MRR rights, and lifetime access make this the top choice.',
  },
  {
    rank: 2,
    name: 'IDPLR',
    url: '#',
    internal: false,
    badge: 'Largest Library',
    pricing: '$97–$297/year',
    products: '12,500+ (eBooks, software, videos)',
    licence: 'PLR — varies by product',
    pros: ['Huge library of older content', 'Many niches covered'],
    cons: ['Annual subscription required', 'Older, lower quality content', 'No Canva templates', 'Varying licence terms per product'],
    verdict: 'Large archive of older PLR content. Better for eBook-heavy sellers, but quality is inconsistent and the annual fee adds up.',
  },
  {
    rank: 3,
    name: 'BuyQualityPLR',
    url: '#',
    internal: false,
    badge: 'Good for Blogging',
    pricing: '$27–$67/month',
    products: '500+ (articles, eBooks, courses)',
    licence: 'PLR only',
    pros: ['Good article and blog content', 'Fresh content added regularly'],
    cons: ['Monthly subscription cost', 'Limited template selection', 'No MRR products'],
    verdict: 'Solid for bloggers and content marketers. Monthly fees make it expensive long-term compared to a lifetime option.',
  },
  {
    rank: 4,
    name: 'PLR.me',
    url: '#',
    internal: false,
    badge: 'Coaching Niche',
    pricing: '$97–$497/month',
    products: '15,000+ (coaching, wellness niche)',
    licence: 'PLR — coaching and wellness focus',
    pros: ['High quality coaching content', 'Good for wellness niche'],
    cons: ['Very expensive monthly fee', 'Niche-specific, not general purpose', 'No Canva or social media templates'],
    verdict: 'Premium pricing for coaching-specific content. Valuable for wellness coaches but overpriced for general digital product sellers.',
  },
]

const CRITERIA = [
  { label: 'Licence flexibility', desc: 'Can you rebrand, resell, and pass rights to buyers?' },
  { label: 'Product variety', desc: 'Are there Canva templates, eBooks, planners, social media packs?' },
  { label: 'Content quality', desc: 'Is the content professionally designed and written?' },
  { label: 'Pricing model', desc: 'One-time vs monthly — what is the total cost of ownership?' },
  { label: 'New content', desc: 'Are new products added regularly at no extra cost?' },
  { label: 'Reseller support', desc: 'Are sales copy, email swipes, and social captions included?' },
]

const FAQ_ITEMS = [
  { q: 'What is the best PLR site in 2026?', a: 'PLR Digital Club is our top pick for 2026 due to its lifetime access model, modern Canva templates, both PLR and MRR products, and weekly content additions. For a one-time payment of $197, it offers better long-term value than any monthly subscription PLR site.' },
  { q: 'Are PLR products worth buying?', a: 'Yes, for digital product sellers, PLR products are one of the highest-ROI investments available. Instead of spending weeks creating products, you can start selling professionally designed content on day one.' },
  { q: 'What is the difference between free PLR sites and paid PLR memberships?', a: 'Free PLR sites typically offer outdated, low-quality content with no design value. Paid PLR memberships like PLR Digital Club offer professional Canva templates, fresh content, and clear licence terms that make the products actually sellable.' },
  { q: 'Can I use PLR from multiple sites?', a: 'Yes. You are not limited to one PLR provider. However, most serious sellers find a single comprehensive membership like PLR Digital Club covers all their needs, avoiding the cost and complexity of multiple subscriptions.' },
]

export default function BestPLRSitesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'Best PLR Sites 2026', url: 'https://plrdigitalclub.com/best-plr-sites-2026' },
      ]} />

      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">Reviewed &amp; Ranked for 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Best PLR Sites in 2026 — Top PLR Websites Compared
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            We tested the top PLR membership sites so you can choose the best one for your digital product business. Honest reviews, pricing comparison, and our top pick for 2026.
          </p>
        </div>
      </section>

      {/* What to look for */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">What Makes a Good PLR Site?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CRITERIA.map((c) => (
              <div key={c.label} className="flex items-start gap-3 bg-[#F8F8FF] rounded-xl p-4 border border-gray-200">
                <span className="text-green-500 mt-1 font-bold">&#10003;</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{c.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site reviews */}
      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-8 text-center">Top PLR Sites Reviewed</h2>
          <div className="space-y-8">
            {PLR_SITES.map((site) => (
              <div key={site.name} className={`bg-white rounded-2xl border-2 p-6 ${site.rank === 1 ? 'border-[#1565C0]' : 'border-gray-200'}`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[#1A1A4E] text-white font-bold flex items-center justify-center flex-shrink-0">#{site.rank}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{site.name}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${site.rank === 1 ? 'bg-blue-100 text-[#1565C0]' : 'bg-gray-100 text-gray-600'}`}>
                        {site.badge}
                      </span>
                    </div>
                  </div>
                  {site.internal && (
                    <Link href="/" className="text-sm bg-[#1565C0] text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0">
                      Visit →
                    </Link>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-sm">
                  <div className="bg-[#F8F8FF] rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Pricing</p>
                    <p className="font-semibold text-gray-900">{site.pricing}</p>
                  </div>
                  <div className="bg-[#F8F8FF] rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Products</p>
                    <p className="font-semibold text-gray-900">{site.products}</p>
                  </div>
                  <div className="bg-[#F8F8FF] rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Licence</p>
                    <p className="font-semibold text-gray-900">{site.licence}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Pros</p>
                    <ul className="space-y-1">
                      {site.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-green-500 mt-0.5">&#10003;</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Cons</p>
                    <ul className="space-y-1">
                      {site.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-red-400 mt-0.5">&#10007;</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                  <p className="text-sm text-gray-700"><strong>Verdict:</strong> {site.verdict}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'What are PLR Products?', href: '/plr-digital-products' },
              { label: 'PLR vs MRR Explained', href: '/blog/plr-vs-mrr-difference' },
              { label: 'How to Sell Digital Products', href: '/sell-digital-products-online' },
              { label: 'PLR Canva Templates', href: '/plr-canva-templates' },
              { label: 'MRR Digital Products', href: '/mrr-digital-products' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-[#F8F8FF] border border-gray-200 text-[#1565C0] text-sm font-medium px-4 py-2 rounded-full hover:border-[#1565C0] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A4E] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Start With the Best PLR Membership in 2026</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">1,000+ PLR &amp; MRR products. One payment of $197. No monthly fees. Lifetime access.</p>
        <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Join PLR Digital Club — $197 →
        </Link>
      </section>

      <FAQSection items={FAQ_ITEMS} title="Best PLR Sites — FAQs" />
    </>
  )
}
