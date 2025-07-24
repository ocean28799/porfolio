"use client"

import { PROJECTS } from "@/lib/constants/projects"
import { Brain, Globe, Bot, TrendingUp, Heart, GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FullScreen } from "@/components/full-screen"
import { PagePerformanceTracker } from "@/components/performance-reporter"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { useAnimation } from "@/hooks/use-animation"
import { useBackground } from "@/contexts/background-context"
import { useMemo } from "react"

export default function Page() {
  const { t } = useTranslation()
  const { backgroundType } = useBackground()
  const animConfig = useAnimation()
  
  // Projects are now loaded inline
  
  // Memoized animation variants to prevent re-renders
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: animConfig.enableAnimations ? 0.3 : 0
      }
    }
  }), [animConfig.enableAnimations])

  const titleVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: animConfig.enableAnimations ? 0.3 : 0
      }
    }
  }), [animConfig.enableAnimations])

  const subtitleVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: animConfig.enableAnimations ? 0.3 : 0
      }
    }
  }), [animConfig.enableAnimations])

  const badgeVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: animConfig.enableAnimations ? 0.3 : 0
      }
    }
  }), [animConfig.enableAnimations])

  const statVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: animConfig.enableAnimations ? 0.3 : 0
      }
    }
  }), [animConfig.enableAnimations])

  const glowVariants = useMemo(() => ({
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    }
  }), [])

  return (
    <div className="min-h-screen text-white overflow-hidden pt-20">
      <PagePerformanceTracker pageName="projects" />
      {/* Background Effects - Performance optimized */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Static gradient background - always visible */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-800" />
        
        {/* Animated elements - only in matrix mode with animations enabled */}
        {backgroundType === 'matrix' && animConfig.enableAnimations && (
          <>
            <motion.div 
              className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.1, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </>
        )}
        
        {/* Complex particles - only on desktop with full animations */}
        {backgroundType === 'matrix' && animConfig.enableParticles && (
          <>
            <motion.div 
              className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </>
        )}
      </div>

      <FullScreen className="w-full max-w-7xl mx-auto py-12 px-4 relative z-10">
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Header Section with Advanced Animations */}
          <motion.div 
            className="text-center space-y-8"
            variants={containerVariants}
          >
            {/* Main Title with Advanced Styling and Animations */}
            <motion.div className="relative" variants={titleVariants}>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 blur-3xl opacity-20 scale-110"
                variants={glowVariants}
                animate="animate"
              />
              <motion.h1 
                className="relative text-7xl md:text-9xl font-black tracking-tight"
                initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: animConfig.enableAnimations ? 0.3 : 0
                }}
              >
                <motion.span 
                  className="block bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                  initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
                  animate={{ 
                    opacity: 1
                  }}
                  transition={{ 
                    duration: animConfig.enableAnimations ? 0.3 : 0
                  }}
                  whileHover={animConfig.enableAnimations ? { 
                    scale: 1.05,
                    transition: { duration: animConfig.reducedDuration }
                  } : {}}
                >
                  {t('projectsPage.title')}
                </motion.span>
                <motion.span 
                  className="block text-2xl md:text-3xl font-light text-slate-400 mt-2 tracking-wide"
                  initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
                  animate={{ opacity: 1 }}
                  transition={{ 
                    duration: animConfig.enableAnimations ? 0.3 : 0
                  }}
                >
                  {t('projectsPage.subtitle')}
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Subtitle with Enhanced Typography and Animations */}
            <motion.div 
              className="max-w-4xl mx-auto space-y-4"
              variants={subtitleVariants}
            >
              <motion.p 
                className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light"
                initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: animConfig.enableAnimations ? 0.3 : 0
                }}
              >
                {t('projectsPage.tagline')}
              </motion.p>
              <motion.p 
                className="text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto"
                initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
                animate={{ opacity: 1 }}
                transition={{ 
                  duration: animConfig.enableAnimations ? 0.3 : 0
                }}
              >
                {t('projectsPage.portfolioDescription')}
              </motion.p>
            </motion.div>

            {/* Tech Stack Badges with Enhanced Design and Stagger Animation */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: animConfig.enableAnimations ? 0.3 : 0
              }}
            >
              {[
                { name: 'React Native + AI', color: 'purple', delay: 0 },
                { name: 'Next.js 15', color: 'blue', delay: 0.1 },
                { name: 'OpenAI Integration', color: 'green', delay: 0.2 },
                { name: 'TypeScript', color: 'pink', delay: 0.3 }
              ].map((tech, index) => (
                <motion.div 
                  key={tech.name}
                  className="group relative"
                  variants={badgeVariants}
                  initial={animConfig.enableAnimations ? "hidden" : "visible"}
                  animate="visible"
                  whileHover={animConfig.enableAnimations ? { 
                    scale: 1.05,
                    transition: { duration: animConfig.reducedDuration }
                  } : {}}
                >
                  <motion.div 
                    className={`absolute -inset-0.5 bg-gradient-to-r from-${tech.color}-600 to-${tech.color}-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300`}
                    animate={animConfig.enableAnimations && backgroundType === 'matrix' ? {
                      scale: [1, 1.05, 1],
                      opacity: [0.6, 0.8, 0.6]
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: backgroundType === 'matrix' ? 0 : index * 0.5
                    }}
                  />
                  <div className="relative px-8 py-4 bg-slate-900 rounded-full flex items-center gap-3">
                    <motion.div 
                      className={`w-3 h-3 bg-${tech.color}-500 rounded-full`}
                      animate={animConfig.enableAnimations && backgroundType === 'matrix' ? {
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: backgroundType === 'matrix' ? 0 : index * 0.3
                      }}
                    />
                    <span className={`text-${tech.color}-200 font-semibold text-lg`}>{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Statistics Section with Counter Animation */}
            <motion.div 
              className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 mt-8 xs:mt-10 sm:mt-12 max-w-4xl mx-auto px-4"
              initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: animConfig.enableAnimations ? 0.3 : 0
              }}
            >
              {[
                { value: "50+", label: t('projectsPage.stats.projectsCompleted'), color: "purple-pink" },
                { value: "4+", label: t('projectsPage.stats.yearsExperience'), color: "blue-cyan" },
                { value: "200k+", label: t('projectsPage.stats.linesOfCode'), color: "green-emerald" },
                { value: "5★", label: t('projectsPage.stats.clientRating'), color: "pink-rose" }
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  className="text-center space-y-2"
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-${stat.color.split('-')[0]}-400 to-${stat.color.split('-')[1]}-500 bg-clip-text text-transparent`}
                    initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: animConfig.enableAnimations ? 0.3 : 0
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="text-slate-400 text-sm font-medium"
                    initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: animConfig.enableAnimations ? 0.3 : 0
                    }}
                  >
                    {stat.label}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Section Divider with Animation */}
          <motion.div 
            className="relative"
            initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
            animate={{ opacity: 1 }}
            transition={{ duration: animConfig.enableAnimations ? 0.3 : 0 }}
          >
            <div className="absolute inset-0 flex items-center">
              <motion.div 
                className="w-full border-t border-gradient-to-r from-transparent via-slate-600 to-transparent"
                initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
                animate={{ opacity: 1 }}
                transition={{ duration: animConfig.enableAnimations ? 0.3 : 0 }}
              />
            </div>
            <div className="relative flex justify-center">
              <motion.div 
                className="px-6 py-3 bg-slate-900 border border-slate-600 rounded-full"
                initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
                animate={{ opacity: 1 }}
                transition={{ duration: animConfig.enableAnimations ? 0.3 : 0 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-2 h-2 bg-purple-500 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-slate-300 font-medium">{t('projectsPage.featuredProjects')}</span>
                  <motion.div 
                    className="w-2 h-2 bg-cyan-500 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Projects Grid with Enhanced Container - Performance Optimized */}
          <motion.div 
            className="relative"
            initial={animConfig.enableAnimations ? { opacity: 0 } : {}}
            animate={{ opacity: 1 }}
            transition={{ duration: animConfig.enableAnimations ? 0.3 : 0 }}
          >
            {/* Background glow - only in matrix mode with effects enabled */}
            {backgroundType === 'matrix' && animConfig.enableGlow && (
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.1, 0.15, 0.1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
            <div className="relative p-4 xs:p-6 sm:p-8">
              <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-6 sm:gap-8">
                {PROJECTS.map((project, index) => {
                  const categoryIcons: Record<string, React.ReactElement> = {
                    "AI-Powered Cross-Platform App": <Brain className="w-5 h-5" />,
                    "Enterprise React Native + AI": <Bot className="w-5 h-5" />,
                    "Next.js 15 + AI Integration": <Globe className="w-5 h-5" />,
                    "Cross-Platform IoT + AI": <TrendingUp className="w-5 h-5" />,
                    "Fintech React Native + AI": <Heart className="w-5 h-5" />,
                    "Next.js E-commerce + AI": <Globe className="w-5 h-5" />,
                    "Healthcare React Native + AI": <Heart className="w-5 h-5" />,
                    "Education Next.js + AI": <GraduationCap className="w-5 h-5" />
                  }
                  
                  const projectSlug = project.title
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, '')
                    .replace(/\s+/g, '-')
                    .replace(/-+/g, '-')
                    .trim()
                  
                  const status = project.demoUrl ? "Completed" : "In Progress"
                  
                  return (
                    <div
                      key={`${project.title}-${index}`}
                      className={`group relative bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 ${
                        animConfig.enableAnimations 
                          ? 'hover:shadow-2xl transform hover:scale-105' 
                          : 'hover:shadow-xl'
                      }`}
                    >
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20" />
                      
                      {/* Image Container */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.src}
                          alt={project.title}
                          fill
                          className={`object-cover transition-transform duration-300 ${
                            animConfig.enableAnimations ? 'group-hover:scale-110' : ''
                          }`}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 6} // Load first 6 images with priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium">
                            {categoryIcons[project.category]}
                            <span className="truncate max-w-[120px]">{project.category}</span>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            status === "Completed" 
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          }`}>
                            {status}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative p-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.techStack.slice(0, 3).map((tech: string, techIndex: number) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded text-xs">
                              +{project.techStack.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Action Links */}
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2">
                            {project.demoUrl && (
                              <Link
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                              >
                                <Globe className="w-4 h-4" />
                                Demo
                              </Link>
                            )}
                            {/* Removed Code button as requested
                            {project.githubUrl && (
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-medium transition-colors"
                              >
                                <Bot className="w-4 h-4" />
                                Code
                              </Link>
                            )}
                            */}
                          </div>

                          <Link
                            href={`/projects/${projectSlug}`}
                            className="flex items-center gap-1 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </FullScreen>
    </div>
  )
}
