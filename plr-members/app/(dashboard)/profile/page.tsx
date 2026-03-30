'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { updateProfile } from '@/actions/updateProfile'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ToastContainer, useToast, ToastType } from '@/components/ui/Toast'
import { createClient } from '@/lib/supabase/client'
import type { Profile } from '@/types/database'
import { useEffect } from 'react'

export default function ProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [fullName, setFullName] = useState('')
  const [isPending, startTransition] = useTransition()
  const { toasts, addToast, removeToast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) { router.push('/login'); return }
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (data) {
        setProfile(data as Profile)
        setFullName(data.full_name ?? '')
      }
    })
  }, [router])

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    const fd = new FormData()
    fd.append('full_name', fullName)
    startTransition(async () => {
      const result = await updateProfile(fd)
      if (result.error) {
        addToast(result.error, 'error' as ToastType)
      } else {
        addToast('Profile updated!', 'success' as ToastType)
      }
    })
  }

  if (!profile) {
    return (
      <div className="animate-pulse space-y-4 max-w-lg">
        <div className="h-8 w-48 bg-gray-200 rounded" />
        <div className="h-32 bg-gray-200 rounded-xl" />
        <div className="h-32 bg-gray-200 rounded-xl" />
      </div>
    )
  }

  const memberSince = new Date(profile.created_at).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      <div className="max-w-lg space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>

        {/* Account Info */}
        <Card>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#1A1A4E] flex items-center justify-center text-white text-xl font-bold">
              {(profile.full_name?.[0] ?? profile.email?.[0] ?? '?').toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-900">{profile.full_name || 'No name set'}</p>
              <p className="text-sm text-gray-500">{profile.email}</p>
            </div>
            <div className="ml-auto">
              <Badge variant={profile.is_active ? 'success' : 'warning'}>
                {profile.is_active ? 'Active' : 'Pending'}
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs mb-1">Plan</p>
              <p className="font-medium text-gray-900 capitalize">{profile.plan}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500 text-xs mb-1">Member since</p>
              <p className="font-medium text-gray-900">{memberSince}</p>
            </div>
          </div>
        </Card>

        {/* Edit Name */}
        <Card>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Edit Profile</h2>
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1565C0]"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={profile.email ?? ''}
                disabled
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
              />
              <p className="text-xs text-gray-400 mt-1">Email cannot be changed here.</p>
            </div>
            <Button type="submit" loading={isPending}>
              Save Changes
            </Button>
          </form>
        </Card>

        {/* Password */}
        <Card>
          <h2 className="text-base font-semibold text-gray-900 mb-2">Password</h2>
          <p className="text-sm text-gray-500 mb-4">Request a password reset link sent to your email.</p>
          <a
            href="/reset-password"
            className="inline-flex items-center text-sm font-medium text-[#1565C0] hover:underline"
          >
            Change password →
          </a>
        </Card>
      </div>
    </>
  )
}
