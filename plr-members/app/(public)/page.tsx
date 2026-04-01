'use client'

import { useState } from 'react'
import Image from 'next/image'
import CountdownTimer from '@/components/checkout/CountdownTimer'

export default function CheckoutPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }
      window.location.href = data.url
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* LEFT — Value pitch */}
      <div className="bg-[#1A1A4E] text-white p-10 lg:p-16 flex flex-col justify-center">
        <Image src="/logo.png" alt="PLR Digital Club" width={180} height={45} className="h-11 w-auto" priority />
        <h1 className="text-4xl font-bold leading-tight mt-6 mb-8">
          1,000+ Digital Products.<br />One Payment. Forever.
        </h1>

        <CountdownTimer />

        <ul className="mt-8 space-y-3">
          {[
            '1,000+ Digital Products (Worth $10,000s)',
            '300+ Canva Templates',
            'Planners & Journals',
            'Social Media Templates',
            '300,000+ eBooks',
            'Notion Templates',
            '60,000+ Logo Templates',
            'Reseller Tools & Resources',
            'Lifetime Updates — No Monthly Fees',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="bg-[#1565C0] rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                ✓
              </span>
              <span className="text-sm text-blue-100">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <span className="text-gray-400 line-through text-lg">$997.00</span>
          <span className="text-5xl font-bold ml-3">$197</span>
          <span className="block text-sm text-blue-300 mt-1">
            Lifetime Access · No Hidden Fees · No BS
          </span>
        </div>

        <div className="mt-8 space-y-4">
          {[
            {
              quote: 'PLR Digital Club is a game-changer. The value is unmatched — a membership that makes you money.',
              name: 'Amy White',
            },
            {
              quote: "I never thought making money online was possible for me. Listing PLR products changed everything. If I can do it, anyone can. 🤑",
              name: 'Amir Kai',
            },
          ].map((t) => (
            <div key={t.name} className="bg-white/10 rounded-xl p-5">
              <p className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</p>
              <p className="text-sm text-blue-100 mt-2">{t.quote}</p>
              <p className="text-xs text-blue-300 mt-2">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — Checkout form */}
      <div className="bg-white p-10 lg:p-16 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-[#1A1A4E]">Get Lifetime Access</h2>
        <p className="text-gray-500 text-sm mt-1 mb-8">Join thousands of digital entrepreneurs</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name', type: 'text', value: name, setter: setName, placeholder: 'Jane Smith' },
            { label: 'Email Address', type: 'email', value: email, setter: setEmail, placeholder: 'jane@example.com' },
            { label: 'Password', type: 'password', value: password, setter: setPassword, placeholder: 'Min. 8 characters' },
            { label: 'Confirm Password', type: 'password', value: confirmPassword, setter: setConfirmPassword, placeholder: 'Repeat your password' },
          ].map((field) => (
            <div key={field.label} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1565C0] focus:border-transparent"
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1A1A4E] hover:bg-[#1565C0] text-white font-semibold py-4 rounded-xl transition-colors text-lg mt-2 disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Processing...
              </>
            ) : (
              'Pay $197 — Get Instant Access →'
            )}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <hr className="flex-1 border-gray-200" />
          <span className="text-gray-400 text-sm">or</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        <p className="text-gray-500 text-sm text-center">
          Already a member?{' '}
          <a href="/login" className="text-[#1565C0] font-medium hover:underline">
            Log In →
          </a>
        </p>

        <div className="flex justify-center gap-6 mt-6 text-xs text-gray-400">
          <span>🔒 256-bit SSL</span>
          <span>✓ Powered by Stripe</span>
        </div>
      </div>
    </div>
  )
}
