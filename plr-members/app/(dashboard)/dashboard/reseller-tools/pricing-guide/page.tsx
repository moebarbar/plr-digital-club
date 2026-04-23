import Link from 'next/link'

const PRODUCT_PRICING = [
  {
    type: 'Printables',
    icon: '🖨️',
    low: 2,
    mid: 7,
    high: 15,
    sweet: '$3–$9',
    note: 'Buyers expect low prices. Volume is your friend — more listings = more sales.',
    color: 'bg-orange-50 border-orange-200',
    accent: 'text-orange-600',
    bar: 'bg-orange-400',
  },
  {
    type: 'Planners & Journals',
    icon: '📓',
    low: 5,
    mid: 12,
    high: 27,
    sweet: '$7–$15',
    note: 'Price higher if it\'s a full annual planner or a niche-specific system.',
    color: 'bg-yellow-50 border-yellow-200',
    accent: 'text-yellow-600',
    bar: 'bg-yellow-400',
  },
  {
    type: 'Canva Templates',
    icon: '🎨',
    low: 5,
    mid: 15,
    high: 35,
    sweet: '$9–$19',
    note: 'Bundles of 10–20 templates command higher prices. Single templates stay low.',
    color: 'bg-pink-50 border-pink-200',
    accent: 'text-pink-600',
    bar: 'bg-pink-400',
  },
  {
    type: 'Social Media Templates',
    icon: '📱',
    low: 7,
    mid: 17,
    high: 35,
    sweet: '$12–$22',
    note: 'Niche-specific packs (e.g. restaurant, fitness) sell for more than generic ones.',
    color: 'bg-purple-50 border-purple-200',
    accent: 'text-purple-600',
    bar: 'bg-purple-400',
  },
  {
    type: 'eBooks & Guides',
    icon: '📖',
    low: 7,
    mid: 19,
    high: 47,
    sweet: '$9–$27',
    note: 'Longer guides with actionable frameworks justify higher prices. Lead with value.',
    color: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-600',
    bar: 'bg-blue-400',
  },
  {
    type: 'Notion Templates',
    icon: '📐',
    low: 9,
    mid: 25,
    high: 59,
    sweet: '$15–$35',
    note: 'System-level dashboards (business OS, life planning) can hit $47–$97.',
    color: 'bg-indigo-50 border-indigo-200',
    accent: 'text-indigo-600',
    bar: 'bg-indigo-400',
  },
  {
    type: 'Digital Bundles',
    icon: '📦',
    low: 17,
    mid: 37,
    high: 97,
    sweet: '$27–$47',
    note: 'Bundle 5–10 products together. Perceived value is the sum of individual parts.',
    color: 'bg-green-50 border-green-200',
    accent: 'text-green-600',
    bar: 'bg-green-400',
  },
  {
    type: 'AI Prompt Packs',
    icon: '🤖',
    low: 5,
    mid: 14,
    high: 29,
    sweet: '$7–$17',
    note: 'Large packs (1,000+ prompts) justify higher prices. Quality over quantity matters.',
    color: 'bg-teal-50 border-teal-200',
    accent: 'text-teal-600',
    bar: 'bg-teal-400',
  },
  {
    type: 'Stock Photos & Videos',
    icon: '📸',
    low: 5,
    mid: 17,
    high: 49,
    sweet: '$9–$27',
    note: 'Niche stock packs (e.g. food, travel, fitness) outperform generic collections.',
    color: 'bg-red-50 border-red-200',
    accent: 'text-red-600',
    bar: 'bg-red-400',
  },
  {
    type: 'Courses & Education',
    icon: '🎓',
    low: 27,
    mid: 97,
    high: 297,
    sweet: '$47–$147',
    note: 'Price based on the result the student achieves, not hours of content.',
    color: 'bg-amber-50 border-amber-200',
    accent: 'text-amber-600',
    bar: 'bg-amber-400',
  },
]

