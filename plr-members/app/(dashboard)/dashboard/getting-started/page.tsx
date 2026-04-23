const LICENSES = [
  {
    name: 'Personal Use License',
    icon: '👤',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    description:
      'With the personal use license, you have the right to use the digital products for your own personal needs. You can enjoy the products for yourself but cannot resell or distribute them to others.',
    allowed: ['Use products for personal projects', 'Customise for your own use'],
    notAllowed: ['Resell to customers', 'Distribute or share publicly'],
  },
  {
    name: 'Reseller License',
    icon: '💼',
    color: 'bg-green-50 border-green-200',
    badge: 'bg-green-100 text-green-700',
    description:
      'The reseller license grants you the exciting opportunity to resell the digital products to your customers. Promote and sell the products while keeping 100% of the profits for yourself.',
    allowed: [
      'Sell products to end customers',
      'Keep 100% of revenue',
      'Brand and customise products as your own',
      'Use as lead magnets or bonuses',
      'Use on client projects',
    ],
    notAllowed: ['Sell the resell rights themselves', 'Allow buyers to resell'],
  },
  {
    name: 'Master Resell Rights (MRR)',
    icon: '👑',
    color: 'bg-purple-50 border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
    description:
      'With Master Resell Rights you not only sell the products, but you can also sell the resell rights to your customers — meaning they can sell the products themselves. Note: MRR are not infinitely transferable; your customers may resell to end users only.',
    allowed: [
      'Sell products to end customers',
      'Sell resell rights to your customers',
      'Create an additional income stream',
      'Keep 100% of revenue',
    ],
    notAllowed: [
      'Transfer full MRR rights beyond one level',
      'Allow your customers to pass MRR to their customers',
    ],
  },
]

const FILE_TYPES = [
  {
    ext: '.zip',
    icon: '🗜️',
    color: 'bg-yellow-50 border-yellow-200',
    description:
      'Compressed archives containing one or more digital files or folders. The most common format for digital product delivery.',
    tools: [
      { name: 'Windows', note: 'Right-click → Extract All (built-in)' },
      { name: 'Mac', note: 'Double-click to extract (built-in)' },
      { name: '7-Zip', note: 'Free, highly recommended for Windows' },
    ],
  },
  {
    ext: '.rar',
    icon: '📦',
    color: 'bg-orange-50 border-orange-200',
    description:
      'A compressed archive similar to .zip but with better compression. Requires dedicated software to open on most systems.',
    tools: [
      { name: 'WinRAR', note: 'winrar.com — Windows & Mac' },
      { name: 'WinZip', note: 'winzip.com — Windows & Mac' },
      { name: 'The Unarchiver', note: 'Free on Mac App Store' },
    ],
  },
]

const STEPS = [
  {
    step: 1,
    title: 'Download the file',
    detail: 'Click "Access Product" on any product in the library. You\'ll be taken to the download link.',
    icon: '⬇️',
  },
  {
    step: 2,
    title: 'Install extraction software',
    detail: 'If you don\'t have one, download 7-Zip (free) for Windows or use the Mac built-in extractor.',
    icon: '⚙️',
  },
  {
    step: 3,
    title: 'Extract the files',
    detail: 'Right-click the downloaded .zip or .rar file → select "Extract" or "Extract Here".',
    icon: '📂',
  },
  {
    step: 4,
    title: 'Access your products',
    detail: 'Once extracted, open the folder. You\'ll find all files ready to use, customise, or resell.',
    icon: '✅',
  },
]

