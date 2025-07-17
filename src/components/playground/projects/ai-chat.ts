import { ProjectTemplate } from '../types.js'

export const aiChatProject: ProjectTemplate = {
  id: 'ai_chat',
  name: "Modern AI Chat Assistant",
  files: [
    {
      id: "index_html",
      name: "index.html",
      type: "html",
      content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern AI Chat Assistant</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'pulse-slow': 'pulse 3s ease-in-out infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'gradient': 'gradient 15s ease infinite',
                        'typing': 'typing 2s steps(20) infinite',
                    }
                }
            }
        }
    </script>
</head>
<body class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Background Effects -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div class="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-float" style="animation-delay: -3s;"></div>
        <div class="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-float" style="animation-delay: -6s;"></div>
    </div>

    <!-- Header -->
    <header class="relative z-10 text-center pt-8 pb-4">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 animate-pulse-slow">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
        </div>
        <h1 class="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Chat Assistant
        </h1>
        <p class="text-slate-300 text-sm">Experience intelligent conversations with advanced AI</p>
    </header>

    <!-- Main Chat Container -->
    <div class="max-w-4xl mx-auto px-4 pb-8">
        <!-- Chat Window -->
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
            <!-- Chat Header -->
            <div class="bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-4 border-b border-white/10">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span class="text-white text-lg">🤖</span>
                    </div>
                    <div>
                        <h3 class="text-white font-semibold">AI Assistant</h3>
                        <p class="text-green-300 text-xs flex items-center gap-1">
                            <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            Online
                        </p>
                    </div>
                    <div class="ml-auto flex gap-2">
                        <button class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                            </svg>
                        </button>
                        <button class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Messages Area -->
            <div id="chat-messages" class="h-96 overflow-y-auto p-4 space-y-4 scroll-smooth">
                <!-- Welcome Message -->
                <div class="flex items-start gap-3 animate-fade-in">
                    <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span class="text-white text-sm">🤖</span>
                    </div>
                    <div class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl rounded-tl-sm p-4 max-w-sm backdrop-blur-sm border border-white/10">
                        <p class="text-white text-sm mb-2">
                            👋 Hello! I'm your AI assistant. I can help you with:
                        </p>
                        <ul class="text-slate-300 text-xs space-y-1">
                            <li>• Answering questions</li>
                            <li>• Creative writing</li>
                            <li>• Problem solving</li>
                            <li>• Code assistance</li>
                        </ul>
                        <p class="text-slate-400 text-xs mt-2">How can I help you today?</p>
                    </div>
                </div>
            </div>

            <!-- Input Area -->
            <div class="p-4 border-t border-white/10 bg-black/20">
                <div class="flex gap-3 items-center ">
                    <!-- Message Input -->
                    <div class="flex-1 relative">
                        <textarea 
                            id="message-input" 
                            placeholder="Type your message..." 
                            rows="1"
                            class="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 pr-20 text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all backdrop-blur-sm"
                            style="min-height: 48px; max-height: 120px;"
                        ></textarea>
                        
                        <!-- Input Actions -->
                        <div class="absolute right-3 bottom-3 flex gap-2">
                            <button id="voice-btn" class="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg" title="Voice message">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Send Button -->
                    <button id="send-btn" class="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-2xl transition-all transform hover:scale-105 hover:rotate-12 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl active:scale-95 group" title="Send message">
                        <svg class="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path>
                        </svg>
                    </button>
                </div>
                
                <!-- Quick Actions / Suggestion Pills -->
                <div class="mt-4 flex flex-wrap gap-2">
                    <button class="suggestion-pill" data-message="What can you help me with?">
                        <span class="pill-emoji">💡</span>
                        <span class="pill-text">Capabilities</span>
                    </button>
                    <button class="suggestion-pill" data-message="Write a creative story">
                        <span class="pill-emoji">✨</span>
                        <span class="pill-text">Creative Writing</span>
                    </button>
                    <button class="suggestion-pill" data-message="Help me with coding">
                        <span class="pill-emoji">💻</span>
                        <span class="pill-text">Code Help</span>
                    </button>
                    <button class="suggestion-pill" data-message="Explain a complex topic">
                        <span class="pill-emoji">🧠</span>
                        <span class="pill-text">Learning</span>
                    </button>
                    <button class="suggestion-pill" data-message="Plan my day">
                        <span class="pill-emoji">📅</span>
                        <span class="pill-text">Planning</span>
                    </button>
                    <button class="suggestion-pill" data-message="Translate text">
                        <span class="pill-emoji">🌍</span>
                        <span class="pill-text">Translation</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="text-center mt-6">
            <p class="text-slate-400 text-xs">
                Powered by advanced AI • Privacy-focused • Always learning
            </p>
        </div>
    </div>
