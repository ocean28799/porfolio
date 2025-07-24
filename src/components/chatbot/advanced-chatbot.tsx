'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './chatbot.css'
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Sparkles,
  FileText,
  Download,
  ExternalLink,
  Lightbulb,
  Github,
  Linkedin,
  Mail,
  Target,
  Zap,
  Brain,
  CheckCircle,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { MessageRenderer } from './message-renderer'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
  type?: 'text' | 'code' | 'action' | 'rich'
  actions?: MessageAction[]
}

interface MessageAction {
  id: string
  label: string
  icon: React.ReactNode
  action: () => void
  variant?: 'default' | 'outline' | 'secondary'
}

interface QuickAction {
  id: string
  label: string
  icon: React.ReactNode
  prompt: string
  color: string
  category: 'info' | 'project' | 'contact' | 'download' | 'business'
}

const quickActions: QuickAction[] = [
  {
    id: 'about',
    label: 'About',
    icon: <User className="w-3 h-3" />,
    prompt: 'Tell me about Tran Anh Duc and his background',
    color: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20',
    category: 'info'
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: <Zap className="w-3 h-3" />,
    prompt: 'What are his technical skills and expertise?',
    color: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 border-yellow-500/20',
    category: 'info'
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: <DollarSign className="w-3 h-3" />,
    prompt: 'What are his pricing and rates?',
    color: 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20',
    category: 'business'
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: <FileText className="w-3 h-3" />,
    prompt: 'Can I see his resume or CV?',
    color: 'bg-pink-500/10 text-pink-500 hover:bg-pink-500/20 border-pink-500/20',
    category: 'download'
  }
]

