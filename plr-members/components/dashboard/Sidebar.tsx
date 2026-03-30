'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
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
      <div className="p-6">
        <p className="text-sm font-bold text-white tracking-tight">⚡ PLR DIGITAL CLUB</p>
      </div>

      <nav className="flex-1 mt-2">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'text-white bg-white/10 border-l-4 border-[#1565C0]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </a>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <p className="text-xs text-gray-500 px-2 mb-2 truncate">{profile.email}</p>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-2 py-2 text-sm text-gray-400 hover:text-white transition-colors w-full"
        >
          <span>🚪</span> Sign Out
        </button>
      </div>
    </div>
  )
}

export default function Sidebar({ profile, isOpen, onClose }: SidebarProps) {
  // Lock body scroll when mobile drawer is open
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
      {/* Desktop sidebar — always visible */}
      <div className="hidden lg:flex flex-col fixed left-0 top-0 h-full z-30">
        <SidebarContent profile={profile} onClose={() => {}} />
      </div>

      {/* Mobile sidebar — animated overlay drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />
        {/* Drawer panel */}
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
