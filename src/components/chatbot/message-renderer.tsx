import React from 'react'

interface MessageRendererProps {
  content: string
  isUser: boolean
}

export function MessageRenderer({ content, isUser }: MessageRendererProps) {
  const renderContent = (text: string) => {
    // Split by lines first
    const lines = text.split('\n')
    
    return lines.map((line, lineIndex) => {
      if (line.trim() === '') {
        return <br key={lineIndex} />
      }
      
      // Process the line for various formatting
      const processLine = (lineText: string) => {
        const parts: React.ReactNode[] = []
        let remaining = lineText
        let partIndex = 0
        
        while (remaining.length > 0) {
          // Bold text with **text**
          const boldMatch = remaining.match(/\*\*(.*?)\*\*/)
          if (boldMatch && boldMatch.index !== undefined) {
            // Add text before bold
            if (boldMatch.index > 0) {
              parts.push(
                <span key={`text-${partIndex}`}>
                  {remaining.substring(0, boldMatch.index)}
                </span>
              )
              partIndex++
            }
            // Add bold text
            parts.push(
              <strong key={`bold-${partIndex}`} className="font-bold">
                {boldMatch[1]}
              </strong>
            )
            partIndex++
            remaining = remaining.substring(boldMatch.index + boldMatch[0].length)
          }
          // Bullet points with • or -
          else if (remaining.match(/^[•\-]\s+/)) {
            const bulletMatch = remaining.match(/^[•\-]\s+(.*)/)
            if (bulletMatch) {
              return (
                <div key={`bullet-${lineIndex}`} className="flex items-start gap-2 ml-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span className="flex-1">{processInlineFormatting(bulletMatch[1])}</span>
                </div>
              )
            }
          }
          // Code blocks with `code`
          else if (remaining.includes('`')) {
            const codeMatch = remaining.match(/`([^`]+)`/)
            if (codeMatch && codeMatch.index !== undefined) {
              // Add text before code
              if (codeMatch.index > 0) {
                parts.push(
                  <span key={`text-${partIndex}`}>
                    {remaining.substring(0, codeMatch.index)}
                  </span>
                )
                partIndex++
              }
              // Add code
              parts.push(
                <code key={`code-${partIndex}`} className="bg-gray-800 text-green-400 px-1 py-0.5 rounded text-xs font-mono">
                  {codeMatch[1]}
                </code>
              )
              partIndex++
              remaining = remaining.substring(codeMatch.index + codeMatch[0].length)
            } else {
              break
            }
          }
          // Links with [text](url) or just URLs
          else if (remaining.includes('http')) {
            const linkMatch = remaining.match(/(https?:\/\/[^\s]+)/)
            if (linkMatch && linkMatch.index !== undefined) {
              // Add text before link
              if (linkMatch.index > 0) {
                parts.push(
                  <span key={`text-${partIndex}`}>
                    {remaining.substring(0, linkMatch.index)}
                  </span>
                )
                partIndex++
              }
              // Add link
              parts.push(
                <a 
                  key={`link-${partIndex}`} 
                  href={linkMatch[1]} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  {linkMatch[1]}
                </a>
              )
              partIndex++
              remaining = remaining.substring(linkMatch.index + linkMatch[0].length)
            } else {
              break
            }
          }
          else {
            // Add remaining text
            parts.push(
              <span key={`text-${partIndex}`}>
                {remaining}
              </span>
            )
            break
          }
        }
        
        return parts.length > 0 ? parts : [lineText]
      }
      
      // Process inline formatting within text
      const processInlineFormatting = (text: string) => {
        const parts: React.ReactNode[] = []
        let remaining = text
        let partIndex = 0
        
        while (remaining.length > 0) {
          // Bold text
          const boldMatch = remaining.match(/\*\*(.*?)\*\*/)
          if (boldMatch && boldMatch.index !== undefined) {
            if (boldMatch.index > 0) {
              parts.push(remaining.substring(0, boldMatch.index))
            }
            parts.push(
              <strong key={`bold-${partIndex}`} className="font-bold">
                {boldMatch[1]}
              </strong>
            )
            partIndex++
            remaining = remaining.substring(boldMatch.index + boldMatch[0].length)
          } else {
            parts.push(remaining)
            break
          }
        }
        
        return parts.length > 0 ? parts : [text]
      }
      
      // Check if line is a header (starts with #)
      if (line.startsWith('#')) {
        const text = line.replace(/^#+\s*/, '')
        
        return (
          <div key={lineIndex} className="font-bold text-lg mb-2 mt-3">
            {text}
          </div>
        )
      }
      
      // Check if line is a bullet point
      if (line.match(/^[•\-]\s+/)) {
        const bulletMatch = line.match(/^[•\-]\s+(.*)/)
        if (bulletMatch) {
          return (
            <div key={lineIndex} className="flex items-start gap-2 ml-2 mb-1">
              <span className={`mt-1 ${isUser ? 'text-blue-200' : 'text-blue-400'}`}>•</span>
              <span className="flex-1">{processInlineFormatting(bulletMatch[1])}</span>
            </div>
          )
        }
      }
      
      // Check if line is a section header (starts with **)
      if (line.match(/^\*\*.*\*\*:?\s*$/)) {
        const headerText = line.replace(/^\*\*|\*\*:?\s*$/g, '')
        return (
          <div key={lineIndex} className="font-bold text-base mb-2 mt-3">
            {headerText}
          </div>
        )
      }
      
      // Regular line processing
      const processedLine = processLine(line)
      
      return (
        <div key={lineIndex} className="mb-1">
          {processedLine}
        </div>
      )
    })
  }
  
  return (
    <div className="chatbot-message-rich space-y-1">
      {renderContent(content)}
    </div>
  )
}
