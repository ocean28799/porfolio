"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Cpu } from "lucide-react"
import Link from "next/link"

export function MyUniverse() {
  const skills = [
    {
      icon: Code,
      title: "React.js Development",
      description: "Building modern, interactive web applications with React hooks, context, and component architecture",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "React Native",
      description: "Cross-platform mobile app development for iOS and Android with native performance",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Next.js",
      description: "Full-stack React applications with SSR, SSG, and modern web development practices",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Cpu,
      title: "AI API Integration",
      description: "Implementing AI-powered features using APIs like OpenAI, Claude, and other modern AI services",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to My Universe
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I&apos;m <span className="text-cyan-400 font-semibold">Duc Tran</span>, a passionate developer specializing in 
            <span className="text-purple-400"> React.js</span>, 
            <span className="text-blue-400"> React Native</span>, and 
            <span className="text-green-400"> Next.js</span>. I love building 
            modern applications and exploring <span className="text-orange-400">AI API integrations</span>.
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.gradient} mb-4`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {skill.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {skill.description}
              </p>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to bring your ideas to life with modern web and mobile technologies?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Me
              </motion.button>
            </Link>
            
            <Link href="/pricing">
              <motion.button
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
    </section>
  )
}