</body>
</html>`
    },
    {
      id: "styles_css",
      name: "styles.css",
      type: "css",
      content: `/* Modern AI Chat Assistant Styles */

/* Custom animations */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes typing {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

@keyframes fade-in {
    0% { 
        opacity: 0; 
        transform: translateY(20px); 
    }
    100% { 
        opacity: 1; 
        transform: translateY(0); 
    }
}

/* Message animations */
.animate-fade-in {
    animation: fade-in 0.6s ease-out;
}

/* Scrollbar styling */
#chat-messages::-webkit-scrollbar {
    width: 6px;
}

#chat-messages::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

#chat-messages::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

#chat-messages::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}

/* Quick action buttons */
.quick-action {
    @apply px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs rounded-lg transition-all border border-white/20 hover:border-white/30 hover:scale-105;
}

/* Enhanced Suggestion Pills */
.suggestion-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 1.5rem;
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.suggestion-pill:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(139, 92, 246, 0.3);
}

.suggestion-pill:active {
    transform: translateY(0) scale(0.98);
    transition: all 0.1s ease;
}

.suggestion-pill .pill-emoji {
    font-size: 1rem;
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.3));
    transition: transform 0.3s ease;
}

.suggestion-pill:hover .pill-emoji {
    transform: scale(1.1) rotate(5deg);
}

.suggestion-pill .pill-text {
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* Pill shimmer effect */
.suggestion-pill::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
    );
    transition: left 0.5s ease;
}

.suggestion-pill:hover::before {
    left: 100%;
}

/* Send button enhancements */
#send-btn {
    position: relative;
    overflow: hidden;
}

#send-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}

#send-btn:hover::before {
    width: 100px;
    height: 100px;
}

#send-btn:active {
    transform: scale(0.95);
}

/* Voice button improvements */
#voice-btn {
    position: relative;
    overflow: hidden;
}

#voice-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
}

#voice-btn:hover::after {
    width: 60px;
    height: 60px;
}

/* Textarea auto-resize */
#message-input {
    resize: none;
    overflow-y: hidden;
}

/* Glassmorphism enhancement */
.glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Voice button pulse effect */
#voice-btn.recording {
    animation: pulse 1.5s ease-in-out infinite;
}

/* Typing indicator */
.typing-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px 16px;
}

.typing-dot {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: typing-bounce 1.4s ease-in-out infinite both;
}

.typing-dot:nth-child(1) { animation-delay: -0.32s; }
.typing-dot:nth-child(2) { animation-delay: -0.16s; }
.typing-dot:nth-child(3) { animation-delay: 0s; }

