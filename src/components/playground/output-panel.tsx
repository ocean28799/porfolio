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
      <div className="h-full flex items-center justify-center text-slate-500 p-2 xs:p-1.5 sm:p-3 md:p-4 bg-slate-900 rounded-lg xs:rounded border border-gray-700 playground-dark-mobile">
        <div className="flex items-center gap-1.5 xs:gap-1 sm:gap-2 text-xs xs:text-[11px] sm:text-sm md:text-base playground-text-mobile">
          <Loader2 className="w-3 h-3 xs:w-2.5 xs:h-2.5 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-spin" />
          <span>Running {language} code...</span>
        </div>
      </div>
    )
  }

  if (!output) {
    return (
      <div className="h-full flex items-center justify-center text-slate-500 p-2 xs:p-1.5 sm:p-3 md:p-4 bg-slate-900 rounded-lg xs:rounded border border-gray-700 playground-dark-mobile">
        <div className="text-center">
          <Terminal className="w-5 h-5 xs:w-4 xs:h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto mb-1.5 xs:mb-1 sm:mb-2 opacity-50" />
          <p className="text-xs xs:text-[11px] sm:text-sm md:text-base playground-text-mobile px-2 xs:px-1">Run your code to see the output here</p>
        </div>
      </div>
    )
  }

  if (language === 'html' || language?.endsWith('.html')) {
    return (
      <div className="h-full bg-white rounded-lg border border-gray-700 overflow-hidden">
        <iframe 
          srcDoc={output}
          className="w-full h-full border-0"
          title="HTML Output"
          style={{ 
            touchAction: 'manipulation',
            WebkitOverflowScrolling: 'touch'
          }}
        />
      </div>
    )
  }

  return (
    <div className="h-full p-2 xs:p-1.5 sm:p-3 md:p-4 bg-slate-900 text-slate-100 font-mono text-xs xs:text-[10px] sm:text-xs md:text-sm overflow-auto rounded-lg xs:rounded border border-gray-700 playground-scrollbar playground-dark-mobile playground-code-mobile"
         style={{ 
           WebkitOverflowScrolling: 'touch',
           touchAction: 'manipulation'
         }}>
      <div className="flex items-center gap-1.5 xs:gap-1 sm:gap-2 mb-2 xs:mb-1.5 sm:mb-3 pb-1.5 xs:pb-1 sm:pb-2 border-b border-slate-700">
        {hasError ? (
          <AlertCircle className="w-2.5 h-2.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-red-400 flex-shrink-0" />
        ) : (
          <CheckCircle className="w-2.5 h-2.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-green-400 flex-shrink-0" />
        )}
        <span className="text-[10px] xs:text-[9px] sm:text-xs text-slate-400 uppercase tracking-wide playground-xs-text">
          {hasError ? 'Error' : 'Output'}
        </span>
      </div>
      
      <pre className={`whitespace-pre-wrap leading-4 xs:leading-[1.2] sm:leading-5 md:leading-6 break-words ${hasError ? 'text-red-300' : 'text-slate-100'}`}>
        {output}
      </pre>
    </div>
  )
}
