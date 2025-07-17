"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Github, ExternalLink, Smartphone, Monitor } from "lucide-react"

interface CodeExample {
  id: string
  title: string
  description: string
  technology: "React Native" | "Next.js" | "AI Integration"
  code: string
  preview: string
  features: string[]
}

const CODE_EXAMPLES: CodeExample[] = [
  {
    id: "rn-ai-chat",
    title: "AI Chat with Voice Recognition",
    description: "React Native implementation with OpenAI GPT-4 and Whisper API",
    technology: "React Native",
    code: `// React Native AI Chat Component
import { useVoiceRecognition } from '@/hooks/useVoiceRecognition'
import { useOpenAI } from '@/hooks/useOpenAI'

export const AIVoiceChat = () => {
  const { startRecording, transcript } = useVoiceRecognition()
  const { sendMessage, isLoading } = useOpenAI()
  
  const handleVoiceInput = async () => {
    await startRecording()
    if (transcript) {
      await sendMessage(transcript)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleVoiceInput}>
        <Text>🎤 Tap to speak</Text>
      </TouchableOpacity>
    </View>
  )
}`,
    preview: "Interactive voice chat with real-time AI responses",
    features: ["Voice-to-text", "AI responses", "Real-time streaming", "Cross-platform"]
  },
  {
    id: "nextjs-server-actions",
    title: "AI-Powered Server Actions",
    description: "Next.js 15 Server Actions with OpenAI integration",
    technology: "Next.js",
    code: `// Server Action with AI
'use server'

import { openai } from '@/lib/openai'
import { revalidatePath } from 'next/cache'

export async function generateContent(prompt: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [{ role: "user", content: prompt }],
    stream: true
  })
  
  revalidatePath('/dashboard')
  return response
}

// Client Component
export default function ContentGenerator() {
  return (
    <form action={generateContent}>
      <input name="prompt" placeholder="Enter your prompt..." />
      <button type="submit">Generate</button>
    </form>
  )
}`,
    preview: "Server-side AI content generation with streaming",
    features: ["Server Actions", "Streaming", "Real-time updates", "Type-safe"]
  },
  {
    id: "vector-search",
    title: "Vector Database RAG System",
    description: "AI-powered document search with embeddings",
    technology: "AI Integration",
    code: `// Vector Search Implementation
import { Pinecone } from '@pinecone-database/pinecone'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'

export class VectorSearchRAG {
  private pinecone: Pinecone
  private embeddings: OpenAIEmbeddings

  async searchSimilarDocuments(query: string) {
    // Generate embedding for query
    const queryEmbedding = await this.embeddings.embedQuery(query)
    
    // Search similar vectors
    const results = await this.pinecone.index('documents').query({
      vector: queryEmbedding,
      topK: 5,
      includeMetadata: true
    })
    
    return results.matches
  }
}`,
    preview: "Semantic search through document collections",
    features: ["Vector embeddings", "Semantic search", "RAG pipeline", "Real-time results"]
  }
]

export function InteractiveCodePlayground() {
  const [selectedExample, setSelectedExample] = useState<CodeExample>(CODE_EXAMPLES[0])
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code')

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Interactive Code Examples</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore real implementations of React Native, Next.js, and AI integration patterns
        </p>
      </div>

      {/* Technology Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {Array.from(new Set(CODE_EXAMPLES.map(ex => ex.technology))).map((tech) => (
          <Button
            key={tech}
            variant="outline"
            size="sm"
            onClick={() => {
              const example = CODE_EXAMPLES.find(ex => ex.technology === tech)
              if (example) setSelectedExample(example)
            }}
            className={selectedExample.technology === tech ? 'bg-primary text-primary-foreground' : ''}
          >
            {tech === 'React Native' && <Smartphone className="w-4 h-4 mr-2" />}
            {tech === 'Next.js' && <Monitor className="w-4 h-4 mr-2" />}
            {tech === 'AI Integration' && <span className="mr-2">🤖</span>}
            {tech}
          </Button>
        ))}
      </div>

      {/* Example Cards */}
      <div className="grid md:grid-cols-3 gap-4 px-2">
        {CODE_EXAMPLES.map((example) => (
          <motion.div
            key={example.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className={`p-4 cursor-pointer transition-all ${
                selectedExample.id === example.id 
                  ? 'ring-2 ring-emerald-400 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/70 border-emerald-400/50' 
                  : 'bg-gradient-to-br from-slate-900/30 via-slate-800/20 to-slate-900/30 border-slate-700/30 hover:border-slate-600/50 hover:bg-gradient-to-br hover:from-slate-900/50 hover:via-slate-800/30 hover:to-slate-900/50'
              }`}
              onClick={() => setSelectedExample(example)}
            >
              <div className="space-y-3">
                <Badge variant="outline" className="border-slate-600/50 text-slate-400 bg-slate-800/30">{example.technology}</Badge>
                <h3 className="font-semibold text-slate-100">{example.title}</h3>
                <p className="text-sm text-slate-300">
                  {example.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {example.features.slice(0, 2).map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs bg-slate-700/40 text-slate-400 border-slate-600/20">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Code Display */}
      <Card className="p-6 bg-gradient-to-br from-slate-900/50 via-slate-800/30 to-slate-900/50 border-slate-700/50">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-100">{selectedExample.title}</h3>
              <p className="text-slate-300">{selectedExample.description}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400">
                <ExternalLink className="w-4 h-4 mr-2" />
                Demo
              </Button>
            </div>
          </div>

          <div className="flex gap-2 p-1 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <Button
              variant="outline"
              size="sm"
              className={`transition-all duration-200 ${
                activeTab === 'code' 
                  ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 hover:shadow-emerald-500/30' 
                  : 'border-transparent bg-transparent text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
              }`}
              onClick={() => setActiveTab('code')}
            >
              Code
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={`transition-all duration-200 ${
                activeTab === 'preview' 
                  ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 hover:shadow-emerald-500/30' 
                  : 'border-transparent bg-transparent text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
              }`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </Button>
          </div>

          {activeTab === 'code' ? (
            <div className="bg-slate-800/50 rounded-lg p-4 overflow-x-auto border border-slate-700/30">
              <pre className="text-sm">
                <code className="text-emerald-400">{selectedExample.code}</code>
              </pre>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-slate-800/30 to-slate-700/20 rounded-lg p-6 text-center border border-slate-700/30">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-emerald-400/10 rounded-full flex items-center justify-center mx-auto border border-emerald-400/20">
                  <Play className="w-6 h-6 text-emerald-400" />
                </div>
                <p className="font-medium text-slate-200">{selectedExample.preview}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedExample.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="bg-slate-700/50 text-slate-300 border-slate-600/30">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
