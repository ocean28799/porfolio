"use client"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Mail, MapPin, Calendar, Code, Zap, Users, Globe, 
  Brain, Rocket, Star, Coffee, Heart, Award,
  Download
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ConnectCard } from "@/components/sections/connect-card"

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
  
  return (
    <div className="min-h-screen text-white overflow-hidden pt-20">
      {/* Simplified Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/2 rounded-full blur-3xl"></div>
        
        {/* Simple floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
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
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                {t('aboutPage.title')}
              </h1>
            </div>
            
            <motion.div 
              className="max-w-5xl mx-auto space-y-6"
              variants={fadeInUp}
            >
              <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-white font-light leading-relaxed">
                Crafting the Future of 
                <span className="font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent"> Digital Innovation</span>
              </p>
              <p className="text-base xs:text-lg sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto px-4">
                Transforming visionary ideas into intelligent, scalable applications through cutting-edge AI integration and modern development excellence.
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
                  <div className="bg-slate-900 rounded-2xl px-6 py-4 flex items-center gap-3">
                    <badge.icon className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">{badge.label}</span>
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
                <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-10"></div>
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 rounded-full blur-xl opacity-15"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 p-2 rounded-full">
                  <div className="bg-slate-900 rounded-full p-3">
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
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Tran Anh Duc
                </h2>
                <p className="text-xl text-emerald-400 font-medium">
                  React Native & AI Integration Specialist
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  With 4+ years of expertise in building cutting-edge mobile and web applications, 
                  I specialize in creating intelligent, scalable solutions that serve millions of users globally across 15+ countries. 
                  My passion lies in integrating AI technologies with modern development frameworks to 
                  deliver exceptional user experiences.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>Vietnam (UTC+7)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span>ocean28799@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span>4+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Globe className="w-5 h-5 text-emerald-400" />
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
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 shadow-lg"
                  asChild
                >
                  <Link href="/files/TranAnhDuc-ATS-ReactNative-CV.pdf" target="_blank">
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
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Professional Impact
              </h3>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Delivering measurable results through innovative technology solutions that drive business growth
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "4+", label: t('about.stats.yearsExperience'), icon: Calendar, color: "emerald" },
                { number: "50+", label: t('about.stats.projectsDelivered'), icon: Rocket, color: "blue" },
                { number: "2M+", label: t('about.stats.usersServed'), icon: Users, color: "purple" },
                { number: "8+", label: t('about.stats.aiIntegrations'), icon: Brain, color: "pink" },
              ].map((stat) => (
                <Card key={stat.label} className="bg-slate-900/50 border-slate-700/50 hover:border-emerald-500/50 transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-xl mb-4`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-slate-300 font-medium text-sm">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Simplified Journey & Skills Section */}
          <motion.div variants={fadeInUp} className="grid lg:grid-cols-3 gap-12">
            {/* Journey Content */}
            <div className="lg:col-span-2 space-y-10">
              <Card className="bg-slate-900/50 border-slate-700/50 hover:border-emerald-500/50 transition-colors duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                      My Journey
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-slate-300 leading-relaxed">
                    <p className="text-slate-200">
                      My journey began with a <span className="text-emerald-400 font-semibold">fascination for cross-platform development</span> and the endless possibilities 
                      of creating seamless experiences across iOS, Android, and web platforms. What started as curiosity 
                      about React Native has evolved into a professional career focused on building scalable, AI-powered applications.
                    </p>
                    
                    <p>
                      I specialize in integrating <span className="text-blue-400 font-semibold">cutting-edge AI technologies</span> like OpenAI GPT-4, computer vision, and 
                      machine learning models into mobile and web applications. My approach combines technical excellence 
                      with modern development practices, ensuring optimal performance and maintainability.
                    </p>
                    
                    <p>
                      What drives me is the opportunity to leverage the latest technologies to solve complex problems and 
                      create applications that users love. Currently based in Vietnam and working with clients globally, 
                      I&apos;m passionate about delivering <span className="text-purple-400 font-semibold">exceptional digital experiences</span>.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      Development Approach
                    </h3>
                  </div>
                  
                  <div className="space-y-6 text-slate-300 leading-relaxed">
                    <p className="text-slate-200">
                      My development philosophy centers around <span className="text-blue-400 font-semibold">clean, maintainable code</span> and modern architectural patterns. 
                      I believe in building applications that not only solve immediate problems but also scale gracefully as requirements evolve.
                    </p>
                    
                    <p>
                      Every project follows a structured approach: thorough planning, iterative development, comprehensive testing, 
                      and continuous optimization. I prioritize <span className="text-purple-400 font-semibold">performance, security, and user experience</span> in equal measure.
                    </p>
                    
                    <p>
                      By staying current with the latest industry trends and best practices, I ensure that every solution 
                      leverages the most effective tools and methodologies available.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Sidebar */}
            <div className="space-y-8">
              <Card className="bg-slate-900/50 border-slate-700/50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6 text-purple-400" />
                    Core Technologies
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: "React Native", level: 95, color: "blue" },
                      { name: "Next.js 15", level: 92, color: "emerald" },
                      { name: "AI Integration", level: 90, color: "purple" },
                      { name: "TypeScript", level: 88, color: "cyan" },
                      { name: "Node.js", level: 85, color: "green" }
                    ].map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-slate-400 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700/50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <Coffee className="w-6 h-6 text-orange-400" />
                    Fun Facts
                  </h4>
                  <div className="space-y-4 text-slate-300">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span>50+ successful project deployments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-blue-400" />
                      <span>Clients across 15+ countries</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-purple-400" />
                      <span>AI enthusiast & early adopter</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Rocket className="w-5 h-5 text-emerald-400" />
                      <span>Performance optimization expert</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
