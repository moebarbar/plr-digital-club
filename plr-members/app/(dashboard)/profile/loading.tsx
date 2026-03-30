export default function ProfileLoading() {
  return (
    <div className="max-w-lg animate-pulse space-y-6">
      <div className="h-8 w-32 bg-gray-200 rounded" />

      {/* Account card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gray-200" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-36 bg-gray-200 rounded" />
            <div className="h-3 w-48 bg-gray-100 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-16 bg-gray-100 rounded-lg" />
          <div className="h-16 bg-gray-100 rounded-lg" />
        </div>
      </div>

      {/* Edit card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4">
        <div className="h-5 w-28 bg-gray-200 rounded" />
        <div className="h-10 w-full bg-gray-100 rounded-lg" />
        <div className="h-10 w-full bg-gray-100 rounded-lg" />
        <div className="h-10 w-32 bg-gray-200 rounded-lg" />
      </div>

      {/* Password card */}
      <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-3">
        <div className="h-5 w-20 bg-gray-200 rounded" />
        <div className="h-4 w-64 bg-gray-100 rounded" />
        <div className="h-4 w-36 bg-gray-100 rounded" />
      </div>
    </div>
  )
}
