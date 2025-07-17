"use client"

import { motion } from "framer-motion"
import { FullScreen } from "@/components/full-screen"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Code, Smartphone, Globe, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

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
  return (
    <div className="min-h-screen via-gray-900 text-white pt-20">
      <FullScreen className="w-full xl:w-[85%] mx-auto py-20">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              <motion.h1 
                className="text-7xl md:text-9xl font-black bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Pricing
              </motion.h1>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
            </div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transparent, competitive pricing for world-class development services
            </motion.p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-green-900/50 text-green-300 border-green-700">
                ✓ No Hidden Fees
              </Badge>
              <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 border-blue-700">
                ✓ Flexible Terms
              </Badge>
              <Badge variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-700">
                ✓ Quality Guaranteed
              </Badge>
            </div>
          </div>

          {/* Main Pricing Plans */}
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gray-900/50 border-gray-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  plan.popular ? "border-purple-500 shadow-2xl shadow-purple-500/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="mailto:ocean28799@gmail.com">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                          : plan.color === "blue"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                          : "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Additional Services
              </h2>
              <p className="text-gray-400 text-lg">
                Specialized services to meet your specific needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                    <p className="text-2xl font-bold text-cyan-400">{service.price}</p>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Why Choose Me */}
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Why Choose My Services?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">4+ Years Experience</h3>
                  <p className="text-gray-400 text-sm">Proven track record with diverse projects</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Global Experience</h3>
                  <p className="text-gray-400 text-sm">Worked with clients from 15+ countries</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Modern Tech Stack</h3>
                  <p className="text-gray-400 text-sm">Latest technologies and best practices</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Fast Delivery</h3>
                  <p className="text-gray-400 text-sm">Efficient development with quality focus</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">Do you offer fixed-price projects?</h3>
                  <p className="text-gray-300 text-sm">
                    Yes! After discussing your requirements, I can provide a fixed quote for the entire project. This is ideal for well-defined projects with clear scope.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">What&apos;s included in maintenance?</h3>
                  <p className="text-gray-300 text-sm">
                    Bug fixes, security updates, performance monitoring, minor feature updates, and technical support via email or chat.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">How do payments work?</h3>
                  <p className="text-gray-300 text-sm">
                    For hourly work: weekly billing. For projects: 50% upfront, 50% on completion. I accept PayPal, Wise, and bank transfers.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">Do you provide source code?</h3>
                  <p className="text-gray-300 text-sm">
                    Absolutely! You get full ownership of the source code, complete documentation, and deployment guides for all projects.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss your requirements and find the perfect solution for your needs. 
                Free consultation to understand your project and provide accurate estimates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:ocean28799@gmail.com">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    Learn More About Me
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </FullScreen>
    </div>
  )
}