const portfolioData = {
  about: {
    name: 'Tran Anh Duc',
    title: 'Senior React Native & AI Integration Specialist',
    experience: '4+ years',
    specialties: ['React Native', 'AI Integration', 'Next.js 15', 'OpenAI', 'Enterprise Apps'],
    achievements: '50+ enterprise-grade applications across 15+ countries',
    userImpact: 'Millions of users worldwide',
    description: 'Senior React Native and AI Integration Specialist with proven expertise in deploying enterprise-grade applications serving millions of users worldwide. Passionate about creating innovative solutions that bridge mobile technology and artificial intelligence.'
  },
  projects: [
    {
      name: 'AI Virtual Assistant - React Native + Next.js',
      description: 'Complete AI assistant ecosystem with mobile app, web dashboard, and voice capabilities. Features real-time conversations, document analysis, image recognition, and multi-modal AI interactions across platforms.',
      tech: ['React Native', 'Next.js 15', 'OpenAI GPT-4o', 'Whisper API', 'Expo', 'TypeScript', 'Supabase', 'Vector DB', 'WebRTC'],
      impact: '95% accuracy, 50ms response time, 10K+ users',
      features: ['Voice-to-text with Whisper', 'Real-time AI conversations', 'Cross-platform sync', 'Document analysis'],
      status: 'Live Demo Available'
    },
    {
      name: 'Smart Analytics & Business Intelligence App',
      description: 'Enterprise mobile app with AI-powered data analytics, predictive modeling, and automated insights. Features real-time dashboards, natural language queries, and intelligent business recommendations.',
      tech: ['React Native', 'TypeScript', 'TensorFlow.js', 'D3.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Redis', 'Chart.js'],
      impact: '40% faster decision making, 500+ enterprises',
      features: ['AI-powered insights', 'Real-time dashboards', 'Predictive analytics', 'Natural language queries'],
      status: 'Live Demo Available'
    },
    {
      name: 'AI Content Creation & Marketing Platform',
      description: 'SaaS platform for AI-powered content generation, social media automation, and marketing campaigns. Features multi-modal content creation, brand voice training, and performance analytics.',
      tech: ['Next.js 15', 'TypeScript', 'OpenAI GPT-4', 'DALL-E 3', 'Vercel AI SDK', 'Prisma', 'Stripe', 'TailwindCSS', 'Framer Motion'],
      impact: '3x faster content creation, 1000+ brands served',
      features: ['Multi-modal content generation', 'Social media automation', 'Performance analytics', 'Brand voice training'],
      status: 'Live Demo Available'
    },
    {
      name: 'Smart Home Ecosystem with AI Automation',
      description: 'Intelligent home automation platform with AI-driven energy optimization, predictive maintenance, and natural language control. Supports 100+ device types with machine learning-based automation rules.',
      tech: ['React Native', 'Next.js', 'TypeScript', 'OpenAI API', 'MQTT', 'WebSocket', 'TensorFlow.js', 'AWS IoT', 'React Native Reanimated'],
      impact: '30% energy savings, 95% user satisfaction',
      features: ['AI-driven energy optimization', 'Predictive maintenance', 'Natural language control', 'Supports 100+ device types'],
      status: 'Live Demo Available'
    },
    {
      name: 'AI-Powered Trading & Portfolio Management',
      description: 'Advanced fintech app with AI trading signals, portfolio optimization, and risk analysis. Features real-time market data, intelligent alerts, and personalized investment recommendations.',
      tech: ['React Native', 'TypeScript', 'TensorFlow.js', 'WebSocket', 'OpenAI API', 'Zustand', 'Biometric Auth', 'Chart.js', 'Firebase'],
      impact: '20% higher returns, 10x faster analysis',
      features: ['AI trading signals', 'Portfolio optimization', 'Risk analysis', 'Real-time market data'],
      status: 'Live Demo Available'
    },
    {
      name: 'AI Health Monitoring & Telemedicine App',
      description: 'Comprehensive health app with AI symptom analysis, telemedicine consultations, and personalized wellness plans. Features medical image analysis, vital sign monitoring, and secure patient data management.',
      tech: ['React Native', 'TypeScript', 'TensorFlow.js', 'OpenAI API', 'HealthKit', 'WebRTC', 'Supabase', 'HIPAA Compliance'],
      impact: '70% reduction in hospital visits, 90% user satisfaction',
      features: ['AI symptom analysis', 'Telemedicine consultations', 'Personalized wellness plans', 'Medical image analysis'],
      status: 'Live Demo Available'
    }
  ],
  experience: {
    current: 'Senior React Native & AI Integration Specialist',
    years: '4+ years',
    focus: 'Enterprise mobile applications with AI integration',
    deployments: '50+ applications across 15+ countries',
    userBase: 'Millions of users worldwide',
    specialization: 'Mobile-first AI solutions for enterprise clients',
    achievements: [
      'Led development of 50+ enterprise applications',
      'Deployed solutions across 15+ countries',
      'Served millions of users globally',
      'Specialized in AI integration for mobile platforms',
      'Expert in performance optimization and scalability'
    ]
  },    contact: {
        email: 'ocean28799@gmail.com',
        phone: '+84-933-131-760',
        location: 'Ho Chi Minh City, Vietnam',
        linkedin: 'https://www.linkedin.com/in/trananhduc99/',
        github: 'https://github.com/ocean28799',
        portfolio: 'Currently viewing the portfolio',
        availability: 'Open to new opportunities'
    },
  skills: {
    mobile: ['React Native', 'iOS Development', 'Android Development', 'Cross-platform Solutions'],
    web: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Modern Web APIs'],
    ai: ['OpenAI Integration', 'AI/ML Implementation', 'Intelligent Features', 'Natural Language Processing'],
    backend: ['Node.js', 'API Development', 'Database Management', 'Cloud Integration'],
    other: ['Enterprise Architecture', 'Performance Optimization', 'CI/CD', 'Team Leadership']
  },
  resume: {
    formats: ['PDF', 'HTML', 'ATS-optimized', 'React Native focused'],
    availability: 'Multiple formats available for download',
    location: 'Available on portfolio main page'
  }
}

