"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"

interface TechItem {
  name: string
  icon: string
  color: string
  category: string
}

const technologies: TechItem[] = [
  // Mobile Development
  { name: "React Native", icon: "⚛️", color: "#61DAFB", category: "Mobile" },
  { name: "Expo", icon: "📱", color: "#000020", category: "Mobile" },
  { name: "Swift", icon: "🍎", color: "#F05138", category: "Mobile" },
  { name: "Kotlin", icon: "🤖", color: "#7F52FF", category: "Mobile" },
  
  // Frontend
  { name: "Next.js 15", icon: "▲", color: "#FFFFFF", category: "Frontend" },
  { name: "React 19", icon: "⚛️", color: "#61DAFB", category: "Frontend" },
  { name: "TypeScript", icon: "TS", color: "#3178C6", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", color: "#38BDF8", category: "Frontend" },
  { name: "Framer Motion", icon: "✨", color: "#FF0055", category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: "⬢", color: "#68A063", category: "Backend" },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "Backend" },
  { name: "FastAPI", icon: "⚡", color: "#009688", category: "Backend" },
  { name: "Express", icon: "🚂", color: "#000000", category: "Backend" },
  
  // AI/LLM
  { name: "OpenAI GPT-4o", icon: "🤖", color: "#10B981", category: "AI" },
  { name: "Claude 4", icon: "🧠", color: "#8B5CF6", category: "AI" },
  { name: "LangChain", icon: "🔗", color: "#22C55E", category: "AI" },
  { name: "RAG Systems", icon: "📚", color: "#F59E0B", category: "AI" },
  
  // Database & Cloud
  { name: "PostgreSQL", icon: "🐘", color: "#336791", category: "Database" },
  { name: "MongoDB", icon: "🍃", color: "#47A248", category: "Database" },
  { name: "Supabase", icon: "⚡", color: "#3FCF8E", category: "Database" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28", category: "Database" },
  { name: "AWS", icon: "☁️", color: "#FF9900", category: "Cloud" },
  { name: "Docker", icon: "🐳", color: "#2496ED", category: "Cloud" },
  { name: "Vercel", icon: "▲", color: "#FFFFFF", category: "Cloud" },
  
  // Tools
  { name: "Git", icon: "📝", color: "#F05032", category: "Tools" },
  { name: "VS Code", icon: "💻", color: "#007ACC", category: "Tools" },
  { name: "Figma", icon: "🎨", color: "#F24E1E", category: "Tools" },
]

function TechCard({ tech }: { tech: TechItem }) {
  return (
    <div className="flex-shrink-0">
      <Card className="px-6 py-4 bg-white/80 dark:bg-slate-800/50 border-gray-200/50 dark:border-slate-700/50 hover:border-gray-300 dark:hover:border-slate-600 transition-all flex items-center gap-3 min-w-[160px] hover:scale-105 hover:-translate-y-1 shadow-sm dark:shadow-none">
        <span 
          className="text-2xl" 
          style={{ 
            textShadow: tech.icon.length <= 2 ? `0 0 10px ${tech.color}` : 'none'
          }}
        >
          {tech.icon}
        </span>
        <div>
          <p className="font-medium text-gray-900 dark:text-white text-sm">{tech.name}</p>
          <p className="text-xs text-gray-500 dark:text-slate-500">{tech.category}</p>
        </div>
      </Card>
    </div>
  )
}

function MarqueeRow({ items, direction = "left", speed = 30 }: { 
  items: TechItem[], 
  direction?: "left" | "right",
  speed?: number 
}) {
  const [mounted, setMounted] = useState(false)
  const duplicatedItems = [...items, ...items, ...items]
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex overflow-hidden">
        <div className="flex gap-4 py-2">
          {items.map((tech, index) => (
            <TechCard key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </div>
      </div>
    )
  }
  
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-4 py-2"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"]
        }}
        transition={{
          duration: items.length * (60 / speed),
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <TechCard key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </motion.div>
    </div>
  )
}

export function TechStackMarquee() {
  const [mounted, setMounted] = useState(false)
  const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2))
  const secondRow = technologies.slice(Math.ceil(technologies.length / 2))

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-16 overflow-hidden bg-gray-50/50 dark:bg-transparent">
        <div className="container mx-auto px-6 mb-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-blue-400 dark:via-purple-500 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
              Tech Stack Expertise
            </h2>
            <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              Proficient in modern technologies for mobile, web, AI, and cloud development
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 overflow-hidden bg-gray-50/50 dark:bg-transparent">
      <div className="container mx-auto px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-blue-400 dark:via-purple-500 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
            Tech Stack Expertise
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Proficient in modern technologies for mobile, web, AI, and cloud development
          </p>
        </motion.div>
      </div>

      {/* Gradient Masks */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
        
        {/* Marquee Rows */}
        <div className="space-y-4">
          <MarqueeRow items={firstRow} direction="left" speed={25} />
          <MarqueeRow items={secondRow} direction="right" speed={20} />
        </div>
      </div>

      {/* Category Legend */}
      <div className="container mx-auto px-6 mt-8">
        <div className="flex flex-wrap justify-center gap-4">
          {["Mobile", "Frontend", "Backend", "AI", "Database", "Cloud", "Tools"].map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/50 border border-gray-200/50 dark:border-slate-700/50 text-sm text-gray-600 dark:text-slate-400 shadow-sm dark:shadow-none"
            >
              {category}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
