"use client"
import { PROJECTS } from "@/lib/constants/projects"
import { Brain, Globe, Bot, TrendingUp, Heart, GraduationCap, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { useState, memo, useCallback, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Generate project slugs from titles
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Memoized project card component
const ProjectCard = memo(({
  project,
  index,
  isHovered,
  onHover
}: {
  project: typeof PROJECTS[0]
  index: number
  isHovered: boolean
  onHover: (index: number | null) => void
}) => {
  const handleMouseEnter = useCallback(() => {
    onHover(index)
  }, [onHover, index])

  const handleMouseLeave = useCallback(() => {
    onHover(null)
  }, [onHover])

  const categoryIcons: Record<string, React.ReactElement> = useMemo(() => ({
    "AI-Powered Cross-Platform App": <Brain className="w-5 h-5" />,
    "Enterprise React Native + AI": <Bot className="w-5 h-5" />,
    "Next.js 15 + AI Integration": <Globe className="w-5 h-5" />,
    "Cross-Platform IoT + AI": <TrendingUp className="w-5 h-5" />,
    "Fintech React Native + AI": <Heart className="w-5 h-5" />,
    "Next.js E-commerce + AI": <Globe className="w-5 h-5" />,
    "Healthcare React Native + AI": <Heart className="w-5 h-5" />,
    "Education Next.js + AI": <GraduationCap className="w-5 h-5" />
  }), [])

  const projectSlug = useMemo(() => generateSlug(project.title), [project.title])

  // Create a status from project properties (simulate)
  const status = project.demoUrl ? "Completed" : "In Progress"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl",
        "border border-slate-200 dark:border-slate-800 overflow-hidden",
        "transition-all duration-300 transform hover:scale-105",
        isHovered && "ring-2 ring-blue-500/20"
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
      
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.src}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3} // Priority for first 3 images
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium">
            {categoryIcons[project.category] || <Sparkles className="w-4 h-4" />}
            <span className="truncate max-w-[120px]">{project.category}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={cn(
            "px-2 py-1 rounded-full text-xs font-medium",
            status === "Completed" 
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
              : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
          )}>
            {status}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.techStack.slice(0, 3).map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-xs">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.demoUrl && (
              <Link
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
              >
                <Globe className="w-4 h-4" />
                Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-medium transition-colors"
              >
                <Bot className="w-4 h-4" />
                Code
              </Link>
            )}
          </div>

          <Link
            href={`/projects/${projectSlug}`}
            className="flex items-center gap-1 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors group"
          >
            Details
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Hover Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
})

ProjectCard.displayName = "ProjectCard"

export function ProjectCardsCarousel() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  
  const handleProjectHover = useCallback((index: number | null) => {
    setHoveredProject(index)
  }, [])

  return (
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            project={project}
            index={index}
            isHovered={hoveredProject === index}
            onHover={handleProjectHover}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default ProjectCardsCarousel
