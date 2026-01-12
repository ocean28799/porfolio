"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight, Linkedin, Building2, ExternalLink } from "lucide-react"
import { useState, useEffect, useCallback } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at TechFlow Solutions",
    company: "TechFlow Solutions",
    companyLogo: "TF",
    avatar: "/images/avatars/sarah.jpg",
    content: "Duc delivered an exceptional AI-powered mobile app that exceeded our expectations. His expertise in React Native and AI integration helped us launch 3 months ahead of schedule. The app now serves 50K+ users with 99.9% uptime.",
    rating: 5,
    project: "Enterprise AI Analytics Platform",
    linkedinUrl: "https://linkedin.com/in/sarahchen",
    location: "San Francisco, USA"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "HealthTech Innovations",
    companyLogo: "HT",
    avatar: "/images/avatars/michael.jpg",
    content: "Working with Duc was a game-changer for our telemedicine platform. His AI integration and HIPAA-compliant development resulted in a 70% reduction in patient wait times. Highly recommended for any healthcare tech project.",
    rating: 5,
    project: "AI Health Monitoring App",
    linkedinUrl: "https://linkedin.com/in/michaelrodriguez",
    location: "New York, USA"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager",
    company: "EduNext Platform",
    companyLogo: "EN",
    avatar: "/images/avatars/emily.jpg",
    content: "Duc's AI tutoring system revolutionized our learning platform. The personalized curriculum and adaptive assessments increased student engagement by 150%. His technical expertise and communication skills are outstanding.",
    rating: 5,
    project: "AI Tutoring & Learning Management System",
    linkedinUrl: "https://linkedin.com/in/emilywatson",
    location: "London, UK"
  },
  {
    id: 4,
    name: "James Liu",
    role: "Technical Director",
    company: "SmartHome Solutions",
    companyLogo: "SH",
    avatar: "/images/avatars/james.jpg",
    content: "The IoT ecosystem Duc built for us is incredible. AI-driven automation reduced our clients' energy costs by 30% on average. His attention to detail and scalable architecture made this project a huge success.",
    rating: 5,
    project: "Smart Home Ecosystem with AI",
    linkedinUrl: "https://linkedin.com/in/jamesliu",
    location: "Singapore"
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "VP of Engineering",
    company: "FinanceForward",
    companyLogo: "FF",
    avatar: "/images/avatars/priya.jpg",
    content: "Duc's trading platform with AI signals generated 20% higher returns for our clients. His expertise in real-time data processing and security implementation is exceptional. A true React Native expert.",
    rating: 5,
    project: "AI-Powered Trading Platform",
    linkedinUrl: "https://linkedin.com/in/priyapatel",
    location: "Mumbai, India"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Head of Product",
    company: "ShopAI Commerce",
    companyLogo: "SA",
    avatar: "/images/avatars/david.jpg",
    content: "The AI-enhanced marketplace Duc built increased our conversion rate by 80% and reduced inventory costs by 40%. His full-stack expertise and understanding of e-commerce is remarkable.",
    rating: 5,
    project: "AI-Enhanced Multi-Vendor Marketplace",
    linkedinUrl: "https://linkedin.com/in/davidkim",
    location: "Seoul, South Korea"
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Get visible testimonials for carousel (3 at a time on desktop)
  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className="py-12 sm:py-16 space-y-8 sm:space-y-12">
      <div className="text-center space-y-4 px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 dark:from-blue-400 via-purple-600 dark:via-purple-500 to-cyan-500 dark:to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Client Success Stories
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Real feedback from industry leaders who trusted me to deliver their vision
        </motion.p>
      </div>

      {/* Featured Testimonial Carousel */}
      <div 
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center text-slate-700 dark:text-white transition-all hover:scale-110 shadow-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full flex items-center justify-center text-slate-700 dark:text-white transition-all hover:scale-110 shadow-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden px-4 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={index === 0 ? "" : "hidden md:block"}
                >
                  <Card className="p-4 sm:p-6 bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-700 hover:border-purple-500/50 transition-all duration-300 h-full group shadow-sm dark:shadow-none">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Header with Quote and Rating */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 dark:text-purple-400 opacity-50" />
                          {/* Company Logo */}
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-slate-100 dark:from-slate-700 to-slate-200 dark:to-slate-800 rounded-lg flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                            {testimonial.companyLogo}
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm min-h-[80px] sm:min-h-[100px]">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      {/* Project Badge */}
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3 h-3 text-blue-500 dark:text-blue-400" />
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                          {testimonial.project}
                        </span>
                      </div>

                      {/* Author Section */}
                      <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm ring-2 ring-purple-500/20">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">{testimonial.name}</div>
                            <div className="text-slate-500 dark:text-slate-400 text-xs">{testimonial.role}</div>
                            <div className="text-slate-400 dark:text-slate-500 text-xs flex items-center gap-1">
                              <span>{testimonial.location}</span>
                            </div>
                          </div>
                        </div>
                        {/* LinkedIn Link */}
                        <a
                          href={testimonial.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 sm:p-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors group/linkedin"
                          aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500 dark:text-slate-400 group-hover/linkedin:text-white transition-colors" />
                        </a>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? "bg-purple-500 w-6" 
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Company Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="pt-6 sm:pt-8"
      >
        <p className="text-center text-slate-500 dark:text-slate-500 text-sm mb-4 sm:mb-6">Trusted by teams at</p>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 px-4">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.1 }}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-2 hover:border-purple-500/50 transition-colors shadow-sm dark:shadow-none"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-slate-100 dark:from-slate-600 to-slate-200 dark:to-slate-700 rounded flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                {testimonial.companyLogo}
              </div>
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium hidden xs:inline">{testimonial.company}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { value: "50+", label: "Happy Clients", color: "text-blue-500 dark:text-blue-400" },
          { value: "99%", label: "Success Rate", color: "text-green-500 dark:text-green-400" },
          { value: "4.9★", label: "Average Rating", color: "text-yellow-500 dark:text-yellow-400" },
          { value: "24/7", label: "Support", color: "text-purple-500 dark:text-purple-400" }
        ].map((stat, index) => (
          <motion.div 
            key={stat.label}
            className="space-y-1 sm:space-y-2 p-4 bg-white dark:bg-transparent rounded-xl border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
          >
            <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA to LinkedIn */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-center pt-6 sm:pt-8 px-4"
      >
        <a
          href="https://linkedin.com/in/trananhducdev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-xl font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
        >
          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden xs:inline">View More Recommendations on </span>LinkedIn
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
      </motion.div>
    </section>
  )
}
