'use client'

import { createContext, useContext, useState, useCallback } from 'react'

interface ChatbotContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  messageCount: number
  incrementMessageCount: () => void
  resetMessageCount: () => void
  toggleChatbot: () => void
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined)

export function ChatbotProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [messageCount, setMessageCount] = useState(0)

  const incrementMessageCount = useCallback(() => {
    setMessageCount(prev => prev + 1)
  }, [])

  const resetMessageCount = useCallback(() => {
    setMessageCount(0)
  }, [])

  const toggleChatbot = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <ChatbotContext.Provider value={{
      isOpen,
      setIsOpen,
      messageCount,
      incrementMessageCount,
      resetMessageCount,
      toggleChatbot
    }}>
      {children}
    </ChatbotContext.Provider>
  )
}

export function useChatbot() {
  const context = useContext(ChatbotContext)
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider')
  }
  return context
}