const STRATEGIES = [
  {
    name: 'Starter Pricing',
    icon: '🚀',
    description: 'Launch at a lower price to generate your first reviews and sales velocity.',
    when: 'Brand new listing with 0 reviews',
    example: 'List at $4.99 instead of $9.99 for the first 10 sales, then raise the price.',
    color: 'border-blue-200 bg-blue-50',
    accent: 'text-blue-700',
  },
  {
    name: 'Value-Based Pricing',
    icon: '💎',
    description: 'Price based on the outcome or transformation the product delivers, not the time it took to make.',
    when: 'Products that solve a specific, high-value problem',
    example: 'A "30-day business launch planner" is worth more than a generic weekly planner — even if the file is the same size.',
    color: 'border-purple-200 bg-purple-50',
    accent: 'text-purple-700',
  },
  {
    name: 'Competitive Pricing',
    icon: '🔍',
    description: 'Research what similar products sell for and position just above, at, or slightly below.',
    when: 'Saturated niches like basic printables or common templates',
    example: 'Search Etsy for your product type, filter by "Most Relevant", note the top sellers\' prices.',
    color: 'border-green-200 bg-green-50',
    accent: 'text-green-700',
  },
  {
    name: 'Bundle Pricing',
    icon: '📦',
    description: 'Combine multiple products into one offer priced lower than buying individually.',
    when: 'You have multiple related products in your library',
    example: '5 individual templates at $9 each = $45. Bundle them for $27 — buyers feel they\'re saving $18.',
    color: 'border-orange-200 bg-orange-50',
    accent: 'text-orange-700',
  },
  {
    name: 'Tiered Pricing',
    icon: '📊',
    description: 'Offer 2–3 versions of your product at different price points.',
    when: 'When you can add clear extra value at higher tiers',
    example: 'Basic: $9 (5 templates) / Pro: $19 (15 templates) / Ultimate: $39 (all templates + bonuses).',
    color: 'border-teal-200 bg-teal-50',
    accent: 'text-teal-700',
  },
]

const PSYCHOLOGY = [
  {
    title: 'Charm Pricing',
    icon: '🔮',
    tip: 'End prices in .99, .97, or .95 — never round numbers. $9.99 feels significantly cheaper than $10 to buyers.',
  },
  {
    title: 'Price Anchoring',
    icon: '⚓',
    tip: 'Show a higher "original" price crossed out next to your sale price. It makes your current price feel like a deal.',
  },
  {
    title: 'The Rule of 3',
    icon: '3️⃣',
    tip: 'Offer 3 tiers — Basic, Pro, Premium. Most buyers pick the middle option. Design your middle tier to be your best margin.',
  },
  {
    title: 'Decoy Pricing',
    icon: '🦆',
    tip: 'Place a high-priced option next to your target price. The expensive option makes the middle one look like the obvious choice.',
  },
  {
    title: 'Perceived Value',
    icon: '✨',
    tip: 'Add "bonus" items to your listing (extra templates, guide, checklist). Higher item count = higher perceived value = higher price justified.',
  },
  {
    title: 'Social Proof Pricing',
    icon: '⭐',
    tip: 'Once you have 10+ reviews, raise your price. Reviews are proof of value and buyers trust popular products more.',
  },
]

const MISTAKES = [
  {
    mistake: 'Pricing too low "to get sales"',
    fix: 'Low prices signal low quality. Start at a fair price, offer a launch discount instead.',
    icon: '❌',
  },
  {
    mistake: 'Never testing your prices',
    fix: 'Run a 2-week test at a higher price. If conversion holds, keep it. Most sellers leave money on the table.',
    icon: '🧪',
  },
  {
    mistake: 'Ignoring platform fees',
    fix: 'Calculate your take-home after fees. A $10 Etsy sale = ~$9.30 after listing + transaction fees. Price accordingly.',
    icon: '💸',
  },
  {
    mistake: 'Copying competitors blindly',
    fix: 'Just because others charge $5 doesn\'t mean you should. Add unique value and charge more.',
    icon: '🐑',
  },
  {
    mistake: 'Pricing the same across all platforms',
    fix: 'Fee structures differ. Your Etsy price should account for 6.5% + $0.20. Your own store price can be lower.',
    icon: '🗂️',
  },
  {
    mistake: 'Dropping prices when sales slow',
    fix: 'Slow sales usually mean a traffic or listing problem, not a price problem. Fix the SEO first.',
    icon: '📉',
  },
]

