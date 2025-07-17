'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Code,
  Briefcase,
  Mail,
  FileText,
  Minimize2,
  Maximize2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
  type?: 'text' | 'code' | 'action'
}

interface QuickAction {
  id: string
  label: string
  icon: React.ReactNode
  prompt: string
  color: string
}

const quickActions: QuickAction[] = [
  {
    id: 'about',
    label: 'About Me',
    icon: <User className="w-4 h-4" />,
    prompt: 'Tell me about Tran Anh Duc and his background',
    color: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20'
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: <Code className="w-4 h-4" />,
    prompt: 'Show me some of his notable projects',
    color: 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
  },
  {
    id: 'experience',
    label: 'Experience',
    icon: <Briefcase className="w-4 h-4" />,
    prompt: 'What is his professional experience?',
    color: 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20'
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: <Mail className="w-4 h-4" />,
    prompt: 'How can I get in touch with him?',
    color: 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20'
  },
  {
    id: 'resume',
    label: 'Resume',
    icon: <FileText className="w-4 h-4" />,
    prompt: 'Can I see his resume or CV?',
    color: 'bg-pink-500/10 text-pink-500 hover:bg-pink-500/20'
  }
]

const portfolioData = {
  about: {
    name: 'Tran Anh Duc',
    title: 'Senior React Native & AI Integration Specialist',
    experience: '4+ years',
    specialties: ['React Native', 'AI Integration', 'Next.js 15', 'OpenAI', 'Enterprise Apps'],
    achievements: '50+ enterprise-grade applications across 15+ countries',
    description: 'Senior React Native and AI Integration Specialist with proven expertise in deploying enterprise-grade applications serving millions of users worldwide.'
  },
  projects: [
    {
      name: 'AI Virtual Assistant - React Native + Next.js',
      description: 'Complete AI assistant ecosystem with mobile app, web dashboard, and voice capabilities. Features real-time conversations, document analysis, image recognition, and multi-modal AI interactions across platforms.',
      tech: ['React Native', 'Next.js 15', 'OpenAI GPT-4o', 'Whisper API', 'Expo', 'TypeScript', 'Supabase', 'Vector DB', 'WebRTC'],
      impact: '95% accuracy, 50ms response time, 10K+ users'
    },
    {
      name: 'Smart Analytics & Business Intelligence App',
      description: 'Enterprise mobile app with AI-powered data analytics, predictive modeling, and automated insights. Features real-time dashboards, natural language queries, and intelligent business recommendations.',
      tech: ['React Native', 'TypeScript', 'TensorFlow.js', 'D3.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Redis', 'Chart.js'],
      impact: '40% faster decision making, 500+ enterprises'
    },
    {
      name: 'AI Content Creation & Marketing Platform',
      description: 'SaaS platform for AI-powered content generation, social media automation, and marketing campaigns. Features multi-modal content creation, brand voice training, and performance analytics.',
      tech: ['Next.js 15', 'TypeScript', 'OpenAI GPT-4', 'DALL-E 3', 'Vercel AI SDK', 'Prisma', 'Stripe', 'TailwindCSS', 'Framer Motion'],
      impact: '3x faster content creation, 1000+ brands served'
    },
    {
      name: 'Smart Home Ecosystem with AI Automation',
      description: 'Intelligent home automation platform with AI-driven energy optimization, predictive maintenance, and natural language control. Supports 100+ device types with machine learning-based automation rules.',
      tech: ['React Native', 'Next.js', 'TypeScript', 'OpenAI API', 'MQTT', 'WebSocket', 'TensorFlow.js', 'AWS IoT', 'React Native Reanimated'],
      impact: '30% energy savings, 95% user satisfaction'
    },
    {
      name: 'AI-Powered Trading & Portfolio Management',
      description: 'Advanced fintech app with AI trading signals, portfolio optimization, and risk analysis. Features real-time market data, intelligent alerts, and personalized investment recommendations.',
      tech: ['React Native', 'TypeScript', 'TensorFlow.js', 'WebSocket', 'OpenAI API', 'Zustand', 'Biometric Auth', 'Chart.js', 'Firebase'],
      impact: '20% higher returns, 10x faster analysis'
    },
    {
      name: 'AI Health Monitoring & Telemedicine App',
      description: 'Comprehensive health app with AI symptom analysis, telemedicine consultations, and personalized wellness plans. Features medical image analysis, vital sign monitoring, and secure patient data management.',
      tech: ['React Native', 'TypeScript', 'TensorFlow.js', 'OpenAI API', 'HealthKit', 'WebRTC', 'Supabase', 'HIPAA Compliance'],
      impact: '70% reduction in hospital visits, 90% user satisfaction'
    }
  ],
  experience: {
    current: 'Senior React Native & AI Integration Specialist',
    years: '4+ years',
    focus: 'Enterprise mobile applications with AI integration',
    deployments: '50+ applications across 15+ countries',
    userBase: 'Millions of users worldwide'
  },
  contact: {
    email: 'Available on request',
    linkedin: 'Available in portfolio',
    github: 'Available in portfolio',
    portfolio: 'You\'re currently viewing it!'
  },
  skills: {
    mobile: ['React Native', 'iOS', 'Android', 'Cross-platform'],
    web: ['Next.js 15', 'React', 'TypeScript', 'Tailwind CSS'],
    ai: ['OpenAI Integration', 'AI/ML Implementation', 'Intelligent Features'],
    backend: ['Node.js', 'API Integration', 'Database Management'],
    other: ['Enterprise Architecture', 'Performance Optimization', 'CI/CD']
  }
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hi! I\'m Duc\'s AI assistant. I can help you learn about his background, projects, and experience. What would you like to know?',
      isUser: false,
      timestamp: new Date(),
      type: 'text'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (prompt: string): string => {
    const lowerPrompt = prompt.toLowerCase()
    
    if (lowerPrompt.includes('about') || lowerPrompt.includes('background') || lowerPrompt.includes('who')) {
      return `${portfolioData.about.name} is a ${portfolioData.about.title} with ${portfolioData.about.experience} of proven expertise. He has successfully deployed ${portfolioData.about.achievements}, serving millions of users with cutting-edge technologies including ${portfolioData.about.specialties.join(', ')}. 

His expertise spans across mobile development, AI integration, and enterprise-grade solutions. He's passionate about creating innovative applications that solve real-world problems.`
    }
    
    if (lowerPrompt.includes('project') || lowerPrompt.includes('work') || lowerPrompt.includes('portfolio')) {
      const projectList = portfolioData.projects.map(project => 
        `• **${project.name}**: ${project.description} (${project.tech.join(', ')})`
      ).join('\n')
      
      return `Here are some of Duc's notable projects:\n\n${projectList}\n\nEach project demonstrates his ability to integrate AI capabilities with mobile applications, creating solutions that are both innovative and practical.`
    }
    
    if (lowerPrompt.includes('experience') || lowerPrompt.includes('professional') || lowerPrompt.includes('career')) {
      return `Duc has ${portfolioData.experience.years} as a ${portfolioData.experience.current}. His professional highlights include:

• **Enterprise Focus**: Specialized in ${portfolioData.experience.focus}
• **Global Reach**: ${portfolioData.experience.deployments}
• **User Impact**: Serving ${portfolioData.experience.userBase}

His experience covers the full development lifecycle, from conception to deployment, with a strong focus on performance optimization and user experience.`
    }
    
    if (lowerPrompt.includes('skill') || lowerPrompt.includes('technology') || lowerPrompt.includes('tech')) {
      return `Duc's technical expertise includes:

**Mobile Development**: ${portfolioData.skills.mobile.join(', ')}
**Web Development**: ${portfolioData.skills.web.join(', ')}
**AI Integration**: ${portfolioData.skills.ai.join(', ')}
**Backend**: ${portfolioData.skills.backend.join(', ')}
**Other**: ${portfolioData.skills.other.join(', ')}

He stays current with the latest technologies and best practices in mobile and web development.`
    }
    
    if (lowerPrompt.includes('contact') || lowerPrompt.includes('reach') || lowerPrompt.includes('hire')) {
      return `You can connect with Duc through various channels:

• **Email**: ${portfolioData.contact.email}
• **LinkedIn**: ${portfolioData.contact.linkedin}
• **GitHub**: ${portfolioData.contact.github}
• **Portfolio**: ${portfolioData.contact.portfolio}

He's always open to discussing new opportunities and interesting projects!`
    }
    
    if (lowerPrompt.includes('resume') || lowerPrompt.includes('cv') || lowerPrompt.includes('download')) {
      return `Duc's resume is available in multiple formats on this portfolio. You can find download links for:

• ATS-optimized version
• React Native focused CV
• Comprehensive detailed CV
• Modern HTML format

Check the main portfolio page for download links, or use the contact section to request specific formats.`
    }
    
    if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('hey')) {
      return `Hello! Nice to meet you! I'm here to help you learn about Duc's background and expertise. Feel free to ask me about his projects, experience, or any specific technologies you're interested in.`
    }
    
    return `I'd be happy to help you learn more about Duc! You can ask me about:

• His background and experience
• Technical projects and achievements
• Professional skills and expertise
• How to get in touch
• Resume and CV information

What would you like to know more about?`
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
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date(),
        type: 'text'
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickAction = (action: QuickAction) => {
    setInputValue(action.prompt)
    setTimeout(() => handleSend(), 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
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
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className={cn(
                "rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300",
                "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
                "border-2 border-white/20 backdrop-blur-sm"
              )}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </Button>
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
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]"
          >
            <Card className={cn(
              "overflow-hidden backdrop-blur-xl border-white/20",
              "bg-gradient-to-br from-background/95 to-background/90",
              "shadow-2xl border",
              isMinimized ? "h-16" : "h-[500px]"
            )}>
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Bot className="w-6 h-6 text-blue-500" />
                    <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AI Assistant</h3>
                    <p className="text-xs text-muted-foreground">Ask me about Duc</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="w-8 h-8"
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={cn(
                          "flex gap-2",
                          message.isUser ? "justify-end" : "justify-start"
                        )}
                      >
                        {!message.isUser && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div
                          className={cn(
                            "max-w-[80%] rounded-lg p-3 text-sm",
                            message.isUser
                              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                              : "bg-muted/50 border border-white/10"
                          )}
                        >
                          <div className="whitespace-pre-wrap">{message.content}</div>
                          <div className={cn(
                            "text-xs mt-1 opacity-70",
                            message.isUser ? "text-white/70" : "text-muted-foreground"
                          )}>
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </div>
                        </div>
                        {message.isUser && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-2"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-muted/50 border border-white/10 rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Quick Actions */}
                  <div className="p-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {quickActions.map((action) => (
                        <Badge
                          key={action.id}
                          variant="secondary"
                          className={cn(
                            "cursor-pointer transition-all duration-200 hover:scale-105",
                            action.color
                          )}
                          onClick={() => handleQuickAction(action)}
                        >
                          {action.icon}
                          <span className="ml-1">{action.label}</span>
                        </Badge>
                      ))}
                    </div>

                    {/* Input */}
                    <div className="flex gap-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask me anything about Duc..."
                        className="flex-1 bg-background/50 border-white/20"
                        disabled={isTyping}
                      />
                      <Button
                        onClick={handleSend}
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
