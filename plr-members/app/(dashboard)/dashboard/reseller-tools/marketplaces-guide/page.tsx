import Link from 'next/link'

const MARKETPLACES = [
  {
    name: 'Etsy',
    icon: '🛍️',
    color: 'bg-orange-50 border-orange-200',
    accent: 'text-orange-600',
    badge: 'bg-orange-100 text-orange-700',
    tagline: 'The #1 marketplace for digital downloads',
    fee: '6.5% transaction + $0.20 listing',
    difficulty: 2,
    traffic: 5,
    category: 'Marketplace',
    bestFor: ['Printables', 'Planners', 'Wall Art', 'Templates', 'Stickers'],
    pros: ['Massive built-in traffic', 'Buyers trust Etsy', 'Easy auto-delivery'],
    cons: ['High competition', 'Listing fees add up', 'Etsy controls your store'],
    url: 'https://etsy.com',
  },
  {
    name: 'Gumroad',
    icon: '🍬',
    color: 'bg-pink-50 border-pink-200',
    accent: 'text-pink-600',
    badge: 'bg-pink-100 text-pink-700',
    tagline: 'Creator-first platform, zero friction selling',
    fee: '10% on free plan / flat $10/mo for 0%',
    difficulty: 1,
    traffic: 2,
    category: 'Own Store',
    bestFor: ['eBooks', 'Courses', 'Templates', 'Bundles', 'Software'],
    pros: ['Dead simple setup', 'Instant payouts', 'Built-in audience features'],
    cons: ['You drive your own traffic', 'Higher fees on free plan'],
    url: 'https://gumroad.com',
  },
  {
    name: 'Payhip',
    icon: '💳',
    color: 'bg-blue-50 border-blue-200',
    accent: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    tagline: 'Sell anything digital with zero monthly fees',
    fee: '5% on free plan / $0 on paid plans from $29/mo',
    difficulty: 1,
    traffic: 2,
    category: 'Own Store',
    bestFor: ['eBooks', 'Printables', 'Courses', 'Memberships', 'Bundles'],
    pros: ['No monthly fee to start', 'Affiliate program built-in', 'Great for beginners'],
    cons: ['You drive your own traffic', 'Less brand recognition'],
    url: 'https://payhip.com',
  },
  {
    name: 'Stan Store',
    icon: '⭐',
    color: 'bg-yellow-50 border-yellow-200',
    accent: 'text-yellow-600',
    badge: 'bg-yellow-100 text-yellow-700',
    tagline: 'The all-in-one link-in-bio store for creators',
    fee: '$29–$99/mo flat, 0% transaction fees',
    difficulty: 1,
    traffic: 3,
    category: 'Creator Store',
    bestFor: ['Digital downloads', 'Courses', 'Coaching', 'Templates', 'Bundles'],
    pros: ['Built for social media creators', 'TikTok & Instagram native', 'Clean storefront'],
    cons: ['Monthly fee required', 'Best with existing social audience'],
    url: 'https://stan.store',
  },
  {
    name: 'TikTok Shop',
    icon: '🎵',
    color: 'bg-gray-50 border-gray-200',
    accent: 'text-gray-700',
    badge: 'bg-gray-100 text-gray-700',
    tagline: 'Sell directly inside the fastest-growing platform',
    fee: '2–8% commission depending on category',
    difficulty: 3,
    traffic: 5,
    category: 'Social Commerce',
    bestFor: ['Digital downloads', 'eBooks', 'Templates', 'Courses', 'Bundles'],
    pros: ['Viral potential is massive', 'In-app checkout', 'Huge Gen Z audience'],
    cons: ['Setup can be complex', 'Requires content creation', 'Digital products still evolving'],
    url: 'https://shop.tiktok.com',
  },
  {
    name: 'Amazon KDP',
    icon: '📚',
    color: 'bg-amber-50 border-amber-200',
    accent: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-700',
    tagline: 'World\'s largest bookstore — yours to publish on',
    fee: '35–70% royalty (you keep 35–70%)',
    difficulty: 2,
    traffic: 5,
    category: 'Marketplace',
    bestFor: ['Low-content books', 'Journals', 'Planners', 'Coloring books', 'Puzzle books'],
    pros: ['Enormous trust & traffic', 'Print-on-demand available', 'Passive once listed'],
    cons: ['Low-content niche is competitive', 'Slow to rank new listings'],
    url: 'https://kdp.amazon.com',
  },
  {
    name: 'Creative Market',
    icon: '🎨',
    color: 'bg-green-50 border-green-200',
    accent: 'text-green-600',
    badge: 'bg-green-100 text-green-700',
    tagline: 'Premium marketplace for design assets',
    fee: '30% commission, you keep 70%',
    difficulty: 3,
    traffic: 4,
    category: 'Marketplace',
    bestFor: ['Fonts', 'Canva templates', 'Graphics', 'UI kits', 'Logos'],
    pros: ['High-quality buyer base', 'Good average order value', 'Design-focused audience'],
    cons: ['Approval process required', 'High quality bar to list'],
    url: 'https://creativemarket.com',
  },
  {
    name: 'Shopify',
    icon: '🛒',
    color: 'bg-emerald-50 border-emerald-200',
    accent: 'text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
    tagline: 'Build your own branded digital product empire',
    fee: '$39/mo + 2.9% payment processing',
    difficulty: 4,
    traffic: 1,
    category: 'Own Store',
    bestFor: ['Any digital product', 'Bundles', 'Subscriptions', 'Courses', 'High-ticket offers'],
    pros: ['Full control over brand', 'Scale without limits', 'Powerful apps & integrations'],
    cons: ['You generate all traffic', 'Monthly cost', 'Requires more setup'],
    url: 'https://shopify.com',
  },
  {
    name: 'Whop',
    icon: '⚡',
    color: 'bg-purple-50 border-purple-200',
    accent: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-700',
    tagline: 'The fastest-growing platform for digital communities',
    fee: '3% transaction fee',
    difficulty: 2,
    traffic: 3,
    category: 'Community + Store',
    bestFor: ['Discord communities', 'Courses', 'Digital products', 'Memberships', 'Tools'],
    pros: ['Growing marketplace traffic', 'Community + product in one', 'Low fees'],
    cons: ['Still growing brand recognition', 'Community-first model'],
    url: 'https://whop.com',
  },
  {
    name: 'Teachers Pay Teachers',
    icon: '🎓',
    color: 'bg-red-50 border-red-200',
    accent: 'text-red-600',
    badge: 'bg-red-100 text-red-700',
    tagline: 'The go-to marketplace for educational resources',
    fee: '20–45% commission (lower on paid plans)',
    difficulty: 2,
    traffic: 4,
    category: 'Marketplace',
    bestFor: ['Worksheets', 'Lesson plans', 'Activity books', 'Flashcards', 'Educational games'],
    pros: ['Dedicated educator audience', 'High purchase intent', 'Recurring buyers'],
    cons: ['Education-niche only', 'Seasonal demand spikes'],
    url: 'https://teacherspayteachers.com',
  },
]

