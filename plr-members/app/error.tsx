'use client'

import { useEffect } from 'react'

export default function GlobalError({
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
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#F8F8FF' }}>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">⚡</div>
            <h1 className="text-2xl font-bold text-[#1A1A4E] mb-3">Something went wrong</h1>
            <p className="text-gray-500 text-sm mb-8">
              An unexpected error occurred. Please try again — if the problem persists, contact support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={reset}
                className="bg-[#1A1A4E] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#1565C0] transition-colors"
              >
                Try Again
              </button>
              <a
                href="/dashboard"
                className="bg-white text-[#1A1A4E] border border-[#1A1A4E] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Go to Dashboard
              </a>
            </div>
            {error.digest && (
              <p className="text-xs text-gray-400 mt-6">Error ID: {error.digest}</p>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
