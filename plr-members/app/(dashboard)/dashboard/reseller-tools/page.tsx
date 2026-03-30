'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const SALES_COPY = `🚀 Introducing PLR Digital Club — Your All-In-One Digital Product Library!

Get lifetime access to 1,000+ done-for-you digital products with full resell rights.

✅ Canva templates
✅ Planners & journals
✅ eBooks & guides
✅ Social media templates
✅ Notion templates
✅ Logo & branding kits
✅ And so much more!

One payment. Lifetime access. Unlimited resell rights.

👉 Join now: [YOUR AFFILIATE LINK]`

const EMAIL_SWIPE = `Subject: I just found 1,000+ products you can sell today...

Hey [Name],

I wanted to share something that's been a game changer for my digital product business.

It's called PLR Digital Club — a members-only library with over 1,000 done-for-you digital products you can resell and keep 100% of the profits.

We're talking:
- Canva templates
- Planners & eBooks
- Social media kits
- Notion dashboards
- And new products every single week

It's a one-time payment for lifetime access. No monthly fees.

Here's your link: [YOUR AFFILIATE LINK]

Talk soon,
[Your Name]`

const SOCIAL_CAPTIONS = [
  {
    platform: 'Instagram / Facebook',
    caption: `Want to sell digital products but don't know what to create? ✨\n\nPLR Digital Club gives you 1,000+ ready-made products with full resell rights.\n\nOne payment. Lifetime access. Start selling today.\n\n🔗 Link in bio`,
  },
  {
    platform: 'TikTok / Reels',
    caption: `POV: You just unlocked 1,000+ digital products you can resell and keep ALL the profits 💸\n\nPLR Digital Club = the cheat code for digital sellers\n\n#digitalproducts #sidehustle #PLR #passiveincome`,
  },
  {
    platform: 'Twitter / X',
    caption: `Stop creating from scratch.\n\nPLR Digital Club = 1,000+ digital products with full resell rights.\n\nOne-time fee. Lifetime access. New products added weekly.\n\n→ [YOUR LINK]`,
  },
]

function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
        copied
          ? 'bg-green-100 text-green-700'
          : 'bg-gray-100 text-gray-600 hover:bg-[#1A1A4E] hover:text-white'
      }`}
    >
      {copied ? '✅ Copied!' : label}
    </button>
  )
}

export default function ResellerToolsPage() {
  const affiliateUrl = typeof window !== 'undefined'
    ? `${window.location.origin}?ref=member`
    : 'https://plrdigitalclub.com?ref=member'

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reseller Tools 🔧</h1>
        <p className="text-gray-500 text-sm mt-1">
          Everything you need to start promoting and earning.
        </p>
      </div>

      {/* Your rights */}
      <Card>
        <div className="flex items-start gap-4">
          <span className="text-3xl">📋</span>
          <div>
            <h2 className="font-bold text-gray-900 mb-2">Your Resell Rights</h2>
            <ul className="space-y-1 text-sm text-gray-600">
              {[
                'Sell all products in the library individually or as bundles',
                'Keep 100% of the revenue from your sales',
                'Customise and brand products as your own',
                'Use products on client projects',
                'Give products away as lead magnets or bonuses',
              ].map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {right}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex gap-2 flex-wrap">
              <Badge variant="success">Full Resell Rights</Badge>
              <Badge variant="info">Lifetime Access</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Affiliate link */}
      <Card>
        <h2 className="font-bold text-gray-900 mb-3">Your Referral Link</h2>
        <p className="text-sm text-gray-500 mb-3">
          Share this link to refer new members. Replace the placeholder with your own tracking if needed.
        </p>
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
          <code className="flex-1 text-sm text-gray-700 truncate">{affiliateUrl}</code>
          <CopyButton text={affiliateUrl} label="Copy Link" />
        </div>
      </Card>

      {/* Sales copy */}
      <Card>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">Sales Copy</h2>
          <CopyButton text={SALES_COPY} label="Copy All" />
        </div>
        <p className="text-sm text-gray-500 mb-3">Paste this into any sales page, landing page, or post.</p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-700 whitespace-pre-wrap leading-relaxed font-sans">
          {SALES_COPY}
        </pre>
      </Card>

      {/* Email swipe */}
      <Card>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">Email Swipe File</h2>
          <CopyButton text={EMAIL_SWIPE} label="Copy Email" />
        </div>
        <p className="text-sm text-gray-500 mb-3">Ready-to-send email to your list — just fill in your link.</p>
        <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-700 whitespace-pre-wrap leading-relaxed font-sans">
          {EMAIL_SWIPE}
        </pre>
      </Card>

      {/* Social captions */}
      <Card>
        <h2 className="font-bold text-gray-900 mb-4">Social Media Captions</h2>
        <div className="space-y-4">
          {SOCIAL_CAPTIONS.map((item) => (
            <div key={item.platform} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  {item.platform}
                </span>
                <CopyButton text={item.caption} />
              </div>
              <pre className="text-xs text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
                {item.caption}
              </pre>
            </div>
          ))}
        </div>
      </Card>

      {/* Getting started checklist */}
      <Card>
        <h2 className="font-bold text-gray-900 mb-4">Getting Started Checklist</h2>
        <ol className="space-y-3 text-sm text-gray-600">
          {[
            'Browse the Product Library and download 3–5 products you love',
            'Create a simple sales page or Etsy/Gumroad listing for one product',
            'Share the sales post caption on your social media',
            'Send the email swipe to your list',
            'Reinvest early profits into paid ads to scale',
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1A1A4E] text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </Card>

      {/* Support */}
      <div className="bg-blue-50 border-l-4 border-[#1565C0] rounded-xl p-5">
        <p className="font-semibold text-[#1A1A4E] text-sm">Need help or have questions?</p>
        <p className="text-gray-600 text-sm mt-1">
          Email us at{' '}
          <a href="mailto:support@plrdigitalclub.com" className="text-[#1565C0] hover:underline font-medium">
            support@plrdigitalclub.com
          </a>{' '}
          and we'll get back to you within 24 hours.
        </p>
      </div>
    </div>
  )
}