function PriceBar({ low, mid, high }: { low: number; mid: number; high: number }) {
  const max = high
  return (
    <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="absolute h-full bg-gradient-to-r from-green-300 via-yellow-300 to-red-300 rounded-full"
        style={{ left: `${(low / max) * 60}%`, width: `${((high - low) / max) * 80}%` }}
      />
    </div>
  )
}

export default function PricingGuidePage() {
  return (
    <div className="max-w-5xl space-y-10">

      {/* Hero */}
      <div className="relative bg-[#1A1A4E] rounded-2xl p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full translate-x-20 -translate-y-20" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-[0.03] rounded-full -translate-x-16 translate-y-16" />
        <div className="relative">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            💰 Pricing Guide
          </span>
          <h1 className="text-3xl font-bold text-white mb-2">How to Price Your Digital Products</h1>
          <p className="text-blue-200 text-sm max-w-xl">
            Price too low and you undervalue your work. Price too high and buyers hesitate. This guide gives you the exact ranges, strategies, and psychology to price with confidence and maximise your profit.
          </p>
          <div className="flex gap-6 mt-6">
            <div>
              <p className="text-2xl font-bold text-white">{PRODUCT_PRICING.length}</p>
              <p className="text-blue-300 text-xs">Product types covered</p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">{STRATEGIES.length}</p>
              <p className="text-blue-300 text-xs">Pricing strategies</p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">{MISTAKES.length}</p>
              <p className="text-blue-300 text-xs">Mistakes to avoid</p>
            </div>
          </div>
        </div>
      </div>

      {/* Golden Rule */}
      <div className="border-l-4 border-[#1565C0] bg-blue-50 rounded-xl p-5">
        <p className="text-sm font-bold text-[#1A1A4E] mb-1">The Golden Rule of Digital Product Pricing</p>
        <p className="text-sm text-gray-700">
          Price based on the <strong>value the buyer receives</strong>, not the time it took you to make it. A 5-page checklist that saves someone 10 hours of research is worth far more than $2. Think about the outcome, not the effort.
        </p>
      </div>

      {/* Price ranges by product type */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Price Ranges by Product Type</h2>
        <p className="text-sm text-gray-500 mb-5">Market-tested ranges across major platforms like Etsy, Gumroad, and Payhip.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRODUCT_PRICING.map((p) => (
            <div key={p.type} className={`border rounded-2xl p-4 ${p.color}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{p.icon}</span>
                  <span className="font-semibold text-gray-900 text-sm">{p.type}</span>
                </div>
                <span className={`text-sm font-bold ${p.accent}`}>{p.sweet} sweet spot</span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-gray-500 w-8">${p.low}</span>
                <div className="flex-1">
                  <PriceBar low={p.low} mid={p.mid} high={p.high} />
                </div>
                <span className="text-xs text-gray-500 w-8 text-right">${p.high}</span>
              </div>
              <p className="text-xs text-gray-600 mt-2">{p.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing strategies */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Pricing Strategies That Work</h2>
        <p className="text-sm text-gray-500 mb-5">Choose the right strategy for your product and where you are in your selling journey.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STRATEGIES.map((s) => (
            <div key={s.name} className={`border rounded-2xl p-5 ${s.color}`}>
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className={`font-bold text-sm ${s.accent}`}>{s.name}</h3>
                  <p className="text-sm text-gray-700 mt-0.5">{s.description}</p>
                </div>
              </div>
              <div className="bg-white/60 rounded-lg p-3 space-y-2">
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">When to use</span>
                  <p className="text-xs text-gray-700 mt-0.5">{s.when}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Example</span>
                  <p className="text-xs text-gray-700 mt-0.5 italic">"{s.example}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing psychology */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">The Psychology of Pricing</h2>
        <p className="text-sm text-gray-500 mb-5">Small tweaks that make buyers more likely to click "Add to Cart".</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PSYCHOLOGY.map((p) => (
            <div key={p.title} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl">
              <span className="text-2xl flex-shrink-0">{p.icon}</span>
              <div>
                <p className="text-sm font-bold text-gray-900">{p.title}</p>
                <p className="text-sm text-gray-600 mt-0.5">{p.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick calculator cheatsheet */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-1">💡 Platform Fee Cheat Sheet</h2>
        <p className="text-sm text-gray-500 mb-4">Know your take-home before you set your price.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-2 pr-4 text-gray-500 font-semibold text-xs">Platform</th>
                <th className="text-right py-2 px-4 text-gray-500 font-semibold text-xs">List at $10</th>
                <th className="text-right py-2 px-4 text-gray-500 font-semibold text-xs">List at $25</th>
                <th className="text-right py-2 px-4 text-gray-500 font-semibold text-xs">List at $50</th>
                <th className="text-right py-2 pl-4 text-gray-500 font-semibold text-xs">Fee summary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { name: 'Etsy', f10: '$9.10', f25: '$23.10', f50: '$46.55', fee: '6.5% + $0.20 listing' },
                { name: 'Gumroad (free)', f10: '$9.00', f25: '$22.50', f50: '$45.00', fee: '10% flat' },
                { name: 'Gumroad (paid)', f10: '$9.71', f25: '$24.28', f50: '$48.55', fee: '$10/mo + 2.9%' },
                { name: 'Payhip (free)', f10: '$9.50', f25: '$23.75', f50: '$47.50', fee: '5% flat' },
                { name: 'Creative Market', f10: '$7.00', f25: '$17.50', f50: '$35.00', fee: '30% commission' },
                { name: 'Stan Store', f10: '$9.71', f25: '$24.28', f50: '$48.55', fee: '$29/mo flat + 2.9%' },
                { name: 'Shopify', f10: '$9.71', f25: '$24.28', f50: '$48.55', fee: '$39/mo + 2.9%' },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="py-2.5 pr-4 font-medium text-gray-800">{row.name}</td>
                  <td className="py-2.5 px-4 text-right text-green-700 font-semibold">{row.f10}</td>
                  <td className="py-2.5 px-4 text-right text-green-700 font-semibold">{row.f25}</td>
                  <td className="py-2.5 px-4 text-right text-green-700 font-semibold">{row.f50}</td>
                  <td className="py-2.5 pl-4 text-right text-gray-500 text-xs">{row.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-3">* Figures are approximate and exclude payment processor fees (typically 2.9% + $0.30 via Stripe/PayPal).</p>
      </div>

      {/* Common mistakes */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Pricing Mistakes to Avoid</h2>
        <p className="text-sm text-gray-500 mb-5">These mistakes cost sellers hundreds in lost revenue every month.</p>
        <div className="space-y-3">
          {MISTAKES.map((m) => (
            <div key={m.mistake} className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl">
              <span className="text-xl flex-shrink-0">{m.icon}</span>
              <div>
                <p className="text-sm font-bold text-gray-900">{m.mistake}</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  <span className="font-semibold text-green-700">Fix: </span>{m.fix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final tip */}
      <div className="bg-[#1A1A4E] rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-4">🎯 Your Pricing Action Plan</h2>
        <div className="space-y-3">
          {[
            'Research 5–10 competitor listings on your chosen platform and note their prices.',
            'Pick a price in the "sweet spot" range for your product type above.',
            'Calculate your take-home after platform fees using the cheat sheet.',
            'Launch with a small introductory discount to get your first 5 reviews.',
            'Once you hit 10+ reviews, raise your price 20–30% and monitor conversion.',
            'Test a bundle offer combining 3–5 related products for 2–3× the single price.',
            'Never drop prices when sales slow — fix your listing SEO and thumbnail instead.',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-blue-100 text-sm">{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Back link */}
      <Link
        href="/dashboard/reseller-tools"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1A1A4E] font-medium"
      >
        ← Back to Reseller Tools
      </Link>
    </div>
  )
}
