"use client"
import { PROJECTS } from "@/lib/constants/projects"
import { Brain, Globe, Bot, Zap, TrendingUp, Heart, GraduationCap, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
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

export function ProjectCardsCarousel() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  
  return (
    <div className="relative">
      {/* Projects Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            isHovered={hoveredProject === index}
            onHover={setHoveredProject}
          />
        ))}
      </motion.div>
    </div>
  )
}

interface ProjectCardProps {
  project: typeof PROJECTS[0]
  index: number
  isHovered: boolean
  onHover: (index: number | null) => void
}

function ProjectCard({ project, index, isHovered, onHover }: ProjectCardProps) {
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "AI-Powered Cross-Platform App": return <Brain className="w-5 h-5" />
      case "Enterprise React Native + AI": return <TrendingUp className="w-5 h-5" />
      case "Next.js 15 + AI Integration": return <Globe className="w-5 h-5" />
      case "Cross-Platform IoT + AI": return <Zap className="w-5 h-5" />
      case "Fintech React Native + AI": return <TrendingUp className="w-5 h-5" />
      case "Next.js E-commerce + AI": return <Globe className="w-5 h-5" />
      case "Healthcare React Native + AI": return <Heart className="w-5 h-5" />
      case "Education Next.js + AI": return <GraduationCap className="w-5 h-5" />
      default: return <Bot className="w-5 h-5" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "AI-Powered Cross-Platform App": return "from-purple-500 to-purple-700"
      case "Enterprise React Native + AI": return "from-blue-500 to-blue-700"
      case "Next.js 15 + AI Integration": return "from-green-500 to-green-700"
      case "Cross-Platform IoT + AI": return "from-yellow-500 to-yellow-700"
      case "Fintech React Native + AI": return "from-emerald-500 to-emerald-700"
      case "Next.js E-commerce + AI": return "from-orange-500 to-orange-700"
      case "Healthcare React Native + AI": return "from-red-500 to-red-700"
      case "Education Next.js + AI": return "from-indigo-500 to-indigo-700"
      default: return "from-cyan-500 to-cyan-700"
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      className="group relative"
    >
      {/* Glow Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg"
      />
      
      <Link 
        href={`/projects/${generateSlug(project.title)}`}
        className={cn(
          "relative h-[550px] rounded-3xl overflow-hidden block",
          "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
          "border border-slate-700/50 hover:border-slate-600/70 transition-all duration-500",
          "transform hover:scale-[1.02] hover:-translate-y-3",
          "backdrop-blur-xl shadow-2xl hover:shadow-purple-500/20"
        )}
      >
        {/* Background Image with Enhanced Overlay */}
        <div className="absolute inset-0">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
        </div>

        {/* Floating Particles */}
        <motion.div 
          animate={{ 
            x: isHovered ? [0, 5, 0] : 0,
            y: isHovered ? [0, -5, 0] : 0 
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          className="absolute top-4 right-4 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse"
        />
        <motion.div 
          animate={{ 
            scale: isHovered ? [1, 1.2, 1] : 1 
          }}
          transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          className="absolute top-12 right-8 w-1 h-1 bg-cyan-400/40 rounded-full animate-ping"
        />
        <motion.div 
          animate={{ 
            rotate: isHovered ? 360 : 0 
          }}
          transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
          className="absolute top-8 right-12 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-bounce"
        />

        {/* Content */}
        <div className="relative h-full p-8 flex flex-col">
          {/* Enhanced Category Badge */}
          <motion.div
            initial={{ scale: 0.9, y: 10 }}
            animate={{ 
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? 0 : 0 
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative mb-6"
          >
            <div className={cn(
              "inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-semibold",
              "bg-gradient-to-r", getCategoryColor(project.category),
              "text-white shadow-xl border border-white/20",
              "backdrop-blur-sm"
            )}>
              <div className="p-1 bg-white/20 rounded-lg">
                {getCategoryIcon(project.category)}
              </div>
              <span className="truncate">{project.category}</span>
            </div>
          </motion.div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Enhanced Project Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <motion.h3 
                animate={{ 
                  scale: isHovered ? 1.02 : 1,
                  color: isHovered ? "#60a5fa" : "#ffffff"
                }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold leading-tight line-clamp-2"
              >
                {project.title}
              </motion.h3>
              <p className="text-slate-300 leading-relaxed line-clamp-3 group-hover:text-slate-200 transition-colors">
                {project.description}
              </p>
            </div>

            {/* Enhanced Tech Stack */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-slate-400">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-3 py-1.5 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl text-xs font-medium text-slate-200 hover:border-purple-400/50 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-3 py-1.5 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-sm border border-purple-400/30 rounded-xl text-xs font-medium text-purple-200">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              animate={{
                x: isHovered ? 4 : 0,
                opacity: isHovered ? 1 : 0.7
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-purple-400 font-medium group-hover:text-purple-300 transition-colors"
            >
              <span className="text-sm">View Details</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none"
        />
      </Link>
    </motion.div>
  )
}

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         )
//       })}
//     </>
//   )
// }
