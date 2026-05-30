import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'About PLR Digital Club — Who We Are & What We Do',
  description: 'PLR Digital Club gives entrepreneurs thousands of done-for-you digital products with PLR & MRR licences. Learn our story, mission, and how we vet every product.',
  alternates: { canonical: 'https://plrdigitalclub.com/about' },
  openGraph: {
    title: 'About PLR Digital Club',
    description: 'Thousands of done-for-you PLR & MRR digital products you can rebrand and resell for 100% profit. Learn who we are.',
    url: 'https://plrdigitalclub.com/about',
  },
}

const VALUES = [
  { title: 'Quality over quantity', body: 'Every product in our library is reviewed for usefulness and resale potential. We would rather give you products that sell than pad a number.' },
  { title: 'You keep 100%', body: 'With PLR and MRR licences, every sale you make is yours. We give you the assets; your profit is your own.' },
  { title: 'Built for beginners', body: 'You should not need a design degree or years of experience. Our products and guides are made to get you selling quickly.' },
  { title: 'Honest education', body: 'Our blog and guides tell you what actually works — including the unglamorous parts like rebranding and pricing.' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'About', url: 'https://plrdigitalclub.com/about' },
      ]} />

      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Helping People Build Digital Product Businesses Since 2021
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            PLR Digital Club exists to remove the hardest part of starting an online business — creating the product — so you can focus on selling and growing.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-gray-600 space-y-5 text-lg">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-4">Our Story</h2>
          <p>
            PLR Digital Club started with a simple frustration: starting an online business was supposed to be accessible, yet most people stalled for months trying to create their first product. Writing an eBook, designing templates, or building a course took time and skills that beginners did not have.
          </p>
          <p>
            We realised the answer already existed — <strong>Private Label Rights (PLR)</strong> and <strong>Master Resell Rights (MRR)</strong> products let anyone legally rebrand and resell ready-made digital assets. The problem was that quality PLR was scattered, expensive, and hard to trust. So we built a single library of vetted, done-for-you products that members can rebrand and sell for 100% profit.
          </p>
          <p>
            Today, thousands of members use our library and guides to launch shops on Etsy, Shopify, Gumroad, and their own websites.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-8 text-center">What We Believe</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-[#1A1A4E] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-4">Who Writes Our Guides</h2>
          <p className="text-gray-600 text-lg mb-6">
            Our content is produced by the <strong>PLR Digital Club editorial team</strong> — a group that has helped thousands of sellers launch and grow digital product shops since 2021. We test the platforms, licence types, and selling strategies we write about before we recommend them, so our guides reflect what actually works in practice.
          </p>
          <Link href="/blog" className="inline-block text-[#1565C0] font-semibold underline hover:text-[#1A1A4E]">
            Read our latest guides →
          </Link>
        </div>
      </section>

      <section className="py-16 bg-[#1A1A4E] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Start Your Digital Product Business Today</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Get lifetime access to thousands of PLR &amp; MRR products for one payment of $197.</p>
        <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Join PLR Digital Club — $197 →
        </Link>
      </section>
    </>
  )
}
