export default function ResellerToolsLoading() {
  return (
    <div className="max-w-3xl animate-pulse space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <div className="h-8 w-48 bg-gray-200 rounded" />
        <div className="h-4 w-64 bg-gray-100 rounded" />
      </div>

      {/* Cards */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-100 p-6 space-y-3">
          <div className="h-5 w-36 bg-gray-200 rounded" />
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
          <div className="h-10 w-full bg-gray-100 rounded-lg" />
        </div>
      ))}
    </div>
  )
}
