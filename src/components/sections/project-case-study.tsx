"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Globe, Calendar, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface CaseStudyData {
  title: string
  category: string
  client: string
  duration: string
  team: string
  status: string
  overview: string
  challenge: string
  solution: string
  results: string[]
  techStack: string[]
  features: string[]
  metrics: {
    label: string
    value: string
    improvement?: string
  }[]
  images: {
    before?: string
    after?: string
    screenshots: string[]
  }
  demoUrl: string
  testimonial?: {
    content: string
    author: string
    role: string
  }
}

interface ProjectCaseStudyProps {
  project: CaseStudyData
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-cyan-500/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" className="text-slate-400 hover:text-white">
              <Link href="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50">
                {project.category}
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {project.title}
              </h1>
              
              <p className="text-xl text-slate-400 leading-relaxed">
                {project.overview}
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Client</span>
                  </div>
                  <div className="text-white font-semibold">{project.client}</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Duration</span>
                  </div>
                  <div className="text-white font-semibold">{project.duration}</div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href={project.demoUrl} target="_blank">
                  <Globe className="w-5 h-5 mr-2" />
                  View Live Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700">
                <Image
                  src={project.images.screenshots[0] || "/images/mockup/default.png"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {project.metrics.map((metric, index) => (
              <Card key={metric.label} className="p-6 bg-slate-900/50 border-slate-700 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-slate-400 text-sm mb-1">
                    {metric.label}
                  </div>
                  {metric.improvement && (
                    <div className="flex items-center justify-center gap-1 text-green-400 text-xs">
                      <TrendingUp className="w-3 h-3" />
                      {metric.improvement}
                    </div>
                  )}
                </motion.div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-red-400">The Challenge</h2>
              <Card className="p-8 bg-red-500/5 border-red-500/20">
                <p className="text-slate-300 leading-relaxed">
                  {project.challenge}
                </p>
              </Card>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-green-400">The Solution</h2>
              <Card className="p-8 bg-green-500/5 border-green-500/20">
                <p className="text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Features */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge className="bg-slate-800 text-slate-300 border-slate-600 px-4 py-2">
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Key Features</h2>
              <div className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl font-bold">Results & Impact</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-blue-500/5 border-blue-500/20 h-full">
                    <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <p className="text-slate-300">{result}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-16 bg-slate-900/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Card className="p-12 bg-slate-800/50 border-slate-700">
                <p className="text-2xl text-slate-300 leading-relaxed mb-8 italic">
                  &ldquo;{project.testimonial.content}&rdquo;
                </p>
                <div className="space-y-2">
                  <div className="text-white font-semibold text-lg">
                    {project.testimonial.author}
                  </div>
                  <div className="text-slate-400">
                    {project.testimonial.role}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your vision to life with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/pricing">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600">
                <Link href="/projects">
                  View More Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
