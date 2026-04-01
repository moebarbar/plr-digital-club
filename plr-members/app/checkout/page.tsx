import type { Metadata } from 'next'
import CheckoutForm from '../(public)/page'

export const metadata: Metadata = {
  title: 'Get Lifetime Access — PLR Digital Club',
  description: 'Join PLR Digital Club and get instant access to 1,000+ PLR & MRR digital products. One payment, lifetime access.',
  alternates: { canonical: 'https://plrdigitalclub.com/checkout' },
}

export default function CheckoutPage() {
  return <CheckoutForm />
}
