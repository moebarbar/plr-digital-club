export default function WhatsNewLoading() {
  return (
    <div className="animate-pulse space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <div className="h-8 w-44 bg-gray-200 rounded" />
        <div className="h-4 w-72 bg-gray-100 rounded" />
      </div>

      {/* Two week groups */}
      {[0, 1].map((g) => (
        <div key={g}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-5 w-16 bg-gray-100 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="h-36 bg-gray-200" />
                <div className="p-4 space-y-2">
                  <div className="h-4 w-16 bg-gray-100 rounded-full" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-3/4 bg-gray-100 rounded" />
                  <div className="h-8 w-full bg-gray-200 rounded-lg mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
