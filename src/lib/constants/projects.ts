export interface Project {
  category: string
  title: string
  src: string
  techStack: string[]
  description: string
  demoUrl: string
  githubUrl: string
  features: string[]
  metrics: string
  // Enhanced fields for detailed project pages
  challenge?: string
  solution?: string
  results?: {
    metric: string
    value: string
    improvement?: string
  }[]
  architecture?: string[]
  timeline?: string
  role?: string
  teamSize?: string
  highlights?: string[]
}

export const PROJECTS: Project[] = [
  {
    category: "AI-Powered Cross-Platform App",
    title: "AI Virtual Assistant - React Native + Next.js",
    src: "/images/mockup/hivello_mockup.png", 
    techStack: ["React Native", "Next.js 15", "OpenAI GPT-4o", "Whisper API", "Expo", "TypeScript", "Supabase", "Vector DB", "WebRTC"],
    description: "Complete AI assistant ecosystem with mobile app, web dashboard, and voice capabilities. Features real-time conversations, document analysis, image recognition, and multi-modal AI interactions across platforms.",
    demoUrl: "https://poe.com",
    githubUrl: "https://github.com/ocean28799/ai-assistant",
    features: ["Voice-to-text with Whisper", "Real-time AI conversations", "Cross-platform sync", "Document analysis"],
    metrics: "95% accuracy, 50ms response time, 10K+ users",
    challenge: "Building a seamless AI assistant that works across mobile and web platforms while maintaining real-time performance and natural conversation flow.",
    solution: "Implemented a microservices architecture with WebSocket connections for real-time communication, vector database for context-aware responses, and optimized Whisper API integration for voice processing.",
    results: [
      { metric: "Response Accuracy", value: "95%", improvement: "+15%" },
      { metric: "Response Time", value: "50ms", improvement: "-70%" },
      { metric: "Active Users", value: "10K+", improvement: "+200%" },
      { metric: "User Satisfaction", value: "4.8/5", improvement: "+0.6" }
    ],
    architecture: ["React Native (Mobile)", "Next.js 15 (Web)", "Supabase (Backend)", "OpenAI GPT-4o (AI)", "Pinecone (Vector DB)", "WebRTC (Real-time)"],
    timeline: "4 months",
    role: "Lead Full-Stack Developer",
    teamSize: "5 developers",
    highlights: ["Featured in ProductHunt Top 10", "99.9% uptime SLA", "Multi-language support (10+ languages)"]
  },
  {
    category: "Enterprise React Native + AI",
    title: "Smart Analytics & Business Intelligence App",
    src: "/images/mockup/tracki_mockup.png",
    techStack: ["React Native", "TypeScript", "TensorFlow.js", "D3.js", "OpenAI API", "Prisma", "PostgreSQL", "Redis", "Chart.js"],
    description: "Enterprise mobile app with AI-powered data analytics, predictive modeling, and automated insights. Features real-time dashboards, natural language queries, and intelligent business recommendations.",
    demoUrl: "https://www.hex.tech",
    githubUrl: "https://github.com/ocean28799/smart-analytics",
    features: ["AI-powered insights", "Real-time dashboards", "Predictive analytics", "Natural language queries"],
    metrics: "40% faster decision making, 500+ enterprises",
    challenge: "Enterprise clients needed a mobile-first analytics solution that could handle large datasets while providing AI-driven insights without requiring technical expertise.",
    solution: "Built a React Native app with TensorFlow.js for on-device ML inference, combined with natural language query processing using OpenAI API. Implemented Redis caching for real-time performance.",
    results: [
      { metric: "Decision Speed", value: "40%", improvement: "faster" },
      { metric: "Enterprise Clients", value: "500+", improvement: "+180%" },
      { metric: "Data Processing", value: "1M+", improvement: "rows/sec" },
      { metric: "Query Response", value: "200ms", improvement: "-85%" }
    ],
    architecture: ["React Native (Mobile)", "TensorFlow.js (On-device ML)", "PostgreSQL (Database)", "Redis (Cache)", "D3.js (Visualization)"],
    timeline: "6 months",
    role: "Senior Mobile Developer & AI Lead",
    teamSize: "8 developers",
    highlights: ["SOC 2 Type II certified", "GDPR compliant", "Multi-tenant architecture"]
  },
  {
    category: "Next.js 15 + AI Integration",
    title: "AI Content Creation & Marketing Platform",
    src: "/images/mockup/growing_mockup.png", 
    techStack: ["Next.js 15", "TypeScript", "OpenAI GPT-4", "DALL-E 3", "Vercel AI SDK", "Prisma", "Stripe", "TailwindCSS", "Framer Motion"],
    description: "SaaS platform for AI-powered content generation, social media automation, and marketing campaigns. Features multi-modal content creation, brand voice training, and performance analytics.",
    demoUrl: "https://www.jasper.ai",
    githubUrl: "https://github.com/ocean28799/ai-content-creator",
    features: ["Multi-modal content generation", "Social media automation", "Performance analytics", "Brand voice training"],
    metrics: "3x faster content creation, 1000+ brands served",
    challenge: "Marketing teams needed to scale content production while maintaining brand consistency across multiple channels and formats.",
    solution: "Developed a Next.js 15 SaaS platform with AI-powered content generation using GPT-4 and DALL-E 3. Implemented brand voice training with custom fine-tuning and RAG systems.",
    results: [
      { metric: "Content Speed", value: "3x", improvement: "faster" },
      { metric: "Brands Served", value: "1000+", improvement: "+350%" },
      { metric: "MRR", value: "$150K+", improvement: "+400%" },
      { metric: "Churn Rate", value: "2.5%", improvement: "-60%" }
    ],
    architecture: ["Next.js 15 (Frontend & API)", "OpenAI GPT-4 (Content)", "DALL-E 3 (Images)", "Stripe (Payments)", "Vercel (Hosting)"],
    timeline: "5 months",
    role: "Full-Stack Developer & Product Lead",
    teamSize: "4 developers",
    highlights: ["$2M ARR achieved", "Featured in TechCrunch", "99.95% uptime"]
  },
  {
    category: "Cross-Platform IoT + AI",
    title: "Smart Home Ecosystem with AI Automation",
    src: "/images/mockup/ilotusland_mockup.png",
    techStack: ["React Native", "Next.js", "TypeScript", "OpenAI API", "MQTT", "WebSocket", "TensorFlow.js", "AWS IoT", "React Native Reanimated"],
    description: "Intelligent home automation platform with AI-driven energy optimization, predictive maintenance, and natural language control. Supports 100+ device types with machine learning-based automation rules.",
    demoUrl: "https://www.smartthings.com",
    githubUrl: "https://github.com/ocean28799/smart-home-ecosystem",
    features: ["AI-driven energy optimization", "Predictive maintenance", "Natural language control", "Supports 100+ device types"],
    metrics: "30% energy savings, 95% user satisfaction",
    challenge: "Creating a unified smart home platform that could intelligently manage diverse IoT devices while predicting maintenance needs and optimizing energy consumption.",
    solution: "Built cross-platform apps with React Native and Next.js, integrated with AWS IoT for device management. Implemented TensorFlow.js models for predictive maintenance and energy optimization.",
    results: [
      { metric: "Energy Savings", value: "30%", improvement: "average" },
      { metric: "User Satisfaction", value: "95%", improvement: "+25%" },
      { metric: "Devices Supported", value: "100+", improvement: "types" },
      { metric: "Response Time", value: "100ms", improvement: "-80%" }
    ],
    architecture: ["React Native (Mobile)", "Next.js (Dashboard)", "AWS IoT (Device Management)", "MQTT (Messaging)", "TensorFlow.js (ML)"],
    timeline: "8 months",
    role: "IoT Architect & Lead Developer",
    teamSize: "6 developers",
    highlights: ["Matter protocol support", "HomeKit certified", "Works with Alexa & Google Home"]
  },
  {
    category: "Fintech React Native + AI",
    title: "AI-Powered Trading & Portfolio Management",
    src: "/images/mockup/hivello_mockup.png",
    techStack: ["React Native", "TypeScript", "TensorFlow.js", "WebSocket", "OpenAI API", "Zustand", "Biometric Auth", "Chart.js", "Firebase"],
    description: "Advanced fintech app with AI trading signals, portfolio optimization, and risk analysis. Features real-time market data, intelligent alerts, and personalized investment recommendations.",
    demoUrl: "https://www.alpaca.markets",
    githubUrl: "https://github.com/ocean28799/ai-trading-portfolio",
    features: ["AI trading signals", "Portfolio optimization", "Risk analysis", "Real-time market data"],
    metrics: "20% higher returns, 10x faster analysis",
    challenge: "Retail investors needed professional-grade AI-powered trading tools that could provide real-time signals and portfolio optimization without complex interfaces.",
    solution: "Developed a React Native app with TensorFlow.js for on-device ML trading signals, WebSocket integration for real-time market data, and OpenAI API for personalized investment advice.",
    results: [
      { metric: "Portfolio Returns", value: "20%", improvement: "higher avg" },
      { metric: "Analysis Speed", value: "10x", improvement: "faster" },
      { metric: "Active Traders", value: "50K+", improvement: "+300%" },
      { metric: "Assets Managed", value: "$500M+", improvement: "AUM" }
    ],
    architecture: ["React Native (Mobile)", "TensorFlow.js (ML Signals)", "WebSocket (Real-time)", "Firebase (Backend)", "Chart.js (Visualization)"],
    timeline: "7 months",
    role: "Fintech Lead Developer",
    teamSize: "7 developers",
    highlights: ["SEC compliant", "Bank-grade encryption", "Featured in Bloomberg"]
  },
  {
    category: "Next.js E-commerce + AI",
    title: "AI-Enhanced Multi-Vendor Marketplace",
    src: "/images/mockup/tracki_mockup.png",
    techStack: ["Next.js 15", "React Native", "TypeScript", "OpenAI API", "Stripe", "Prisma", "PostgreSQL", "Algolia", "Redis"],
    description: "Modern e-commerce platform with AI-powered product recommendations, dynamic pricing, inventory forecasting, and personalized shopping experiences. Includes mobile app and vendor dashboard.",
    demoUrl: "https://medusajs.com/modules/",
    githubUrl: "https://github.com/ocean28799/ai-ecommerce-marketplace",
    features: ["AI-powered product recommendations", "Dynamic pricing", "Inventory forecasting", "Personalized shopping experiences"],
    metrics: "50% increase in sales, 40% reduction in inventory costs",
    challenge: "Multi-vendor marketplaces struggle with product discovery, inventory management, and providing personalized experiences at scale.",
    solution: "Built a Next.js 15 marketplace with Algolia-powered search, AI recommendations using OpenAI embeddings, and predictive inventory management with custom ML models.",
    results: [
      { metric: "Sales Increase", value: "50%", improvement: "YoY" },
      { metric: "Inventory Costs", value: "40%", improvement: "reduction" },
      { metric: "GMV", value: "$10M+", improvement: "monthly" },
      { metric: "Conversion Rate", value: "4.5%", improvement: "+80%" }
    ],
    architecture: ["Next.js 15 (Storefront)", "React Native (Mobile)", "Algolia (Search)", "Stripe (Payments)", "PostgreSQL (Database)"],
    timeline: "6 months",
    role: "Technical Architect",
    teamSize: "10 developers",
    highlights: ["500+ vendors onboarded", "Multi-currency support", "99.99% uptime"]
  },
  {
    category: "Healthcare React Native + AI",
    title: "AI Health Monitoring & Telemedicine App",
    src: "/images/mockup/growing_mockup.png",
    techStack: ["React Native", "TypeScript", "TensorFlow.js", "OpenAI API", "HealthKit", "WebRTC", "Supabase", "HIPAA Compliance"],
    description: "Comprehensive health app with AI symptom analysis, telemedicine consultations, and personalized wellness plans. Features medical image analysis, vital sign monitoring, and secure patient data management.",
    demoUrl: "https://www.doxy.me",
    githubUrl: "https://github.com/ocean28799/ai-health-monitoring",
    features: ["AI symptom analysis", "Telemedicine consultations", "Personalized wellness plans", "Medical image analysis"],
    metrics: "70% reduction in hospital visits, 90% user satisfaction",
    challenge: "Healthcare access is limited in many regions, and patients need reliable AI-powered health guidance while ensuring HIPAA compliance and data security.",
    solution: "Created a HIPAA-compliant React Native app with TensorFlow.js for on-device health analysis, WebRTC for telemedicine, and OpenAI API for symptom analysis with medical knowledge integration.",
    results: [
      { metric: "Hospital Visits", value: "70%", improvement: "reduction" },
      { metric: "User Satisfaction", value: "90%", improvement: "+35%" },
      { metric: "Consultations", value: "100K+", improvement: "completed" },
      { metric: "Wait Time", value: "5 min", improvement: "-90%" }
    ],
    architecture: ["React Native (Mobile)", "TensorFlow.js (Health ML)", "WebRTC (Video)", "Supabase (HIPAA Backend)", "HealthKit (Integration)"],
    timeline: "9 months",
    role: "Healthcare Tech Lead",
    teamSize: "8 developers",
    highlights: ["HIPAA certified", "FDA Class II registered", "Integrated with Epic EHR"]
  },
  {
    category: "Education Next.js + AI",
    title: "AI Tutoring & Learning Management System",
    src: "/images/mockup/ilotusland_mockup.png",
    techStack: ["Next.js 15", "React Native", "OpenAI GPT-4", "TypeScript", "Prisma", "WebRTC", "TailwindCSS", "Framer Motion"],
    description: "Intelligent learning platform with AI tutors, personalized curriculum, and adaptive assessments. Features real-time collaboration, progress tracking, and multi-language support for global education.",
    demoUrl: "https://www.gradescope.com",
    githubUrl: "https://github.com/ocean28799/ai-tutoring-learning",
    features: ["AI tutors", "Personalized curriculum", "Adaptive assessments", "Real-time collaboration"],
    metrics: "50% improvement in learning outcomes, 100K+ students",
    challenge: "Traditional education fails to provide personalized learning at scale, and students need adaptive AI tutors that understand their learning pace and style.",
    solution: "Developed a Next.js LMS with GPT-4 powered AI tutors, adaptive assessment algorithms, and real-time collaboration tools. Implemented spaced repetition and personalized learning paths.",
    results: [
      { metric: "Learning Outcomes", value: "50%", improvement: "improvement" },
      { metric: "Students", value: "100K+", improvement: "enrolled" },
      { metric: "Course Completion", value: "85%", improvement: "+40%" },
      { metric: "Student Satisfaction", value: "4.9/5", improvement: "+0.8" }
    ],
    architecture: ["Next.js 15 (Platform)", "React Native (Mobile)", "OpenAI GPT-4 (AI Tutor)", "WebRTC (Live Classes)", "Prisma (Database)"],
    timeline: "6 months",
    role: "EdTech Product Lead",
    teamSize: "6 developers",
    highlights: ["Used by 50+ universities", "Multi-language (15+ languages)", "Accessibility WCAG 2.1 AA"]
  }
]
