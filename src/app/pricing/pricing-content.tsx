"use client"

import { motion } from "framer-motion"
import { FullScreen } from "@/components/full-screen"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Code, Smartphone, Globe, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { memo, useState, useEffect } from "react"

// Simple Card without context dependency for performance
const SimpleCard = memo(({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={`rounded-xl border bg-white/80 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none backdrop-blur-sm ${className}`}
    {...props}
  >
    {children}
  </div>
))
SimpleCard.displayName = "SimpleCard"

// Simple Badge without context dependency
const SimpleBadge = memo(({ className = "", children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span 
    className={`inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-medium ${className}`}
    {...props}
  >
    {children}
  </span>
))
SimpleBadge.displayName = "SimpleBadge"

const pricingPlans = [
  {
    name: "Expert Development",
    price: "$15",
    period: "per hour",
    description: "Premium development services for complex projects and enterprise solutions",
    features: [
      "Senior React Native & Next.js development",
      "Advanced AI integration (OpenAI, Custom ML)",
      "Performance optimization & architecture review",
      "Code review, testing, and quality assurance",
      "Technical consultation & strategy",
      "Priority email & Slack support",
      "Git workflow & CI/CD setup",
      "Documentation & knowledge transfer",
    ],
    popular: false,
    cta: "Hire Expert Developer",
    color: "blue",
  },
  {
    name: "Complete AI-Powered App",
    price: "$2,500",
    period: "starting from",
    description: "Full-stack AI-integrated React Native application with enterprise features",
    features: [
      "React Native cross-platform app (iOS & Android)",
      "Advanced AI integration (GPT-4, Vision, Speech)",
      "Custom backend API with AI capabilities",
      "Real-time features & WebSocket integration",
      "Push notifications & analytics",
      "App Store & Google Play deployment",
      "Admin dashboard & analytics panel",
      "6 months premium support & maintenance",
      "Full source code ownership",
      "Performance monitoring & optimization",
    ],
    popular: true,
    cta: "Start AI Project",
    color: "purple",
  },
  {
    name: "Enterprise Web Platform",
    price: "$1,800",
    period: "starting from",
    description: "Scalable Next.js 15 web application with AI features and enterprise architecture",
    features: [
      "Next.js 15 with latest App Router",
      "AI-powered features & automation",
      "TypeScript & modern architecture",
      "Responsive design & mobile optimization",
      "Advanced SEO & performance optimization",
      "Database design & API development",
      "Authentication & authorization system",
      "Admin dashboard & content management",
      "Performance monitoring & analytics",
      "3 months free maintenance",
    ],
    popular: false,
    cta: "Build Web Platform",
    color: "green",
  },
]

const additionalServices = [
  {
    name: "AI Integration & Automation",
    price: "$800 - $2,200",
    description: "Add cutting-edge AI capabilities: OpenAI GPT-4, computer vision, ML models, and automation to existing applications",
    icon: Zap,
  },
  {
    name: "App Migration & Modernization",
    price: "$1,500 - $3,500",
    description: "Migrate legacy native apps to React Native or modernize existing React Native apps with latest features",
    icon: Code,
  },
  {
    name: "Premium Support & Maintenance",
    price: "$350/month",
    description: "Ongoing premium support, AI model updates, performance monitoring, and feature enhancements",
    icon: Smartphone,
  },
  {
    name: "Performance & Scale Optimization",
    price: "$600 - $1,800",
    description: "Comprehensive performance audit, optimization, scalability improvements, and architecture review",
    icon: Globe,
  },
]

export function PricingPageContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Loading skeleton
  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
        <div className="w-full max-w-7xl mx-auto px-4 py-16">
          <div className="h-24 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg mx-auto mb-8 animate-pulse" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-96 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 dark:from-slate-900 via-white dark:via-slate-900 to-slate-100 dark:to-slate-800 text-slate-900 dark:text-white pt-20 relative">
      {/* Optimized Static Background - no blur for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ willChange: 'transform' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.05),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(168,85,247,0.06),transparent)] dark:bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(168,85,247,0.04),transparent)]"></div>
      </div>
      <FullScreen className="w-full xl:w-[85%] mx-auto py-12 xs:py-8 relative z-10">
        <div className="space-y-12 xs:space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 xs:space-y-3 px-4 xs:px-2">
            <div className="relative inline-block">
              <motion.h1 
                className="text-5xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black bg-gradient-to-r from-emerald-500 dark:from-emerald-400 via-blue-600 dark:via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight xs:leading-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Pricing
              </motion.h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-lg blur opacity-20 dark:opacity-25"></div>
            </div>
            <motion.p 
              className="text-lg xs:text-base sm:text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto px-2 xs:px-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transparent, competitive pricing for world-class development services
            </motion.p>
            <div className="flex flex-wrap justify-center gap-2 xs:gap-1.5 px-2">
              <SimpleBadge className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700">
                ✓ No Hidden Fees
              </SimpleBadge>
              <SimpleBadge className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700">
                ✓ Flexible Terms
              </SimpleBadge>
              <SimpleBadge className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-700">
                ✓ Quality Guaranteed
              </SimpleBadge>
            </div>
          </div>

          {/* Main Pricing Plans */}
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-4 px-4 xs:px-2">
            {pricingPlans.map((plan, index) => (
              <SimpleCard
                key={index}
                className={`relative transition-all duration-300 hover:scale-105 xs:hover:scale-100 hover:shadow-xl ${
                  plan.popular 
                    ? "border-purple-500 dark:border-purple-500 shadow-2xl shadow-purple-500/20 ring-2 ring-purple-500/20" 
                    : "hover:border-slate-300 dark:hover:border-slate-600"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <SimpleBadge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-4 py-1.5 shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </SimpleBadge>
                  </div>
                )}
                <div className="text-center pb-3 xs:pb-2 px-4 xs:px-3 pt-8 xs:pt-6">
                  <h3 className="text-xl xs:text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                  <div className="space-y-2 xs:space-y-1 mt-4">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl xs:text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 dark:from-blue-400 to-purple-600 dark:to-purple-400 bg-clip-text text-transparent">{plan.price}</span>
                      <span className="text-slate-500 dark:text-gray-400 text-sm xs:text-xs">{plan.period}</span>
                    </div>
                    <p className="text-slate-600 dark:text-gray-400 text-sm xs:text-xs leading-relaxed xs:leading-snug px-2 xs:px-0">{plan.description}</p>
                  </div>
                </div>
                <div className="space-y-4 xs:space-y-3 px-6 xs:px-4 pb-6 xs:pb-4">
                  <ul className="space-y-2.5 xs:space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 xs:gap-1.5">
                        <Check className="w-4 h-4 xs:w-3.5 xs:h-3.5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5 xs:mt-0" />
                        <span className="text-slate-600 dark:text-gray-300 text-sm xs:text-xs leading-relaxed xs:leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="mailto:ocean28799@gmail.com">
                    <Button
                      className={`w-full min-h-[44px] xs:text-sm mt-4 ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                          : plan.color === "blue"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                          : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 xs:w-3 xs:h-3 ml-2 xs:ml-1" />
                    </Button>
                  </Link>
                </div>
              </SimpleCard>
            ))}
          </div>

          {/* Additional Services */}
          <div className="space-y-6 xs:space-y-4">
            <div className="text-center px-4 xs:px-2">
              <h2 className="text-3xl xs:text-2xl sm:text-4xl font-bold mb-3 xs:mb-2 bg-gradient-to-r from-cyan-500 dark:from-cyan-400 to-blue-600 dark:to-blue-500 bg-clip-text text-transparent">
                Additional Services
              </h2>
              <p className="text-slate-600 dark:text-gray-400 text-base xs:text-sm sm:text-lg">
                Specialized services to meet your specific needs
              </p>
            </div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-3 px-4 xs:px-2">
              {additionalServices.map((service, index) => (
                <SimpleCard key={index} className="hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg">
                  <div className="p-4 xs:p-3 text-center space-y-3 xs:space-y-2">
                    <div className="w-12 h-12 xs:w-10 xs:h-10 sm:w-14 sm:h-14 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                      <service.icon className="w-6 h-6 xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h3 className="text-base xs:text-sm sm:text-lg font-semibold text-slate-900 dark:text-white leading-tight">{service.name}</h3>
                    <p className="text-xl xs:text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">{service.price}</p>
                    <p className="text-slate-600 dark:text-gray-400 text-xs xs:text-[11px] sm:text-sm leading-relaxed xs:leading-snug">{service.description}</p>
                  </div>
                </SimpleCard>
              ))}
            </div>
          </div>

          {/* Why Choose Me */}
          <div className="px-4 xs:px-2">
            <SimpleCard className="overflow-hidden">
              <div className="bg-gradient-to-r from-amber-50 dark:from-amber-900/20 via-orange-50 dark:via-orange-900/20 to-yellow-50 dark:to-yellow-900/20 p-6 xs:p-4">
                <h2 className="text-2xl xs:text-xl sm:text-3xl font-bold mb-6 xs:mb-4 text-center bg-gradient-to-r from-yellow-500 dark:from-yellow-400 to-orange-600 dark:to-orange-500 bg-clip-text text-transparent">
                  Why Choose My Services?
                </h2>
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-4">
                  <div className="text-center space-y-3 xs:space-y-2">
                    <div className="w-14 h-14 xs:w-12 xs:h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/25">
                      <Check className="w-7 h-7 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-base xs:text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">5+ Years Experience</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-xs xs:text-[11px] sm:text-sm">Proven track record with diverse projects</p>
                  </div>
                  <div className="text-center space-y-3 xs:space-y-2">
                    <div className="w-14 h-14 xs:w-12 xs:h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                      <Globe className="w-7 h-7 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-base xs:text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">Global Experience</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-xs xs:text-[11px] sm:text-sm">Worked with clients from 20+ countries</p>
                  </div>
                  <div className="text-center space-y-3 xs:space-y-2">
                    <div className="w-14 h-14 xs:w-12 xs:h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                      <Code className="w-7 h-7 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-base xs:text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">Modern Tech Stack</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-xs xs:text-[11px] sm:text-sm">Latest technologies and best practices</p>
                  </div>
                  <div className="text-center space-y-3 xs:space-y-2">
                    <div className="w-14 h-14 xs:w-12 xs:h-12 sm:w-16 sm:h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                      <Zap className="w-7 h-7 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-base xs:text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">Fast Delivery</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-xs xs:text-[11px] sm:text-sm">Efficient development with quality focus</p>
                  </div>
                </div>
              </div>
            </SimpleCard>
          </div>

          {/* FAQ */}
          <div className="space-y-6 xs:space-y-4 px-4 xs:px-2">
            <h2 className="text-3xl xs:text-2xl sm:text-4xl font-bold text-center bg-gradient-to-r from-pink-500 dark:from-pink-400 to-rose-600 dark:to-red-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:gap-3">
              <SimpleCard className="hover:border-pink-400 dark:hover:border-pink-500/50 transition-colors">
                <div className="p-5 xs:p-4">
                  <h3 className="text-base xs:text-sm sm:text-lg font-semibold mb-2 xs:mb-1.5 text-cyan-600 dark:text-cyan-400">Do you offer fixed-price projects?</h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm xs:text-xs leading-relaxed xs:leading-snug">
                    Yes! After discussing your requirements, I can provide a fixed quote for the entire project. This is ideal for well-defined projects with clear scope.
                  </p>
                </div>
              </SimpleCard>
              <SimpleCard className="hover:border-pink-400 dark:hover:border-pink-500/50 transition-colors">
                <div className="p-5 xs:p-4">
                  <h3 className="text-base xs:text-sm sm:text-lg font-semibold mb-2 xs:mb-1.5 text-cyan-600 dark:text-cyan-400">What&apos;s included in maintenance?</h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm xs:text-xs leading-relaxed xs:leading-snug">
                    Bug fixes, security updates, performance monitoring, minor feature updates, and technical support via email or chat.
                  </p>
                </div>
              </SimpleCard>
              <SimpleCard className="hover:border-pink-400 dark:hover:border-pink-500/50 transition-colors">
                <div className="p-5 xs:p-4">
                  <h3 className="text-base xs:text-sm sm:text-lg font-semibold mb-2 xs:mb-1.5 text-cyan-600 dark:text-cyan-400">How do payments work?</h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm xs:text-xs leading-relaxed xs:leading-snug">
                    For hourly work: weekly billing. For projects: 50% upfront, 50% on completion. I accept PayPal, Wise, and bank transfers.
                  </p>
                </div>
              </SimpleCard>
              <SimpleCard className="hover:border-pink-400 dark:hover:border-pink-500/50 transition-colors">
                <div className="p-5 xs:p-4">
                  <h3 className="text-base xs:text-sm sm:text-lg font-semibold mb-2 xs:mb-1.5 text-cyan-600 dark:text-cyan-400">Do you provide source code?</h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm xs:text-xs leading-relaxed xs:leading-snug">
                    Absolutely! You get full ownership of the source code, complete documentation, and deployment guides for all projects.
                  </p>
                </div>
              </SimpleCard>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4 xs:px-2">
            <SimpleCard className="overflow-hidden">
              <div className="bg-gradient-to-br from-blue-100 dark:from-blue-900/50 via-purple-100 dark:via-purple-900/50 to-pink-100 dark:to-pink-900/50 p-8 xs:p-5 text-center">
                <h2 className="text-2xl xs:text-xl sm:text-3xl font-bold mb-3 xs:mb-2 text-slate-900 dark:text-white">Ready to Start Your Project?</h2>
                <p className="text-slate-600 dark:text-gray-300 mb-6 xs:mb-4 max-w-2xl mx-auto text-sm xs:text-xs sm:text-base leading-relaxed xs:leading-snug">
                  Let&apos;s discuss your requirements and find the perfect solution for your needs. 
                  Free consultation to understand your project and provide accurate estimates.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 xs:gap-2 justify-center">
                  <Link href="mailto:ocean28799@gmail.com">
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 w-full sm:w-auto min-h-[44px] text-sm xs:text-xs sm:text-base shadow-lg shadow-purple-500/25">
                      <Mail className="w-4 h-4 xs:w-3 xs:h-3 sm:w-5 sm:h-5 mr-2 xs:mr-1" />
                      Get Free Quote
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-gray-800 w-full sm:w-auto min-h-[44px] text-sm xs:text-xs sm:text-base">
                      Learn More About Me
                    </Button>
                  </Link>
                </div>
              </div>
            </SimpleCard>
          </div>
        </div>
      </FullScreen>
    </div>
  )
}
