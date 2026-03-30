'use client'

import { useState } from 'react'
import AuthCard from '@/components/auth/AuthCard'
import FormInput from '@/components/auth/FormInput'
import SubmitButton from '@/components/auth/SubmitButton'
import { createClient } from '@/lib/supabase/client'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const supabase = createClient()
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/update-password`,
    })

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <AuthCard title="Reset your password">
      {submitted ? (
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            If that email is registered, you&apos;ll receive a reset link shortly.
          </p>
          <a href="/login" className="inline-block mt-4 text-[#1565C0] text-sm hover:underline">
            ← Back to login
          </a>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
            />
            <SubmitButton loading={loading}>Send Reset Link</SubmitButton>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            <a href="/login" className="text-[#1565C0] hover:underline">
              ← Back to login
            </a>
          </p>
        </>
      )}
    </AuthCard>
  )
}
