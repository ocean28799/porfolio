"use client"

import { useState, useEffect, useCallback, useMemo, memo } from "react"
import { motion } from "framer-motion"
import { Play, Download, Share2, RefreshCw, Plus, X, FileText, Palette, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeEditor } from "./code-editor"
import { OutputPanel } from "./output-panel"
import { FileType, PlaygroundFile, ProjectTemplate } from "./types"
import { 
  aiChatProject, 
  aiImageGeneratorProject, 
  voiceToTextProject, 
  aiVoiceAssistantProject,
  textTranslatorProject
} from "./projects"
import { usePerformanceMonitor, useDebounce } from "@/lib/performance"

// Use imported project templates
const DEFAULT_PROJECTS: Record<string, ProjectTemplate> = {
  ai_chat: aiChatProject,
  ai_image_generator: aiImageGeneratorProject,
  voice_to_text: voiceToTextProject,
  ai_voice_assistant: aiVoiceAssistantProject,
  text_translator: textTranslatorProject
}

const PROJECTS = [
  DEFAULT_PROJECTS.ai_chat,
  DEFAULT_PROJECTS.ai_image_generator,
  DEFAULT_PROJECTS.voice_to_text,
  DEFAULT_PROJECTS.ai_voice_assistant,
  DEFAULT_PROJECTS.text_translator
]