export function AdvancedChatbot() {
  const [isClient, setIsClient] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `👋 **Welcome to Duc's AI Assistant!**

I'm here to help you explore his professional background and achievements. Here's what I can assist you with:

**📋 Quick Options:**
• 💼 **Professional Background** - Learn about his experience and career journey
• 🚀 **Technical Projects** - Discover his impressive portfolio of applications  
• 🔧 **Skills & Expertise** - Explore his technical capabilities and specializations
• 📞 **Contact Information** - Find out how to get in touch with him
• 📄 **Resume & CV** - Download his comprehensive resume in various formats

**💡 Pro Tips:**
- Click on any quick action button below for instant answers
- Ask specific questions about his work, skills, or projects
- Use the action buttons in responses for quick navigation

Feel free to start by clicking any of the quick actions below, or ask me anything directly!`,
      isUser: false,
      timestamp: new Date(),
      type: 'rich'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [typingMessage, setTypingMessage] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [lastActionId, setLastActionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const createMessageActions = (topic: string): MessageAction[] => {
    switch (topic) {
      case 'projects':
        return [
          {
            id: 'view-projects',
            label: 'View Projects',
            icon: <ExternalLink className="w-4 h-4" />,
            action: () => window.open('/projects', '_blank'),
            variant: 'outline'
          },
          {
            id: 'project-details',
            label: 'More Details',
            icon: <Lightbulb className="w-4 h-4" />,
            action: () => handleQuickAction(quickActions.find(a => a.id === 'projects')!),
            variant: 'secondary'
          }
        ]
      case 'contact':
        return [
          {
            id: 'linkedin',
            label: 'LinkedIn',
            icon: <Linkedin className="w-4 h-4" />,
            action: () => window.open('https://www.linkedin.com/in/trananhduc99/', '_blank'),
            variant: 'outline'
          },
          {
            id: 'github',
            label: 'GitHub',
            icon: <Github className="w-4 h-4" />,
            action: () => window.open('https://github.com/ocean28799', '_blank'),
            variant: 'outline'
          },
          {
            id: 'gmail',
            label: 'Gmail',
            icon: <Mail className="w-4 h-4" />,
            action: () => window.open('mailto:ocean28799@gmail.com', '_blank'),
            variant: 'outline'
          }
        ]
      case 'resume':
        return [
          {
            id: 'download-pdf',
            label: 'Download PDF',
            icon: <Download className="w-4 h-4" />,
            action: () => window.open('/files/TranAnhDuc-ATS-ReactNative-CV.pdf', '_blank'),
            variant: 'outline'
          },
          {
            id: 'view-html',
            label: 'View HTML',
            icon: <ExternalLink className="w-4 h-4" />,
            action: () => window.open('/files/TranAnhDuc-Modern-CV-2025.html', '_blank'),
            variant: 'outline'
          }
        ]
      default:
        return []
    }
  }

  const generateResponse = (prompt: string): { content: string; actions?: MessageAction[] } => {
    const lowerPrompt = prompt.toLowerCase()
    
    if (lowerPrompt.includes('about') || lowerPrompt.includes('background') || lowerPrompt.includes('who')) {
      return {
        content: `🚀 **${portfolioData.about.name}** is a ${portfolioData.about.title} with ${portfolioData.about.experience} of proven expertise.

**Key Achievements:**
• ${portfolioData.about.achievements}
• Serving ${portfolioData.about.userImpact}
• Specializing in ${portfolioData.about.specialties.join(', ')}

**What sets him apart:**
${portfolioData.about.description}

He's passionate about creating innovative mobile applications that solve real-world problems through the power of AI integration.`,
        actions: createMessageActions('about')
      }
    }
    
    if (lowerPrompt.includes('project') || lowerPrompt.includes('work') || lowerPrompt.includes('portfolio')) {
      const projectList = portfolioData.projects.map(project => 
        `🎯 **${project.name}** (${project.status})
   ${project.description}
   
   **Tech Stack:** ${project.tech.join(', ')}
   **Key Features:** ${project.features.join(', ')}
   **Impact:** ${project.impact}`
      ).join('\n\n')
      
      return {
        content: `🔥 **Featured Projects:**

${projectList}

Each project demonstrates expertise in integrating AI capabilities with mobile applications, creating solutions that are both innovative and practical for enterprise use.`,
        actions: createMessageActions('projects')
      }
    }
    
    if (lowerPrompt.includes('experience') || lowerPrompt.includes('professional') || lowerPrompt.includes('career')) {
      const achievements = portfolioData.experience.achievements.map(achievement => 
        `• ${achievement}`
      ).join('\n')

      return {
        content: `💼 **Professional Experience:**

**Current Role:** ${portfolioData.experience.current}
**Experience:** ${portfolioData.experience.years}
**Specialization:** ${portfolioData.experience.specialization}

**Key Achievements:**
${achievements}

**Global Impact:**
• **Applications:** ${portfolioData.experience.deployments}
• **Users:** ${portfolioData.experience.userBase}
• **Focus:** ${portfolioData.experience.focus}

His experience covers the full development lifecycle, from conception to deployment, with a strong emphasis on performance optimization and user experience.`,
        actions: createMessageActions('experience')
      }
    }
    
    if (lowerPrompt.includes('skill') || lowerPrompt.includes('technology') || lowerPrompt.includes('tech')) {
      return {
        content: `⚡ **Technical Expertise:**

**📱 Mobile Development:**
${portfolioData.skills.mobile.join(' • ')}

**🌐 Web Development:**
${portfolioData.skills.web.join(' • ')}

**🤖 AI Integration:**
${portfolioData.skills.ai.join(' • ')}

**⚙️ Backend & Infrastructure:**
${portfolioData.skills.backend.join(' • ')}

**🎯 Other Specialties:**
${portfolioData.skills.other.join(' • ')}

He stays current with the latest technologies and best practices, constantly learning and adapting to new developments in mobile and web development.`,
        actions: createMessageActions('skills')
      }
    }
    
    if (lowerPrompt.includes('contact') || lowerPrompt.includes('reach') || lowerPrompt.includes('hire')) {
      return {
        content: `📞 **Get In Touch:**

Duc is ${portfolioData.contact.availability} and would love to discuss new opportunities!

**Contact Information:**
• 📧 **Email:** ${portfolioData.contact.email}
• � **Phone:** ${portfolioData.contact.phone}
• � **Location:** ${portfolioData.contact.location}
• 💼 **LinkedIn:** ${portfolioData.contact.linkedin}
• 🐙 **GitHub:** ${portfolioData.contact.github}

Whether you're looking for a senior developer, need AI integration expertise, or want to discuss a project, he's ready to help bring your ideas to life!`,
        actions: createMessageActions('contact')
      }
    }
    
    if (lowerPrompt.includes('resume') || lowerPrompt.includes('cv') || lowerPrompt.includes('download')) {
      return {
        content: `📄 **Resume & CV:**

Duc's resume is available in multiple formats:

**Available Formats:**
• 🔥 **React Native Focused CV** (PDF)
• 📝 **ATS-Optimized Version** (TXT)
• 🎨 **Modern HTML Version** (Interactive)
• 📊 **Comprehensive CV** (Detailed)

**${portfolioData.resume.availability}**

Choose the format that best fits your needs! The ATS-optimized version is perfect for applicant tracking systems, while the HTML version offers an interactive experience.`,
        actions: createMessageActions('resume')
      }
    }
    
    if (lowerPrompt.includes('pricing') || lowerPrompt.includes('rate') || lowerPrompt.includes('cost') || lowerPrompt.includes('budget')) {
      return {
        content: `💰 **Pricing & Services:**

**Main Development Services:**

� **Expert Development**
• **$15 per hour** - Premium development services
• Senior React Native & Next.js development
• Advanced AI integration (OpenAI, Custom ML)
• Performance optimization & architecture review
• Technical consultation & strategy

🚀 **Complete AI-Powered App**
• **Starting from $2,500**
• React Native cross-platform app (iOS & Android)
• Advanced AI integration (GPT-4, Vision, Speech)
• Custom backend API with AI capabilities
• 6 months premium support & maintenance

🌐 **Enterprise Web Platform**
• **Starting from $1,800**
• Next.js 15 with latest App Router
• AI-powered features & automation
• TypeScript & modern architecture
• 3 months free maintenance

**Additional Services:**
• 🤖 **AI Integration & Automation** - $800 - $2,200
• � **App Migration & Modernization** - $1,500 - $3,500
• 🛠️ **Premium Support & Maintenance** - $350/month
• ⚡ **Performance & Scale Optimization** - $600 - $1,800

**Why Choose These Services:**
✓ No Hidden Fees ✓ Flexible Terms ✓ Quality Guaranteed

*Contact for detailed consultation and custom quotes!*`,
        actions: createMessageActions('pricing')
      }
    }
    
    if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('hey')) {
      return {
        content: `👋 **Hello there!** Nice to meet you! 

I'm excited to help you learn about Duc's background and expertise. Here's what I can help you with:

🎯 **Quick Options:**
• Learn about his background and experience
• Explore his technical projects and achievements
• Discover his skills and expertise
• Get his contact information
• Download his resume in various formats

Feel free to ask me anything! I'm here to help you get to know Duc better.`,
        actions: []
      }
    }
    
    return {
      content: `🤔 **I'd be happy to help you learn more about Duc!** 

Here are some things you can ask me about:

🎯 **Popular Topics:**
• **Background & Experience** - His professional journey
• **Technical Projects** - Featured work and achievements  
• **Skills & Expertise** - Technologies and specializations
• **Contact Information** - How to get in touch
• **Resume & CV** - Download in various formats

**💡 Pro tip:** Try clicking on the quick action buttons below for instant answers!

What would you like to know more about?`,
      actions: []
    }
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue('')
    setIsTyping(true)
    setTypingMessage('Thinking...')

    // Simulate AI response delay with different typing messages
    setTimeout(() => {
      setTypingMessage('Analyzing your question...')
    }, 300)

    setTimeout(() => {
      setTypingMessage('Preparing response...')
    }, 800)

    // Generate response
    setTimeout(() => {
      const { content, actions } = generateResponse(currentInput)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content,
        isUser: false,
        timestamp: new Date(),
        type: 'rich',
        actions
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
      setTypingMessage('')
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickAction = (action: QuickAction) => {
    setActiveCategory(action.category)
    setLastActionId(action.id)
    
    // Add user message immediately
    const userMessage: Message = {
      id: Date.now().toString(),
      content: action.prompt,
      isUser: true,
      timestamp: new Date(),
      type: 'text'
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)
    setTypingMessage('Processing your request...')
    
    // Add variety to typing messages
    setTimeout(() => {
      setTypingMessage('Gathering information...')
    }, 400)
    
    // Generate and add bot response
    setTimeout(() => {
      const { content, actions } = generateResponse(action.prompt)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content,
        isUser: false,
        timestamp: new Date(),
        type: 'rich',
        actions
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
      setTypingMessage('')
      setActiveCategory(null)
      setLastActionId(null)
    }, 800 + Math.random() * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Dynamic placeholder based on context
  const getPlaceholder = () => {
    if (isTyping) return "AI is typing..."
    if (messages.length === 1) return "Ask about Duc's background, projects, or skills..."
    return "Type your message here..."
  }

  const filteredQuickActions = activeCategory 
    ? quickActions.filter(action => action.category === activeCategory)
    : quickActions

  // Prevent hydration mismatch by only rendering after client-side hydration
  if (!isClient) {
    return null
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed right-4 bottom-4 z-50 xs:right-4 xs:bottom-4 sm:left-auto sm:right-4 sm:bottom-4 sm:top-auto sm:translate-y-0"
          >              <div className="relative">
                <Button
                  onClick={() => setIsOpen(true)}
                  size="lg"
                  className={cn(
                    "rounded-full w-12 h-12 sm:w-11 sm:h-11 shadow-2xl hover:shadow-3xl transition-all duration-300 touch-action-manipulation",
                    "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600",
                    "border-2 border-white/30 backdrop-blur-sm",
                    "ring-2 ring-white/20 hover:ring-white/30",
                    "chatbot-glow relative overflow-hidden"
                  )}
                  title="Open AI Assistant"
                >
                  <div className="relative z-10">
                    <MessageCircle className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-0.5 -right-0.5 sm:-top-0.5 sm:-right-0.5"
                    >
                      <Sparkles className="w-3 h-3 sm:w-2.5 sm:h-2.5 text-yellow-300" />
                    </motion.div>
                  </div>
                  {/* Floating button shine effect */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  />
                </Button> 
              </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-2 right-2 top-2 bottom-2 z-50 w-auto max-w-none max-h-none xs:left-2 xs:right-2 xs:top-2 xs:bottom-2 sm:w-[calc(100vw-1rem)] sm:left-2 sm:right-2 sm:bottom-2 sm:top-auto sm:translate-y-0 sm:max-h-[calc(100vh-8rem)] md:w-[480px] md:left-8 md:right-auto md:top-[40%] md:bottom-auto md:-translate-y-1/2 lg:w-[520px] lg:left-20"
            style={{ bottom: 0 }}
          >
            <Card className={cn(
              "overflow-hidden backdrop-blur-xl chatbot-card",
              "shadow-2xl",
              "h-[calc(100vh)] xs:h-[calc(100vh)] sm:h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-8rem)] md:h-[650px] lg:h-[700px] xl:h-[750px] flex flex-col"
            )}>
              <>
                {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-2 xs:p-2 sm:p-2 space-y-3 xs:space-y-3 sm:space-y-3 chatbot-scrollbar min-h-0 relative" style={{ WebkitOverflowScrolling: 'touch' }}>
                    {/* Close button in top-right corner */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="sticky top-0 right-0 z-20 flex justify-end"
                    >
                      <motion.div
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setIsOpen(false)}
                          className="w-8 h-8 hover:bg-red-500/20 text-foreground hover:text-red-400 transition-all duration-200 rounded-full backdrop-blur-sm border border-white/20 hover:border-red-400/30 chatbot-close-button"
                          title="Close chat"
                        >
                          <X className="w-4 h-4 font-bold" />
                        </Button>
                      </motion.div>
                    </motion.div>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          "flex gap-3",
                          message.isUser ? "justify-end" : "justify-start"
                        )}
                      >
                        {!message.isUser && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div className="flex flex-col max-w-[90%]">
                          <div
                            className={cn(
                              "rounded-lg p-3 text-sm shadow-sm",
                              message.isUser
                                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                                : "chatbot-message-bot text-foreground"
                            )}
                          >
                            {message.type === 'rich' || !message.isUser ? (
                              <MessageRenderer content={message.content} isUser={message.isUser} />
                            ) : (
                              <div className="whitespace-pre-wrap break-words">{message.content}</div>
                            )}
                          </div>
                          
                          {/* Message Actions */}
                          {message.actions && message.actions.length > 0 && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="flex flex-wrap gap-2 mt-3"
                            >
                              {message.actions.map((action, index) => (
                                <motion.div
                                  key={action.id}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.1 * index }}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Button
                                    variant={action.variant || 'outline'}
                                    size="sm"
                                    onClick={action.action}
                                    className={cn(
                                      "h-8 text-xs shadow-sm hover:shadow-md transition-all duration-200 gap-1",
                                      action.variant === 'outline' && "border-2 hover:bg-muted/80"
                                    )}
                                  >
                                    {action.icon}
                                    {action.label}
                                  </Button>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                          
                          <div className={cn(
                            "text-xs mt-1 opacity-80",
                            message.isUser ? "text-right text-white/80" : "text-left text-muted-foreground"
                          )}>
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </div>
                        </div>
                        
                        {message.isUser && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                       {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 animate-fade-in-up"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="chatbot-message-bot rounded-lg p-3 flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          {typingMessage || 'Typing'}
                        </span>
                        <div className="flex space-x-1">
                          <motion.div 
                            className="w-2 h-2 bg-blue-500 rounded-full" 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-purple-500 rounded-full" 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div 
                            className="w-2 h-2 bg-pink-500 rounded-full" 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Actions */}
                  <div className="p-3 border-t border-white/20 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm flex-shrink-0">
                    <div className="mb-3">
                      <div className="chatbot-section-header">
                        <Zap className="w-3 h-3 chatbot-section-icon" />
                        <h4 className="chatbot-section-title">
                          Quick Actions
                        </h4>
                        <div className="flex-1 chatbot-section-divider"></div>
                      </div>
                      <div className="chatbot-quick-actions-container p-2">
                        <div className="grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-1.5 relative z-10">
                          {filteredQuickActions.map((action, index) => (
                            <motion.div
                              key={action.id}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: index * 0.1, duration: 0.2 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div
                                className={cn(
                                  "chatbot-quick-action-badge cursor-pointer w-full justify-center py-1.5 px-0.5 xs:px-0.5 sm:px-1 md:px-2 flex items-center gap-0.5 xs:gap-0.5 sm:gap-1 min-h-[2.5rem]",
                                  `chatbot-quick-action-${action.id}`,
                                  activeCategory === action.category && "ring-2 ring-blue-500 ring-offset-1",
                                  lastActionId === action.id && "scale-95 opacity-75",
                                  messages.length === 1 && "chatbot-quick-action-pulse"
                                )}
                                onClick={() => handleQuickAction(action)}
                              >
                                <div className="text-xs chatbot-quick-action-icon flex-shrink-0">{action.icon}</div>
                                <span className="font-medium text-xs xs:text-xs sm:text-xs truncate">{action.label}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Input */}
                    <div className="chatbot-input-container p-2 xs:p-2 sm:p-2">
                      <div className="relative z-10">
                        <div className="chatbot-input-group gap-1.5 xs:gap-1.5 sm:gap-1.5">
                          <div className="chatbot-input-wrapper">
                            <Input
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                              onKeyPress={handleKeyPress}
                              placeholder={getPlaceholder()}
                              className={cn(
                                "chatbot-input-field chatbot-tooltip text-base sm:text-sm h-11 sm:h-10",
                                isTyping && "chatbot-input-loading"
                              )}
                              style={{ fontSize: '16px' }} // Prevents zoom on iOS
                              data-tooltip={isTyping ? "AI is responding..." : "Type your message here"}
                              disabled={isTyping}
                            />
                          </div>
                          <div className="chatbot-button-container">
                            <Button
                              onClick={handleSend}
                              disabled={!inputValue.trim() || isTyping}
                              className={cn(
                                "chatbot-send-button px-3 py-2 chatbot-tooltip min-w-[44px] h-11 sm:h-10 touch-action-manipulation",
                                isTyping && "loading"
                              )}
                              data-tooltip="Send message"
                              title="Send message"
                            >
                              <motion.div
                                animate={isTyping ? { rotate: 360 } : { rotate: 0 }}
                                transition={{ duration: 1, repeat: isTyping ? Infinity : 0, ease: "linear" }}
                              >
                                <Send className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                              </motion.div>
                            </Button>
                          </div>
                        </div>
                        
                        <div className="chatbot-footer-text text-xs text-center">
                          <Target className="w-3 h-3 inline mr-1 text-blue-400 chatbot-footer-icon" />
                          <span className="text-muted-foreground">AI-powered assistant • Press </span>
                          <kbd className="chatbot-footer-kbd">Enter</kbd>
                          <span className="text-muted-foreground"> to send • Ask anything!</span>
                          {inputValue.trim() && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="mt-1 text-xs text-green-400 flex items-center justify-center gap-1"
                            >
                              <CheckCircle className="w-3 h-3" />
                              <span>Ready to send</span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
