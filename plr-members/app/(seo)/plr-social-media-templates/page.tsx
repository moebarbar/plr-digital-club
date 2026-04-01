import type { Metadata } from 'next'
import Link from 'next/link'
import { FAQSection } from '@/components/seo/FAQSection'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'PLR Social Media Templates — 500+ Done-For-You Social Media Packs',
  description: 'Get 500+ PLR social media templates for Instagram, Pinterest, TikTok & Facebook with resell rights. Rebrand and sell or use for your own business. From $197 lifetime.',
  alternates: { canonical: 'https://plrdigitalclub.com/plr-social-media-templates' },
  openGraph: {
    title: 'PLR Social Media Templates — 500+ Done-For-You Social Media Packs',
    description: '500+ PLR social media templates with resell rights. Rebrand, sell, keep 100% profit.',
    url: 'https://plrdigitalclub.com/plr-social-media-templates',
  },
}

const PLATFORMS = [
  { name: 'Instagram', formats: 'Square posts, stories, carousels, reels covers', count: '200+' },
  { name: 'Pinterest', formats: 'Standard pins, long pins, idea pins', count: '100+' },
  { name: 'Facebook', formats: 'Cover photos, post templates, event banners', count: '80+' },
  { name: 'TikTok', formats: 'Video covers, text overlay graphics, thumbnails', count: '60+' },
  { name: 'LinkedIn', formats: 'Post graphics, banner templates, infographics', count: '40+' },
  { name: 'Twitter / X', formats: 'Header banners, post graphics, quote cards', count: '30+' },
]

const FAQ_ITEMS = [
  { q: 'Can I sell PLR social media templates on Etsy?', a: 'Yes. Social media templates are among the best-selling digital products on Etsy. With PLR rights, you can rebrand the Canva templates and list them on Etsy, keeping 100% of every sale.' },
  { q: 'Can I use PLR social media templates for my own social media accounts?', a: 'Yes. You can use them for your own brand as well as sell them. Many members use the templates to run their own social media accounts and sell the same templates to clients.' },
  { q: 'What platforms do the social media templates cover?', a: 'PLR Digital Club social media templates cover Instagram (posts, stories, carousels), Pinterest, Facebook, TikTok, LinkedIn, and Twitter/X. All are editable Canva templates.' },
  { q: 'Can I offer social media templates as a service to clients?', a: 'Yes. You can use PLR social media templates as part of a social media management service, branding package, or done-for-you content service. This is a popular use case among freelancers.' },
  { q: 'Are the templates editable in Canva?', a: 'Yes, all social media templates are Canva-based and fully editable. You can change colours, fonts, logos, text, and images using a free Canva account.' },
]

export default function PLRSocialMediaTemplatesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'PLR Digital Products', url: 'https://plrdigitalclub.com/plr-digital-products' },
        { name: 'PLR Social Media Templates', url: 'https://plrdigitalclub.com/plr-social-media-templates' },
      ]} />

      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">Social Media Templates With PLR Rights</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            500+ PLR Social Media Templates — Sell or Use for Your Business
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Done-for-you Canva social media templates with full private label and resell rights. Instagram, Pinterest, TikTok, Facebook — every platform covered.
          </p>
          <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get All 500+ Templates — $197 Lifetime →
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">What Is Included in the Social Media Template Library?</h2>
          <div className="text-gray-600 space-y-4 text-lg mb-8">
            <p>
              PLR Digital Club includes over <strong>500 social media templates</strong> across all major platforms. Every template is built in Canva and fully editable — change the colours, fonts, logos, and text to match any brand in minutes.
            </p>
            <p>
              With PLR rights, you can rebrand these templates and <strong>sell them on Etsy</strong>, offer them as part of a social media package for clients, bundle them into a course, or use them to run your own social media accounts. The rights are flexible — personal and commercial use included.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLATFORMS.map((p) => (
              <div key={p.name} className="bg-[#F8F8FF] rounded-xl border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-[#1565C0] text-sm font-semibold mb-2">{p.count} templates</p>
                <p className="text-gray-500 text-xs">{p.formats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-6">3 Ways to Profit From PLR Social Media Templates</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Sell on Etsy',
                body: 'Rebrand a pack of 20–30 Canva social media templates and list on Etsy for $17–$37. Social media template bundles are consistently in the top-selling digital products on Etsy. With 500+ templates in your library, you can create dozens of niche-specific bundles.',
              },
              {
                title: 'Offer as a Client Service',
                body: 'Use PLR social media templates as a foundation for a done-for-you social media service. Offer monthly packages to local businesses or coaches — you get professionally designed templates and keep 100% of the service fee.',
              },
              {
                title: 'Build Your Own Brand\'s Social Media',
                body: 'Use the templates for your own business accounts. Consistent, professional social media presence increases trust and drives traffic. The templates are designed to be on-brand and adaptable to any niche or colour palette.',
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
              { label: 'PLR Canva Templates', href: '/plr-canva-templates' },
              { label: 'All PLR Digital Products', href: '/plr-digital-products' },
              { label: 'How to Sell Digital Products', href: '/sell-digital-products-online' },
              { label: 'PLR eBooks', href: '/plr-ebooks' },
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
        <h2 className="text-3xl font-bold mb-4">Get 500+ PLR Social Media Templates Today</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Plus 300+ Canva templates, 300,000+ eBooks, planners, and more. One payment, lifetime access.</p>
        <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Join PLR Digital Club — $197 →
        </Link>
      </section>

      <FAQSection items={FAQ_ITEMS} title="PLR Social Media Templates — FAQs" />
    </>
  )
}
