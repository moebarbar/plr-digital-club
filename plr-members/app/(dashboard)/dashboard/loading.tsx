export default function DashboardLoading() {
  return (
    <div className="animate-pulse">
      {/* Banner skeleton */}
      <div className="bg-gray-200 rounded-2xl h-32 mb-8" />

      {/* Stats skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-200 rounded-xl h-24" />
        ))}
      </div>

      {/* Recently Added skeleton */}
      <div className="bg-gray-200 h-6 w-40 rounded mb-4" />
      <div className="flex gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="min-w-[190px] bg-gray-200 rounded-xl h-44 flex-shrink-0" />
        ))}
      </div>

      {/* Category grid skeleton */}
      <div className="bg-gray-200 h-6 w-48 rounded mb-4" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-gray-200 rounded-xl h-16" />
        ))}
      </div>
    </div>
  )
}
