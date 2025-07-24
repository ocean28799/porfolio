// Dummy projects file for backward compatibility
// The optimized playground uses its own embedded project definitions

import { FileType, ProjectTemplate } from './types'

// Basic project templates
export const aiChatProject: ProjectTemplate = {
  id: 'ai_chat',
  name: 'AI Chat',
  files: [
    {
      id: 'index.html',
      name: 'index.html',
      type: 'html' as FileType,
      content: '<!DOCTYPE html><html><head><title>AI Chat</title></head><body><h1>AI Chat</h1></body></html>'
    }
  ]
}

export const aiImageGeneratorProject: ProjectTemplate = {
  id: 'ai_image',
  name: 'AI Image Generator',
  files: [
    {
      id: 'index.html',
      name: 'index.html',
      type: 'html' as FileType,
      content: '<!DOCTYPE html><html><head><title>AI Image Generator</title></head><body><h1>AI Image Generator</h1></body></html>'
    }
  ]
}

export const voiceToTextProject: ProjectTemplate = {
  id: 'voice_to_text',
  name: 'Voice to Text',
  files: [
    {
      id: 'index.html',
      name: 'index.html',
      type: 'html' as FileType,
      content: '<!DOCTYPE html><html><head><title>Voice to Text</title></head><body><h1>Voice to Text</h1></body></html>'
    }
  ]
}

export const aiVoiceAssistantProject: ProjectTemplate = {
  id: 'ai_voice_assistant',
  name: 'AI Voice Assistant',
  files: [
    {
      id: 'index.html',
      name: 'index.html',
      type: 'html' as FileType,
      content: '<!DOCTYPE html><html><head><title>AI Voice Assistant</title></head><body><h1>AI Voice Assistant</h1></body></html>'
    }
  ]
}

export const textTranslatorProject: ProjectTemplate = {
  id: 'text_translator',
  name: 'Text Translator',
  files: [
    {
      id: 'index.html',
      name: 'index.html',
      type: 'html' as FileType,
      content: '<!DOCTYPE html><html><head><title>Text Translator</title></head><body><h1>Text Translator</h1></body></html>'
    }
  ]
}
