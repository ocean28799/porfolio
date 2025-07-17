"use client"

import { Compare } from "@/components/ui/compare"
import { motion } from "framer-motion"
import { Code, Smartphone, Globe, Cpu, Zap, Database } from "lucide-react"

export function SkillComparison() {
  const beforeSkills = [
    "Basic HTML/CSS",
    "jQuery Scripts", 
    "Static Websites",
    "Manual Deployment",
    "Limited Mobile Support"
  ]

  const afterSkills = [
    "Modern React.js",
    "React Native Apps",
    "Next.js Full-Stack",
    "AI API Integration", 
    "Cross-Platform Development"
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-cyan-500 to-green-400 bg-clip-text text-transparent mb-6">
            My Development Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From basic web development to modern React ecosystem mastery with AI integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Compare
              firstComponent={
                <div className="p-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl h-full">
                  <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6 flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    Before: Traditional Development
                  </h3>
                  <div className="space-y-4">
                    {beforeSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                        <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              }
              secondComponent={
                <div className="p-8 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-green-500/10 rounded-2xl h-full border border-purple-500/20">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    Now: Modern React Ecosystem
                  </h3>
                  <div className="space-y-4">
                    {afterSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-3 p-3 bg-white/50 dark:bg-black/20 rounded-lg border border-purple-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              }
              className="rounded-2xl overflow-hidden shadow-2xl"
            />
          </motion.div>

          {/* Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Current Tech Stack
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Code, name: "React.js", color: "from-blue-500 to-cyan-500" },
                { icon: Smartphone, name: "React Native", color: "from-purple-500 to-pink-500" },
                { icon: Globe, name: "Next.js", color: "from-green-500 to-teal-500" },
                { icon: Cpu, name: "AI APIs", color: "from-orange-500 to-red-500" },
                { icon: Zap, name: "TypeScript", color: "from-indigo-500 to-purple-500" },
                { icon: Database, name: "Full-Stack", color: "from-teal-500 to-green-500" }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative p-4 bg-white/10 dark:bg-black/20 rounded-xl border border-white/20 dark:border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${tech.color} mb-3`}>
                    <tech.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">{tech.name}</h4>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                What Makes Me Different?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I focus on the <span className="text-purple-600 dark:text-purple-400 font-semibold">React ecosystem</span> and 
                <span className="text-cyan-600 dark:text-cyan-400 font-semibold"> AI API integration</span>, 
                building scalable applications that solve real problems with modern technology.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
