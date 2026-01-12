"use client"

import { useState, useMemo, useCallback, memo, useEffect, useRef } from "react"
import { PROJECTS, Project } from "@/lib/constants/projects"
import { 
  Brain, 
  Globe, 
  Bot, 
  TrendingUp, 
  Heart, 
  GraduationCap,
  Search,
  Filter,
  Grid3X3,
  LayoutList,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  Code,
  Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// ============================================
// Simple UI Components (No Context Dependencies)
// ============================================

// Simple Card component without context - prevents unnecessary re-renders
const SimpleCard = memo(({ 
  className = "", 
  children, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={`rounded-xl border bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none ${className}`}
    {...props}
  >
    {children}
  </div>
))
SimpleCard.displayName = "SimpleCard"

// Simple Badge component without context - prevents unnecessary re-renders
const SimpleBadge = memo(({ 
  className = "", 
  variant = "default",
  children, 
  ...props 
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "outline" | "secondary" }) => {
  const variantClasses = {
    default: "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border-transparent",
    outline: "bg-transparent border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400",
    secondary: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-transparent"
  }
  
  return (
    <span 
      className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
})
SimpleBadge.displayName = "SimpleBadge"

// ============================================
// Constants (Outside Component - Never Re-created)
// ============================================

const categoryIcons: Record<string, React.ElementType> = {
  "AI-Powered Cross-Platform App": Brain,
  "Enterprise React Native + AI": Bot,
  "Next.js 15 + AI Integration": Globe,
  "Cross-Platform IoT + AI": TrendingUp,
  "Fintech React Native + AI": Heart,
  "Next.js E-commerce + AI": Globe,
  "Healthcare React Native + AI": Heart,
  "Education Next.js + AI": GraduationCap
}

const categoryColors: Record<string, string> = {
  "AI-Powered Cross-Platform App": "from-purple-500 to-pink-500",
  "Enterprise React Native + AI": "from-blue-500 to-cyan-500",
  "Next.js 15 + AI Integration": "from-emerald-500 to-teal-500",
  "Cross-Platform IoT + AI": "from-orange-500 to-amber-500",
  "Fintech React Native + AI": "from-green-500 to-emerald-500",
  "Next.js E-commerce + AI": "from-indigo-500 to-purple-500",
  "Healthcare React Native + AI": "from-red-500 to-pink-500",
  "Education Next.js + AI": "from-cyan-500 to-blue-500"
}

const stats = [
  { icon: Code, value: "60+", label: "Projects Delivered", color: "text-blue-400" },
  { icon: Users, value: "3M+", label: "Users Impacted", color: "text-purple-400" },
  { icon: Zap, value: "97%", label: "Client Satisfaction", color: "text-emerald-400" },
  { icon: Globe, value: "20+", label: "Countries Served", color: "text-cyan-400" }
]

// Pre-compute categories (computed once, never changes)
const categories = Array.from(new Set(PROJECTS.map(p => p.category)))

// Pre-compute slugs (computed once, never changes)
const projectSlugs = new Map(
  PROJECTS.map(p => [
    p.title,
    p.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
  ])
)

// ============================================
// Memoized Sub-Components
// ============================================

// Project Image with lazy loading - isolated state
const ProjectImage = memo(({ 
  src, 
  alt, 
  priority = false 
}: { 
  src: string
  alt: string
  priority?: boolean 
}) => {
  const [loaded, setLoaded] = useState(false)
  const handleLoad = useCallback(() => setLoaded(true), [])
  
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading={priority ? "eager" : "lazy"}
        onLoad={handleLoad}
      />
      {!loaded && <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />}
    </>
  )
})
ProjectImage.displayName = "ProjectImage"

// Stats Section - Pure component, no state, no re-renders
const StatsSection = memo(() => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="text-center p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600/50 transition-colors shadow-sm dark:shadow-none"
      >
        <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
      </div>
    ))}
  </div>
))
StatsSection.displayName = "StatsSection"

