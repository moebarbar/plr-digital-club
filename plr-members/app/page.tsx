import type { Metadata } from 'next'
import CheckoutPage from './(public)/page'

export const metadata: Metadata = {
  title: '1,000+ PLR & MRR Digital Products — Lifetime Access | PLR Digital Club',
  description: 'Get lifetime access to 1,000+ PLR & MRR digital products — Canva templates, eBooks, courses, social media packs & more. Rebrand, resell, keep 100% profit. One payment, forever.',
  alternates: {
    canonical: 'https://plrdigitalclub.com',
  },
  openGraph: {
    title: '1,000+ PLR & MRR Digital Products — Lifetime Access',
    description: 'Get lifetime access to 1,000+ done-for-you digital products with full resell rights. One payment, forever.',
    url: 'https://plrdigitalclub.com',
  },
}

export default function HomePage() {
  return <CheckoutPage />
}
