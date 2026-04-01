'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import type { Profile } from '@/types/database'

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: '🏠' },
  { href: '/dashboard/library', label: 'Product Library', icon: '📦' },
  { href: '/dashboard/whats-new', label: "What's New", icon: '✨' },
  { href: '/dashboard/reseller-tools', label: 'Reseller Tools', icon: '🔧' },
  { href: '/dashboard/profile', label: 'My Profile', icon: '👤' },
]

interface SidebarProps {
  profile: Profile
  isOpen: boolean
  onClose: () => void
}

function SidebarContent({ profile, onClose }: { profile: Profile; onClose: () => void }) {
  const pathname = usePathname()
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="flex flex-col h-full bg-[#1A1A4E] w-64">
      <div className="px-5 py-5 border-b border-white/10">
        <Image
          src="/logo.png"
          alt="PLR Digital Club"
          width={150}
          height={38}
          className="h-9 w-auto"
          priority
        />
      </div>

      <nav className="flex-1 mt-3 px-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors mb-0.5 ${
                isActive
                  ? 'text-white bg-[#1565C0]'
                  : 'text-blue-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </a>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <p className="text-xs text-blue-400 px-2 mb-2 truncate">{profile.email}</p>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-2 py-2 text-sm text-blue-300 hover:text-white transition-colors w-full rounded-lg hover:bg-white/10"
        >
          <span>🚪</span> Sign Out
        </button>
      </div>
    </div>
  )
}

export default function Sidebar({ profile, isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <div className="hidden lg:flex flex-col fixed left-0 top-0 h-full z-30">
        <SidebarContent profile={profile} onClose={() => {}} />
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={onClose} />
        <div
          className={`absolute left-0 top-0 h-full transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <SidebarContent profile={profile} onClose={onClose} />
        </div>
      </div>
    </>
  )
}
