import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface ComponentProps {
  colors: {
    primary: string
    accent: string
    secondary: string
    success: string
    warning: string
  }
  backgroundType: string
}

// Projects Component
export function ProjectsComponent({ colors }: ComponentProps) {
  const projectSummary = {
    totalProjects: 7,
    categories: ["AI-Powered Apps", "Enterprise Mobile", "Next.js SaaS", "IoT Systems", "Fintech Solutions"],
    technologies: ["React Native", "Next.js 15", "OpenAI API", "TypeScript", "TensorFlow.js", "WebSocket"],
    achievements: ["50+ Apps Deployed", "15+ Countries", "AI Integration Expert", "Cross-Platform Specialist"]
  }

  const featuredStats = [
    { label: "AI Projects", value: "3+", icon: "🤖", color: colors.success },
    { label: "Mobile Apps", value: "4+", icon: "📱", color: colors.primary },
    { label: "Web Platforms", value: "7+", icon: "🌐", color: colors.accent },
    { label: "IoT Systems", value: "2+", icon: "🏠", color: colors.warning }
  ]

  return (
    <div className={cn(
      "w-full h-full p-3 sm:p-4 relative overflow-hidden flex flex-col",
      "bg-gradient-to-br from-gray-900/90 via-slate-800/80 to-gray-900/90"
    )}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.3),transparent_50%)]" />
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col justify-between min-h-0">
        {/* Project Categories */}
        <div className="flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <h3 className="text-sm font-bold text-white mb-2">Project Portfolio</h3>
            <div className="grid grid-cols-1 gap-1">
              {projectSummary.categories.slice(0, 4).map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="text-xs text-gray-300 px-2 py-1 bg-gray-800/40 rounded border border-gray-700/30"
                >
                  • {category}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Technologies */}
        <div className="flex-shrink-0 my-3">
          <div className="text-xs text-gray-400 mb-2">Core Technologies</div>
          <div className="grid grid-cols-2 gap-1">
            {projectSummary.technologies.slice(0, 4).map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                className="text-xs px-2 py-1 rounded bg-gray-800/60 text-white border border-gray-700/40"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Project Stats */}
        <div className="flex-shrink-0">
          <div className="grid grid-cols-2 gap-1.5">
            {featuredStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.7, duration: 0.4 }}
                className="text-center p-2 rounded bg-gray-800/50 border border-gray-700/30"
              >
                <div className="text-lg">{stat.icon}</div>
                <div className="text-sm font-bold" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Summary Achievement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-3 text-center p-2 rounded-lg bg-gradient-to-r from-gray-800/60 to-gray-700/60 border border-gray-600/40"
          >
            <div className="text-sm font-bold" style={{ color: colors.success }}>
              🏆 React Native Specialist
            </div>
            <div className="text-xs text-gray-300 mt-1">
              Cross-Platform • Enterprise • Innovation
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