export default function GettingStartedPage() {
  return (
    <div className="max-w-3xl space-y-10">

      {/* Hero */}
      <div className="relative bg-[#1A1A4E] rounded-2xl p-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full translate-x-20 -translate-y-20" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-[0.03] rounded-full -translate-x-16 translate-y-16" />
        <div className="relative">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            🎉 Welcome
          </span>
          <h1 className="text-3xl font-bold text-white mb-3">Welcome to PLR Digital Club</h1>
          <p className="text-blue-200 text-sm leading-relaxed max-w-xl">
            Congratulations on becoming a member of our exclusive community. You now have access to a wide range of digital products that you can resell and profit from. Whether you're an aspiring entrepreneur or an established marketer, this platform is designed to empower you with the tools and resources you need to grow your online business.
          </p>
        </div>
      </div>

      {/* Important notice */}
      <div className="flex gap-4 bg-amber-50 border border-amber-200 rounded-xl p-5">
        <span className="text-2xl flex-shrink-0">⚠️</span>
        <div>
          <p className="text-sm font-bold text-amber-800">Important Notice</p>
          <p className="text-sm text-amber-700 mt-1">
            An <strong>active membership</strong> is necessary to access, resell, or distribute any products. Any infringement of copyright will result in serious consequences. We are committed to safeguarding the rights of our creators and all members.
          </p>
        </div>
      </div>

      {/* License types */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Types of Licenses</h2>
        <p className="text-sm text-gray-500 mb-5">Understand what you can and cannot do with each license type.</p>
        <div className="space-y-4">
          {LICENSES.map((license) => (
            <div key={license.name} className={`border rounded-2xl p-5 ${license.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{license.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-900">{license.name}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${license.badge}`}>
                      {license.icon === '👑' ? 'MRR' : license.icon === '💼' ? 'Reseller' : 'Personal'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5">{license.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-white/60 rounded-xl p-3">
                  <p className="text-xs font-bold text-green-700 mb-2">✓ Allowed</p>
                  <ul className="space-y-1">
                    {license.allowed.map((item) => (
                      <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/60 rounded-xl p-3">
                  <p className="text-xs font-bold text-red-600 mb-2">✗ Not Allowed</p>
                  <ul className="space-y-1">
                    {license.notAllowed.map((item) => (
                      <li key={item} className="text-xs text-gray-700 flex items-start gap-1.5">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* File types */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Types of Files You'll Receive</h2>
        <p className="text-sm text-gray-500 mb-5">Digital products are delivered as compressed files. Here's how to open them.</p>
        <div className="space-y-4">
          {FILE_TYPES.map((file) => (
            <div key={file.ext} className={`border rounded-2xl p-5 ${file.color}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{file.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{file.ext} Files</h3>
                  <p className="text-sm text-gray-600 mt-0.5">{file.description}</p>
                </div>
              </div>
              <div className="bg-white/60 rounded-xl p-3">
                <p className="text-xs font-bold text-gray-600 mb-2">Recommended tools to open {file.ext} files:</p>
                <ul className="space-y-1">
                  {file.tools.map((tool) => (
                    <li key={tool.name} className="text-xs text-gray-700 flex items-start gap-1.5">
                      <span className="font-semibold">{tool.name}:</span>
                      <span>{tool.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to extract */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-1">How to Extract Your Files</h2>
        <p className="text-sm text-gray-500 mb-5">Follow these 4 simple steps after downloading any product.</p>
        <div className="space-y-4">
          {STEPS.map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1A1A4E] text-white flex items-center justify-center text-base">
                {s.icon}
              </div>
              <div className="pt-1">
                <p className="text-sm font-bold text-gray-900">Step {s.step}: {s.title}</p>
                <p className="text-sm text-gray-600 mt-0.5">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-[#1A1A4E] rounded-2xl p-6">
        <h2 className="text-lg font-bold text-white mb-4">🚀 What to Do Next</h2>
        <div className="space-y-3">
          {[
            { label: 'Browse the Product Library', href: '/library', desc: 'Explore 1,000+ ready-to-sell digital products.' },
            { label: 'Check the Reseller Tools', href: '/dashboard/reseller-tools', desc: 'Get sales copy, email swipes, and promotional captions.' },
            { label: 'Read the Marketplaces Guide', href: '/dashboard/reseller-tools/marketplaces-guide', desc: 'Learn exactly where and how to sell your products.' },
            { label: 'Read the Pricing Guide', href: '/dashboard/reseller-tools/pricing-guide', desc: 'Understand how to price products to maximise your profit.' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center justify-between p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
            >
              <div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-xs text-blue-300 mt-0.5">{item.desc}</p>
              </div>
              <span className="text-blue-300 group-hover:text-white transition-colors">→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Support */}
      <div className="bg-blue-50 border-l-4 border-[#1565C0] rounded-xl p-5">
        <p className="font-semibold text-[#1A1A4E] text-sm">Need help or have questions?</p>
        <p className="text-gray-600 text-sm mt-1">
          Email us at{' '}
          <a href="mailto:support@plrdigitalclub.com" className="text-[#1565C0] hover:underline font-medium">
            support@plrdigitalclub.com
          </a>{' '}
          and we'll get back to you within 24 hours. Happy reselling — the PLR Digital Club Team 🎉
        </p>
      </div>
    </div>
  )
}
