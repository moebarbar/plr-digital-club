import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSection } from '@/components/seo/FAQSection'
import { ProductSchema, BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'PLR Digital Products — 1,000+ Private Label Rights Products',
  description: 'Browse 1,000+ PLR digital products with full private label rights. Canva templates, eBooks, planners, social media packs & more. Rebrand and resell, keep 100% profit.',
  alternates: { canonical: 'https://plrdigitalclub.com/plr-digital-products' },
  openGraph: {
    title: 'PLR Digital Products — 1,000+ Private Label Rights Products',
    description: 'Get lifetime access to 1,000+ PLR digital products. Rebrand, resell, keep 100% profit.',
    url: 'https://plrdigitalclub.com/plr-digital-products',
  },
}

const CATEGORIES = [
  { icon: '🎨', name: 'Canva Templates', count: '300+', slug: '/plr-canva-templates', desc: 'Done-for-you Canva designs you can brand and sell instantly.' },
  { icon: '📱', name: 'Social Media Templates', count: '500+', slug: '/plr-social-media-templates', desc: 'Instagram, Facebook, TikTok and Pinterest ready-made packs.' },
  { icon: '📚', name: 'PLR eBooks', count: '300,000+', slug: '/plr-ebooks', desc: 'Publish, resell or use as lead magnets. Every niche covered.' },
  { icon: '📋', name: 'Planners & Journals', count: '200+', slug: '#', desc: 'Printable and digital planners with full resell rights.' },
  { icon: '📊', name: 'PowerPoint Templates', count: '100+', slug: '#', desc: 'Professional slide decks ready to white-label.' },
  { icon: '💡', name: 'Notion Templates', count: '150+', slug: '#', desc: 'Productivity and business Notion setups with PLR.' },
]

const FAQ_ITEMS = [
  { q: 'What are PLR digital products?', a: 'PLR (Private Label Rights) digital products are pre-made digital files — eBooks, templates, graphics, courses — that you purchase with the right to rebrand, edit, and resell as your own. You keep 100% of the profit from every sale.' },
  { q: 'Can I really resell PLR products and keep all the money?', a: 'Yes. That is the core benefit of PLR. Once you join PLR Digital Club, you own a licence to sell every product in the library. Every sale you make goes directly into your account — we take nothing.' },
  { q: 'Do I need any design or technical skills?', a: 'No. All products are done-for-you and ready to sell. For Canva templates you just need a free Canva account to add your branding. eBooks and planners can be sold as-is.' },
  { q: 'How many PLR products do I get?', a: 'Your lifetime membership includes 1,000+ products across 13 categories, plus new products added every week at no extra cost.' },
  { q: 'Where can I sell PLR digital products?', a: 'You can sell on Etsy, Gumroad, Payhip, your own website, Amazon KDP (for eBooks), or through social media. The reseller tools inside your dashboard include ready-made sales copy and social captions.' },
  { q: 'Is PLR Digital Club a one-time payment?', a: 'Yes — $197 one time, lifetime access. No monthly fees, no hidden charges. All future product additions are included.' },
]

export default function PLRDigitalProductsPage() {
  return (
    <>
      <ProductSchema
        name="PLR Digital Club — Lifetime PLR Membership"
        description="1,000+ PLR & MRR digital products with full resell rights. One-time $197 lifetime access."
        price="197"
        url="https://plrdigitalclub.com/plr-digital-products"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'PLR Digital Products', url: 'https://plrdigitalclub.com/plr-digital-products' },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">Private Label Rights Digital Products</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            1,000+ PLR Digital Products — Rebrand, Resell, Keep 100% Profit
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Get lifetime access to the largest library of PLR digital products online. Canva templates, eBooks, planners, social media packs, and more — all with full private label rights.
          </p>
          <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get Instant Access — $197 Lifetime →
          </Link>
          <p className="text-blue-300 text-sm mt-3">One payment · No monthly fees · New products added weekly</p>
        </div>
      </section>

      {/* What are PLR Products */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">What Are PLR Digital Products?</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              <strong>PLR digital products</strong> (Private Label Rights) are pre-made digital assets — eBooks, templates, graphics, courses, and more — that come with a licence allowing you to <strong>rebrand, edit, and resell them as your own</strong>. Unlike regular digital products, PLR gives you the rights to modify the content, put your name on it, and sell it to others while <strong>keeping 100% of the profit</strong>.
            </p>
            <p className="mt-4">
              For digital entrepreneurs, PLR products are a powerful shortcut. Instead of spending weeks creating products from scratch, you can launch a digital product business the same day you join. The demand for digital products — planners, templates, eBooks, guides — has never been higher, and PLR gives you the inventory to meet that demand instantly.
            </p>
            <p className="mt-4">
              At PLR Digital Club, we have curated over <strong>1,000 PLR and MRR digital products</strong> across 13 categories. Every product is ready to sell on Etsy, Gumroad, your own store, or anywhere else you choose.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-3 text-center">Browse PLR Product Categories</h2>
          <p className="text-gray-500 text-center mb-10">Every category comes with full private label rights and resell rights.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link key={cat.name} href={cat.slug} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#1565C0] hover:shadow-md transition-all">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-bold text-gray-900 mt-3 mb-1">{cat.name}</h3>
                <p className="text-[#1565C0] text-sm font-semibold mb-2">{cat.count} products</p>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to make money */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">How to Make Money With PLR Digital Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { step: '1', title: 'Join PLR Digital Club', desc: 'Get instant lifetime access to 1,000+ PLR products for a one-time payment of $197.' },
              { step: '2', title: 'Pick Your Products', desc: 'Browse by category and download the PLR products that match your niche or audience.' },
              { step: '3', title: 'Rebrand & Customise', desc: 'Add your name and branding. For Canva templates, swap the logo in minutes.' },
              { step: '4', title: 'List and Sell', desc: 'Upload to Etsy, Gumroad or your own site. Use our ready-made sales copy from the Reseller Tools.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 p-5 bg-[#F8F8FF] rounded-xl">
                <span className="w-10 h-10 rounded-full bg-[#1A1A4E] text-white font-bold flex items-center justify-center flex-shrink-0">{s.step}</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Learn More About PLR & MRR</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'What is MRR?', href: '/mrr-digital-products' },
              { label: 'PLR vs MRR — The Difference', href: '/blog/plr-vs-mrr-difference' },
              { label: 'How to Sell Digital Products Online', href: '/sell-digital-products-online' },
              { label: 'PLR eBooks', href: '/plr-ebooks' },
              { label: 'PLR Canva Templates', href: '/plr-canva-templates' },
              { label: 'Best PLR Sites 2026', href: '/best-plr-sites-2026' },
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
        <h2 className="text-3xl font-bold mb-4">Ready to Start Selling PLR Digital Products?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Join PLR Digital Club today and get instant access to 1,000+ done-for-you digital products with full resell rights.</p>
        <Link href="/" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Get Lifetime Access — $197 →
        </Link>
      </section>

      <FAQSection items={FAQ_ITEMS} title="PLR Digital Products — FAQs" />
    </>
  )
}
