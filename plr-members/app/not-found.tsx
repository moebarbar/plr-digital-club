import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#F8F8FF' }}>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">🔍</div>
            <h1 className="text-4xl font-bold text-[#1A1A4E] mb-3">404</h1>
            <p className="text-gray-600 mb-2 text-lg font-medium">Page not found</p>
            <p className="text-gray-400 text-sm mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/dashboard"
                className="bg-[#1A1A4E] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#1565C0] transition-colors"
              >
                Go to Dashboard
              </Link>
              <Link
                href="/"
                className="bg-white text-[#1A1A4E] border border-[#1A1A4E] px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
