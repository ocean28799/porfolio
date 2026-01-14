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
    id: 'projects',
    label: 'Projects',
    icon: <Lightbulb className="w-3 h-3" />,
    prompt: 'Show me his projects and portfolio',
    color: 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 border-purple-500/20',
    category: 'project'
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
    title: 'Senior Mobile & AI Solutions Architect',
    experience: '5+ years of proven impact',
    specialties: ['React Native', 'Next.js 15', 'AI/ML Integration', 'GPT-4', 'TensorFlow.js', 'LangChain', 'RAG Systems'],
    achievements: '60+ enterprise apps shipped across 20+ countries',
    userImpact: '3M+ users served worldwide',
    description: 'Senior Mobile & AI Solutions Architect with 5+ years delivering enterprise-scale applications. Led development of 60+ production apps serving 3M+ users globally. Track record of reducing development time by 40%, improving app performance by 60%, and driving $2M+ in client revenue through innovative solutions.'
  },
  projects: [
    {
      name: 'AI Virtual Assistant - React Native + Next.js',
      description: 'Complete AI assistant ecosystem with mobile app, web dashboard, and voice capabilities. Real-time conversations, document analysis with RAG, and multi-modal AI interactions.',
      tech: ['React Native', 'Next.js 15', 'OpenAI GPT-4', 'Whisper API', 'TypeScript', 'Supabase', 'Pinecone', 'WebRTC'],
      impact: '95% accuracy, 50ms response, 10K+ users',
      features: ['Voice-to-text', 'Real-time AI conversations', 'Cross-platform sync', 'Document analysis'],
      status: 'Production'
    },
    {
      name: 'Smart Analytics & Business Intelligence',
      description: 'Enterprise mobile analytics with AI-powered insights, predictive modeling, and natural language queries.',
      tech: ['React Native', 'TensorFlow.js', 'D3.js', 'OpenAI API', 'PostgreSQL', 'Redis'],
      impact: '40% faster decisions, 500+ enterprises',
      features: ['AI insights', 'Real-time dashboards', 'Predictive analytics', 'NL queries'],
      status: 'Production'
    },
    {
      name: 'AI Content Creation Platform',
      description: 'SaaS for AI content generation, social media automation, and marketing campaigns. $2M ARR achieved.',
      tech: ['Next.js 15', 'GPT-4', 'DALL-E 3', 'Vercel AI SDK', 'Stripe'],
      impact: '3x content speed, 1000+ brands, $150K+ MRR',
      features: ['Multi-modal generation', 'Brand voice training', 'Social automation'],
      status: 'Production'
    },
    {
      name: 'Smart Home AI Ecosystem',
      description: 'Home automation with AI energy optimization, predictive maintenance, and natural language control.',
      tech: ['React Native', 'Next.js', 'AWS IoT', 'TensorFlow.js', 'MQTT'],
      impact: '30% energy savings, 95% satisfaction',
      features: ['Energy optimization', 'Predictive maintenance', '100+ device types'],
      status: 'Production'
    },
    {
      name: 'AI Trading & Portfolio Management',
      description: 'Fintech app with AI trading signals, portfolio optimization, and risk analysis. $500M+ AUM managed.',
      tech: ['React Native', 'TensorFlow.js', 'WebSocket', 'Firebase'],
      impact: '20% higher returns, 50K+ traders',
      features: ['AI signals', 'Real-time data', 'Risk analysis'],
      status: 'Production'
    },
    {
      name: 'AI Health Monitoring & Telemedicine',
      description: 'HIPAA-compliant health app with AI symptom analysis and telemedicine. 100K+ consultations completed.',
      tech: ['React Native', 'TensorFlow.js', 'WebRTC', 'Supabase'],
      impact: '70% fewer hospital visits, 90% satisfaction',
      features: ['Symptom analysis', 'Video consultations', 'Health tracking'],
      status: 'Production'
    }
  ],
  experience: {
    current: 'Senior Mobile & AI Solutions Architect',
    years: '5+ years',
    focus: 'Enterprise-scale mobile & AI solutions',
    deployments: '60+ apps shipped across 20+ countries',
    userBase: '3M+ users impacted globally',
    specialization: 'Building scalable AI-powered applications that deliver measurable business results',
    achievements: [
      'Shipped 60+ production applications to global markets',
      'Served 3M+ users across 20+ countries',
      'Reduced development cycles by 40% through architecture optimization',
      'Improved app performance by 60% through systematic optimization',
      'Generated $2M+ in client revenue through AI-powered solutions',
      'Led cross-functional teams of up to 10 developers'
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
    mobile: ['React Native', 'iOS', 'Android', 'Expo SDK', 'Cross-Platform Architecture'],
    web: ['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS', 'Modern Web APIs'],
    ai: ['OpenAI GPT-4', 'Claude', 'TensorFlow.js', 'LangChain', 'RAG Systems', 'Vector DBs'],
    backend: ['Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'AWS', 'Redis'],
    other: ['Technical Architecture', 'Team Leadership', 'Agile/Scrum', 'Code Review', 'Mentoring']
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
            action: () => window.open('/files/FullStack-Senior-TranAnhDuc', '_blank'),
            variant: 'outline'
          },
          {
            id: 'view-html',
            label: 'View HTML',
            icon: <ExternalLink className="w-4 h-4" />,
            action: () => window.open('/files/TranAnhDuc-Modern-CV-2026.html', '_blank'),
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
• 📱 **Phone:** ${portfolioData.contact.phone}
• 📍 **Location:** ${portfolioData.contact.location}
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

💼 **Expert Development**
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
• 📱 **App Migration & Modernization** - $1,500 - $3,500
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="chatbot-window-container"
          >
            <Card className={cn(
              "overflow-hidden backdrop-blur-xl chatbot-card",
              "shadow-2xl chatbot-window",
              "flex flex-col"
            )}>
              <>
                {/* Header */}
                <div className="chatbot-header flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="chatbot-header-avatar">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="chatbot-header-title">Duc&apos;s AI Assistant</h3>
                      <div className="chatbot-header-status">
                        <span className="chatbot-status-dot" />
                        <span>Online • Ready to help</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="chatbot-close-btn"
                    title="Close chat"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Messages */}
                <div className="chatbot-messages-container chatbot-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          "chatbot-message-row",
                          message.isUser ? "chatbot-message-user" : "chatbot-message-bot-row"
                        )}
                      >
                        {!message.isUser && (
                          <div className="chatbot-avatar chatbot-avatar-bot">
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div className="chatbot-message-content">
                          <div
                            className={cn(
                              "chatbot-bubble",
                              message.isUser
                                ? "chatbot-bubble-user"
                                : "chatbot-bubble-bot"
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
                              className="chatbot-actions"
                            >
                              {message.actions.map((action, index) => (
                                <motion.div
                                  key={action.id}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.1 * index }}
                                  whileHover={{ scale: 1.03 }}
                                  whileTap={{ scale: 0.97 }}
                                >
                                  <Button
                                    variant={action.variant || 'outline'}
                                    size="sm"
                                    onClick={action.action}
                                    className="chatbot-action-btn"
                                  >
                                    {action.icon}
                                    <span className="hidden xs:inline">{action.label}</span>
                                  </Button>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                          
                          <div className={cn(
                            "chatbot-timestamp",
                            message.isUser ? "text-right" : "text-left"
                          )}>
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </div>
                        </div>
                        
                        {message.isUser && (
                          <div className="chatbot-avatar chatbot-avatar-user">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="chatbot-typing-indicator"
                      >
                        <div className="chatbot-avatar chatbot-avatar-bot">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div className="chatbot-typing-bubble">
                          <span className="chatbot-typing-text">
                            {typingMessage || 'Typing'}
                          </span>
                          <div className="chatbot-typing-dots">
                            <motion.span 
                              className="chatbot-dot chatbot-dot-1" 
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                            />
                            <motion.span 
                              className="chatbot-dot chatbot-dot-2" 
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.span 
                              className="chatbot-dot chatbot-dot-3" 
                              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Actions & Input Area */}
                  <div className="chatbot-footer">
                    {/* Quick Actions */}
                    <div className="chatbot-quick-section">
                      <div className="chatbot-section-header">
                        <Zap className="w-3 h-3 chatbot-section-icon" />
                        <span className="chatbot-section-title">Quick Actions</span>
                      </div>
                      <div className="chatbot-quick-grid">
                        {filteredQuickActions.map((action, index) => (
                          <motion.button
                            key={action.id}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                              "chatbot-quick-btn",
                              `chatbot-quick-${action.id}`,
                              activeCategory === action.category && "chatbot-quick-active",
                              lastActionId === action.id && "chatbot-quick-loading",
                              messages.length === 1 && "chatbot-quick-pulse"
                            )}
                            onClick={() => handleQuickAction(action)}
                          >
                            <span className="chatbot-quick-icon">{action.icon}</span>
                            <span className="chatbot-quick-label">{action.label}</span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Input */}
                    <div className="chatbot-input-section">
                      <div className="chatbot-input-row">
                        <Input
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder={getPlaceholder()}
                          className={cn(
                            "chatbot-input",
                            isTyping && "chatbot-input-disabled"
                          )}
                          style={{ fontSize: '16px' }}
                          disabled={isTyping}
                        />
                        <Button
                          onClick={handleSend}
                          disabled={!inputValue.trim() || isTyping}
                          className={cn(
                            "chatbot-send-btn",
                            inputValue.trim() && !isTyping && "chatbot-send-ready"
                          )}
                          title="Send message"
                        >
                          <motion.div
                            animate={isTyping ? { rotate: 360 } : { rotate: 0 }}
                            transition={{ duration: 1, repeat: isTyping ? Infinity : 0, ease: "linear" }}
                          >
                            <Send className="w-4 h-4" />
                          </motion.div>
                        </Button>
                      </div>
                      
                      <div className="chatbot-input-hint">
                        <span className="hidden sm:inline">Press <kbd>Enter</kbd> to send</span>
                        <span className="sm:hidden">Tap send or press Enter</span>
                        {inputValue.trim() && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="chatbot-ready-badge"
                          >
                            <CheckCircle className="w-3 h-3" />
                            Ready
                          </motion.span>
                        )}
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
