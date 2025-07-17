'use client'

import { useState, useEffect } from 'react'
import { AdvancedChatbot } from './advanced-chatbot'

export function ChatbotWrapper() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Only render the chatbot on the client side to avoid hydration mismatch
  if (!isClient) {
    return null
  }

  return <AdvancedChatbot />
}
