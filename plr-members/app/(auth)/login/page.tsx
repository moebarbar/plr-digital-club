'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthCard from '@/components/auth/AuthCard'
import FormInput from '@/components/auth/FormInput'
import SubmitButton from '@/components/auth/SubmitButton'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })

    if (signInError) {
      setError(signInError.message)
      setLoading(false)
      return
    }

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('is_active')
      .eq('id', user.id)
      .single()

    if (profile?.is_active) {
      router.push('/dashboard')
    } else {
      router.push('/pending')
    }
  }

  return (
    <AuthCard title="Welcome back">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
        <SubmitButton loading={loading}>Sign In</SubmitButton>
      </form>
      <p className="text-center text-sm text-gray-500 mt-4">
        <a href="/reset-password" className="text-[#1565C0] hover:underline">
          Forgot your password? Reset it →
        </a>
      </p>
      <p className="text-center text-sm text-gray-500 mt-2">
        Don&apos;t have an account?{' '}
        <a href="/" className="text-[#1565C0] hover:underline">
          Get Access →
        </a>
      </p>
    </AuthCard>
  )
}
