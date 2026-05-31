import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSection } from '@/components/seo/FAQSection'
import { OrganizationSchema, WebsiteSchema, ProductSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: { absolute: 'Get Resell-Ready Digital Products for 100% Profit | PLR Digital Club' },
  description:
    'Pay once. Access 1,000+ digital products with full PLR & MRR rights. Rebrand them, sell anywhere, and keep 100% of the profits. Lifetime access for $197.',
  alternates: { canonical: 'https://plrdigitalclub.com/' },
  openGraph: {
    title: 'Get Resell-Ready Digital Products for 100% Profit | PLR Digital Club',
    description:
      'Pay once. Access 1,000+ digital products with full PLR & MRR rights. Rebrand, resell anywhere, and keep 100% of the profits. Lifetime access for $197.',
    url: 'https://plrdigitalclub.com/',
  },
  twitter: {
    title: 'Get Resell-Ready Digital Products for 100% Profit | PLR Digital Club',
    description:
      'Pay once. Access 1,000+ digital products with full PLR & MRR rights. Rebrand, resell anywhere, and keep 100% of the profits. Lifetime access for $197.',
  },
}

const STATS = [
  { number: '1,000+', label: 'Digital Products' },
  { number: '48', label: 'Categories' },
  { number: 'PLR & MRR', label: 'Rights Included' },
  { number: 'Lifetime', label: 'Free Updates' },
]

const STEPS = [
  { step: '1', title: 'Download', desc: 'Browse the library and download the products that fit your niche — eBooks, courses, templates, planners and more.' },
  { step: '2', title: 'Rebrand & Customise', desc: 'Add your branding, change the cover, or sell as-is. For Canva templates, swap the logo in minutes.' },
  { step: '3', title: 'Resell & Profit', desc: 'List on Etsy, Shopify, Gumroad or your own site and keep 100% of every sale you make.' },
]

const CATEGORIES = [
  { icon: '🎨', name: 'Canva Templates', count: '300+', href: '/plr-canva-templates' },
  { icon: '📱', name: 'Social Media Templates', count: '500+', href: '/plr-social-media-templates' },
  { icon: '📚', name: 'PLR eBooks', count: 'Huge library', href: '/plr-ebooks' },
  { icon: '🗓️', name: 'Planners & Journals', count: '200+', href: '/products' },
  { icon: '💡', name: 'Notion Templates', count: '150+', href: '/products' },
  { icon: '🔖', name: 'Logo Templates', count: '60,000+', href: '/products' },
]

const VALUE_ITEMS = [
  { title: '1,000+ Digital Products with PLR & MRR', value: '$4,997 Value' },
  { title: 'Full Resell & Rebrand Rights', value: '$997 Value' },
  { title: 'Marketing Assets & Sales Copy', value: '$497 Value' },
  { title: 'Lifetime Updates & New Products', value: 'Priceless' },
]

const TESTIMONIALS = [
  { quote: 'The Notion templates from PLR Digital Club are incredibly well-designed. The quality is unmatched and saved me so much time.', name: 'Sarah Jenkins', role: 'Digital Entrepreneur' },
  { quote: 'The best investment I have made. No more spending weeks creating products. I just download, customise, and sell.', name: 'Michael Chen', role: 'Side Hustler' },
  { quote: 'Finally, PLR content that looks modern and professional. The designs are exactly what my audience wants.', name: 'Jessica Williams', role: 'Content Creator' },
]

