"use client"

import { PROJECTS } from "@/lib/constants/projects"
import { Brain, Globe, Bot, TrendingUp, Heart, GraduationCap, Search } from "lucide-react"
import { FullScreen } from "@/components/full-screen"
import { PagePerformanceTracker } from "@/components/performance-reporter"
import { Project3DCard } from "@/components/features/ui-effects/project-3d-card"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const categories = [
  "All Projects",
  "AI-Powered Cross-Platform App",
  "Enterprise React Native + AI", 
  "Next.js 15 + AI Integration",
  "Cross-Platform IoT + AI",
  "Fintech React Native + AI",
  "Next.js E-commerce + AI",
  "Healthcare React Native + AI",
  "Education Next.js + AI"
]

export default function ProjectsPageModern() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [searchQuery, setSearchQuery] = useState("")
  
  // Filter projects based on category and search
  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = selectedCategory === "All Projects" || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const categoryIcons: Record<string, React.ReactElement> = {
    "AI-Powered Cross-Platform App": <Brain className="w-4 h-4" />,
    "Enterprise React Native + AI": <Bot className="w-4 h-4" />,
    "Next.js 15 + AI Integration": <Globe className="w-4 h-4" />,
    "Cross-Platform IoT + AI": <TrendingUp className="w-4 h-4" />,
    "Fintech React Native + AI": <Heart className="w-4 h-4" />,
    "Next.js E-commerce + AI": <Globe className="w-4 h-4" />,
    "Healthcare React Native + AI": <Heart className="w-4 h-4" />,
    "Education Next.js + AI": <GraduationCap className="w-4 h-4" />
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <PagePerformanceTracker pageName="projects-modern" />
      
      {/* Hero Section */}
      <FullScreen className="relative py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto px-6 text-center"
        >
          {/* Main Title */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Cutting-edge applications built with React Native, Next.js 15, and AI integration
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {[
              { label: "Projects Completed", value: "50+", icon: "🚀" },
              { label: "Countries Served", value: "15+", icon: "🌍" },
              { label: "Years Experience", value: "4+", icon: "⭐" },
              { label: "Technologies Used", value: "25+", icon: "⚡" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
              >
                <Card className="p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </FullScreen>

      {/* Filters Section */}
      <FullScreen className="py-12 bg-slate-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-300 bg-slate-800/30"
                  } transition-all duration-300`}
                >
                  {categoryIcons[category] && (
                    <span className="mr-2">{categoryIcons[category]}</span>
                  )}
                  {category === "All Projects" ? "All" : category.split(" ")[0]}
                </Button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center">
              <Badge variant="outline" className="border-slate-600 text-slate-300">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </Badge>
            </div>
          </motion.div>
        </div>
      </FullScreen>

      {/* Projects Grid */}
      <FullScreen className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }
                }}
              >
                <Project3DCard
                  title={project.title}
                  description={project.description}
                  image={project.src}
                  techStack={project.techStack}
                  demoUrl={project.demoUrl}
                  metrics={project.metrics}
                  features={project.features}
                  category={project.category}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-slate-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All Projects")
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </FullScreen>

      {/* Call to Action */}
      <FullScreen className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate on your next project and create exceptional digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-300"
            >
              View All Work
            </Button>
          </div>
        </motion.div>
      </FullScreen>
    </div>
  )
}
