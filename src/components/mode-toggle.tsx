"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border border-cyan-500/30 bg-black/20 backdrop-blur-sm size-10 rounded-xl p-2 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-cyan-400" />
          <Moon className="absolute h-[2rem] w-[2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-cyan-400" />
          <span className="sr-only">{t('common.toggleTheme')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/90 backdrop-blur-xl border border-cyan-500/30">
        <DropdownMenuItem onClick={() => setTheme("light")} className="text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-400">
          {t('common.light')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-400">
          {t('common.dark')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-400">
          {t('common.system')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
