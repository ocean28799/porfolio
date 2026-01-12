"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Rocket,
  Code,
  Users,
  TrendingUp
} from "lucide-react"

interface TimelineEvent {
  year: string
  title: string
  company: string
  description: string
  type: "work" | "education" | "achievement"
  highlights: string[]
  technologies?: string[]
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2024 - Present",
    title: "Senior Software Engineer",
    company: "iLotusLand",
    description: "Leading AI integration and mobile app development, architecting scalable solutions for enterprise clients",
    type: "work",
    highlights: [
      "Led team of 8 developers on AI-powered mobile apps",
      "Architected RAG systems with 95% accuracy",
      "Reduced app load time by 60%"
    ],
    technologies: ["React Native 0.76", "Next.js 15", "GPT-4o", "LangChain"]
  },
  {
    year: "2022 - 2024",
    title: "Full Stack Developer",
    company: "Various Clients",
    description: "Delivered 40+ cross-platform applications for startups and enterprises across 20+ countries",
    type: "work",
    highlights: [
      "Built e-commerce platforms generating $2.5M+ revenue",
      "Developed healthcare apps with HIPAA compliance",
      "Created fintech solutions for 50K+ users"
    ],
    technologies: ["React Native", "Next.js", "Node.js", "PostgreSQL"]
  },
  {
    year: "2021 - 2022",
    title: "Mobile App Developer",
    company: "Tech Startups",
    description: "Specialized in React Native development, delivering high-performance mobile applications",
    type: "work",
    highlights: [
      "Launched 15+ apps on App Store and Play Store",
      "Achieved 4.8+ average app ratings",
      "Implemented CI/CD pipelines for faster deployments"
    ],
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"]
  },
  {
    year: "2020",
    title: "Started Professional Journey",
    company: "Self-taught Developer",
    description: "Began intensive self-learning in modern web and mobile development technologies",
    type: "education",
    highlights: [
      "Completed 500+ hours of coding coursework",
      "Built first production-ready mobile app",
      "Contributed to open-source projects"
    ],
    technologies: ["JavaScript", "React", "Node.js"]
  }
]

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  achievement: Award
}

const colorMap = {
  work: "from-blue-500 to-cyan-500",
  education: "from-purple-500 to-pink-500",
  achievement: "from-amber-500 to-orange-500"
}

export function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-20 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-blue-400 dark:via-purple-500 dark:to-cyan-400 bg-clip-text text-transparent mb-6">
            Career Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
            5+ years of building innovative solutions and growing as a developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-slate-700">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = iconMap[event.type]
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="p-6 bg-gradient-to-br from-white/80 dark:from-slate-900/80 via-gray-50/50 dark:via-slate-800/50 to-white/80 dark:to-slate-900/80 border-gray-200/50 dark:border-slate-700/50 hover:border-gray-300/50 dark:hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 shadow-sm dark:shadow-none">
                      {/* Year Badge */}
                      <Badge className={`mb-4 bg-gradient-to-r ${colorMap[event.type]} text-white border-0`}>
                        {event.year}
                      </Badge>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{event.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{event.company}</p>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">{event.description}</p>

                      {/* Highlights */}
                      <div className="space-y-2 mb-4">
                        {event.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <TrendingUp className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-slate-300">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      {event.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {event.technologies.map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs border-gray-300 dark:border-slate-600 text-gray-600 dark:text-slate-400"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </Card>
                  </div>

                  {/* Center Icon */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-gray-300 dark:border-slate-700 flex items-center justify-center z-10 shadow-sm dark:shadow-none"
                    whileInView={{ 
                      borderColor: ["#d1d5db", "#3B82F6", "#d1d5db"],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <Icon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                  </motion.div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              )
            })}
          </div>

          {/* Start Point */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-4 md:left-1/2 -bottom-4 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center z-10"
          >
            <Rocket className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20"
        >
          {[
            { icon: Code, value: "60+", label: "Projects Delivered" },
            { icon: Users, value: "25+", label: "Happy Clients" },
            { icon: Award, value: "15+", label: "App Store Apps" },
            { icon: TrendingUp, value: "3M+", label: "Users Impacted" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-center p-4 rounded-2xl bg-white/60 dark:bg-slate-800/30 border border-gray-200/50 dark:border-slate-700/50 shadow-sm dark:shadow-none"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-500 dark:text-blue-400" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
