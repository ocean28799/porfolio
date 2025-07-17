"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Smartphone, Globe, Database, Zap } from "lucide-react"

const skillCategories = [
  {
    id: "mobile",
    name: "Mobile Development",
    icon: Smartphone,
    color: "blue",
    skills: [
      { name: "React Native", level: 95, years: "4+" },
      { name: "iOS Development", level: 85, years: "3+" },
      { name: "Android Development", level: 85, years: "3+" },
      { name: "Expo SDK", level: 90, years: "3+" },
      { name: "Native Modules", level: 80, years: "2+" },
    ]
  },
  {
    id: "web",
    name: "Web Development", 
    icon: Globe,
    color: "green",
    skills: [
      { name: "Next.js 15", level: 95, years: "4+" },
      { name: "React 19", level: 95, years: "4+" },
      { name: "TypeScript", level: 90, years: "4+" },
      { name: "Tailwind CSS", level: 90, years: "3+" },
      { name: "Node.js", level: 85, years: "4+" },
    ]
  },
  {
    id: "ai",
    name: "AI Integration",
    icon: Brain,
    color: "purple",
    skills: [
      { name: "OpenAI GPT-4", level: 90, years: "2+" },
      { name: "AI/ML Implementation", level: 85, years: "2+" },
      { name: "TensorFlow.js", level: 80, years: "2+" },
      { name: "Natural Language Processing", level: 85, years: "2+" },
      { name: "Computer Vision", level: 75, years: "1+" },
    ]
  },
  {
    id: "backend",
    name: "Backend & Database",
    icon: Database,
    color: "cyan",
    skills: [
      { name: "API Development", level: 90, years: "4+" },
      { name: "PostgreSQL", level: 85, years: "3+" },
      { name: "Supabase", level: 85, years: "2+" },
      { name: "Redis", level: 80, years: "2+" },
      { name: "WebSocket", level: 85, years: "3+" },
    ]
  },
  {
    id: "devops",
    name: "DevOps & Tools",
    icon: Zap,
    color: "orange",
    skills: [
      { name: "CI/CD", level: 85, years: "3+" },
      { name: "Performance Optimization", level: 90, years: "4+" },
      { name: "Testing", level: 85, years: "4+" },
      { name: "Git Workflow", level: 95, years: "4+" },
      { name: "Deployment", level: 90, years: "4+" },
    ]
  }
]

export function InteractiveSkills() {
  const [activeCategory, setActiveCategory] = useState("mobile")
  const currentCategory = skillCategories.find(cat => cat.id === activeCategory)

  return (
    <div className="w-full space-y-8">
      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4">
        {skillCategories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.id
          
          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                isActive 
                  ? `border-${category.color}-500 bg-${category.color}-500/20 text-${category.color}-300` 
                  : "border-slate-600 bg-slate-800/50 text-slate-400 hover:border-slate-500"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{category.name}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Skills Display */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-8 bg-slate-900/80 border-slate-700">
          <div className="space-y-6">
            {currentCategory?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {skill.years} experience
                    </Badge>
                  </div>
                  <span className={`text-${currentCategory?.color}-400 font-bold`}>
                    {skill.level}%
                  </span>
                </div>
                
                <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r from-${currentCategory?.color}-500 to-${currentCategory?.color}-400 rounded-full`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-${currentCategory?.color}-400/30 rounded-full blur-sm`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
