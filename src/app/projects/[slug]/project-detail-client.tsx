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
    const iconProps = "w-6 h-6 xs:w-4 xs:h-4"
    switch(category) {
      case "AI-Powered Cross-Platform App": return <Brain className={iconProps} />
      case "Enterprise React Native + AI": return <TrendingUp className={iconProps} />
      case "Next.js 15 + AI Integration": return <Globe className={iconProps} />
      case "Cross-Platform IoT + AI": return <Zap className={iconProps} />
      case "Fintech React Native + AI": return <TrendingUp className={iconProps} />
      case "Next.js E-commerce + AI": return <Globe className={iconProps} />
      case "Healthcare React Native + AI": return <Heart className={iconProps} />
      case "Education Next.js + AI": return <GraduationCap className={iconProps} />
      default: return <Bot className={iconProps} />
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
      {/* Mobile Back Button - Top Fixed Position */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="block fixed top-0 left-0 right-0 z-50 p-3 bg-gradient-to-b from-slate-900/95 to-transparent backdrop-blur-sm"
      >
        <Link 
          href="/projects"
          className="inline-flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-purple-600/90 to-cyan-600/90 hover:from-purple-600 hover:to-cyan-600 backdrop-blur-sm border border-purple-400/40 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group whitespace-nowrap text-xs min-h-[40px]"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-white group-hover:translate-x-[-2px] transition-transform duration-300" />
          <span className="text-white">Back to Projects</span>
        </Link>
      </motion.div>

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 xs:w-32 xs:h-32 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/5 xs:bg-purple-500/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 xs:w-24 xs:h-24 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-500/5 xs:bg-blue-500/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '-2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 xs:w-20 xs:h-20 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-cyan-500/3 xs:bg-cyan-500/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '-4s'}}></div>
        
        {/* Floating particles - Hidden on xs for performance */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce xs:hidden"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-ping xs:hidden"></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse xs:hidden"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-bounce xs:hidden" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-pink-400/30 rounded-full animate-ping xs:hidden" style={{animationDelay: '2s'}}></div>
      </div>

      <FullScreen className="w-full max-w-7xl mx-auto py-6 pt-16 sm:pt-6 xs:py-4 px-4 xs:px-2 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl xs:rounded-xl overflow-hidden mb-8 xs:mb-6"
        >
          {/* Hero Image */}
          <div className="relative h-[40vh] xs:h-[30vh] sm:h-[45vh] md:h-[50vh] min-h-[300px] xs:min-h-[250px] max-h-[600px] overflow-hidden">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            
            {/* Floating Decorations - Hidden on xs */}
            <div className="absolute top-8 left-8 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse xs:hidden"></div>
            <div className="absolute top-16 left-16 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping xs:hidden"></div>
            <div className="absolute top-12 left-24 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-bounce xs:hidden"></div>
          </div>

          {/* Title and Category Overlay */}
          <div className="absolute bottom-6 xs:bottom-4 left-6 xs:left-4 right-6 xs:right-4">
            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 xs:gap-1.5 mb-4 xs:mb-3"
            >
              <div className={cn(
                "flex items-center gap-2 xs:gap-1.5 px-3 xs:px-2 py-1.5 xs:py-1 rounded-xl xs:rounded-lg text-sm xs:text-xs font-semibold backdrop-blur-sm border border-white/20",
                "bg-gradient-to-r", getCategoryColor(project.category)
              )}>
                <div className="p-1 xs:p-0.5 bg-white/20 rounded-lg xs:rounded text-white">
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
              className="text-2xl xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 xs:mb-2 leading-tight xs:leading-snug"
            >
              {project.title}
            </motion.h1>

            {/* Tech Stack Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-1.5 xs:gap-1"
            >
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 xs:px-2 py-1 xs:py-0.5 bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 rounded-lg xs:rounded text-xs xs:text-[10px] font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2.5 xs:px-2 py-1 xs:py-0.5 bg-gradient-to-r from-purple-900/60 to-cyan-900/60 backdrop-blur-sm border border-purple-400/30 rounded-lg xs:rounded text-xs xs:text-[10px] font-medium text-purple-200">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid xs:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 xs:gap-6 pt-6 xs:pt-4">
          {/* Main Content - Left Column */}
          <div className="xs:col-span-1 lg:col-span-1 xl:col-span-2 space-y-8 xs:space-y-6">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 xs:space-y-3"
            >
              <div className="flex items-center gap-2 xs:gap-1.5">
                <div className="w-6 h-6 xs:w-5 xs:h-5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg xs:rounded flex items-center justify-center">
                  <Sparkles className="w-3 h-3 xs:w-2.5 xs:h-2.5 text-white" />
                </div>
                <h2 className="text-2xl xs:text-xl sm:text-3xl font-bold text-white">Project Overview</h2>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl xs:rounded-lg p-6 xs:p-4">
                <p className="text-slate-300 leading-relaxed text-base xs:text-sm sm:text-lg">{project.description}</p>
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 xs:space-y-3"
            >
              <div className="flex items-center gap-2 xs:gap-1.5">
                <div className="w-6 h-6 xs:w-5 xs:h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg xs:rounded flex items-center justify-center">
                  <Zap className="w-3 h-3 xs:w-2.5 xs:h-2.5 text-white" />
                </div>
                <h2 className="text-2xl xs:text-xl sm:text-3xl font-bold text-white">Key Features</h2>
              </div>
              <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 xs:gap-2">
                {getProjectFeatures(project.category).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-2 xs:gap-1.5 p-4 xs:p-3 bg-slate-800/30 border border-slate-700/30 rounded-lg xs:rounded hover:bg-slate-800/50 transition-all group"
                  >
                    <div className="w-1.5 h-1.5 xs:w-1 xs:h-1 bg-green-400 rounded-full mt-2 xs:mt-1.5 group-hover:bg-green-300 transition-colors"></div>
                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors text-base xs:text-sm sm:text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Business Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-4 xs:space-y-3"
            >
              <div className="flex items-center gap-2 xs:gap-1.5">
                <div className="w-6 h-6 xs:w-5 xs:h-5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg xs:rounded flex items-center justify-center">
                  <Target className="w-3 h-3 xs:w-2.5 xs:h-2.5 text-white" />
                </div>
                <h2 className="text-2xl xs:text-xl sm:text-3xl font-bold text-white">Business Impact</h2>
              </div>
              <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 xs:gap-2">
                {getProjectBenefits(project.category).map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="flex items-start gap-2 xs:gap-1.5 p-4 xs:p-3 bg-slate-800/30 border border-slate-700/30 rounded-lg xs:rounded hover:bg-slate-800/50 transition-all group"
                  >
                    <div className="w-1.5 h-1.5 xs:w-1 xs:h-1 bg-blue-400 rounded-full mt-2 xs:mt-1.5 group-hover:bg-blue-300 transition-colors"></div>
                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors text-base xs:text-sm sm:text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="xs:col-span-1 space-y-6 xs:space-y-4">
            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl xs:rounded-lg p-4 xs:p-3"
            >
              <div className="flex items-center gap-2 xs:gap-1.5 mb-4 xs:mb-3">
                <div className="w-5 h-5 xs:w-4 xs:h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg xs:rounded flex items-center justify-center">
                  <Code className="w-2.5 h-2.5 xs:w-2 xs:h-2 text-white" />
                </div>
                <h3 className="text-lg xs:text-base font-bold text-white">Tech Stack</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 xs:gap-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 xs:px-2 py-1.5 xs:py-1 bg-slate-700/50 border border-slate-600/50 rounded-lg xs:rounded text-sm xs:text-xs font-medium text-slate-200 hover:bg-slate-600/50 transition-colors"
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
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl xs:rounded-lg p-4 xs:p-3"
            >
              <div className="flex items-center gap-2 xs:gap-1.5 mb-4 xs:mb-3">
                <div className="w-5 h-5 xs:w-4 xs:h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg xs:rounded flex items-center justify-center">
                  <Award className="w-2.5 h-2.5 xs:w-2 xs:h-2 text-white" />
                </div>
                <h3 className="text-lg xs:text-base font-bold text-white">Project Metrics</h3>
              </div>
              <div className="space-y-4 xs:space-y-3">
                <div className="flex items-center gap-2 xs:gap-1.5">
                  <Users className="w-4 h-4 xs:w-3.5 xs:h-3.5 text-blue-400" />
                  <div>
                    <div className="text-xs xs:text-[11px] text-slate-400">Users Reached</div>
                    <div className="text-lg xs:text-base font-semibold text-slate-200">10K+</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 xs:gap-1.5">
                  <Star className="w-4 h-4 xs:w-3.5 xs:h-3.5 text-yellow-400" />
                  <div>
                    <div className="text-xs xs:text-[11px] text-slate-400">User Rating</div>
                    <div className="text-lg xs:text-base font-semibold text-slate-200">4.8/5</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 xs:gap-1.5">
                  <Clock className="w-4 h-4 xs:w-3.5 xs:h-3.5 text-green-400" />
                  <div>
                    <div className="text-xs xs:text-[11px] text-slate-400">Development</div>
                    <div className="text-lg xs:text-base font-semibold text-slate-200">3-6 months</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-3 xs:space-y-2"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 xs:gap-1.5 px-4 xs:px-3 py-3 xs:py-2.5 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-xl xs:rounded-lg font-semibold text-white transition-all border border-purple-500/30 shadow-lg hover:shadow-purple-500/25 text-sm xs:text-xs min-h-[44px] xs:min-h-[40px]"
              >
                <ExternalLink className="w-4 h-4 xs:w-3.5 xs:h-3.5" />
                View Live Demo
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 xs:gap-1.5 px-4 xs:px-3 py-3 xs:py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl xs:rounded-lg font-semibold text-slate-200 transition-all text-sm xs:text-xs min-h-[44px] xs:min-h-[40px]"
              >
                <Github className="w-4 h-4 xs:w-3.5 xs:h-3.5" />
                Source Code
              </motion.button>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm border border-purple-500/20 rounded-xl xs:rounded-lg p-4 xs:p-3"
            >
              <div className="flex items-center gap-2 xs:gap-1.5 mb-3 xs:mb-2">
                <Rocket className="w-5 h-5 xs:w-4 xs:h-4 text-purple-400" />
                <h3 className="text-lg xs:text-base font-bold text-white">Let&apos;s Collaborate</h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4 xs:mb-3 text-sm xs:text-xs">
                Interested in building something similar? Let&apos;s discuss your project and create amazing solutions together.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 xs:px-3 py-3 xs:py-2.5 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-600 hover:to-cyan-600 rounded-xl xs:rounded-lg font-medium text-white transition-all text-sm xs:text-xs min-h-[44px] xs:min-h-[40px]"
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
