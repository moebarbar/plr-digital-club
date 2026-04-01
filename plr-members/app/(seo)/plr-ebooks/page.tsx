import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSection } from '@/components/seo/FAQSection'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'PLR eBooks — 300,000+ eBooks With Private Label Rights',
  description: 'Access 300,000+ PLR eBooks with full private label rights. Publish on Amazon KDP, sell on Etsy, or use as lead magnets. Lifetime access from $197.',
  alternates: { canonical: 'https://plrdigitalclub.com/plr-ebooks' },
  openGraph: {
    title: 'PLR eBooks — 300,000+ eBooks With Private Label Rights',
    description: 'Get 300,000+ PLR eBooks. Publish, resell, or use as lead magnets. Lifetime access.',
    url: 'https://plrdigitalclub.com/plr-ebooks',
  },
}

const FAQ_ITEMS = [
  { q: 'Can I publish PLR eBooks on Amazon KDP?', a: 'Yes. PLR eBooks can be published on Amazon KDP after you rebrand and modify them. Amazon requires the content to be sufficiently unique, so we recommend rewriting at least 30–40% and adding your own branding, introduction, and conclusion.' },
  { q: 'Can I use PLR eBooks as lead magnets?', a: 'Absolutely. PLR eBooks make excellent lead magnets. Give them away for free in exchange for an email address to grow your list. This is one of the most popular uses of PLR eBooks among digital marketers.' },
  { q: 'What niches do the PLR eBooks cover?', a: 'PLR Digital Club eBooks cover business, finance, health, wellness, relationships, self-improvement, parenting, pets, food, travel, marketing, social media, and many more. With 300,000+ eBooks, virtually every niche is covered.' },
  { q: 'Can I sell PLR eBooks on Etsy?', a: 'Yes. Digital eBooks sell well on Etsy, especially in niches like wellness, productivity, and finance. PLR rights allow you to list and sell them directly. Many of our members generate consistent Etsy income from PLR eBooks.' },
  { q: 'Do I need to edit PLR eBooks before selling?', a: 'You can sell them as-is, but we recommend adding your branding, updating any outdated information, and writing a personal introduction. This increases perceived value and makes the product feel more premium.' },
]

export default function PLREbooksPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'PLR Digital Products', url: 'https://plrdigitalclub.com/plr-digital-products' },
        { name: 'PLR eBooks', url: 'https://plrdigitalclub.com/plr-ebooks' },
      ]} />

      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">Private Label Rights eBooks</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            300,000+ PLR eBooks — Publish, Sell, and Keep 100% Profit
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            The largest PLR eBook library online. Rebrand and publish on Amazon KDP, sell on Etsy, or use as lead magnets. Every niche covered. Lifetime access from one payment.
          </p>
          <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get All 300,000+ eBooks — $197 Lifetime →
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">What Are PLR eBooks?</h2>
          <div className="text-gray-600 space-y-4 text-lg">
            <p>
              <strong>PLR eBooks</strong> (Private Label Rights eBooks) are pre-written digital books that come with a licence allowing you to rebrand, edit, and resell them as your own. You can put your name on the cover, modify the content, add your branding, and publish or sell the eBook — keeping 100% of every sale.
            </p>
            <p>
              PLR Digital Club includes over <strong>300,000 PLR eBooks</strong> spanning every major niche — business, health, wellness, finance, relationships, parenting, self-improvement, and more. Whether you want to publish on Amazon KDP, sell on Etsy, or use eBooks as lead magnets to grow your email list, the content is ready to go.
            </p>
            <p>
              Unlike paying a ghostwriter ($500–$5,000 per eBook), PLR eBooks let you access professional, well-researched content at a fraction of the cost — and your lifetime membership covers every eBook in the library plus new additions each week.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-8">5 Ways to Make Money With PLR eBooks</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Publish on Amazon KDP',
                body: 'Rebrand the eBook with your name, update the content, design a cover in Canva, and publish on Amazon Kindle Direct Publishing. Amazon has millions of buyers searching for books in every niche.',
              },
              {
                title: 'Sell on Etsy as a Digital Download',
                body: 'List PLR eBooks as digital downloads on Etsy. Productivity guides, wellness eBooks, and finance guides sell consistently on the platform. No printing, no shipping — buyers get instant access.',
              },
              {
                title: 'Use as a Lead Magnet',
                body: 'Give a PLR eBook away free in exchange for an email address. A well-chosen lead magnet can grow your list by thousands. Build your audience, then promote your products or affiliate offers.',
              },
              {
                title: 'Bundle Into a Course or Membership',
                body: 'Combine 5–10 related PLR eBooks into a premium course or add them as bonuses inside a membership. A bundle of 10 eBooks on a specific niche can sell for $47–$97.',
              },
              {
                title: 'Sell on Gumroad or Your Own Site',
                body: 'Upload directly to Gumroad, Payhip, or your own website. Set your price, write a keyword-rich description, and promote via Pinterest or email. Keep 100% of every sale.',
              },
            ].map((item, i) => (
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

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Related Resources</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'All PLR Digital Products', href: '/plr-digital-products' },
              { label: 'PLR Canva Templates', href: '/plr-canva-templates' },
              { label: 'How to Sell Digital Products', href: '/sell-digital-products-online' },
              { label: 'What Are PLR Products?', href: '/blog/what-are-plr-digital-products' },
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
        <h2 className="text-3xl font-bold mb-4">Get 300,000+ PLR eBooks Today</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Plus 700+ Canva templates, social media packs, planners, and more. One payment, lifetime access.</p>
        <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Join PLR Digital Club — $197 →
        </Link>
      </section>

      <FAQSection items={FAQ_ITEMS} title="PLR eBooks — FAQs" />
    </>
  )
}
