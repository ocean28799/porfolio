"use client"

import React, { useState, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Mail, MapPin, Code, Zap, Globe, 
  Brain, Rocket, Award,
  ArrowRight, Sparkles, Target
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Modern 3D Card Component
const Card3D = ({ children, className = "", delay = 0 }: {
  children: React.ReactNode
  className?: string
  delay?: number
}) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateXValue = (e.clientY - centerY) / 15
    const rotateYValue = (e.clientX - centerX) / 15

    setRotateX(-rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className={`perspective-1000 ${className}`}
    >
      <motion.div
        className="preserve-3d relative"
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="relative transform-gpu">
          {children}
          
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-lg opacity-0 blur-xl"
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Animated Section Component
const AnimatedSection = ({ children, className = "" }: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Hero Stats Component
const HeroStats = () => {
  const stats = [
    { value: "50+", label: "Projects Delivered", icon: Rocket },
    { value: "15+", label: "Countries Served", icon: Globe },
    { value: "4+", label: "Years Experience", icon: Award },
    { value: "25+", label: "Technologies", icon: Code },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card3D key={stat.label} delay={index * 0.1}>
          <Card className="p-6 bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300">
            <div className="text-center space-y-2">
              <stat.icon className="w-8 h-8 mx-auto text-blue-400" />
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          </Card>
        </Card3D>
      ))}
    </div>
  )
}

// Skill Card Component
const SkillCard = ({ skill, index }: { 
  skill: {
    name: string
    level: number
    icon: React.ComponentType<{ className?: string }>
    color: string
    description: string
  }
  index: number 
}) => {
  return (
    <Card3D delay={index * 0.1}>
      <Card className="p-6 bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-500 group">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
              <skill.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors">
                {skill.name}
              </h3>
              <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                {skill.level}% Proficiency
              </Badge>
            </div>
          </div>
          
          <p className="text-sm text-slate-400 leading-relaxed">
            {skill.description}
          </p>
          
          {/* Animated Progress Bar */}
          <div className="space-y-2">
            <div className="w-full bg-slate-700 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </Card>
    </Card3D>
  )
}

export function ModernAboutContent() {
  // const { t } = useTranslation() // TODO: Add translations later

  const skills = [
    {
      name: "React Native",
      level: 95,
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      description: "Expert in cross-platform mobile development with React Native"
    },
    {
      name: "AI Integration",
      level: 90,
      icon: Brain,
      color: "from-purple-500 to-pink-500", 
      description: "Advanced AI integration with OpenAI, GPT-4, and machine learning"
    },
    {
      name: "Next.js 15",
      level: 92,
      icon: Globe,
      color: "from-gray-600 to-gray-800",
      description: "Modern web applications with the latest Next.js features"
    },
    {
      name: "Performance",
      level: 88,
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      description: "App optimization, caching strategies, and scalable architecture"
    }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 space-y-32">
        {/* Hero Section */}
        <section className="text-center space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Senior React Native & AI Integration Specialist crafting the future of 
              <span className="text-blue-400 font-semibold"> digital innovation</span>
            </p>
          </motion.div>

          {/* Hero Stats */}
          <HeroStats />
        </section>

        {/* Profile Section */}
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card3D>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                <Image
                  src="/images/avt-card.png"
                  alt="Tran Anh Duc"
                  width={500}
                  height={600}
                  className="relative rounded-2xl shadow-2xl"
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 p-3 bg-blue-500 rounded-xl shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 p-3 bg-purple-500 rounded-xl shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </Card3D>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Tran Anh Duc
                </h2>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/50">
                    Senior Developer
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                    AI Specialist
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/50">
                    React Native Expert
                  </Badge>
                </div>
                
                <p className="text-lg text-slate-300 leading-relaxed">
                  With 4+ years of proven expertise, I specialize in building enterprise-grade 
                  applications that serve millions of users worldwide. My passion lies in 
                  integrating cutting-edge AI technologies with robust mobile and web platforms.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-slate-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Vietnam, Remote Worldwide</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>ocean28799@gmail.com</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    asChild
                  >
                    <Link href="mailto:ocean28799@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Get In Touch
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-slate-600 text-slate-300 hover:bg-slate-800"
                    asChild
                  >
                    <Link href="/projects">
                      <Rocket className="w-4 h-4 mr-2" />
                      View Projects
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection>
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Technical Excellence
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Mastering the technologies that power tomorrow&apos;s applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <AnimatedSection>
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Professional Journey
              </h2>
              <p className="text-xl text-slate-300">
                Key milestones in my development career
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              
              <div className="space-y-16">
                {[
                  {
                    year: "2025",
                    title: "Senior React Native & AI Specialist",
                    description: "Leading enterprise AI-powered mobile applications with 50+ successful deployments",
                    icon: Brain,
                    side: "right"
                  },
                  {
                    year: "2023",
                    title: "Full-Stack Developer & AI Integrator", 
                    description: "Specialized in Next.js and AI integration, serving clients across 15+ countries",
                    icon: Globe,
                    side: "left"
                  },
                  {
                    year: "2021",
                    title: "Mobile App Developer",
                    description: "Started journey with React Native development and cross-platform solutions",
                    icon: Code,
                    side: "right"
                  }
                ].map((item, index) => (
                  <Card3D key={item.year} delay={index * 0.2}>
                    <div className={`flex items-center ${item.side === 'left' ? 'flex-row-reverse' : ''}`}>
                      <div className={`w-1/2 ${item.side === 'left' ? 'pl-16' : 'pr-16'}`}>
                        <Card className="p-6 bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
                          <div className="space-y-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-blue-500 rounded-lg">
                                <item.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <div className="text-blue-400 font-bold">{item.year}</div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                              </div>
                            </div>
                            <p className="text-slate-300 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Card>
                      </div>
                      
                      {/* Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900" />
                      </div>
                      
                      <div className="w-1/2" />
                    </div>
                  </Card3D>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection>
          <Card3D>
            <Card className="p-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-slate-700/50 backdrop-blur-sm text-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Let&apos;s collaborate on your next project and create exceptional digital experiences 
                  with cutting-edge technology and innovative solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                    asChild
                  >
                    <Link href="/pricing">
                      <Target className="w-5 h-5 mr-2" />
                      Start a Project
                    </Link>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8"
                    asChild
                  >
                    <Link href="/projects">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      View Portfolio
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </Card3D>
        </AnimatedSection>
      </div>
    </div>
  )
}