// Filter Section - Controlled input with ref to prevent re-render on typing
const FilterSection = memo(({ 
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  viewMode,
  onViewModeChange
}: {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
}) => {
  // Use uncontrolled input with ref for better performance
  const inputRef = useRef<HTMLInputElement>(null)
  
  // Sync input value when searchQuery is cleared externally
  useEffect(() => {
    if (inputRef.current && searchQuery === "" && inputRef.current.value !== "") {
      inputRef.current.value = ""
    }
  }, [searchQuery])
  
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }, [onSearchChange])
  
  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects..."
            defaultValue={searchQuery}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm dark:shadow-none"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-3 rounded-lg transition-colors ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700"}`}
            aria-label="Grid view"
          >
            <Grid3X3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`p-3 rounded-lg transition-colors ${viewMode === "list" ? "bg-blue-600 text-white" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700"}`}
            aria-label="List view"
          >
            <LayoutList className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
            selectedCategory === "all" 
              ? "bg-blue-600 text-white" 
              : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
          }`}
        >
          <Filter className="w-4 h-4" />
          All Projects
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category 
                ? "bg-blue-600 text-white" 
                : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            {category.split(" ")[0]}
          </button>
        ))}
      </div>
    </div>
  )
})
FilterSection.displayName = "FilterSection"

// Grid Project Card - Fully memoized, no parent state dependencies
const GridProjectCard = memo(({ project }: { project: Project }) => {
  const slug = projectSlugs.get(project.title) || ""
  const IconComponent = categoryIcons[project.category] || Sparkles
  const gradientColor = categoryColors[project.category] || "from-blue-500 to-purple-500"

  return (
    <SimpleCard className="group h-full overflow-hidden hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="relative aspect-video overflow-hidden">
        <ProjectImage src={project.src} alt={project.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 dark:from-slate-900 via-slate-100/20 dark:via-slate-900/20 to-transparent" />
        
        <div className="absolute top-4 left-4">
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${gradientColor} shadow-lg`}>
            <IconComponent className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-medium">{project.category.split(" ")[0]}</span>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <SimpleBadge className="bg-green-500/90 text-white border-0">Live</SimpleBadge>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-100/80 dark:bg-slate-900/60 backdrop-blur-sm">
          <div className="flex gap-3">
            {project.demoUrl && (
              <Link 
                href={project.demoUrl} 
                target="_blank"
                className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg text-white text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </Link>
            )}
            <Link 
              href={`/projects/${slug}`}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium flex items-center gap-1 transition-colors"
            >
              Details
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <SimpleBadge key={tech} variant="outline" className="hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {tech}
            </SimpleBadge>
          ))}
          {project.techStack.length > 4 && (
            <SimpleBadge variant="outline" className="text-slate-500">
              +{project.techStack.length - 4}
            </SimpleBadge>
          )}
        </div>

        <div className="flex items-center gap-2 text-sm text-emerald-500 dark:text-emerald-400 pt-2 border-t border-slate-200 dark:border-slate-800">
          <TrendingUp className="w-4 h-4" />
          <span className="truncate">{project.metrics}</span>
        </div>
      </div>
    </SimpleCard>
  )
})
GridProjectCard.displayName = "GridProjectCard"

