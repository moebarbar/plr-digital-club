'use client'

import { useState } from 'react'
import { resumeCheckout } from '@/actions/resumeCheckout'

export default function ResumePaymentButton() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleClick() {
    setLoading(true)
    setError('')
    const result = await resumeCheckout()
    if (result.url) {
      window.location.href = result.url
      return
    }
    setError(result.error ?? 'Something went wrong. Please try again.')
    setLoading(false)
  }

  return (
    <div className="mt-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className="bg-white text-primary font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors disabled:opacity-60 cursor-pointer"
      >
        {loading ? 'Opening secure checkout…' : 'Complete Your Payment — $197 →'}
      </button>
      {error && <p className="text-red-300 text-sm mt-3">{error}</p>}
    </div>
  )
}
