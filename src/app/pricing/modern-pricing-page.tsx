"use client"

import { motion } from "framer-motion"
import { 
  Check, 
  Code2, 
  Smartphone, 
  Globe, 
  Zap, 
  Users, 
  Clock,
  Star,
  ArrowRight,
  MessageSquare,
  Calendar,
  Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const pricingPlans = [
  {
    name: "Basic Development",
    price: "$12",
    period: "/hour",
    description: "Perfect for small features and bug fixes",
    features: [
      "React/Next.js Development",
      "Component Implementation",
      "Bug Fixes & Optimization",
      "Code Review & Documentation",
      "Basic UI/UX Implementation",
      "Responsive Design"
    ],
    timeframe: "Quick turnaround",
    gradient: "from-purple-500 to-cyan-500",
    popular: false
  },
  {
    name: "Full-Stack Project",
    price: "$960",
    period: "/2 weeks",
    description: "Complete web application development",
    features: [
      "Full React/Next.js Application",
      "Database Integration",
      "Authentication System",
      "API Development",
      "Advanced UI Components",
      "Testing & Deployment",
      "Documentation & Training",
      "2 Weeks Post-Launch Support"
    ],
    timeframe: "2-3 weeks delivery",
    gradient: "from-green-500 to-purple-500",
    popular: true
  },
  {
    name: "React Native Mobile",
    price: "$1,440",
    period: "/3 weeks",
    description: "Cross-platform mobile application",
    features: [
      "React Native Development",
      "iOS & Android Compatible",
      "Native Features Integration",
      "State Management (Redux/Zustand)",
      "API Integration",
      "Push Notifications",
      "App Store Deployment Guide",
      "3 Weeks Post-Launch Support"
    ],
    timeframe: "3-4 weeks delivery",
    gradient: "from-cyan-500 to-green-500",
    popular: false
  }
]

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "React, Next.js, TypeScript applications with modern architecture",
    hourlyRate: "$12/hour"
  },
  {
    icon: Smartphone,
    title: "Mobile Development", 
    description: "Cross-platform React Native apps for iOS and Android",
    hourlyRate: "$12/hour"
  },
  {
    icon: Globe,
    title: "Full-Stack Solutions",
    description: "End-to-end development with database, API, and frontend",
    hourlyRate: "$12/hour"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Code review, optimization, and performance improvements",
    hourlyRate: "$12/hour"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Code reviews, mentoring, and team development support",
    hourlyRate: "$12/hour"
  },
  {
    icon: MessageSquare,
    title: "AI API Integration",
    description: "Integrate AI APIs like OpenAI into your applications",
    hourlyRate: "$12/hour"
  }
]

export function ModernPricingPage() {
  return (
    <div className="relative">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/20 to-purple-50/30 dark:from-green-950/10 dark:via-blue-950/5 dark:to-purple-950/10" />
        <motion.div
          className="absolute top-1/5 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/12 to-blue-400/12 rounded-full blur-3xl gpu-accelerated"
          animate={{
            scale: [1, 1.3, 1.1, 1],
            rotate: [0, 120, 240, 360],
            x: [0, -50, 30, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl gpu-accelerated"
          animate={{
            scale: [1.2, 1, 1.4, 1.2],
            rotate: [360, 240, 120, 0],
            x: [0, 60, -40, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        {/* Header Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 lg:mb-16"
            >
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-purple-600/20 rounded-3xl blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Hire Me
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed px-4"
              >
                Professional React/Next.js & React Native development at competitive rates. 
                4+ years of experience delivering high-quality, scalable solutions.
              </motion.p>

              {/* Rate Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20"
              >
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                <span className="text-base sm:text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                  Starting at $12/hour
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className={`relative group ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <motion.div
                  className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 h-full ${
                    plan.popular 
                      ? 'border-purple-500/30 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-emerald-500/5' 
                      : 'border-neutral-200/20 dark:border-neutral-700/20 bg-white/50 dark:bg-neutral-900/50'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        <span className="text-neutral-600 dark:text-neutral-400 mb-1">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                        {plan.timeframe}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-neutral-700 dark:text-neutral-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                          : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'
                      } text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                      asChild
                    >
                      <a href="mailto:ocean28799@gmail.com?subject=Project Inquiry - ${plan.name}">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        </section>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Services I Offer
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-4">
              Comprehensive development services with transparent hourly pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl backdrop-blur-sm border border-neutral-200/20 dark:border-neutral-700/20 bg-white/50 dark:bg-neutral-900/50 hover:border-emerald-500/30 transition-all duration-300">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="relative z-10">
                    <service.icon className="w-8 h-8 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-600 font-semibold">
                        {service.hourlyRate}
                      </span>
                      <Star className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="relative p-6 sm:p-8 lg:p-12 rounded-3xl backdrop-blur-sm border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-purple-500/5"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-purple-600/10 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
                  Let&apos;s discuss your project requirements and create something amazing together. 
                  I offer flexible pricing and transparent communication throughout the development process.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <motion.a
                    href="mailto:ocean28799@gmail.com?subject=Project Inquiry&body=Hi Duc, I'm interested in hiring you for a project. Here are the details:"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0 inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Send Project Details</span>
                  </motion.a>
                  <motion.a
                    href="https://calendly.com/ocean28799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 sm:py-4 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">Schedule a Call</span>
                  </motion.a>
                </div>
                
                {/* Contact Info */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-emerald-500/20">
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-center justify-center gap-2">
                      <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Available for new projects</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Quick response within 24h</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>4+ years of experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
