"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Mail, 
  MapPin, 
  Clock, 
  Github, 
  Linkedin, 
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact/contact-form"
import { AvailabilityCard, AvailabilityBadge } from "@/components/sections/availability-status"

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/ocean2024D",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "bg-gray-100 dark:bg-slate-800"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anh-duc-tran/",
    color: "hover:text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:trananhducdev@gmail.com",
    color: "hover:text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/30"
  }
]

const QUICK_FACTS = [
  {
    icon: MapPin,
    label: "Location",
    value: "Ho Chi Minh City, Vietnam",
    color: "text-emerald-500"
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "UTC+7 (ICT)",
    color: "text-blue-500"
  },
  {
    icon: Globe,
    label: "Languages",
    value: "English, Vietnamese",
    color: "text-purple-500"
  },
  {
    icon: Calendar,
    label: "Response Time",
    value: "Within 24 hours",
    color: "text-orange-500"
  }
]

const SERVICES = [
  {
    title: "Mobile App Development",
    description: "Enterprise-scale React Native apps with 60fps animations and native performance",
    available: true
  },
  {
    title: "Full-Stack Web Development",
    description: "Next.js 15 platforms with modern architecture and optimal Core Web Vitals",
    available: true
  },
  {
    title: "AI/ML Integration",
    description: "GPT-4, Claude, TensorFlow integration with RAG systems and intelligent automation",
    available: true
  },
  {
    title: "Technical Leadership",
    description: "Architecture consulting, code review, team mentoring, and scalability planning",
    available: true
  }
]

export function ContactContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <AvailabilityBadge />
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Impactful
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
            Ready to accelerate your product development? Let&apos;s discuss how I can help you build scalable solutions that deliver real business results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick Facts Card */}
            <Card className="p-6 bg-white/90 dark:bg-slate-900/90 border-gray-200/50 dark:border-slate-700/50 shadow-xl dark:shadow-none">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                Quick Info
              </h3>
              <div className="space-y-4">
                {QUICK_FACTS.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gray-100 dark:bg-slate-800 ${fact.color}`}>
                      <fact.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-slate-500 uppercase tracking-wider">
                        {fact.label}
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {fact.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Services Card */}
            <Card className="p-6 bg-white/90 dark:bg-slate-900/90 border-gray-200/50 dark:border-slate-700/50 shadow-xl dark:shadow-none">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Services Offered
              </h3>
              <div className="space-y-3">
                {SERVICES.map((service) => (
                  <div 
                    key={service.title}
                    className="p-3 rounded-lg bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700/50"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                        {service.title}
                      </h4>
                      {service.available && (
                        <Badge variant="outline" className="text-xs bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Available
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Availability Card */}
            <AvailabilityCard />

            {/* Social Links Card */}
            <Card className="p-6 bg-white/90 dark:bg-slate-900/90 border-gray-200/50 dark:border-slate-700/50 shadow-xl dark:shadow-none">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl ${link.bgColor} transition-all duration-300 hover:scale-110 ${link.color}`}
                  >
                    <link.icon className="w-5 h-5 text-gray-600 dark:text-slate-300" />
                  </Link>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-slate-400">
                Prefer to email directly?{" "}
                <a 
                  href="mailto:trananhducdev@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  trananhducdev@gmail.com
                </a>
              </p>
            </Card>

            {/* CTA for Case Studies */}
            <Card className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 border-none shadow-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Want to see my work?
              </h3>
              <p className="text-sm text-blue-100 mb-4">
                Check out detailed case studies of my recent projects.
              </p>
              <Link href="/case-studies">
                <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                  View Case Studies
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Bottom Section - FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="p-8 bg-white/90 dark:bg-slate-900/90 border-gray-200/50 dark:border-slate-700/50 shadow-xl dark:shadow-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  What&apos;s your typical project timeline?
                </h4>
                <p className="text-sm text-gray-600 dark:text-slate-300">
                  It depends on the scope, but most projects range from 2-8 weeks. I&apos;ll provide a detailed timeline after understanding your requirements.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Do you work with international clients?
                </h4>
                <p className="text-sm text-gray-600 dark:text-slate-300">
                  Absolutely! I work with clients worldwide. I&apos;m flexible with meeting times across different timezones.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  What technologies do you specialize in?
                </h4>
                <p className="text-sm text-gray-600 dark:text-slate-300">
                  React Native, Next.js, TypeScript, Node.js, and AI/LLM integrations. I&apos;m always learning new technologies.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Are you available for full-time positions?
                </h4>
                <p className="text-sm text-gray-600 dark:text-slate-300">
                  Yes! I&apos;m open to both freelance projects and full-time opportunities. Let&apos;s discuss what works best.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
