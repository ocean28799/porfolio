"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Play, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  category: string
  title: string
  src: string
  techStack: string[]
  description: string
  demoUrl: string
  githubUrl: string
  features: string[]
  metrics: string
}

interface ProjectShowcaseProps {
  projects: Project[]
}

export function EnhancedProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cutting-edge applications built with React Native, Next.js 15, and AI integration
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.title)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="overflow-hidden bg-slate-800/50 border-slate-700 hover:border-slate-500 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.title ? 1 : 0 }}
                    className="absolute inset-0 bg-blue-600/20 backdrop-blur-[1px] flex items-center justify-center"
                  >
                    <Button
                      size="lg"
                      className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm text-white"
                      asChild
                    >
                      <Link href={project.demoUrl} target="_blank">
                        <Play className="w-5 h-5 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50 backdrop-blur-sm">
                      {project.category.split(" ")[0]}
                    </Badge>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500/20 text-green-300 border-green-500/50 backdrop-blur-sm">
                      Live
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-300 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                        +{project.techStack.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span>{project.metrics}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      asChild
                    >
                      <Link href={project.demoUrl} target="_blank">
                        <Globe className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-slate-600 text-slate-300 hover:border-slate-500 hover:bg-slate-800"
                      onClick={() => setSelectedProject(project.title)}
                    >
                      Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
            asChild
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl border border-slate-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.title === selectedProject)
                if (!project) return null

                return (
                  <div className="p-6 space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedProject(null)}
                        className="text-slate-400 hover:text-white"
                      >
                        ✕
                      </Button>
                    </div>

                    <Image
                      src={project.src}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full rounded-lg"
                    />

                    <p className="text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Key Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-blue-500/20 text-blue-300 border-blue-500/50"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        asChild
                      >
                        <Link href={project.demoUrl} target="_blank">
                          <Globe className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
