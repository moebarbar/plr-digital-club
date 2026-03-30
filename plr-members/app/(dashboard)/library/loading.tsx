import ProductGridSkeleton from '@/components/dashboard/ProductGridSkeleton'

export default function LibraryLoading() {
  return (
    <div className="animate-pulse">
      {/* Search skeleton */}
      <div className="bg-gray-200 rounded-xl h-12 w-full mb-4" />
      {/* Filter pills skeleton */}
      <div className="flex gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-gray-200 rounded-full h-9 w-24" />
        ))}
      </div>
      <ProductGridSkeleton />
    </div>
  )
}
