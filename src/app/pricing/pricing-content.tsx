"use client"

import { motion } from "framer-motion"
import { FullScreen } from "@/components/full-screen"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Code, Smartphone, Globe, Mail, ArrowRight, Shield, Clock, Sparkles, Rocket, HeartHandshake, Brain } from "lucide-react"
import Link from "next/link"
import { memo, useState, useEffect } from "react"

// Simple Card without context dependency for performance
const SimpleCard = memo(({ className = "", children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={`rounded-2xl border bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600 shadow-lg dark:shadow-xl ${className}`}
    {...props}
  >
    {children}
  </div>
))
SimpleCard.displayName = "SimpleCard"

// Simple Badge without context dependency
const SimpleBadge = memo(({ className = "", children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span 
    className={`inline-flex items-center justify-center rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-wide ${className}`}
    {...props}
  >
    {children}
  </span>
))
SimpleBadge.displayName = "SimpleBadge"

const pricingPlans = [
  {
    name: "Hourly Consulting",
    price: "$15",
    period: "/hour",
    description: "Flexible expert guidance for your ongoing projects. Perfect for code reviews, consultations, and technical mentorship.",
    features: [
      "1-on-1 pair programming sessions",
      "Architecture review & optimization",
      "Code quality audits & refactoring",
      "AI/ML integration guidance",
      "Performance troubleshooting",
      "Real-time Slack/Discord support",
      "CI/CD pipeline setup assistance",
      "Technical documentation review",
    ],
    popular: false,
    cta: "Book a Session",
    color: "blue",
    icon: Clock,
  },
  {
    name: "AI-Powered Mobile App",
    price: "$2,500",
    period: "starting",
    description: "Launch your vision with a production-ready React Native app featuring cutting-edge AI capabilities.",
    features: [
      "Cross-platform iOS & Android app",
      "GPT-4 / Claude AI integration",
      "Voice recognition & NLP features",
      "Real-time sync & offline support",
      "Push notifications & deep linking",
      "App Store & Play Store submission",
      "Analytics & crash reporting",
      "6 months priority support included",
      "Complete source code ownership",
      "Comprehensive documentation",
    ],
    popular: true,
    cta: "Launch Your App",
    color: "purple",
    icon: Smartphone,
  },
  {
    name: "Enterprise Web Platform",
    price: "$1,800",
    period: "starting",
    description: "Build a blazing-fast, SEO-optimized web platform with Next.js 15 and enterprise-grade architecture.",
    features: [
      "Next.js 15 App Router architecture",
      "AI-powered automation & chatbots",
      "TypeScript with strict type safety",
      "Responsive & accessible design",
      "SEO optimization (Core Web Vitals)",
      "Scalable database architecture",
      "Role-based access control",
      "Admin dashboard included",
      "CI/CD & monitoring setup",
      "3 months maintenance included",
    ],
    popular: false,
    cta: "Build Your Platform",
    color: "emerald",
    icon: Globe,
  },
]

const additionalServices = [
  {
    name: "AI Integration Suite",
    price: "$800+",
    description: "Supercharge your existing app with OpenAI GPT-4, Claude, computer vision, or custom ML models",
    icon: Brain,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Legacy Modernization",
    price: "$1,500+",
    description: "Transform your legacy native app to React Native or upgrade to the latest architecture",
    icon: Rocket,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Ongoing Partnership",
    price: "$350/mo",
    description: "Dedicated support, priority bug fixes, feature iterations, and proactive performance monitoring",
    icon: HeartHandshake,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Performance Boost",
    price: "$600+",
    description: "Deep performance audit, bundle optimization, lazy loading, and scalability improvements",
    icon: Zap,
    gradient: "from-amber-500 to-orange-500",
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 dark:from-slate-900 via-white dark:via-slate-900 to-slate-100 dark:to-slate-800 text-slate-900 dark:text-white overflow-hidden pt-20">
      
      <FullScreen className="w-full xl:w-[85%] mx-auto py-12 xs:py-8 relative z-10">
        <div className="space-y-16 xs:space-y-10">
          {/* Hero Section - Enhanced */}
          <div className="text-center space-y-6 xs:space-y-4 px-4 xs:px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 border border-indigo-200/50 dark:border-indigo-700/30"
            >
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">Transparent & Competitive Rates</span>
            </motion.div>
            
            <div className="relative inline-block">
              <motion.h1 
                className="text-5xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-indigo-600 dark:from-indigo-400 via-purple-600 dark:via-purple-400 to-pink-600 dark:to-pink-400 bg-clip-text text-transparent leading-tight pb-2"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Simple Pricing,
                <br />
                <span className="text-4xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Exceptional Value</span>
              </motion.h1>
            </div>
            
            <motion.p 
              className="text-lg xs:text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              From quick consultations to full-scale applications — 
              <span className="font-semibold text-slate-800 dark:text-white"> invest in quality that delivers results</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-3 xs:gap-2 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <SimpleBadge className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50">
                <Shield className="w-3 h-3 mr-1.5" />
                Money-Back Guarantee
              </SimpleBadge>
              <SimpleBadge className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50">
                <Clock className="w-3 h-3 mr-1.5" />
                On-Time Delivery
              </SimpleBadge>
              <SimpleBadge className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700/50">
                <Code className="w-3 h-3 mr-1.5" />
                Clean, Documented Code
              </SimpleBadge>
            </motion.div>
          </div>

          {/* Main Pricing Plans - Enhanced */}
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 xs:gap-5 px-4 xs:px-2">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SimpleCard
                  className={`relative h-full flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                    plan.popular 
                      ? "border-2 border-purple-500 dark:border-purple-400 shadow-2xl shadow-purple-500/20 dark:shadow-purple-500/10 ring-4 ring-purple-500/10" 
                      : "hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-2xl"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <SimpleBadge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 px-5 py-2 shadow-lg shadow-purple-500/30">
                        <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                        Best Value
                      </SimpleBadge>
                    </div>
                  )}
                  
                  <div className="text-center pb-4 px-6 xs:px-4 pt-10 xs:pt-8">
                    {/* Icon */}
                    <div className={`w-14 h-14 xs:w-12 xs:h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      plan.color === "purple" 
                        ? "bg-gradient-to-br from-purple-500 to-pink-500" 
                        : plan.color === "blue"
                        ? "bg-gradient-to-br from-blue-500 to-cyan-500"
                        : "bg-gradient-to-br from-emerald-500 to-teal-500"
                    } shadow-lg`}>
                      <plan.icon className="w-7 h-7 xs:w-6 xs:h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl xs:text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                    
                    <div className="flex items-baseline justify-center gap-1 mb-3">
                      <span className={`text-5xl xs:text-4xl font-black ${
                        plan.popular 
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400" 
                          : "bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300"
                      } bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-slate-500 dark:text-slate-300 text-sm font-medium">{plan.period}</span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-gray-100 text-sm leading-relaxed">{plan.description}</p>
                  </div>
                  
                  <div className="flex-1 px-6 xs:px-4 pb-6 xs:pb-4">
                    <div className="border-t border-slate-200 dark:border-slate-600 pt-6 mb-6">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-300 uppercase tracking-wider mb-4">What&apos;s included</p>
                      <ul className="space-y-3 xs:space-y-2.5">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 xs:gap-2">
                            <div className={`flex-shrink-0 w-5 h-5 xs:w-4 xs:h-4 rounded-full flex items-center justify-center mt-0.5 ${
                              plan.popular 
                                ? "bg-purple-100 dark:bg-purple-900/50" 
                                : "bg-emerald-100 dark:bg-emerald-900/50"
                            }`}>
                              <Check className={`w-3 h-3 xs:w-2.5 xs:h-2.5 ${
                                plan.popular 
                                  ? "text-purple-600 dark:text-purple-400" 
                                  : "text-emerald-600 dark:text-emerald-400"
                              }`} />
                            </div>
                            <span className="text-slate-700 dark:text-gray-100 text-sm xs:text-xs leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href="mailto:ocean28799@gmail.com" className="block">
                      <Button
                        className={`w-full min-h-[48px] text-base xs:text-sm font-semibold transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30"
                            : plan.color === "blue"
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                            : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </SimpleCard>
              </motion.div>
            ))}
          </div>

          {/* Additional Services - Enhanced */}
          <div className="space-y-8 xs:space-y-6">
            <div className="text-center px-4 xs:px-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl xs:text-2xl sm:text-4xl font-bold mb-3 text-slate-900 dark:text-white">
                  Need Something Specific?
                </h2>
                <p className="text-slate-600 dark:text-gray-200 text-base xs:text-sm sm:text-lg max-w-2xl mx-auto">
                  Tailored solutions for unique challenges — from AI upgrades to performance optimization
                </p>
              </motion.div>
            </div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xs:gap-4 px-4 xs:px-2">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <SimpleCard className="h-full hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                    <div className="p-5 xs:p-4 text-center space-y-4 xs:space-y-3">
                      <div className={`w-14 h-14 xs:w-12 xs:h-12 mx-auto bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-7 h-7 xs:w-6 xs:h-6 text-white" />
                      </div>
                      <h3 className="text-lg xs:text-base font-bold text-slate-800 dark:text-white leading-tight">{service.name}</h3>
                      <p className="text-2xl xs:text-xl font-black text-slate-900 dark:text-emerald-400">{service.price}</p>
                      <p className="text-slate-600 dark:text-gray-100 text-sm xs:text-xs leading-relaxed">{service.description}</p>
                    </div>
                  </SimpleCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Choose Me - Enhanced */}
          <div className="px-4 xs:px-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-900 p-8 xs:p-5">
                <div className="text-center mb-8 xs:mb-6">
                  <h2 className="text-3xl xs:text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                    Why Work With Me?
                  </h2>
                  <p className="text-slate-600 dark:text-gray-100 max-w-2xl mx-auto">
                    I&apos;m not just a developer — I&apos;m your technical partner committed to your project&apos;s success
                  </p>
                </div>
                <div className="grid xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-4">
                  {[
                    { icon: Check, title: "5+ Years Expertise", desc: "Delivering quality across 50+ projects", gradient: "from-emerald-500 to-green-600" },
                    { icon: Globe, title: "Global Perspective", desc: "Collaborated with clients in 20+ countries", gradient: "from-blue-500 to-cyan-600" },
                    { icon: Sparkles, title: "AI-First Approach", desc: "Leveraging cutting-edge AI in every build", gradient: "from-violet-500 to-purple-600" },
                    { icon: Zap, title: "Rapid Execution", desc: "Fast turnarounds without sacrificing quality", gradient: "from-amber-500 to-orange-600" },
                  ].map((item, index) => (
                    <div key={index} className="text-center space-y-3 xs:space-y-2">
                      <div className={`w-16 h-16 xs:w-12 xs:h-12 mx-auto bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-8 h-8 xs:w-6 xs:h-6 text-white" />
                      </div>
                      <h3 className="text-lg xs:text-sm font-bold text-slate-800 dark:text-white">{item.title}</h3>
                      <p className="text-slate-600 dark:text-gray-200 text-sm xs:text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ - Enhanced */}
          <div className="space-y-8 xs:space-y-6 px-4 xs:px-2">
            <div className="text-center">
              <h2 className="text-3xl xs:text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                Common Questions
              </h2>
              <p className="text-slate-600 dark:text-gray-200">
                Everything you need to know before getting started
              </p>
            </div>
            <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-5 xs:gap-4">
              {[
                {
                  q: "Do you offer fixed-price quotes?",
                  a: "Absolutely! After understanding your requirements, I provide a detailed fixed quote. This works best for well-defined projects with clear deliverables."
                },
                {
                  q: "What's included in the maintenance plans?",
                  a: "Bug fixes, security patches, performance monitoring, minor feature updates, and dedicated support via Slack or email. You're never left hanging after launch."
                },
                {
                  q: "How does payment work?",
                  a: "Hourly: billed weekly. Projects: 50% deposit, 50% on delivery. I accept PayPal, Wise, and international bank transfers for your convenience."
                },
                {
                  q: "Do I own the source code?",
                  a: "100% — you get full ownership, comprehensive documentation, deployment guides, and video walkthroughs. It's your product, completely."
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <SimpleCard className="h-full hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300">
                    <div className="p-6 xs:p-4">
                      <h3 className="text-lg xs:text-base font-bold mb-3 xs:mb-2 text-slate-800 dark:text-white flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-600 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-white">
                          ?
                        </span>
                        {faq.q}
                      </h3>
                      <p className="text-slate-600 dark:text-gray-100 text-sm xs:text-xs leading-relaxed pl-9">
                        {faq.a}
                      </p>
                    </div>
                  </SimpleCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA - Enhanced */}
          <div className="px-4 xs:px-2">
            <SimpleCard className="overflow-hidden border-0">
              <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 xs:p-6 text-center">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 xs:mb-4"
                  >
                    <Sparkles className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm font-medium text-white">Free 30-min consultation</span>
                  </motion.div>
                  
                  <h2 className="text-3xl xs:text-2xl sm:text-4xl font-bold mb-4 xs:mb-3 text-white">
                    Ready to Build Something Amazing?
                  </h2>
                  <p className="text-white/90 mb-8 xs:mb-5 max-w-2xl mx-auto text-base xs:text-sm leading-relaxed">
                    Let&apos;s discuss your vision and create a roadmap to success. No pressure, no commitments — 
                    just an honest conversation about what&apos;s possible.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 xs:gap-3 justify-center">
                    <Link href="mailto:ocean28799@gmail.com">
                      <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 font-bold w-full sm:w-auto min-h-[52px] text-base shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-300">
                        <Mail className="w-5 h-5 mr-2" />
                        Get Your Free Quote
                      </Button>
                    </Link>
                    <Link href="/projects">
                      <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold w-full sm:w-auto min-h-[52px] text-base backdrop-blur-sm">
                        View My Work
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SimpleCard>
          </div>
        </div>
      </FullScreen>
    </div>
  )
}