const FAQ_ITEMS = [
  { q: 'Is this legal?', a: 'Absolutely. PLR (Private Label Rights) and MRR (Master Resell Rights) are legitimate licences that allow you to rebrand and resell digital products. You are purchasing the rights to use these products as your own.' },
  { q: 'Can I really resell these and keep all the profit?', a: 'Yes. That is the entire point. With MRR you can sell these products and keep 100% of the profit. With PLR you can also modify, rebrand, and claim authorship of the products.' },
  { q: 'Do I need any experience?', a: 'No experience needed. Our products come ready to sell — files, sales copy, and marketing materials included. If you can upload a file and set a price, you can make money.' },
  { q: 'Is this a subscription?', a: 'No. This is a one-time payment of $197 for lifetime access. No monthly fees, no hidden charges. Pay once and access everything forever, including all future updates.' },
  { q: 'How fast can I start?', a: 'Immediately. After purchase you get instant access to download all products. You could have your first product listed for sale within an hour of joining.' },
]

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <ProductSchema
        name="PLR Digital Club — Lifetime PLR & MRR Membership"
        description="1,000+ PLR & MRR digital products with full resell rights. Rebrand, resell anywhere, and keep 100% of the profit. One-time $197 lifetime access."
        price="197"
        url="https://plrdigitalclub.com/"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">1,000+ Products Ready to Resell</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Get Resell-Ready Digital Products for 100% Profit
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Pay once. Access 1,000+ digital products with full PLR &amp; MRR rights. Rebrand them, sell them anywhere, and keep 100% of the profits.
          </p>
          <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get Instant Access — $197 Lifetime →
          </Link>
          <p className="text-blue-300 text-sm mt-3">One-time payment · Full PLR &amp; MRR rights · Instant download</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-blue-100">
            <span>★★★★★ 4.8 from 500+ happy users</span>
            <span>🔒 Secure SSL Checkout</span>
            <span>✓ 30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#F8F8FF] border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#1565C0]">{s.number}</p>
              <p className="text-gray-500 text-sm font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What is PLR */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">What Is PLR Digital Club?</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              PLR Digital Club is a lifetime membership that gives you <strong>1,000+ done-for-you digital products</strong> with full <strong>Private Label Rights (PLR)</strong> and <strong>Master Resell Rights (MRR)</strong>. That means you can rebrand them, edit them, and resell them as your own — while keeping <strong>100% of every sale</strong>.
            </p>
            <p className="mt-4">
              Instead of spending weeks creating products from scratch, you can launch a digital product business the same day you join. Every product is ready to sell on Etsy, Gumroad, Shopify, your own store, or anywhere else you choose — for a single one-time payment of <strong>$197</strong>, with no monthly fees and all future updates included.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-3 text-center">How It Works</h2>
          <p className="text-gray-500 text-center mb-10">We have removed the hardest part of making money online: creating the product.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.step} className="bg-white rounded-xl border border-gray-200 p-6">
                <span className="w-10 h-10 rounded-full bg-[#1A1A4E] text-white font-bold flex items-center justify-center mb-4">{s.step}</span>
                <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside / categories */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-3 text-center">What&apos;s Inside Your Membership</h2>
          <p className="text-gray-500 text-center mb-10">A preview of what you get. Full access includes 48 categories with 1,000+ products.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link key={cat.name} href={cat.href} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#1565C0] hover:shadow-md transition-all">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-bold text-gray-900 mt-3 mb-1">{cat.name}</h3>
                <p className="text-[#1565C0] text-sm font-semibold">{cat.count}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="inline-block border border-[#1565C0] text-[#1565C0] font-semibold px-6 py-3 rounded-xl hover:bg-[#1565C0] hover:text-white transition-colors">
              Browse All 48 Categories →
            </Link>
          </div>
        </div>
      </section>

      {/* Value / pricing */}
      <section id="pricing" className="py-16 bg-[#F8F8FF]">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-3 text-center">Everything You Need to Start Selling</h2>
          <p className="text-gray-500 text-center mb-10">One payment. Lifetime access. Start today.</p>
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <ul className="space-y-4 mb-8">
              {VALUE_ITEMS.map((item) => (
                <li key={item.title} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <span className="font-medium text-gray-900">{item.title}</span>
                  <span className="text-gray-500 text-sm whitespace-nowrap ml-4">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#F8F8FF] rounded-xl p-6 flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-500 text-sm">Total Value</p>
                <p className="text-2xl font-bold line-through text-gray-400">$6,491</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">Today&apos;s Price</p>
                <p className="text-5xl font-bold text-[#1565C0]">$197</p>
              </div>
            </div>
            <Link href="/checkout" className="block text-center bg-[#1A1A4E] hover:bg-[#1565C0] text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg">
              Get Instant Access Now →
            </Link>
            <p className="text-center text-sm text-gray-500 mt-4">🛡️ 30-Day Money-Back Guarantee</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-10 text-center">Real Results from Real People</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#F8F8FF] rounded-xl p-6 border border-gray-100">
                <p className="text-yellow-500 text-sm mb-2">★★★★★</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#1A1A4E] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
        <p className="text-blue-200 mb-2 max-w-xl mx-auto">Join 5,000+ entrepreneurs who are already selling digital products and keeping 100% of the profits.</p>
        <p className="text-2xl font-bold mb-8">
          <span className="line-through text-blue-300/70">$497</span>{' '}
          <span className="text-4xl">$197</span>{' '}
          <span className="text-sm font-normal text-blue-200">one-time payment</span>
        </p>
        <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Get Lifetime Access — $197 →
        </Link>
      </section>

      <FAQSection items={FAQ_ITEMS} title="Frequently Asked Questions" />
    </>
  )
}
