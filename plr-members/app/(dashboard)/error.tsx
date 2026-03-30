'use client'

import { useEffect } from 'react'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-sm">
        <div className="text-5xl mb-5">⚡</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-500 text-sm mb-6">
          This page failed to load. Try refreshing or click below to retry.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-[#1A1A4E] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#1565C0] transition-colors"
          >
            Try Again
          </button>
          <a
            href="/dashboard"
            className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-semibold hover:border-[#1A1A4E] transition-colors"
          >
            Dashboard
          </a>
        </div>
        {error.digest && (
          <p className="text-xs text-gray-400 mt-5">Error ID: {error.digest}</p>
        )}
      </div>
    </div>
  )
}
