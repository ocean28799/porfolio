'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

export interface ChatMessage {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
  type?: 'text' | 'rich' | 'action'
  actions?: Array<{
    id: string
    label: string
    icon: React.ReactNode
    action: () => void
    variant?: 'default' | 'outline' | 'secondary'
  }>
}

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      content: `👋 Hi! I'm Duc's AI assistant. I'm here to help you learn about his background, projects, and expertise in React Native and AI integration.

What would you like to know? You can ask me about his experience, view his projects, or get his contact information!`,
      isUser: false,
      timestamp: new Date(),
      type: 'rich'
    }
  ])
  
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const addMessage = useCallback((message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }, [])

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: 'welcome',
        content: `👋 Hi! I'm Duc's AI assistant. I'm here to help you learn about his background, projects, and expertise in React Native and AI integration.

What would you like to know? You can ask me about his experience, view his projects, or get his contact information!`,
        isUser: false,
        timestamp: new Date(),
        type: 'rich'
      }
    ])
  }, [])

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return

    // Add user message
    addMessage({
      content,
      isUser: true,
      type: 'text'
    })

    setInputValue('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateAIResponse(content)
      addMessage({
        content: response.content,
        isUser: false,
        type: 'rich',
        actions: response.actions
      })
      setIsTyping(false)
    }, 800 + Math.random() * 1200)
  }, [addMessage])

  return {
    messages,
    inputValue,
    setInputValue,
    isTyping,
    messagesEndRef,
    addMessage,
    clearMessages,
    sendMessage
  }
}

