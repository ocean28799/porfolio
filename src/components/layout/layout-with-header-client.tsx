"use client"

import React from "react"
import { AIGamingBackground } from "../features/backgrounds/ai-gaming-background"
import { NeutralAIBackground } from "../features/backgrounds/neutral-ai-background"
import { useBackground } from "@/contexts/background-context"

export const LayoutWithHeader = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { backgroundType } = useBackground()
  
  // Use the selected background type (matrix or basic)
  const BackgroundComponent = backgroundType === 'matrix' ? AIGamingBackground : NeutralAIBackground

  return (
    <div className="font-[family-name:var(--font-exo2)] font-medium w-screen">
      <BackgroundComponent>
        <main className="overflow-auto overflow-x-hidden container mx-auto flex-1 p-4 relative z-20">
          {children}
        </main>
        <footer className="text-sm md:text-lg row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-zinc-400 dark:text-zinc-500 p-4 relative z-20">
          © 2025 Tran Anh Duc. All rights reserved.
        </footer>
      </BackgroundComponent>
    </div>
  )
}
