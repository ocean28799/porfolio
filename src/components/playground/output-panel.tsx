"use client"

import { Loader2, Terminal, AlertCircle, CheckCircle } from "lucide-react"

interface OutputPanelProps {
  output: string
  hasError: boolean
  isRunning: boolean
  language: string
}

export function OutputPanel({ output, hasError, isRunning, language }: OutputPanelProps) {
  if (isRunning) {
    return (
      <div className="h-full flex items-center justify-center text-slate-500">
        <div className="flex items-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Running {language} code...</span>
        </div>
      </div>
    )
  }

  if (!output) {
    return (
      <div className="h-full flex items-center justify-center text-slate-500">
        <div className="text-center">
          <Terminal className="w-8 h-8 mx-auto mb-2 opacity-50" />
          <p>Run your code to see the output here</p>
        </div>
      </div>
    )
  }

  if (language === 'html') {
    return (
      <div className="h-full">
        <iframe 
          srcDoc={output}
          className="w-full h-full border-0"
          title="HTML Output"
        />
      </div>
    )
  }

  return (
    <div className="h-full p-4 bg-slate-900 text-slate-100 font-mono text-sm overflow-auto">
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-700">
        {hasError ? (
          <AlertCircle className="w-4 h-4 text-red-400" />
        ) : (
          <CheckCircle className="w-4 h-4 text-green-400" />
        )}
        <span className="text-xs text-slate-400 uppercase tracking-wide">
          {hasError ? 'Error' : 'Output'}
        </span>
      </div>
      
      <pre className={`whitespace-pre-wrap leading-6 ${hasError ? 'text-red-300' : 'text-slate-100'}`}>
        {output}
      </pre>
    </div>
  )
}