// Memoized file tab component
const FileTab = memo(({ 
  file, 
  isActive, 
  onClick, 
  onDelete, 
  canDelete 
}: {
  file: PlaygroundFile
  isActive: boolean
  onClick: () => void
  onDelete: () => void
  canDelete: boolean
}) => {
  const getFileIcon = () => {
    switch (file.type) {
      case 'html': return <FileText className="w-4 h-4" />
      case 'css': return <Palette className="w-4 h-4" />
      default: return <Code className="w-4 h-4" />
    }
  }

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 text-sm border-b-2 cursor-pointer transition-all ${
        isActive
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400'
          : 'border-transparent hover:bg-gray-100 dark:hover:bg-gray-800/50'
      }`}
      onClick={onClick}
    >
      {getFileIcon()}
      <span className="font-medium">{file.name}</span>
      {canDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="ml-1 p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 hover:text-red-700"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  )
})

FileTab.displayName = "FileTab"

function MultiFilePlayground() {
  const { measureRender } = usePerformanceMonitor('MultiFilePlayground')
  
  const [selectedProject, setSelectedProject] = useState<ProjectTemplate>(DEFAULT_PROJECTS.ai_chat)
  const [files, setFiles] = useState<PlaygroundFile[]>([...selectedProject.files])
  const [activeFileId, setActiveFileId] = useState(selectedProject.files[0].id)
  const [output, setOutput] = useState('')
  const [hasError, setHasError] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  // Debounce file content for auto-save/validation
  const debouncedFiles = useDebounce(files, 300)

  // Use debouncedFiles for performance optimizations when needed
  useEffect(() => {
    // Could be used for auto-save or validation features
    if (debouncedFiles.length > 0) {
      // Auto-save logic could go here
    }
  }, [debouncedFiles])

  // Memoized active file
  const activeFile = useMemo(() => 
    files.find(f => f.id === activeFileId) || files[0],
    [files, activeFileId]
  )

  const getDefaultContent = useCallback((type: FileType): string => {
    switch (type) {
      case 'html':
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 class="text-4xl font-bold text-gray-800">Hello World!</h1>
    </div>
</body>
</html>`
      case 'css':
        return `/* Custom styles */
body {
    font-family: 'Inter', sans-serif;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}`
      case 'js':
      case 'ts':
        return `// JavaScript/TypeScript code
console.log('Hello from ${type.toUpperCase()}!');

function greet(name) {
    return \`Hello, \${name}!\`;
}

greet('World');`
      default:
        return ''
    }
  }, [])

  const executeCode = useCallback(async () => {
    setIsRunning(true)
    setHasError(false)
    
    try {
      const htmlFile = files.find(f => f.type === 'html')
      const cssFiles = files.filter(f => f.type === 'css')
      const jsFiles = files.filter(f => f.type === 'js' || f.type === 'ts')

      if (!htmlFile) {
        throw new Error('No HTML file found. Please add an HTML file to run the project.')
      }

      // Combine all files into a single HTML document
      let combinedHtml = htmlFile.content

      // Inject CSS files
      if (cssFiles.length > 0) {
        const cssContent = cssFiles.map(file => file.content).join('\n\n')
        const styleTag = `<style>\n${cssContent}\n</style>`
        
        // Insert before closing </head> or at the end of <head>
        if (combinedHtml.includes('</head>')) {
          combinedHtml = combinedHtml.replace('</head>', `${styleTag}\n</head>`)
        } else {
          combinedHtml = combinedHtml.replace('<head>', `<head>\n${styleTag}`)
        }
      }

      // Inject JavaScript files
      if (jsFiles.length > 0) {
        const jsContent = jsFiles.map(file => file.content).join('\n\n')
        const scriptTag = `<script>\n${jsContent}\n</script>`
        
        // Insert before closing </body> or at the end
        if (combinedHtml.includes('</body>')) {
          combinedHtml = combinedHtml.replace('</body>', `${scriptTag}\n</body>`)
        } else {
          combinedHtml += `\n${scriptTag}`
        }
      }

      setOutput(combinedHtml)
    } catch (error) {
      setHasError(true)
      setOutput(error instanceof Error ? error.message : 'An unknown error occurred')
    } finally {
      setTimeout(() => setIsRunning(false), 500)
    }
  }, [files])

  const handleProjectChange = useCallback(async (project: ProjectTemplate) => {
    measureRender('project_change', () => {
      setSelectedProject(project)
      setFiles([...project.files])
      setActiveFileId(project.files[0].id)
      setOutput('')
      setHasError(false)
    })
    
    // Auto-run the project after a short delay to allow state to update
    setTimeout(() => {
      executeCode()
    }, 500)
  }, [measureRender, executeCode])

  const handleFileSelect = useCallback((fileId: string) => {
    setActiveFileId(fileId)
  }, [])

  const handleFileContentChange = useCallback((content: string) => {
    setFiles(prevFiles => 
      prevFiles.map(file => 
        file.id === activeFileId 
          ? { ...file, content }
          : file
      )
    )
  }, [activeFileId])

  const addNewFile = useCallback(() => {
    const fileName = prompt('Enter file name (e.g., utils.js, styles.css):')
    if (!fileName) return

    const extension = fileName.split('.').pop()?.toLowerCase()
    let fileType: FileType = 'js'
    
    if (extension === 'html') fileType = 'html'
    else if (extension === 'css') fileType = 'css'
    else if (extension === 'ts') fileType = 'ts'
    else if (extension === 'js') fileType = 'js'

    const newFile: PlaygroundFile = {
      id: `custom_${Date.now()}`,
      name: fileName,
      type: fileType,
      content: getDefaultContent(fileType)
    }

    setFiles(prev => [...prev, newFile])
    setActiveFileId(newFile.id)
  }, [getDefaultContent])

  const deleteFile = useCallback((fileId: string) => {
    if (files.length <= 1) return // Don't delete if it's the only file
    
    const updatedFiles = files.filter(f => f.id !== fileId)
    setFiles(updatedFiles)
    
    if (activeFileId === fileId) {
      setActiveFileId(updatedFiles[0].id)
    }
  }, [files, activeFileId])

  // Auto-run effect optimized
  useEffect(() => {
    const timer = setTimeout(() => {
      executeCode()
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [executeCode])

  const handleReset = useCallback(() => {
    setFiles([...selectedProject.files])
    setActiveFileId(selectedProject.files[0].id)
    setOutput('')
    setHasError(false)
  }, [selectedProject])

  const handleDownload = useCallback(() => {
    const projectData = {
      name: selectedProject.name,
      files: files.map(file => ({
        name: file.name,
        content: file.content
      }))
    }
    
    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${selectedProject.name.toLowerCase().replace(/\s+/g, '-')}-project.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [selectedProject, files])

  const handleShare = useCallback(async () => {
    const shareData = {
      title: `${selectedProject.name} - Multi-File Playground`,
      text: `Check out this ${selectedProject.name} project!`,
      url: window.location.href
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        const projectData = JSON.stringify({ name: selectedProject.name, files }, null, 2)
        await navigator.clipboard.writeText(projectData)
        alert('Project data copied to clipboard!')
      }
    } else {
      const projectData = JSON.stringify({ name: selectedProject.name, files }, null, 2)
      await navigator.clipboard.writeText(projectData)
      alert('Project data copied to clipboard!')
    }
  }, [selectedProject, files])

  // Memoized icon helpers (removed unused getFileIcon)
  const getProjectIcon = useMemo(() => (projectId: string) => {
    switch (projectId) {
      case 'ai_chat': return '🤖'
      case 'ai_image_generator': return '🎨'
      case 'voice_to_text': return '🎤'
      case 'ai_voice_assistant': return '🗣️'
      case 'text_translator': return '🌐'
      default: return '📝'
    }
  }, [])

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-7xl md:text-9xl font-black bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Playground
          </motion.h1>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build complete projects with HTML, CSS, and JavaScript. Combine multiple files 
            into a single interactive experience with modern frameworks and libraries.
          </motion.p>
        </div>

        {/* Project Selector */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800 mb-6">
          {/* Project Tabs */}
          <div className="border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap gap-3 p-3 overflow-x-auto scrollbar-hide">
              {PROJECTS.map(project => (
                <button
                  key={project.id}
                  onClick={() => handleProjectChange(project)}
                  className={`
                    px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium text-xs sm:text-sm transition-all duration-200 relative flex items-center gap-1 sm:gap-2 whitespace-nowrap flex-shrink-0
                    ${selectedProject.id === project.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-102'
                    }
                  `}
                >
                  <span className="text-sm sm:text-lg">{getProjectIcon(project.id)}</span>
                  <span className="relative z-10 hidden sm:inline">{project.name}</span>
                  <span className="relative z-10 sm:hidden">{project.name.split(' ')[0]}</span>
                  {selectedProject.id === project.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-90" />
                  )}
                  {selectedProject.id === project.id && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {selectedProject.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                    Auto-running
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button onClick={executeCode} disabled={isRunning} className="bg-emerald-600 hover:bg-emerald-700">
                  <Play className="w-4 h-4 mr-2" />
                  {isRunning ? 'Running...' : 'Run Project'}
                </Button>
                
                <Button variant="outline" onClick={handleReset} size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                
                <Button variant="outline" onClick={handleDownload} size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                
                <Button variant="outline" onClick={handleShare} size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>

          {/* File Manager and Editor */}
          <div className="grid lg:grid-cols-2 min-h-[700px]">
            {/* Left Panel - File Manager + Editor */}
            <div className="border-r border-slate-200 dark:border-slate-800">
              {/* File Tabs */}
              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2 flex-1 overflow-x-auto">
                  {files.map((file) => (
                    <FileTab
                      key={file.id}
                      file={file}
                      isActive={activeFileId === file.id}
                      onClick={() => handleFileSelect(file.id)}
                      onDelete={() => deleteFile(file.id)}
                      canDelete={files.length > 1}
                    />
                  ))}
                </div>
                
                <Button
                  onClick={addNewFile}
                  size="sm"
                  variant="outline"
                  className="ml-2 whitespace-nowrap"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Add File
                </Button>
              </div>

              {/* Code Editor */}
              <div className="h-[600px]">
                <CodeEditor
                  value={activeFile.content}
                  onChange={handleFileContentChange}
                  language={activeFile.type}
                />
              </div>
            </div>

            {/* Right Panel - Output */}
            <div>
              <OutputPanel
                output={output}
                hasError={hasError}
                isRunning={isRunning}
                language="html"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(MultiFilePlayground)