// List Project Card - Fully memoized
const ListProjectCard = memo(({ project }: { project: Project }) => {
  const slug = projectSlugs.get(project.title) || ""
  const IconComponent = categoryIcons[project.category] || Sparkles
  const gradientColor = categoryColors[project.category] || "from-blue-500 to-purple-500"

  return (
    <SimpleCard className="group overflow-hidden hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
          <ProjectImage src={project.src} alt={project.title} />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-100/80 dark:to-slate-900/80 hidden md:block" />
        </div>

        <div className="flex-1 p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg bg-gradient-to-r ${gradientColor}`}>
                  <IconComponent className="w-4 h-4 text-white" />
                </div>
                <SimpleBadge variant="outline">
                  {project.category.split(" ")[0]}
                </SimpleBadge>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {project.title}
              </h3>
            </div>
            <SimpleBadge className="bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 border-green-300 dark:border-green-500/30 flex-shrink-0">
              Completed
            </SimpleBadge>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <SimpleBadge key={tech} variant="secondary">
                {tech}
              </SimpleBadge>
            ))}
            {project.techStack.length > 5 && (
              <SimpleBadge variant="secondary" className="text-slate-500">
                +{project.techStack.length - 5}
              </SimpleBadge>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-sm text-emerald-500 dark:text-emerald-400">
              <TrendingUp className="w-4 h-4" />
              <span>{project.metrics}</span>
            </div>
            <div className="flex gap-2">
              {project.demoUrl && (
                <Link 
                  href={project.demoUrl} 
                  target="_blank"
                  className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  aria-label="View demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              )}
              <Link 
                href={`/projects/${slug}`}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-medium flex items-center gap-1 transition-colors"
              >
                View Details
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SimpleCard>
  )
})
ListProjectCard.displayName = "ListProjectCard"

// Projects Grid/List Container - Only re-renders when projects or viewMode changes
const ProjectsContainer = memo(({ 
  projects, 
  viewMode 
}: { 
  projects: Project[]
  viewMode: "grid" | "list" 
}) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <Search className="w-16 h-16 mx-auto text-slate-400 dark:text-slate-600 mb-4" />
        <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">No projects found</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-4">
        {projects.map((project) => (
          <ListProjectCard key={project.title} project={project} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <GridProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
})
ProjectsContainer.displayName = "ProjectsContainer"

// CTA Section - Static, never re-renders
const CTASection = memo(() => (
  <div className="mt-16 text-center">
    <SimpleCard className="p-8 bg-gradient-to-r from-blue-100 dark:from-blue-500/10 via-purple-100 dark:via-purple-500/10 to-cyan-100 dark:to-cyan-500/10 border-slate-300 dark:border-slate-700">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Want to build something amazing?</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
        I&apos;m available for freelance projects and full-time opportunities. Let&apos;s create something extraordinary together.
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Link 
          href="mailto:trananhducdev@gmail.com"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium flex items-center gap-2 transition-colors"
        >
          Get in Touch
          <ChevronRight className="w-5 h-5" />
        </Link>
        <Link 
          href="/about"
          className="px-6 py-3 bg-transparent border border-slate-400 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg text-slate-900 dark:text-white font-medium transition-colors"
        >
          About Me
        </Link>
      </div>
    </SimpleCard>
  </div>
))
CTASection.displayName = "CTASection"

// ============================================
// Main Page Component
// ============================================

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Mount effect - runs once
  useEffect(() => {
    setMounted(true)
  }, [])

  // Debounced search for better performance - only updates after user stops typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery)
    }, 200)
    return () => clearTimeout(timer)
  }, [searchQuery])

  // Filter projects - only recomputes when debounced search or category changes
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
      if (!matchesCategory) return false
      
      if (debouncedSearch === "") return true
      
      const searchLower = debouncedSearch.toLowerCase()
      return (
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchLower))
      )
    })
  }, [debouncedSearch, selectedCategory])

  // Stable callback references - never change
  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query)
  }, [])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  const handleViewModeChange = useCallback((mode: "grid" | "list") => {
    setViewMode(mode)
  }, [])

  const handleResetFilters = useCallback(() => {
    setSearchQuery("")
    setDebouncedSearch("")
    setSelectedCategory("all")
  }, [])

  // Loading state - simple skeleton
  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="h-16 w-64 bg-slate-200 dark:bg-slate-800 rounded-lg mx-auto mb-4 animate-pulse" />
            <div className="h-6 w-96 max-w-full bg-slate-200 dark:bg-slate-800 rounded-lg mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[1,2,3,4].map(i => (
              <div key={i} className="h-32 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 dark:from-slate-900 via-slate-100 dark:via-slate-900 to-slate-200 dark:to-slate-800 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header - Static, no animations */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-500 dark:from-blue-400 via-purple-600 dark:via-purple-500 to-cyan-500 dark:to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore my portfolio of 60+ projects built with React Native, Next.js, and AI integration.
            Each project represents real-world solutions serving millions of users.
          </p>
        </div>

        {/* Stats - Memoized, never re-renders */}
        <StatsSection />

        {/* Filters - Only re-renders on prop changes */}
        <FilterSection
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          viewMode={viewMode}
          onViewModeChange={handleViewModeChange}
        />

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600 dark:text-slate-400">
            Showing <span className="text-slate-900 dark:text-white font-medium">{filteredProjects.length}</span> projects
          </p>
          {(searchQuery || selectedCategory !== "all") && (
            <button
              onClick={handleResetFilters}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Projects - Only re-renders when filtered list or view mode changes */}
        <ProjectsContainer projects={filteredProjects} viewMode={viewMode} />

        {/* CTA - Memoized, never re-renders */}
        <CTASection />
      </div>
    </div>
  )
}
