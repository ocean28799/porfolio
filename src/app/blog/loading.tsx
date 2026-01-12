import { SkeletonBlogCard } from "@/components/ui/skeleton"

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Skeleton */}
        <div className="text-center mb-12 space-y-4">
          <div className="h-10 w-64 mx-auto bg-slate-700/50 rounded-lg animate-pulse" />
          <div className="h-5 w-96 mx-auto bg-slate-700/50 rounded-lg animate-pulse" />
        </div>

        {/* Search & Filter Skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 h-12 bg-slate-700/50 rounded-lg animate-pulse" />
          <div className="h-12 w-32 bg-slate-700/50 rounded-lg animate-pulse" />
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-800/50 text-center">
              <div className="h-8 w-16 mx-auto bg-slate-700/50 rounded animate-pulse mb-2" />
              <div className="h-3 w-20 mx-auto bg-slate-700/50 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Blog Cards Grid Skeleton */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <SkeletonBlogCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