const CATEGORIES = ['All', 'Marketplace', 'Own Store', 'Creator Store', 'Social Commerce', 'Community + Store']

function DifficultyDots({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${i < level ? 'bg-[#1A1A4E]' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  )
}

function TrafficDots({ level, max = 5 }: { level: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${i < level ? 'bg-green-500' : 'bg-gray-200'}`}
        />
      ))}
    </div>
  )
}

export default function MarketplacesGuidePage() {
  return (
    <div className="max-w-5xl space-y-10">

      {/* Hero */}
      <div className="relative bg-[#1A1A4E] rounded-2xl p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full translate-x-20 -translate-y-20" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-[0.03] rounded-full -translate-x-16 translate-y-16" />
        <div className="relative">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            📖 Reseller Guide
          </span>
          <h1 className="text-3xl font-bold text-white mb-2">Where to Sell Your Digital Products</h1>
          <p className="text-blue-200 text-sm max-w-xl">
            A complete breakdown of the best marketplaces and platforms to list, sell, and scale your digital products — with fees, traffic ratings, and what sells best on each.
          </p>
          <div className="flex gap-6 mt-6">
            <div>
              <p className="text-2xl font-bold text-white">{MARKETPLACES.length}</p>
              <p className="text-blue-300 text-xs">Platforms covered</p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">5</p>
              <p className="text-blue-300 text-xs">Categories</p>
            </div>
            <div className="w-px bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">Free</p>
              <p className="text-blue-300 text-xs">To get started on most</p>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-6 text-xs text-gray-500 bg-gray-50 rounded-xl p-4 border border-gray-200">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-[#1A1A4E]" />
            <span className="w-2 h-2 rounded-full bg-[#1A1A4E]" />
            <span className="w-2 h-2 rounded-full bg-gray-200" />
            <span className="w-2 h-2 rounded-full bg-gray-200" />
            <span className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
          <span><strong>Setup difficulty</strong> — more dots = harder to set up</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="w-2 h-2 rounded-full bg-gray-200" />
            <span className="w-2 h-2 rounded-full bg-gray-200" />
          </div>
          <span><strong>Built-in traffic</strong> — more dots = more organic reach</span>
        </div>
      </div>

      {/* Marketplace cards */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-5">All Platforms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MARKETPLACES.map((m) => (
            <div
              key={m.name}
              className={`border rounded-2xl p-5 ${m.color} flex flex-col gap-4`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{m.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{m.name}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{m.tagline}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${m.badge}`}>
                  {m.category}
                </span>
              </div>

              {/* Metrics row */}
              <div className="flex gap-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Setup difficulty</p>
                  <DifficultyDots level={m.difficulty} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Built-in traffic</p>
                  <TrafficDots level={m.traffic} />
                </div>
              </div>

              {/* Fee */}
              <div className="bg-white/70 rounded-lg px-3 py-2">
                <span className="text-xs text-gray-500">Platform fee: </span>
                <span className="text-xs font-semibold text-gray-800">{m.fee}</span>
              </div>

              {/* Best for tags */}
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-1.5">Best for</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.bestFor.map((tag) => (
                    <span key={tag} className="text-xs bg-white/80 border border-white text-gray-700 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pros / Cons */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-green-700 mb-1">✓ Pros</p>
                  <ul className="space-y-0.5">
                    {m.pros.map((p) => (
                      <li key={p} className="text-xs text-gray-600">{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-red-600 mb-1">✗ Cons</p>
                  <ul className="space-y-0.5">
                    {m.cons.map((c) => (
                      <li key={c} className="text-xs text-gray-600">{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visit link */}
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-semibold flex items-center gap-1 ${m.accent} hover:underline`}
              >
                Visit {m.name} ↗
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Strategy section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-1">📍 Which Platform Should You Start With?</h2>
        <p className="text-sm text-gray-500 mb-5">Use this simple framework to pick your first platform.</p>
        <div className="space-y-4">
          {[
            {
              condition: 'You want traffic without creating content',
              recommendation: 'Start on Etsy or Creative Market — they have buyers searching right now.',
              icon: '🛍️',
            },
            {
              condition: 'You already have a social media audience',
              recommendation: 'Use Stan Store or Gumroad — link it in your bio and start selling instantly.',
              icon: '📱',
            },
            {
              condition: 'You create educational or kids content',
              recommendation: 'List on Teachers Pay Teachers — highly targeted buyers with strong purchase intent.',
              icon: '🎓',
            },
            {
              condition: 'You want to build a long-term brand',
              recommendation: 'Set up Shopify for full control, paired with Etsy for initial traffic.',
              icon: '🏗️',
            },
            {
              condition: 'You create low-content books or journals',
              recommendation: 'Amazon KDP is a must — print-on-demand + digital in one place.',
              icon: '📚',
            },
          ].map((item) => (
            <div key={item.condition} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">If {item.condition}…</p>
                <p className="text-sm text-gray-600 mt-0.5">{item.recommendation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro tips */}
      <div className="bg-[#1A1A4E] rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-4">💡 Pro Tips for Selling Digital Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'List on at least 2–3 platforms to diversify income and reduce risk.',
            'Use the mockups in the Reseller Resources section to create professional listings.',
            'Write keyword-rich titles and descriptions — SEO drives free traffic on Etsy and Amazon.',
            'Bundle products together to increase average order value.',
            'Offer a freebie to build your email list — then sell to them directly with 0% fees.',
            'Use PLR products from the library to test niches before creating your own.',
            'Consistently add new listings — algorithms reward active sellers.',
            'Re-brand and rename products so your store stands out from other resellers.',
          ].map((tip) => (
            <div key={tip} className="flex items-start gap-2">
              <span className="text-blue-400 text-sm flex-shrink-0 mt-0.5">→</span>
              <p className="text-blue-100 text-sm">{tip}</p>
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