@keyframes typing-bounce {
    0%, 80%, 100% {
        transform: scale(0.8);
        opacity: 0.5;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
}

/* Message bubble effects */
.message-bubble {
    animation: bubble-in 0.3s ease-out;
}

@keyframes bubble-in {
    0% {
        opacity: 0;
        transform: scale(0.8) translateY(10px);
    }
    100% {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

/* Hover effects for interactive elements */
.hover-lift {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hover-lift:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Responsive design */
@media (max-width: 768px) {
    .quick-action {
        @apply text-xs px-2 py-1;
    }
    
    .suggestion-pill {
        padding: 0.5rem 0.75rem;
        font-size: 0.8rem;
        gap: 0.375rem;
    }
    
    .suggestion-pill .pill-emoji {
        font-size: 0.875rem;
    }
    
    #chat-messages {
        height: 300px;
    }
    
    #send-btn {
        width: 2.75rem;
        height: 2.75rem;
    }
    
    #send-btn svg {
        width: 1.125rem;
        height: 1.125rem;
    }
}

@media (max-width: 480px) {
    .suggestion-pill {
        flex: 1;
        justify-content: center;
        min-width: fit-content;
    }
    
    .suggestion-pill .pill-text {
        font-size: 0.75rem;
    }
}

/* Dark theme enhancements */
.dark-mode {
    color-scheme: dark;
}

/* Custom focus styles */
*:focus {
    outline: none;
}

.focus-ring:focus {
    @apply ring-2 ring-blue-500/50 ring-offset-2 ring-offset-transparent;
}`
    },
    {
      id: "script_js",
      name: "script.js",
      type: "js",
      content: `// Modern AI Chat Assistant
class AIChatAssistant {
    constructor() {
        this.chatMessages = document.getElementById('chat-messages');
        this.messageInput = document.getElementById('message-input');
        this.sendBtn = document.getElementById('send-btn');
        this.voiceBtn = document.getElementById('voice-btn');
        this.isTyping = false;
        this.recognition = null;
        this.isListening = false;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupSpeechRecognition();
        this.autoResizeTextarea();
    }

    setupEventListeners() {
        // Send message on button click
        this.sendBtn.addEventListener('click', () => this.handleSendMessage());
        
        // Send message on Enter key (Shift+Enter for new line)
        this.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSendMessage();
            }
        });

        // Voice input
        this.voiceBtn.addEventListener('click', () => this.toggleVoiceInput());

        // Suggestion pill buttons
        document.querySelectorAll('.suggestion-pill').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const message = e.currentTarget.dataset.message;
                this.messageInput.value = message;
                this.messageInput.focus();
                this.handleSendMessage();
            });
        });

        // Legacy quick action buttons (if any exist)
        document.querySelectorAll('.quick-action').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const message = e.target.dataset.message;
                this.messageInput.value = message;
                this.messageInput.focus();
                this.handleSendMessage();
            });
        });

        // Auto-resize textarea
        this.messageInput.addEventListener('input', () => this.autoResizeTextarea());
    }

    setupSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = 'en-US';

            this.recognition.onstart = () => {
                this.isListening = true;
                this.voiceBtn.classList.add('recording');
                this.voiceBtn.innerHTML = \`
                    <svg class="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"></path>
                        <path d="M19 10v2a7 7 0 01-14 0v-2"></path>
                        <path d="M12 19v4m-4 0h8"></path>
                    </svg>
                \`;
            };

            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.messageInput.value = transcript;
                this.autoResizeTextarea();
            };

            this.recognition.onend = () => {
                this.isListening = false;
                this.voiceBtn.classList.remove('recording');
                this.voiceBtn.innerHTML = \`
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                    </svg>
                \`;
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.isListening = false;
                this.voiceBtn.classList.remove('recording');
            };
        } else {
            this.voiceBtn.style.display = 'none';
        }
    }

    toggleVoiceInput() {
        if (!this.recognition) return;

        if (this.isListening) {
            this.recognition.stop();
        } else {
            this.recognition.start();
        }
    }

    autoResizeTextarea() {
        this.messageInput.style.height = 'auto';
        this.messageInput.style.height = Math.min(this.messageInput.scrollHeight, 120) + 'px';
    }

    handleSendMessage() {
        const message = this.messageInput.value.trim();
        if (!message || this.isTyping) return;

        // Add user message
        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.autoResizeTextarea();

        // Show typing indicator
        this.showTypingIndicator();

        // Simulate AI response delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateAIResponse(message);
            this.addMessage(response, 'ai');
        }, 1000 + Math.random() * 2000);
    }

    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = \`flex items-start gap-3 message-bubble \${sender === 'user' ? 'flex-row-reverse' : ''}\`;

        const isUser = sender === 'user';
        const avatar = isUser ? '👤' : '🤖';
        const bgGradient = isUser 
            ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30' 
            : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30';
        const avatarBg = isUser ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-gradient-to-r from-blue-500 to-purple-600';
        const roundedClass = isUser ? 'rounded-tr-sm' : 'rounded-tl-sm';

        messageDiv.innerHTML = \`
            <div class="w-8 h-8 \${avatarBg} rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white text-sm">\${avatar}</span>
            </div>
            <div class="\${bgGradient} rounded-2xl \${roundedClass} p-4 max-w-sm backdrop-blur-sm border">
                <p class="text-white text-sm whitespace-pre-wrap">\${content}</p>
                <p class="text-slate-400 text-xs mt-2">\${this.formatTime(new Date())}</p>
            </div>
        \`;

        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        if (this.isTyping) return;
        
        this.isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing-indicator';
        typingDiv.className = 'flex items-start gap-3';
        typingDiv.innerHTML = \`
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-white text-sm">🤖</span>
            </div>
            <div class="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl rounded-tl-sm p-4 backdrop-blur-sm border border-blue-500/30">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        \`;

        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        this.isTyping = false;
    }

    generateAIResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // Smart responses based on user input
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return this.getRandomResponse([
                "Hello! 👋 I'm excited to chat with you. What would you like to explore today?",
                "Hi there! 😊 How can I assist you today?",
                "Hey! Great to meet you. What's on your mind?",
                "Hello! I'm here and ready to help. What can I do for you?"
            ]);
        }
        
        if (message.includes('capabilities') || message.includes('help') || message.includes('what can you')) {
            return \`I can help you with many things! 🚀

• Answer questions on various topics
• Help with creative writing and brainstorming
• Assist with problem-solving and analysis  
• Provide coding guidance and explanations
• Offer learning support and explanations
• Generate ideas and suggestions

What specific area interests you most?\`;
        }
        
        if (message.includes('creative') || message.includes('story') || message.includes('write')) {
            return this.getRandomResponse([
                "I love creative writing! 📝 What kind of story would you like me to help with? A sci-fi adventure, fantasy tale, mystery, or something else entirely?",
                "Creative writing is fascinating! ✨ Would you like me to help brainstorm ideas, create characters, or write a complete story?",
                "Let's get creative! 🎨 What genre or theme interests you? I can help with everything from short stories to poetry."
            ]);
        }
        
        if (message.includes('code') || message.includes('programming') || message.includes('develop')) {
            return this.getRandomResponse([
                "I'd be happy to help with coding! 💻 What programming language or specific challenge are you working on?",
                "Programming assistance coming right up! 🔧 Are you looking for help with debugging, learning concepts, or building something new?",
                "Code help is one of my specialties! ⚡ What programming topic can I assist you with today?"
            ]);
        }
        
        if (message.includes('learn') || message.includes('explain') || message.includes('teach')) {
            return this.getRandomResponse([
                "I love helping people learn! 🧠 What topic would you like me to explain? I can break down complex concepts into digestible parts.",
                "Learning is amazing! 📚 What subject or concept can I help clarify for you today?",
                "Teaching is one of my favorite things! 🎓 What would you like to explore and understand better?"
            ]);
        }
        
        // Default responses for general conversation
        return this.getRandomResponse([
            "That's interesting! Could you tell me more about what you're thinking?",
            "I'd love to help you explore that further. What specific aspect interests you most?",
            "Great question! Let me think about the best way to approach this...",
            "I'm here to help! Could you provide a bit more context so I can give you the most useful response?",
            "That's a fascinating topic! What particular angle or perspective would you like to focus on?",
            "I'm ready to dive into this with you! What's the most important part you'd like to address first?",
            "Thanks for sharing that! How would you like me to help you with this?",
            "Excellent! I'm excited to work through this together. Where should we start?"
        ]);
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    formatTime(date) {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// Initialize the chat assistant when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const chatAssistant = new AIChatAssistant();
    window.chatAssistant = chatAssistant; // Make it globally accessible
    
    console.log('🤖 Modern AI Chat Assistant initialized!');
    console.log('✨ Features: Smart responses, voice input, typing indicators, auto-resize');
    console.log('💬 Start chatting to experience the AI assistant!');
});`
    }
  ]
}