// AI Response Generator
function generateAIResponse(prompt: string): { content: string; actions?: Array<{
  id: string
  label: string
  icon: React.ReactNode
  action: () => void
  variant?: 'default' | 'outline' | 'secondary'
}> } {
  const lowerPrompt = prompt.toLowerCase()
  
  // Portfolio data for responses
  const portfolioData = {
    about: {
      name: 'Tran Anh Duc',
      title: 'Senior React Native & AI Integration Specialist',
      experience: '4+ years',
      achievements: '50+ enterprise-grade applications across 15+ countries',
      userImpact: 'Millions of users worldwide',
      description: 'Senior React Native and AI Integration Specialist with proven expertise in deploying enterprise-grade applications serving millions of users worldwide.'
    },
    projects: [
      {
        name: 'AI Virtual Assistant - React Native + Next.js',
        description: 'Complete AI assistant ecosystem with mobile app, web dashboard, and voice capabilities. Features real-time conversations, document analysis, image recognition, and multi-modal AI interactions across platforms.',
        tech: ['React Native', 'Next.js 15', 'OpenAI GPT-4o', 'Whisper API', 'Expo', 'TypeScript', 'Supabase', 'Vector DB', 'WebRTC'],
        features: ['Voice-to-text with Whisper', 'Real-time AI conversations', 'Cross-platform sync', 'Document analysis'],
        status: 'Live Demo Available'
      },
      {
        name: 'Smart Analytics & Business Intelligence App',
        description: 'Enterprise mobile app with AI-powered data analytics, predictive modeling, and automated insights. Features real-time dashboards, natural language queries, and intelligent business recommendations.',
        tech: ['React Native', 'TypeScript', 'TensorFlow.js', 'D3.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Redis', 'Chart.js'],
        features: ['AI-powered insights', 'Real-time dashboards', 'Predictive analytics', 'Natural language queries'],
        status: 'Live Demo Available'
      },
      {
        name: 'AI Content Creation & Marketing Platform',
        description: 'SaaS platform for AI-powered content generation, social media automation, and marketing campaigns. Features multi-modal content creation, brand voice training, and performance analytics.',
        tech: ['Next.js 15', 'TypeScript', 'OpenAI GPT-4', 'DALL-E 3', 'Vercel AI SDK', 'Prisma', 'Stripe', 'TailwindCSS', 'Framer Motion'],
        features: ['Multi-modal content generation', 'Social media automation', 'Performance analytics', 'Brand voice training'],
        status: 'Live Demo Available'
      },
      {
        name: 'Smart Home Ecosystem with AI Automation',
        description: 'Intelligent home automation platform with AI-driven energy optimization, predictive maintenance, and natural language control. Supports 100+ device types with machine learning-based automation rules.',
        tech: ['React Native', 'Next.js', 'TypeScript', 'OpenAI API', 'MQTT', 'WebSocket', 'TensorFlow.js', 'AWS IoT', 'React Native Reanimated'],
        features: ['AI-driven energy optimization', 'Predictive maintenance', 'Natural language control', 'Supports 100+ device types'],
        status: 'Live Demo Available'
      },
      {
        name: 'AI-Powered Trading & Portfolio Management',
        description: 'Advanced fintech app with AI trading signals, portfolio optimization, and risk analysis. Features real-time market data, intelligent alerts, and personalized investment recommendations.',
        tech: ['React Native', 'TypeScript', 'TensorFlow.js', 'WebSocket', 'OpenAI API', 'Zustand', 'Biometric Auth', 'Chart.js', 'Firebase'],
        features: ['AI trading signals', 'Portfolio optimization', 'Risk analysis', 'Real-time market data'],
        status: 'Live Demo Available'
      },
      {
        name: 'AI Health Monitoring & Telemedicine App',
        description: 'Comprehensive health app with AI symptom analysis, telemedicine consultations, and personalized wellness plans. Features medical image analysis, vital sign monitoring, and secure patient data management.',
        tech: ['React Native', 'TypeScript', 'TensorFlow.js', 'OpenAI API', 'HealthKit', 'WebRTC', 'Supabase', 'HIPAA Compliance'],
        features: ['AI symptom analysis', 'Telemedicine consultations', 'Personalized wellness plans', 'Medical image analysis'],
        status: 'Live Demo Available'
      }
    ],
    skills: {
      mobile: ['React Native', 'iOS Development', 'Android Development', 'Cross-platform Solutions'],
      web: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Modern Web APIs'],
      ai: ['OpenAI Integration', 'AI/ML Implementation', 'Intelligent Features', 'Natural Language Processing'],
      backend: ['Node.js', 'API Development', 'Database Management', 'Cloud Integration'],
      other: ['Enterprise Architecture', 'Performance Optimization', 'CI/CD', 'Team Leadership']
    }
  }

  if (lowerPrompt.includes('about') || lowerPrompt.includes('background') || lowerPrompt.includes('who')) {
    return {
      content: `🚀 **${portfolioData.about.name}** is a ${portfolioData.about.title} with ${portfolioData.about.experience} of proven expertise.

**Key Achievements:**
• ${portfolioData.about.achievements}
• Serving ${portfolioData.about.userImpact}

**What sets him apart:**
${portfolioData.about.description}

He's passionate about creating innovative mobile applications that solve real-world problems through the power of AI integration.`
    }
  }

  if (lowerPrompt.includes('project') || lowerPrompt.includes('work') || lowerPrompt.includes('portfolio')) {
    const projectList = portfolioData.projects.map(project => 
      `🎯 **${project.name}** (${project.status})
   ${project.description}
   
   **Tech Stack:** ${project.tech.join(', ')}
   **Key Features:** ${project.features.join(', ')}`
    ).join('\n\n')
    
    return {
      content: `🔥 **Featured Projects:**

${projectList}

Each project demonstrates expertise in integrating AI capabilities with mobile applications, creating solutions that are both innovative and practical for enterprise use.`
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

He stays current with the latest technologies and best practices in mobile and web development.`
    }
  }

  if (lowerPrompt.includes('contact') || lowerPrompt.includes('reach') || lowerPrompt.includes('hire')) {
    return {
      content: `📞 **Get In Touch:**

Duc is open to new opportunities and would love to discuss projects!

**Contact Options:**
• 📧 **Email:** Contact form available on portfolio
• 💼 **LinkedIn:** LinkedIn profile available
• 🐙 **GitHub:** GitHub repositories available
• 🌐 **Portfolio:** You're currently viewing it!

Whether you're looking for a senior developer, need AI integration expertise, or want to discuss a project, he's ready to help!`
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

Choose the format that best fits your needs! The ATS-optimized version is perfect for applicant tracking systems.`
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

Feel free to ask me anything!`
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

What would you like to know more about?`
  }
}
