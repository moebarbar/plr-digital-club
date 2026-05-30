import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Contact PLR Digital Club — Support & Help',
  description: 'Get in touch with the PLR Digital Club team. Email our support team for help with your account, products, billing, or general questions.',
  alternates: { canonical: 'https://plrdigitalclub.com/contact' },
  openGraph: {
    title: 'Contact PLR Digital Club',
    description: 'Questions about PLR Digital Club? Contact our support team — we typically reply within one business day.',
    url: 'https://plrdigitalclub.com/contact',
  },
}

const SUPPORT_EMAIL = 'support@plrdigitalclub.com'

const TOPICS = [
  { title: 'Account & access', body: 'Trouble logging in or accessing your products? Email us and we will get you back in.' },
  { title: 'Billing & refunds', body: 'Questions about your payment or our refund policy? We are happy to help.' },
  { title: 'Using the products', body: 'Need guidance on rebranding or where to sell? Our team can point you in the right direction.' },
  { title: 'Partnerships', body: 'Interested in collaborating or featuring PLR Digital Club? Reach out with the details.' },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'Contact', url: 'https://plrdigitalclub.com/contact' },
      ]} />

      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">We&apos;d Love to Hear From You</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Have a question about your account, our products, or getting started? Our support team typically replies within one business day.
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
          >
            Email {SUPPORT_EMAIL} →
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#1A1A4E] mb-8 text-center">How Can We Help?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TOPICS.map((t) => (
              <div key={t.title} className="bg-[#F8F8FF] rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-[#1A1A4E] mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F8FF]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#1A1A4E] mb-4">Before You Email</h2>
          <p className="text-gray-600 mb-6">
            Many common questions are answered in our guides and product pages. You might find what you need faster here:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Blog & Guides', href: '/blog' },
              { label: 'What Are PLR Products?', href: '/blog/what-are-plr-digital-products' },
              { label: 'Browse Products', href: '/plr-digital-products' },
              { label: 'About Us', href: '/about' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="bg-white border border-gray-200 text-[#1565C0] text-sm font-medium px-4 py-2 rounded-full hover:border-[#1565C0] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
