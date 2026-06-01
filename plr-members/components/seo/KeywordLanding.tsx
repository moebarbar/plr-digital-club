import Link from 'next/link'
import { FAQSection } from '@/components/seo/FAQSection'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export interface KeywordLandingContent {
  slug: string
  eyebrow: string
  h1: string
  heroSub: string
  ctaLabel: string
  /** Lead section: an h2 + 2–3 paragraphs of unique copy (HTML-free strings). */
  lead: { heading: string; paragraphs: string[] }
  /** Numbered/explained points — "ways to use", "benefits", etc. */
  points: { title: string; body: string }[]
  pointsHeading: string
  related: { label: string; href: string }[]
  faqs: { q: string; a: string }[]
  /** Breadcrumb parent (besides Home). Optional. */
  parent?: { name: string; url: string }
}

const BASE = 'https://plrdigitalclub.com'

export function KeywordLanding({ c }: { c: KeywordLandingContent }) {
  const crumbs = [
    { name: 'Home', url: BASE },
    ...(c.parent ? [c.parent] : []),
    { name: c.h1, url: `${BASE}/${c.slug}` },
  ]

  return (
    <>
      <BreadcrumbSchema items={crumbs} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">{c.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{c.h1}</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">{c.heroSub}</p>
          <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
            {c.ctaLabel}
          </Link>
        </div>
      </section>

      {/* Lead */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">{c.lead.heading}</h2>
          <div className="text-gray-600 space-y-4 text-lg">
            {c.lead.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </section>

      {/* Points */}
      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-8">{c.pointsHeading}</h2>
          <div className="space-y-4">
            {c.points.map((item, i) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4">
                <span className="w-10 h-10 rounded-full bg-[#1A1A4E] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Resources</h2>
          <div className="flex flex-wrap gap-3">
            {c.related.map((l) => (
              <Link key={l.href} href={l.href} className="bg-[#F8F8FF] border border-gray-200 text-[#1565C0] text-sm font-medium px-4 py-2 rounded-full hover:border-[#1565C0] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A4E] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Get Instant Access to PLR Digital Club</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">1,000+ done-for-you digital products with full PLR &amp; MRR rights. One payment, lifetime access.</p>
        <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Join PLR Digital Club — $197 →
        </Link>
      </section>

      <FAQSection items={c.faqs} title="Frequently Asked Questions" />
    </>
  )
}
