import Link from 'next/link'

export function PublicNav() {
  return (
    <header className="bg-[#1A1A4E] text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">⚡ PLR Digital Club</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-blue-200">
          <Link href="/plr-digital-products" className="hover:text-white transition-colors">PLR Products</Link>
          <Link href="/mrr-digital-products" className="hover:text-white transition-colors">MRR Products</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/login" className="hover:text-white transition-colors">Login</Link>
        </nav>
        <Link
          href="/"
          className="bg-[#1565C0] hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Get Access — $197
        </Link>
      </div>
    </header>
  )
}

export function PublicFooter() {
  return (
    <footer className="bg-[#1A1A4E] text-blue-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-bold text-white mb-3">⚡ PLR Digital Club</p>
            <p className="text-sm leading-relaxed">1,000+ PLR & MRR digital products with full resell rights. One payment, lifetime access.</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Products</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/plr-digital-products" className="hover:text-white">PLR Digital Products</Link></li>
              <li><Link href="/mrr-digital-products" className="hover:text-white">MRR Digital Products</Link></li>
              <li><Link href="/plr-ebooks" className="hover:text-white">PLR eBooks</Link></li>
              <li><Link href="/plr-canva-templates" className="hover:text-white">Canva Templates</Link></li>
              <li><Link href="/plr-social-media-templates" className="hover:text-white">Social Media Templates</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Resources</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sell-digital-products-online" className="hover:text-white">How to Sell Digital Products</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/best-plr-sites-2026" className="hover:text-white">Best PLR Sites 2026</Link></li>
              <li><Link href="/blog/plr-vs-mrr-difference" className="hover:text-white">PLR vs MRR Guide</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Account</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Join Now — $197</Link></li>
              <li><Link href="/login" className="hover:text-white">Member Login</Link></li>
              <li><a href="mailto:support@plrdigitalclub.com" className="hover:text-white">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} PLR Digital Club. All rights reserved.</p>
          <div className="flex gap-4">
            <span>🔒 Secure Payments via Stripe</span>
            <span>✓ Lifetime Access Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
