import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Browse All Products — 48 Categories, 1,000+ Digital Products',
  description:
    'Browse all 48 product categories with 1,000+ digital products. Full PLR & MRR rights — rebrand and resell. Canva templates, eBooks, courses, graphics and more.',
  alternates: { canonical: 'https://plrdigitalclub.com/products' },
  openGraph: {
    title: 'Browse All Products | PLR Digital Club',
    description:
      'Get instant access to 48 product categories with 1,000+ digital products. Full PLR & MRR rights included.',
    url: 'https://plrdigitalclub.com/products',
  },
  twitter: {
    title: 'Browse All Products | PLR Digital Club',
    description:
      'Get instant access to 48 product categories with 1,000+ digital products. Full PLR & MRR rights included.',
  },
}

const CATEGORIES = [
  { title: 'Canva Templates', description: 'Professional designs for social media, marketing, and branding' },
  { title: 'Notion Templates', description: 'Productivity systems, planners, and workspace templates' },
  { title: 'eBooks', description: 'Ready-to-sell digital books across popular niches' },
  { title: 'DFY Courses', description: 'Complete online courses ready to rebrand and sell' },
  { title: 'Journals & Planners', description: 'Printable planners, journals, and organizational tools' },
  { title: 'Social Media Templates', description: 'Eye-catching posts, stories, and ad templates' },
  { title: 'Logo Templates', description: 'Customizable logo designs for any business' },
  { title: 'PowerPoint Templates', description: 'Professional presentation templates' },
  { title: 'Fonts', description: 'Commercial-use fonts for all your projects' },
  { title: 'Icons', description: 'Icon packs for apps, websites, and designs' },
  { title: 'AI Graphics', description: 'AI-generated artwork and illustrations' },
  { title: 'Reels & Shorts', description: 'Vertical video templates for social media' },
  { title: 'Royalty-Free Images', description: 'High-quality stock photos for any use' },
  { title: 'Royalty-Free Videos', description: 'Stock video clips for your projects' },
  { title: 'Royalty-Free Audio', description: 'Music and sound effects for content creation' },
  { title: 'Lightroom Presets', description: 'Photo editing presets for stunning images' },
  { title: 'Photoshop Actions', description: 'One-click photo effects and enhancements' },
  { title: 'Photoshop Brushes', description: 'Creative brushes for digital art' },
  { title: 'Photoshop Overlays', description: 'Layer effects for stunning compositions' },
  { title: 'Photoshop Presets', description: 'Professional color grading presets' },
  { title: 'Illustrator Assets', description: 'Vector graphics and illustrations' },
  { title: 'SVG Assets', description: 'Scalable vector graphics for web and print' },
  { title: 'Editable Infographics', description: 'Visual data presentations and graphics' },
  { title: 'Excel Templates', description: 'Spreadsheets for business and personal use' },
  { title: 'Resume Templates', description: 'Professional CV and resume designs' },
  { title: 'Brochures & Flyers', description: 'Marketing materials ready to customize' },
  { title: 'Business & Legal Templates', description: 'Contracts, agreements, and business docs' },
  { title: 'SOP Templates', description: 'Standard operating procedures for businesses' },
  { title: 'Business Database', description: 'Lead lists and business contacts' },
  { title: 'Printable Wall Art', description: 'Digital art prints for home decor' },
  { title: 'Frame Artwork', description: 'Mockups and framed art templates' },
  { title: 'Coloring Books', description: 'Printable coloring pages and books' },
  { title: 'Die-Cut Stickers', description: 'Sticker designs for print-on-demand' },
  { title: 'T-Shirt & Mug Designs', description: 'Print-on-demand ready graphics' },
  { title: 'Mobile App Templates', description: 'App UI kits and design templates' },
  { title: 'WordPress Templates', description: 'Themes and plugins for WordPress' },
  { title: 'Video Editing Assets', description: 'Transitions, effects, and overlays' },
  { title: 'Niche Articles', description: 'Pre-written content for blogs and sites' },
  { title: 'AI Prompts Bundle', description: 'Curated prompts for AI tools' },
  { title: 'Faceless Guides', description: 'Content creation without showing face' },
  { title: 'Carousel Bundle', description: 'Instagram carousel templates' },
  { title: 'Bio Link Bundle', description: 'Link-in-bio page templates' },
  { title: 'Influencers Bundle', description: 'Content for social media influencers' },
  { title: 'Mega Gym Bundle', description: 'Fitness content and workout plans' },
  { title: 'Restaurants Bundle', description: 'Menu templates and restaurant graphics' },
  { title: 'CyberPunk Collection', description: 'Futuristic neon-style graphics' },
  { title: 'CorelDraw Templates', description: 'Vector designs for CorelDraw' },
  { title: 'Canva Mockups', description: 'Product mockup templates for Canva' },
]

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://plrdigitalclub.com' },
        { name: 'Products', url: 'https://plrdigitalclub.com/products' },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A1A4E] to-[#1565C0] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">48 Categories · 1,000+ Products</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Browse All Product Categories</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Get instant access to all of these categories with full PLR &amp; MRR rights. Rebrand, customise, and resell — keep 100% of the profits.
          </p>
          <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
            Get Instant Access — $197 →
          </Link>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <div key={cat.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#1565C0] hover:shadow-md transition-all">
                <h2 className="font-bold text-gray-900 mb-1 text-lg">{cat.title}</h2>
                <p className="text-gray-500 text-sm">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1A1A4E] text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Get Lifetime Access to Everything</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">All 48 categories. 1,000+ products. Full PLR &amp; MRR rights. New products added regularly.</p>
        <Link href="/checkout" className="inline-block bg-white text-[#1A1A4E] font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg">
          Get Instant Access — $197 →
        </Link>
        <p className="text-blue-300 text-sm mt-4">🛡️ 30-Day Money-Back Guarantee · Secure Checkout</p>
      </section>
    </>
  )
}
