"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code, Smartphone, Globe, Zap } from "lucide-react"
import Image from "next/image"

export function ProjectShowcase() {
  const projects = [
    {
      title: "E-Commerce React App",
      description: "Modern e-commerce platform built with React.js, featuring shopping cart, payment integration, and responsive design.",
      tech: ["React.js", "Redux", "Stripe API", "Tailwind CSS"],
      image: "/images/mockup/growing_mockup.png",
      github: "https://github.com/ocean28799",
      demo: "#",
      category: "Web App",
      icon: Globe
    },
    {
      title: "Cross-Platform Mobile App",
      description: "React Native application for iOS and Android with real-time features and native performance.",
      tech: ["React Native", "Firebase", "AsyncStorage", "Push Notifications"],
      image: "/images/mockup/hivello_mockup.png",
      github: "https://github.com/ocean28799",
      demo: "#",
      category: "Mobile App",
      icon: Smartphone
    },
    {
      title: "AI-Powered Next.js Platform",
      description: "Full-stack application integrating AI APIs for intelligent content generation and analysis.",
      tech: ["Next.js", "OpenAI API", "PostgreSQL", "Prisma"],
      image: "/images/mockup/ilotusland_mockup.png",
      github: "https://github.com/ocean28799",
      demo: "#",
      category: "AI Integration",
      icon: Zap
    },
    {
      title: "Task Management Dashboard",
      description: "React-based project management tool with real-time collaboration and data visualization.",
      tech: ["React.js", "Chart.js", "Socket.io", "Express.js"],
      image: "/images/mockup/tracki_mockup.png",
      github: "https://github.com/ocean28799",
      demo: "#",
      category: "Dashboard",
      icon: Code
    }
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
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my expertise in React.js, React Native, Next.js, and AI API integration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 dark:border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                    <project.icon className="w-4 h-4" />
                    {project.category}
                  </div>
                </div>

                {/* Project Links */}
                <motion.div
                  className="absolute top-4 right-4 z-20 flex gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-600 dark:text-purple-400 text-sm rounded-full border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Project
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-purple-500/30 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together on your next project?
          </p>
          <motion.a
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Build Something Amazing
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
