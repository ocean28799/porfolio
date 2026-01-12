import { SkeletonProjectCard } from "@/components/ui/skeleton"

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Skeleton */}
        <div className="text-center mb-12 space-y-4">
          <div className="h-12 w-72 mx-auto bg-slate-700/50 rounded-lg animate-pulse" />
          <div className="h-5 w-[500px] max-w-full mx-auto bg-slate-700/50 rounded-lg animate-pulse" />
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-6 rounded-xl bg-slate-800/50 text-center">
              <div className="h-10 w-20 mx-auto bg-slate-700/50 rounded animate-pulse mb-2" />
              <div className="h-4 w-24 mx-auto bg-slate-700/50 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Filter Tabs Skeleton */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-slate-700/50 rounded-full animate-pulse" />
          ))}
        </div>

        {/* Projects Grid Skeleton */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <SkeletonProjectCard key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
