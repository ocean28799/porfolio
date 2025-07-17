"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Brain, 
  TrendingUp, 
  Globe, 
  Zap, 
  Heart, 
  GraduationCap, 
  Bot,
  Sparkles,
  Target,
  Code,
  Award,
  Users,
  Star,
  Clock,
  ExternalLink,
  Github,
  Rocket
} from "lucide-react"
import { cn } from "@/lib/utils"
import { FullScreen } from "@/components/full-screen"

interface ProjectDetailClientProps {
  project: {
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
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "AI-Powered Cross-Platform App": return <Brain className="w-6 h-6" />
      case "Enterprise React Native + AI": return <TrendingUp className="w-6 h-6" />
      case "Next.js 15 + AI Integration": return <Globe className="w-6 h-6" />
      case "Cross-Platform IoT + AI": return <Zap className="w-6 h-6" />
      case "Fintech React Native + AI": return <TrendingUp className="w-6 h-6" />
      case "Next.js E-commerce + AI": return <Globe className="w-6 h-6" />
      case "Healthcare React Native + AI": return <Heart className="w-6 h-6" />
      case "Education Next.js + AI": return <GraduationCap className="w-6 h-6" />
      default: return <Bot className="w-6 h-6" />
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '-4s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>

      <FullScreen className="w-full max-w-7xl mx-auto py-8 px-4 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/90 to-cyan-600/90 hover:from-purple-600 hover:to-cyan-600 backdrop-blur-sm border border-purple-400/40 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group whitespace-nowrap"
          >
            <ArrowLeft className="w-5 h-5 text-white group-hover:translate-x-[-2px] transition-transform duration-300" />
            <span className="text-white">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-12"
        >
          {/* Hero Image */}
          <div className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            
            {/* Floating Decorations */}
            <div className="absolute top-8 left-8 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse"></div>
            <div className="absolute top-16 left-16 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping"></div>
            <div className="absolute top-12 left-24 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-bounce"></div>
          </div>

          {/* Title and Category Overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold backdrop-blur-sm border border-white/20",
                "bg-gradient-to-r", getCategoryColor(project.category)
              )}>
                <div className="p-1 bg-white/20 rounded-lg text-white">
                  {getCategoryIcon(project.category)}
                </div>
                <span className="text-white">{project.category}</span>
              </div>
            </motion.div>

            {/* Project Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            >
              {project.title}
            </motion.h1>

            {/* Tech Stack Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {project.techStack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-xl text-sm font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 6 && (
                <span className="px-3 py-1.5 bg-gradient-to-r from-purple-900/60 to-cyan-900/60 backdrop-blur-sm border border-purple-400/30 rounded-xl text-sm font-medium text-purple-200">
                  +{project.techStack.length - 6} more
                </span>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-12">
          {/* Main Content - Left Column */}
          <div className="xl:col-span-2 lg:col-span-1 space-y-12">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Project Overview</h2>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <p className="text-slate-300 leading-relaxed text-lg">{project.description}</p>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Key Features</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {getProjectFeatures(project.category).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 p-6 bg-slate-800/30 border border-slate-700/30 rounded-xl hover:bg-slate-800/50 transition-all group"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 group-hover:bg-green-300 transition-colors"></div>
                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Business Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Business Impact</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {getProjectBenefits(project.category).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-start gap-3 p-6 bg-slate-800/30 border border-slate-700/30 rounded-xl hover:bg-slate-800/50 transition-all group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 group-hover:bg-blue-300 transition-colors"></div>
                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-8">
            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code className="w-3 h-3 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-600/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Project Metrics</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-400">Users Reached</div>
                    <div className="text-xl font-semibold text-slate-200">10K+</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <div>
                    <div className="text-sm text-slate-400">User Rating</div>
                    <div className="text-xl font-semibold text-slate-200">4.8/5</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <div>
                    <div className="text-sm text-slate-400">Development</div>
                    <div className="text-xl font-semibold text-slate-200">3-6 months</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-xl font-semibold text-white transition-all border border-purple-500/30 shadow-lg hover:shadow-purple-500/25"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl font-semibold text-slate-200 transition-all"
              >
                <Github className="w-5 h-5" />
                Source Code
              </motion.button>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Let&apos;s Collaborate</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Interested in building something similar? Let&apos;s discuss your project and create amazing solutions together.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 rounded-xl font-medium text-white transition-all"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </div>
      </FullScreen>
    </div>
  )
}

function getProjectFeatures(category: string): string[] {
  const featureMap: Record<string, string[]> = {
    "AI-Powered Cross-Platform App": [
      "Voice-to-text with Whisper API",
      "Real-time AI conversations",
      "Document analysis & summarization",
      "Multi-modal AI interactions",
      "Cross-platform synchronization"
    ],
    "Enterprise React Native + AI": [
      "Predictive analytics engine",
      "Natural language queries",
      "Real-time data visualization",
      "Custom dashboard builder",
      "Automated reporting"
    ],
    "Next.js 15 + AI Integration": [
      "AI content generation",
      "Brand voice training",
      "Social media automation",
      "SEO optimization",
      "Performance analytics"
    ],
    "Cross-Platform IoT + AI": [
      "AI-driven automation",
      "Energy optimization",
      "Predictive maintenance",
      "Natural language control",
      "Device compatibility"
    ],
    "Fintech React Native + AI": [
      "AI trading signals",
      "Portfolio optimization",
      "Risk analysis",
      "Biometric security",
      "Real-time market data"
    ],
    default: [
      "Modern UI/UX design",
      "Real-time functionality",
      "Cross-platform compatibility",
      "Scalable architecture",
      "Advanced security"
    ]
  }
  
  return featureMap[category] || featureMap.default
}

function getProjectBenefits(category: string): string[] {
  const benefitMap: Record<string, string[]> = {
    "AI-Powered Cross-Platform App": [
      "Increased productivity",
      "Enhanced user experience",
      "Cost-effective solution",
      "Scalable architecture",
      "Future-proof technology"
    ],
    "Enterprise React Native + AI": [
      "Data-driven decisions",
      "Operational efficiency",
      "Competitive advantage",
      "ROI optimization",
      "Business intelligence"
    ],
    "Next.js 15 + AI Integration": [
      "Higher engagement",
      "Content scalability",
      "Brand consistency",
      "Marketing automation",
      "Performance metrics"
    ],
    default: [
      "Improved efficiency",
      "Better user experience",
      "Cost optimization",
      "Competitive edge",
      "Future scalability"
    ]
  }
  
  return benefitMap[category] || benefitMap.default
}
