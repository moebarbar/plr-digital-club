export default function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
          <div className="bg-gray-200 aspect-[4/3]" />
          <div className="p-4">
            <div className="bg-gray-200 h-4 w-20 rounded-full" />
            <div className="bg-gray-200 h-5 w-full rounded mt-2" />
            <div className="bg-gray-200 h-4 w-3/4 rounded mt-1" />
            <div className="bg-gray-200 h-10 w-full rounded-lg mt-3" />
          </div>
        </div>
      ))}
    </div>
  )
}
