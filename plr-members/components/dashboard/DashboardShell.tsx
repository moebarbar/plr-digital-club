'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import type { Profile } from '@/types/database'

interface DashboardShellProps {
  profile: Profile
  children: React.ReactNode
}

export default function DashboardShell({ profile, children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const initials = (profile.full_name ?? profile.email ?? 'U')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="flex h-screen overflow-hidden bg-surface">
      <Sidebar
        profile={profile}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Right side */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        {/* Top bar */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-6 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center gap-2 ml-auto">
            <div className="w-9 h-9 rounded-full bg-[#1A1A4E] text-white text-sm font-bold flex items-center justify-center">
              {initials}
            </div>
            <span className="text-sm text-gray-700 hidden sm:block">
              {profile.full_name ?? profile.email}
            </span>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
