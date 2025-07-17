"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export type Language = {
  id: string
  name: string
  defaultCode: string
  fileExtension: string
}

interface LanguageSelectorProps {
  languages: Language[]
  selectedLanguage: Language
  onLanguageChange: (language: Language) => void
}

export function LanguageSelector({
  languages,
  selectedLanguage,
  onLanguageChange,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 min-w-[120px] justify-between"
      >
        <span>{selectedLanguage.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => {
                onLanguageChange(language)
                setIsOpen(false)
              }}
              className={`w-full px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800 first:rounded-t-md last:rounded-b-md ${
                selectedLanguage.id === language.id
                  ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
