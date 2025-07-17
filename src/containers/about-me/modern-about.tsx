"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconDownload,
} from "@tabler/icons-react"
import { 
  Code2, 
  Smartphone, 
  Globe, 
  Zap, 
  Users, 
  Award,
  Target,
  Lightbulb,
  Rocket,
  Star
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function ModernAbout() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Gradient background generator
  const getGradientBackground = (index: number) => {
    const gradients = [
      "bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500",
      "bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500",
      "bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600",
      "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500",
      "bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500",
      "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"
    ]
    return gradients[index % gradients.length]
  }

  const skills = [
    { icon: Code2, label: "React/Next.js", level: "Expert", description: "4+ years building scalable web applications" },
    { icon: Smartphone, label: "React Native", level: "Advanced", description: "Cross-platform mobile development" },
    { icon: Globe, label: "TypeScript", level: "Expert", description: "Type-safe JavaScript development" },
    { icon: Zap, label: "Performance", level: "Advanced", description: "Optimization and best practices" },
    { icon: Users, label: "Team Lead", level: "Experienced", description: "Mentoring and guiding developers" },
    { icon: Award, label: "AI Integration", level: "Advanced", description: "Modern AI-powered applications" },
  ]

  const achievements = [
    { 
      icon: Rocket,
      title: "50+ Projects Delivered",
      description: "Successfully launched applications used by thousands of users"
    },
    {
      icon: Users,
      title: "15+ Developers Mentored", 
      description: "Guided junior developers in React and mobile development"
    },
    {
      icon: Star,
      title: "Enterprise Solutions",
      description: "Built scalable applications for startups and enterprises"
    },
    {
      icon: Target,
      title: "Cross-Platform Expert",
      description: "Seamless experiences across web, mobile, and desktop"
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Hi, I&apos;m Duc
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700 dark:text-neutral-300">
                  Cross-Platform Developer
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                  I specialize in building modern, scalable applications with React, React Native, and Next.js. 
                  From web to mobile, I create seamless user experiences that bridge platforms and exceed expectations.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "4+", label: "Years Experience" },
                  { number: "50+", label: "Projects Delivered" },
                  { number: "15+", label: "Developers Mentored" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`${getGradientBackground(index)} p-4 rounded-2xl text-center gradient-animate`}
                  >
                    <div className="text-white">
                      <div className="text-2xl md:text-3xl font-bold">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                    asChild
                  >
                    <a href="/files/TranAnhDuc-ATS-ReactNative-CV.pdf" target="_blank" rel="noopener noreferrer">
                      <IconDownload className="w-5 h-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    className="border-purple-500/30 text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-xl backdrop-blur-sm"
                    asChild
                  >
                    <a href="mailto:ocean28799@gmail.com">
                      <IconMail className="w-5 h-5 mr-2" />
                      Get In Touch
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: IconBrandGithub, href: "https://github.com/ocean28799", label: "GitHub" },
                  { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/trananhduc99/", label: "LinkedIn" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.includes('mailto') ? '_self' : '_blank'}
                    rel={social.href.includes('mailto') ? '' : 'noopener noreferrer'}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl ${getGradientBackground(index)} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating background elements */}
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-3xl"
                />
                <motion.div 
                  animate={{ 
                    y: [-10, 10, -10],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl"
                />
                <motion.div 
                  animate={{ 
                    y: [10, -10, 10],
                    x: [-5, 5, -5],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute bottom-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
                />
                
                {/* Additional floating shapes */}
                <motion.div 
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-1/2 left-4 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"
                />
                
                {/* Main image container */}
                <motion.div 
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-2xl border border-white/10 dark:border-white/5"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src="/images/Subject3.png"
                      alt="Duc Tran - Cross-Platform Developer"
                      width={400}
                      height={400}
                      className="w-full h-auto rounded-2xl object-cover shadow-lg"
                    />
                  </motion.div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-50" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Specialized in modern web and mobile technologies with a focus on performance, scalability, and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${getGradientBackground(index)} gradient-animate`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 rounded-2xl"></div>
                
                {/* Floating elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-3 right-3 w-6 h-6 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-3 left-3 w-3 h-3 bg-white/20 rounded-sm rotate-45 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <skill.icon className="w-8 h-8" />
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      {skill.level}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.label}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Hover effect */}
                {hoveredCard === index && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 bg-white/10 rounded-2xl border border-white/20"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400 bg-clip-text text-transparent mb-4">
              Key Achievements
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Highlights from my journey in cross-platform development and team leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl ${getGradientBackground(index + 2)} gradient-animate`}
              >
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 rounded-2xl"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
                
                {/* Content */}
                <div className="relative z-10 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                      <achievement.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{achievement.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 gradient-animate overflow-hidden"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 rounded-3xl"></div>
            
            {/* Animated floating elements */}
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full blur-2xl"
            />
            <motion.div 
              animate={{ 
                rotate: -360,
                y: [-10, 10, -10],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 rounded-full blur-xl"
            />
            <motion.div 
              animate={{ 
                x: [-5, 5, -5],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-1/2 right-12 w-12 h-12 bg-white/10 rounded-full blur-lg"
            />
            
            {/* Content */}
            <div className="relative z-10 text-white">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-90" />
              </motion.div>
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                My Development Philosophy
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl leading-relaxed text-white/90 max-w-3xl mx-auto"
              >
                I believe in creating technology that makes a difference. Every line of code should serve a purpose, 
                every interface should delight users, and every solution should scale gracefully. 
                My goal is to bridge the gap between innovative ideas and practical, performant applications.
              </motion.p>
            </div>
            
            {/* Subtle pulse effect */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-3xl"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
