"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO at TechFlow Solutions",
    company: "TechFlow Solutions",
    avatar: "/images/avatars/sarah.jpg",
    content: "Duc delivered an exceptional AI-powered mobile app that exceeded our expectations. His expertise in React Native and AI integration helped us launch 3 months ahead of schedule. The app now serves 50K+ users with 99.9% uptime.",
    rating: 5,
    project: "Enterprise AI Analytics Platform"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Founder & CEO",
    company: "HealthTech Innovations",
    avatar: "/images/avatars/michael.jpg",
    content: "Working with Duc was a game-changer for our telemedicine platform. His AI integration and HIPAA-compliant development resulted in a 70% reduction in patient wait times. Highly recommended for any healthcare tech project.",
    rating: 5,
    project: "AI Health Monitoring App"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Product Manager",
    company: "EduNext Platform",
    avatar: "/images/avatars/emily.jpg",
    content: "Duc's AI tutoring system revolutionized our learning platform. The personalized curriculum and adaptive assessments increased student engagement by 150%. His technical expertise and communication skills are outstanding.",
    rating: 5,
    project: "AI Tutoring & Learning Management System"
  },
  {
    id: 4,
    name: "James Liu",
    role: "Technical Director",
    company: "SmartHome Solutions",
    avatar: "/images/avatars/james.jpg",
    content: "The IoT ecosystem Duc built for us is incredible. AI-driven automation reduced our clients' energy costs by 30% on average. His attention to detail and scalable architecture made this project a huge success.",
    rating: 5,
    project: "Smart Home Ecosystem with AI"
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "VP of Engineering",
    company: "FinanceForward",
    avatar: "/images/avatars/priya.jpg",
    content: "Duc's trading platform with AI signals generated 20% higher returns for our clients. His expertise in real-time data processing and security implementation is exceptional. A true React Native expert.",
    rating: 5,
    project: "AI-Powered Trading Platform"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-16 space-y-12">
      <div className="text-center space-y-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Client Success Stories
        </motion.h2>
        <motion.p 
          className="text-xl text-slate-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Real feedback from industry leaders who trusted me to deliver their vision
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 bg-slate-900/80 border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-blue-400 opacity-50" />
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-slate-300 leading-relaxed text-sm">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Project */}
                <div className="text-xs text-blue-400 font-semibold">
                  Project: {testimonial.project}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-slate-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-slate-400 text-xs">{testimonial.role}</div>
                    <div className="text-slate-500 text-xs">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { value: "50+", label: "Happy Clients", color: "blue" },
          { value: "99%", label: "Success Rate", color: "green" },
          { value: "4.9★", label: "Average Rating", color: "yellow" },
          { value: "24/7", label: "Support", color: "purple" }
        ].map((stat, index) => (
          <motion.div 
            key={stat.label}
            className="space-y-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
          >
            <div className={`text-3xl font-bold text-${stat.color}-400`}>
              {stat.value}
            </div>
            <div className="text-slate-400 text-sm font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
