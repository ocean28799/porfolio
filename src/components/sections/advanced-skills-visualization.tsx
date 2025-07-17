"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Smartphone, 
  Brain, 
  Database, 
  Globe, 
  Zap,
  Star,
  TrendingUp,
  Award,
  Target
} from "lucide-react"

interface Skill {
  name: string
  level: number
  category: string
  icon: React.ReactNode
  color: string
  description: string
  projects: number
  yearsExperience: number
}

const skills: Skill[] = [
  {
    name: "React Native",
    level: 95,
    category: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    description: "Expert in cross-platform mobile development",
    projects: 25,
    yearsExperience: 4
  },
  {
    name: "Next.js 15",
    level: 92,
    category: "Web Development", 
    icon: <Globe className="w-6 h-6" />,
    color: "from-gray-600 to-gray-800",
    description: "Advanced web applications with modern React",
    projects: 20,
    yearsExperience: 3
  },
  {
    name: "AI Integration",
    level: 88,
    category: "Artificial Intelligence",
    icon: <Brain className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    description: "OpenAI, GPT-4, and machine learning integration",
    projects: 15,
    yearsExperience: 2
  },
  {
    name: "TypeScript",
    level: 90,
    category: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    color: "from-blue-600 to-blue-800",
    description: "Type-safe development across all platforms",
    projects: 30,
    yearsExperience: 4
  },
  {
    name: "Database Design",
    level: 85,
    category: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600",
    description: "PostgreSQL, MongoDB, Supabase, and optimization",
    projects: 18,
    yearsExperience: 3
  },
  {
    name: "Performance Optimization",
    level: 87,
    category: "System Architecture",
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
    description: "App performance, caching, and scalability",
    projects: 22,
    yearsExperience: 3
  }
]

const categories = Array.from(new Set(skills.map(skill => skill.category)))

export function AdvancedSkillsVisualization() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "radial">("grid")
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controls = useAnimation()

  const filteredSkills = selectedCategory 
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills

  // Animated progress bars
  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible")
    }, 500)
    return () => clearTimeout(timer)
  }, [controls])

  // Particle animation for canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || viewMode !== "radial") return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 150

    const drawRadialChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      skills.forEach((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI - Math.PI / 2
        const skillRadius = (skill.level / 100) * radius
        
        // Draw skill line
        const x = centerX + Math.cos(angle) * skillRadius
        const y = centerY + Math.sin(angle) * skillRadius
        
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.strokeStyle = `hsl(${index * 60}, 70%, 60%)`
        ctx.lineWidth = 3
        ctx.stroke()
        
        // Draw skill point
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = `hsl(${index * 60}, 70%, 60%)`
        ctx.fill()
        
        // Draw skill label
        const labelX = centerX + Math.cos(angle) * (radius + 30)
        const labelY = centerY + Math.sin(angle) * (radius + 30)
        
        ctx.fillStyle = "#ffffff"
        ctx.font = "12px Inter"
        ctx.textAlign = "center"
        ctx.fillText(skill.name, labelX, labelY)
      })
      
      // Draw center circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, 20, 0, Math.PI * 2)
      ctx.fillStyle = "#3b82f6"
      ctx.fill()
    }

    drawRadialChart()
  }, [viewMode])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Advanced proficiency across modern technologies with real-world project experience
          </p>
          
          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-6 py-2 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode("radial")}
              className={`px-6 py-2 rounded-lg transition-all ${
                viewMode === "radial"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Radial View
            </button>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg transition-all ${
              selectedCategory === null
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            All Skills
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Visualization */}
        {viewMode === "grid" ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                onClick={() => setSelectedSkill(skill)}
                className="cursor-pointer"
              >
                <Card className={`p-6 bg-slate-800/50 border-slate-700 hover:border-slate-500 transition-all duration-300 ${
                  hoveredSkill === skill.name ? "shadow-2xl shadow-blue-500/20 scale-105" : ""
                }`}>
                  <div className="space-y-4">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-white">{skill.name}</h3>
                          <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                            {skill.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{skill.level}%</div>
                        <div className="flex items-center gap-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(skill.level / 20) ? "fill-current" : ""
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Proficiency</span>
                        <span className="text-slate-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={controls}
                          variants={{
                            visible: {
                              width: `${skill.level}%`,
                              transition: { delay: index * 0.1, duration: 1 }
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-green-400 mb-1">
                          <Target className="w-4 h-4" />
                          <span className="font-bold">{skill.projects}</span>
                        </div>
                        <div className="text-xs text-slate-500">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-blue-400 mb-1">
                          <Award className="w-4 h-4" />
                          <span className="font-bold">{skill.yearsExperience}+</span>
                        </div>
                        <div className="text-xs text-slate-500">Years</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="flex justify-center">
            <div className="relative">
              <canvas
                ref={canvasRef}
                className="border border-slate-700 rounded-lg bg-slate-800/30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm text-slate-300 font-medium">Skills Radar</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Selected Skill Modal */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-800 rounded-2xl border border-slate-700 max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${selectedSkill.color}`}>
                      {selectedSkill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedSkill.name}</h3>
                      <Badge className="mt-1">{selectedSkill.category}</Badge>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-white mb-2">{selectedSkill.level}%</div>
                    <div className="w-full bg-slate-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${selectedSkill.color}`}
                        style={{ width: `${selectedSkill.level}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    {selectedSkill.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">{selectedSkill.projects}</div>
                      <div className="text-sm text-slate-400">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">{selectedSkill.yearsExperience}+</div>
                      <div className="text-sm text-slate-400">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
