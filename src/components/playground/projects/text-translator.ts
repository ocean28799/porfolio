import { ProjectTemplate } from '../types.js'

export const textTranslatorProject: ProjectTemplate = {
  id: 'text_translator',
  name: "AI Text Translator",
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
    <title>AI Text Translator</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'slide-in': 'slideIn 0.3s ease-out',
                        'fade-in': 'fadeIn 0.5s ease-out',
                        'pulse-slow': 'pulse 3s ease-in-out infinite',
                    }
                }
            }
        }
    </script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
    <!-- Background Effects -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div class="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse-slow" style="animation-delay: -2s;"></div>
        <div class="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse-slow" style="animation-delay: -4s;"></div>
    </div>

    <!-- Header -->
    <header class="relative z-10 text-center pt-8 pb-6">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
            </svg>
        </div>
        <h1 class="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Text Translator
        </h1>
        <p class="text-slate-300 text-sm">Translate text between languages instantly</p>
    </header>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto px-4 pb-8">
        <!-- Language Selection Bar -->
        <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 mb-6 shadow-2xl">
            <div class="flex items-center justify-between flex-wrap gap-4">
                <!-- Source Language -->
                <div class="flex items-center gap-3">
                    <label class="text-white font-medium text-sm">From:</label>
                    <select id="source-lang" class="bg-white/20 border border-white/30 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm">
                        <option value="auto" class="bg-slate-800">Auto Detect</option>
                        <option value="en" class="bg-slate-800">English</option>
                        <option value="es" class="bg-slate-800">Spanish</option>
                        <option value="fr" class="bg-slate-800">French</option>
                        <option value="de" class="bg-slate-800">German</option>
                        <option value="it" class="bg-slate-800">Italian</option>
                        <option value="pt" class="bg-slate-800">Portuguese</option>
                        <option value="ru" class="bg-slate-800">Russian</option>
                        <option value="ja" class="bg-slate-800">Japanese</option>
                        <option value="ko" class="bg-slate-800">Korean</option>
                        <option value="zh" class="bg-slate-800">Chinese</option>
                        <option value="ar" class="bg-slate-800">Arabic</option>
                        <option value="hi" class="bg-slate-800">Hindi</option>
                        <option value="vi" class="bg-slate-800">Vietnamese</option>
                    </select>
                </div>

                <!-- Swap Button -->
                <button id="swap-languages" class="p-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl text-white transition-all transform hover:scale-105 hover:rotate-180 duration-300 shadow-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                    </svg>
                </button>

                <!-- Target Language -->
                <div class="flex items-center gap-3">
                    <label class="text-white font-medium text-sm">To:</label>
                    <select id="target-lang" class="bg-white/20 border border-white/30 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm">
                        <option value="en" class="bg-slate-800">English</option>
                        <option value="es" class="bg-slate-800">Spanish</option>
                        <option value="fr" class="bg-slate-800">French</option>
                        <option value="de" class="bg-slate-800">German</option>
                        <option value="it" class="bg-slate-800">Italian</option>
                        <option value="pt" class="bg-slate-800">Portuguese</option>
                        <option value="ru" class="bg-slate-800">Russian</option>
                        <option value="ja" class="bg-slate-800">Japanese</option>
                        <option value="ko" class="bg-slate-800">Korean</option>
                        <option value="zh" class="bg-slate-800">Chinese</option>
                        <option value="ar" class="bg-slate-800">Arabic</option>
                        <option value="hi" class="bg-slate-800">Hindi</option>
                        <option value="vi" class="bg-slate-800">Vietnamese</option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Translation Areas -->
        <div class="grid lg:grid-cols-2 gap-6">
            <!-- Source Text Area -->
            <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <div class="bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-4 border-b border-white/10">
                    <div class="flex items-center justify-between">
                        <h3 class="text-white font-semibold flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                            Source Text
                        </h3>
                        <div class="flex gap-2">
                            <button id="clear-source" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" title="Clear text">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                </svg>
                            </button>
                            <button id="paste-text" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" title="Paste from clipboard">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <textarea 
                        id="source-text" 
                        placeholder="Enter text to translate..." 
                        class="w-full h-64 bg-transparent text-white placeholder-slate-400 resize-none focus:outline-none text-sm leading-relaxed"
                    ></textarea>
                    <div class="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                        <span id="char-count" class="text-slate-400 text-xs">0 / 5000 characters</span>
                        <div id="detected-lang" class="text-blue-300 text-xs font-medium"></div>
                    </div>
                </div>
            </div>

            <!-- Target Text Area -->
            <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
                <div class="bg-gradient-to-r from-purple-600/30 to-pink-600/30 p-4 border-b border-white/10">
                    <div class="flex items-center justify-between">
                        <h3 class="text-white font-semibold flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                            </svg>
                            Translation
                        </h3>
                        <div class="flex gap-2">
                            <button id="copy-translation" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" title="Copy translation">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                </svg>
                            </button>
                            <button id="speak-translation" class="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors" title="Listen to translation">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M9 9a3 3 0 000 6h3v2H9a5 5 0 010-10v2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="p-4">
                    <div id="translation-result" class="w-full h-64 text-white text-sm leading-relaxed overflow-y-auto">
                        <div class="flex items-center justify-center h-full text-slate-400">
                            <div class="text-center">
                                <svg class="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                                </svg>
                                <p>Translation will appear here</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                        <div id="translation-status" class="text-slate-400 text-xs"></div>
                        <button id="translate-btn" class="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl transition-all transform hover:scale-105 shadow-lg text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed">
                            Translate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,
    },
    {
      id: "styles_css",
      name: "styles.css",
      type: "css",
      content: `/* AI Text Translator Styles */

/* Custom animations */
@keyframes slideIn {
    0% { 
        opacity: 0; 
        transform: translateY(20px); 
    }
    100% { 
        opacity: 1; 
        transform: translateY(0); 
    }
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@keyframes pulse-glow {
    0%, 100% { 
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    50% { 
        box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
    }
}

@keyframes typing-dots {
    0%, 20% { content: '.'; }
    40% { content: '..'; }
    60% { content: '...'; }
    80%, 100% { content: ''; }
}

/* Scrollbar styling */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}

/* Enhanced select styling */
select option {
    background-color: #1e293b;
    color: white;
    padding: 8px;
}

select:focus option:checked {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}

/* Textarea enhancements */
#source-text {
    resize: none;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

#source-text:focus {
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}

/* Translation result area */
#translation-result {
    min-height: 256px;
    position: relative;
}

/* Loading animation */
.loading-dots::after {
    content: '';
    animation: typing-dots 2s infinite;
}

/* Button hover effects */
.btn-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Copy success animation */
.copy-success {
    animation: pulse-glow 0.6s ease-out;
}

/* Language swap animation */
#swap-languages {
    transition: all 0.3s ease;
}

#swap-languages:hover {
    transform: scale(1.05) rotate(180deg);
}

/* Character counter styling */
#char-count.warning {
    color: #fbbf24;
}

#char-count.error {
    color: #ef4444;
}

/* Translation status indicators */
.status-translating {
    color: #3b82f6;
}

.status-success {
    color: #10b981;
}

.status-error {
    color: #ef4444;
}

/* Glassmorphism effects */
.glass-panel {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Language detection badge */
.lang-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.75rem;
    background: rgba(59, 130, 246, 0.2);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: #93c5fd;
}

/* Quick translation suggestions */
.quick-phrase {
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1.5rem;
    color: white;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.quick-phrase:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Translation history */
.history-item {
    padding: 1rem;
    margin: 0.5rem 0;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    transition: all 0.3s ease;
}

.history-item:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
}

/* Mobile responsiveness */
@media (max-width: 1024px) {
    .grid.lg\\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
    
    #source-text,
    #translation-result {
        height: 200px;
    }
}

@media (max-width: 768px) {
    .flex.items-center.justify-between.flex-wrap {
        flex-direction: column;
        gap: 1rem;
    }
    
    .quick-phrase {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
    }
    
    #source-text,
    #translation-result {
        height: 180px;
    }
}

@media (max-width: 480px) {
    .max-w-6xl {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    
    .bg-white\\/10.backdrop-blur-xl {
        margin: 0.5rem;
    }
    
    select {
        font-size: 0.875rem;
    }
}

/* Focus states for accessibility */
button:focus,
select:focus,
textarea:focus {
    outline: 2px solid rgba(59, 130, 246, 0.5);
    outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .bg-white\\/10 {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .border-white\\/20 {
        border-color: rgba(255, 255, 255, 0.4);
    }
    
    .text-slate-400 {
        color: #cbd5e1;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

/* Print styles */
@media print {
    .bg-gradient-to-br {
        background: white !important;
        color: black !important;
    }
    
    .glass-panel {
        background: white !important;
        border: 1px solid #ccc !important;
    }
    
    button {
        display: none !important;
    }
}`
    },
    {
      id: "script_js",
      name: "script.js",
      type: "js",
      content: `// AI Text Translator
class TextTranslator {
    constructor() {
        // DOM elements
        this.sourceLang = document.getElementById('source-lang');
        this.targetLang = document.getElementById('target-lang');
        this.sourceText = document.getElementById('source-text');
        this.translationResult = document.getElementById('translation-result');
        this.translateBtn = document.getElementById('translate-btn');
        this.swapBtn = document.getElementById('swap-languages');
        this.clearBtn = document.getElementById('clear-source');
        this.pasteBtn = document.getElementById('paste-text');
        this.copyBtn = document.getElementById('copy-translation');
        this.speakBtn = document.getElementById('speak-translation');
        this.charCount = document.getElementById('char-count');
        this.detectedLang = document.getElementById('detected-lang');
        this.translationStatus = document.getElementById('translation-status');
        
        // State
        this.isTranslating = false;
        this.translationHistory = [];
        this.lastTranslation = null;
        this.speechSynthesis = window.speechSynthesis;
        
        // Language mappings
        this.languages = {
            'auto': 'Auto Detect',
            'en': 'English',
            'es': 'Spanish',
            'fr': 'French',
            'de': 'German',
            'it': 'Italian',
            'pt': 'Portuguese',
            'ru': 'Russian',
            'ja': 'Japanese',
            'ko': 'Korean',
            'zh': 'Chinese',
            'ar': 'Arabic',
            'hi': 'Hindi',
            'vi': 'Vietnamese'
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadTranslationHistory();
        this.updateCharCount();
        
        console.log('🌐 AI Text Translator initialized!');
    }

    setupEventListeners() {
        // Translation button
        this.translateBtn.addEventListener('click', () => this.handleTranslate());
        
        // Auto-translate on input (debounced)
        let translateTimeout;
        this.sourceText.addEventListener('input', () => {
            this.updateCharCount();
            
            clearTimeout(translateTimeout);
            if (this.sourceText.value.trim()) {
                translateTimeout = setTimeout(() => this.handleTranslate(), 1000);
            } else {
                this.clearTranslation();
            }
        });
        
        // Language swap
        this.swapBtn.addEventListener('click', () => this.swapLanguages());
        
        // Clear source text
        this.clearBtn.addEventListener('click', () => this.clearSource());
        
        // Paste text
        this.pasteBtn.addEventListener('click', () => this.pasteText());
        
        // Copy translation
        this.copyBtn.addEventListener('click', () => this.copyTranslation());
        
        // Speak translation
        this.speakBtn.addEventListener('click', () => this.speakTranslation());
        
        // Language selection changes
        this.sourceLang.addEventListener('change', () => this.handleLanguageChange());
        this.targetLang.addEventListener('change', () => this.handleLanguageChange());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }

    updateCharCount() {
        const length = this.sourceText.value.length;
        const maxLength = 5000;
        
        this.charCount.textContent = \`\${length} / \${maxLength} characters\`;
        
        // Update styling based on character count
        this.charCount.className = 'text-xs';
        if (length > maxLength * 0.8) {
            this.charCount.classList.add('warning');
        }
        if (length > maxLength) {
            this.charCount.classList.add('error');
            this.sourceText.value = this.sourceText.value.substring(0, maxLength);
        }
    }

    swapLanguages() {
        if (this.sourceLang.value === 'auto') {
            this.showStatus('Cannot swap when auto-detect is selected', 'error');
            return;
        }
        
        // Swap language selections
        const sourceValue = this.sourceLang.value;
        const targetValue = this.targetLang.value;
        
        this.sourceLang.value = targetValue;
        this.targetLang.value = sourceValue;
        
        // Swap text content if both exist
        if (this.sourceText.value.trim() && this.lastTranslation) {
            const sourceText = this.sourceText.value;
            this.sourceText.value = this.lastTranslation;
            this.updateCharCount();
            this.handleTranslate();
        }
        
        this.showStatus('Languages swapped', 'success');
    }

    clearSource() {
        this.sourceText.value = '';
        this.updateCharCount();
        this.clearTranslation();
        this.detectedLang.textContent = '';
        this.sourceText.focus();
    }

    clearTranslation() {
        this.translationResult.innerHTML = \`
            <div class="flex items-center justify-center h-full text-slate-400">
                <div class="text-center">
                    <svg class="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                    </svg>
                    <p>Translation will appear here</p>
                </div>
            </div>
        \`;
        this.lastTranslation = null;
        this.translationStatus.textContent = '';
    }

    async pasteText() {
        try {
            const text = await navigator.clipboard.readText();
            this.sourceText.value = text;
            this.updateCharCount();
            this.sourceText.focus();
            
            if (text.trim()) {
                setTimeout(() => this.handleTranslate(), 500);
            }
            
            this.showStatus('Text pasted', 'success');
        } catch (error) {
            this.showStatus('Could not paste text', 'error');
            console.error('Paste failed:', error);
        }
    }

    async copyTranslation() {
        if (!this.lastTranslation) {
            this.showStatus('No translation to copy', 'error');
            return;
        }
        
        try {
            await navigator.clipboard.writeText(this.lastTranslation);
            this.showStatus('Translation copied!', 'success');
            
            // Visual feedback
            this.copyBtn.classList.add('copy-success');
            setTimeout(() => this.copyBtn.classList.remove('copy-success'), 600);
        } catch (error) {
            this.showStatus('Could not copy translation', 'error');
            console.error('Copy failed:', error);
        }
    }

    speakTranslation() {
        if (!this.lastTranslation) {
            this.showStatus('No translation to speak', 'error');
            return;
        }
        
        // Stop any current speech
        this.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(this.lastTranslation);
        utterance.lang = this.getLanguageCode(this.targetLang.value);
        utterance.rate = 0.8;
        utterance.pitch = 1;
        
        utterance.onstart = () => {
            this.speakBtn.innerHTML = \`
                <svg class="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 7l8-5v20l-8-5v-4zm10-3v16.127c2.15-.904 4-2.893 4-5.127s-1.85-4.223-4-5.127z"></path>
                </svg>
            \`;
        };
        
        utterance.onend = () => {
            this.speakBtn.innerHTML = \`
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M9 9a3 3 0 000 6h3v2H9a5 5 0 010-10v2z"></path>
                </svg>
            \`;
        };
        
        this.speechSynthesis.speak(utterance);
        this.showStatus('Speaking translation...', 'success');
    }

    getLanguageCode(langCode) {
        const langMap = {
            'en': 'en-US',
            'es': 'es-ES',
            'fr': 'fr-FR',
            'de': 'de-DE',
            'it': 'it-IT',
            'pt': 'pt-PT',
            'ru': 'ru-RU',
            'ja': 'ja-JP',
            'ko': 'ko-KR',
            'zh': 'zh-CN',
            'ar': 'ar-SA',
            'hi': 'hi-IN',
            'vi': 'vi-VN'
        };
        return langMap[langCode] || langCode;
    }

    handleLanguageChange() {
        if (this.sourceText.value.trim()) {
            // Re-translate with new language settings
            setTimeout(() => this.handleTranslate(), 300);
        }
    }

    handleKeyboardShortcuts(e) {
        // Ctrl/Cmd + Enter to translate
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            this.handleTranslate();
        }
        
        // Ctrl/Cmd + D to clear
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            this.clearSource();
        }
        
        // Ctrl/Cmd + V to paste (when source text is focused)
        if ((e.ctrlKey || e.metaKey) && e.key === 'v' && document.activeElement === this.sourceText) {
            setTimeout(() => {
                this.updateCharCount();
                if (this.sourceText.value.trim()) {
                    setTimeout(() => this.handleTranslate(), 500);
                }
            }, 100);
        }
    }

    async handleTranslate() {
        const text = this.sourceText.value.trim();
        
        if (!text) {
            this.clearTranslation();
            return;
        }
        
        if (this.isTranslating) return;
        
        this.isTranslating = true;
        this.showTranslatingState();
        
        try {
            // Detect language if auto-detect is selected
            let detectedLang = this.sourceLang.value;
            if (this.sourceLang.value === 'auto') {
                detectedLang = await this.detectLanguage(text);
                this.showDetectedLanguage(detectedLang);
            }
            
            // Perform translation
            const translation = await this.translateText(text, detectedLang, this.targetLang.value);
            
            this.displayTranslation(translation);
            this.saveToHistory(text, translation, detectedLang, this.targetLang.value);
            
        } catch (error) {
            console.error('Translation error:', error);
            this.showTranslationError(error.message);
        } finally {
            this.isTranslating = false;
            this.hideTranslatingState();
        }
    }

    showTranslatingState() {
        this.translateBtn.disabled = true;
        this.translateBtn.textContent = 'Translating...';
        this.translationStatus.textContent = 'Translating...';
        this.translationStatus.className = 'text-blue-300 text-xs status-translating';
        
        // Show loading animation in result area
        this.translationResult.innerHTML = \`
            <div class="flex items-center justify-center h-full">
                <div class="text-center">
                    <div class="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-4">
                        <svg class="w-6 h-6 text-blue-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                    </div>
                    <p class="text-blue-300 text-sm">Processing translation<span class="loading-dots"></span></p>
                </div>
            </div>
        \`;
    }

    hideTranslatingState() {
        this.translateBtn.disabled = false;
        this.translateBtn.textContent = 'Translate';
    }

    async detectLanguage(text) {
        // Simulate language detection with simple heuristics
        await this.delay(300);
        
        // Simple language detection based on character patterns
        if (/[а-яё]/i.test(text)) return 'ru';
        if (/[一-龯]/.test(text)) return 'zh';
        if (/[ひらがなカタカナ]/.test(text)) return 'ja';
        if (/[한글]/.test(text)) return 'ko';
        if (/[ا-ي]/.test(text)) return 'ar';
        if (/[à-ÿ]/.test(text)) return 'fr';
        if (/[ä-ü]/.test(text)) return 'de';
        if (/[ñ¿¡]/.test(text)) return 'es';
        if (/[à-ú]/.test(text)) return 'pt';
        if (/[देवनागरी]/.test(text)) return 'hi';
        
        // Default to English for Latin characters
        return 'en';
    }

    showDetectedLanguage(langCode) {
        const langName = this.languages[langCode] || langCode;
        this.detectedLang.innerHTML = \`
            <span class="lang-badge">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Detected: \${langName}
            </span>
        \`;
    }

    async translateText(text, sourceLang, targetLang) {
        // Simulate API call delay
        await this.delay(800 + Math.random() * 1200);
        
        // Mock translation responses for demonstration
        const translations = this.getMockTranslations(text, sourceLang, targetLang);
        
        if (translations.length > 0) {
            return translations[0];
        }
        
        // Fallback: Generate a realistic-looking translation
        return this.generateSmartTranslation(text, sourceLang, targetLang);
    }

    getMockTranslations(text, sourceLang, targetLang) {
        const mockData = {
            'hello': {
                'es': 'Hola',
                'fr': 'Bonjour',
                'de': 'Hallo',
                'it': 'Ciao',
                'pt': 'Olá',
                'ru': 'Привет',
                'ja': 'こんにちは',
                'ko': '안녕하세요',
                'zh': '你好',
                'ar': 'مرحبا',
                'hi': 'नमस्ते',
                'vi': 'Xin chào'
            },
            'how are you': {
                'es': '¿Cómo estás?',
                'fr': 'Comment allez-vous?',
                'de': 'Wie geht es dir?',
                'it': 'Come stai?',
                'pt': 'Como você está?',
                'ru': 'Как дела?',
                'ja': '元気ですか?',
                'ko': '어떻게 지내세요?',
                'zh': '你好吗?',
                'ar': 'كيف حالك؟',
                'hi': 'आप कैसे हैं?',
                'vi': 'Bạn có khỏe không?'
            }
        };
        
        const lowerText = text.toLowerCase().trim();
        if (mockData[lowerText] && mockData[lowerText][targetLang]) {
            return [mockData[lowerText][targetLang]];
        }
        return [];
    }

    generateSmartTranslation(text, sourceLang, targetLang) {
        const prefixes = { 'es': '[ES] ', 'fr': '[FR] ', 'de': '[DE] ' };
        return (prefixes[targetLang] || '[??] ') + text;
    }

    displayTranslation(translation) {
        this.lastTranslation = translation;
        this.translationResult.innerHTML = \`<div class="animate-fade-in"><p class="text-white leading-relaxed">\${translation}</p></div>\`;
        this.showStatus('Translation completed', 'success');
    }

    showTranslationError(message) {
        this.translationResult.innerHTML = \`<div class="flex items-center justify-center h-full text-red-400"><div class="text-center"><p>Translation failed: \${message}</p></div></div>\`;
        this.showStatus('Translation failed', 'error');
    }

    showStatus(message, type = 'info') {
        this.translationStatus.textContent = message;
        this.translationStatus.className = \`text-xs status-\${type}\`;
        setTimeout(() => { if (this.translationStatus.textContent === message) this.translationStatus.textContent = ''; }, 3000);
    }

    saveToHistory(sourceText, translation, sourceLang, targetLang) {
        const historyItem = { id: Date.now(), sourceText, translation, sourceLang, targetLang, timestamp: new Date().toISOString() };
        this.translationHistory.unshift(historyItem);
        if (this.translationHistory.length > 10) this.translationHistory = this.translationHistory.slice(0, 10);
        this.saveTranslationHistory();
    }

    saveTranslationHistory() {
        try { localStorage.setItem('translationHistory', JSON.stringify(this.translationHistory)); } catch (error) { console.warn('Could not save translation history:', error); }
    }

    loadTranslationHistory() {
        try { const saved = localStorage.getItem('translationHistory'); if (saved) this.translationHistory = JSON.parse(saved); } catch (error) { this.translationHistory = []; }
    }

    delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
}

// Initialize the translator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const translator = new TextTranslator();
    window.translator = translator;
    console.log('🌐 AI Text Translator initialized!');
});`
    }
  ]
}
