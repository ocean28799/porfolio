'use client'

import dynamic from 'next/dynamic'

// Dynamically import the chatbot component with no SSR
const DynamicAdvancedChatbot = dynamic(
  () => import('./advanced-chatbot').then((mod) => ({ default: mod.AdvancedChatbot })),
  {
    ssr: false,
    loading: () => null
  }
)

export function ChatbotClient() {
  return <DynamicAdvancedChatbot />
}
