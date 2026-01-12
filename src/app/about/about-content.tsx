"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { 
  Mail, MapPin, Calendar, Code, Zap, Users, Globe, 
  Brain, Rocket, Star, Coffee, Heart, Award,
  Download
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ConnectCard } from "@/components/sections/connect-card"
import { GitHubActivityWidget } from "@/components/github/github-activity-widget"
import { memo, useState, useEffect } from "react"

// Simple Card without context dependency
const SimpleCard = memo(({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={`rounded-xl border bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none backdrop-blur-sm ${className}`}
    {...props}
  >
    {children}
  </div>
))
SimpleCard.displayName = "SimpleCard"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function AboutPageContent() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Loading skeleton
  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <div className="h-24 w-64 bg-slate-200 dark:bg-slate-800 rounded-lg mx-auto mb-8 animate-pulse" />
          <div className="h-6 w-96 max-w-full bg-slate-200 dark:bg-slate-800 rounded-lg mx-auto animate-pulse" />
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 dark:from-slate-900 via-white dark:via-slate-900 to-slate-100 dark:to-slate-800 text-slate-900 dark:text-white overflow-hidden pt-20">
      {/* Optimized Static Background - no blur for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.03),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(59,130,246,0.05),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(59,130,246,0.03),transparent)]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 py-16 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-20"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="text-center space-y-12">
            <div className="relative">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black bg-gradient-to-r from-emerald-500 dark:from-emerald-400 via-blue-600 dark:via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                {t('aboutPage.title')}
              </h1>
            </div>
            
            <motion.div 
              className="max-w-5xl mx-auto space-y-6"
              variants={fadeInUp}
            >
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-slate-800 dark:text-white font-light leading-relaxed">
                Engineering the Future of 
                <span className="font-bold bg-gradient-to-r from-emerald-500 dark:from-emerald-400 to-blue-600 dark:to-blue-500 bg-clip-text text-transparent"> Digital Innovation</span>
              </p>
              <p className="text-base xs:text-lg sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto px-4">
                Building enterprise-scale applications that drive real business results—40% faster development cycles, 60% performance improvements, and $2M+ in client revenue generated.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              variants={fadeInUp}
            >
              {[
                { icon: Brain, label: t('about.expertiseLabels.aiIntegrationExpert'), color: "from-emerald-500 to-emerald-600" },
                { icon: Rocket, label: t('about.expertiseLabels.reactNativeSpecialist'), color: "from-blue-500 to-blue-600" },
                { icon: Star, label: "Next.js 15 Expert", color: "from-purple-500 to-purple-600" }
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`group relative bg-gradient-to-r ${badge.color} p-0.5 rounded-2xl hover:scale-105 transition-transform duration-300`}
                >
                  <div className="bg-white dark:bg-slate-900 rounded-2xl px-6 py-4 flex items-center gap-3">
                    <badge.icon className="w-5 h-5 text-slate-700 dark:text-white" />
                    <span className="text-slate-700 dark:text-white font-medium">{badge.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Section */}
          <motion.div 
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Profile Image */}
            <div className="flex justify-center lg:order-2">
              <div className="relative">
                {/* Simplified Glow Layers */}
                <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 dark:opacity-10"></div>
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-full blur-xl opacity-25 dark:opacity-15"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 p-2 rounded-full">
                  <div className="bg-white dark:bg-slate-900 rounded-full p-3">
                    <Image
                      src="/images/my-img.png"
                      alt="Tran Anh Duc - Senior React Native & AI Integration Specialist"
                      width={400}
                      height={400}
                      className="rounded-full object-cover w-80 h-80"
                      priority
                    />
                  </div>
                </div>

                {/* Static Tech Icons */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-4 shadow-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <motion.div 
              className="space-y-8 lg:order-1"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                  Tran Anh Duc
                </h2>
                <p className="text-xl text-emerald-600 dark:text-emerald-400 font-medium">
                  Senior Mobile & AI Solutions Architect
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Senior engineer with 5+ years of proven track record delivering enterprise-scale applications. 
                  Led development of 60+ production apps serving 3M+ users across 20+ countries. 
                  Specialized in React Native, Next.js, and AI/ML integration (GPT-4, Claude, TensorFlow). 
                  Track record of reducing development time by 40%, improving app performance by 60%, and driving $2M+ in client revenue.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  <span>Vietnam (UTC+7)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Mail className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  <span>ocean28799@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Calendar className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  <Globe className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                  <span>Remote Available</span>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25"
                  asChild
                >
                  <Link href="mailto:ocean28799@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-lg"
                  asChild
                >
                  <Link href="/files/TranAnhDuc-Modern-CV-2026.html" target="_blank">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Simplified Stats Section */}
          <motion.div variants={fadeInUp} className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-500 dark:from-emerald-400 via-blue-600 dark:via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Professional Impact
              </h3>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Delivering measurable results through innovative technology solutions that drive business growth
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "5+", label: t('about.stats.yearsExperience'), icon: Calendar, color: "emerald" },
                { number: "60+", label: t('about.stats.projectsDelivered'), icon: Rocket, color: "blue" },
                { number: "3M+", label: t('about.stats.usersServed'), icon: Users, color: "purple" },
                { number: "20+", label: t('about.stats.aiIntegrations'), icon: Brain, color: "pink" },
              ].map((stat) => (
                <SimpleCard key={stat.label} className="hover:border-emerald-500/50 transition-colors duration-300">
                  <div className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-xl mb-4`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${stat.color}-500 dark:from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium text-sm">
                      {stat.label}
                    </div>
                  </div>
                </SimpleCard>
              ))}
            </div>
          </motion.div>

          {/* Simplified Journey & Skills Section */}
          <motion.div variants={fadeInUp} className="grid lg:grid-cols-3 gap-12">
            {/* Journey Content */}
            <div className="lg:col-span-2 space-y-10">
              <SimpleCard className="hover:border-emerald-500/50 transition-colors duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 dark:from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                      My Journey
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p className="text-slate-700 dark:text-slate-200">
                      My journey began with a <span className="text-emerald-600 dark:text-emerald-400 font-semibold">fascination for cross-platform development</span> and the endless possibilities 
                      of creating seamless experiences across iOS, Android, and web platforms. What started as curiosity 
                      about React Native has evolved into a professional career focused on building scalable, AI/LLM-powered applications.
                    </p>
                    
                    <p>
                      I specialize in integrating <span className="text-blue-600 dark:text-blue-400 font-semibold">cutting-edge AI technologies</span> like OpenAI GPT-4o, Claude 4, Gemini Pro, LangChain, RAG systems, and 
                      machine learning models into mobile and web applications. My approach combines technical excellence 
                      with modern development practices, ensuring optimal performance and maintainability.
                    </p>
                    
                    <p>
                      What drives me is the opportunity to leverage the latest technologies to solve complex problems and 
                      create applications that users love. Currently based in Vietnam and working with clients globally, 
                      I&apos;m passionate about delivering <span className="text-purple-600 dark:text-purple-400 font-semibold">exceptional digital experiences</span>.
                    </p>
                  </div>
                </div>
              </SimpleCard>

              <SimpleCard className="hover:border-blue-500/50 transition-colors duration-300">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 dark:from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      Development Approach
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p className="text-slate-700 dark:text-slate-200">
                      My development philosophy centers around <span className="text-blue-600 dark:text-blue-400 font-semibold">clean, maintainable code</span> and modern architectural patterns. 
                      I believe in building applications that not only solve immediate problems but also scale gracefully as requirements evolve.
                    </p>
                    
                    <p>
                      Every project follows a structured approach: thorough planning, iterative development, comprehensive testing, 
                      and continuous optimization. I prioritize <span className="text-purple-600 dark:text-purple-400 font-semibold">performance, security, and user experience</span> in equal measure.
                    </p>
                    
                    <p>
                      By staying current with the latest industry trends and best practices, I ensure that every solution 
                      leverages the most effective tools and methodologies available.
                    </p>
                  </div>
                </div>
              </SimpleCard>
            </div>

            {/* Skills Sidebar */}
            <div className="space-y-8">
              <SimpleCard>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                    Core Technologies
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: "React Native 0.76+", level: 98, color: "blue" },
                      { name: "Next.js 15", level: 95, color: "emerald" },
                      { name: "AI/LLM Integration", level: 93, color: "purple" },
                      { name: "TypeScript 5.5", level: 92, color: "cyan" },
                      { name: "Node.js 22 LTS", level: 88, color: "green" }
                    ].map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SimpleCard>

              <SimpleCard>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <Coffee className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                    Fun Facts
                  </h4>
                  <div className="space-y-4 text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                      <span>60+ successful project deployments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                      <span>Clients across 20+ countries</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                      <span>AI/LLM pioneer & early adopter</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Rocket className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                      <span>Performance optimization expert</span>
                    </div>
                  </div>
                </div>
              </SimpleCard>
            </div>
          </motion.div>

          {/* GitHub Activity Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Open Source & Activity</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Check out my contributions and open source projects on GitHub
              </p>
            </div>
            <GitHubActivityWidget />
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={fadeInUp}>
            <ConnectCard />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
