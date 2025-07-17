import { ProjectTemplate } from '../types.js';

export const aiVoiceAssistantProject: ProjectTemplate = {
  id: 'ai_voice_assistant',
  name: "AI Voice & Image Assistant",
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
    <title>AI Voice & Image Assistant</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <div class="container mx-auto px-4 py-8">
        <!-- Header -->
        <header class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4 animate-pulse">
                <span class="text-white text-2xl">🤖</span>
            </div>
            <h1 class="text-4xl font-bold text-white mb-2">AI Voice & Image Assistant</h1>
            <p class="text-blue-200 text-lg">Speak, Upload, and Interact with AI</p>
        </header>

        <!-- Main Interface -->
        <div class="max-w-4xl mx-auto">
            <!-- Voice Controls -->
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
                <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
                    🎤 Voice Assistant
                </h2>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Speech Recognition -->
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold text-blue-200">Speech to Text</h3>
                        <div class="flex gap-2">
                            <button id="startListening" class="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                                🎙️ Start Listening
                            </button>
                            <button id="stopListening" class="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105" disabled>
                                ⏹️ Stop
                            </button>
                        </div>
                        
                        <div id="listeningIndicator" class="hidden text-center">
                            <div class="inline-flex items-center space-x-2 text-green-400">
                                <div class="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                                <span>Listening...</span>
                            </div>
                        </div>
                        
                        <textarea id="speechText" readonly 
                            class="w-full h-32 p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 resize-none"
                            placeholder="Your speech will appear here..."></textarea>
                    </div>

                    <!-- Text to Speech -->
                    <div class="space-y-4">
                        <h3 class="text-lg font-semibold text-blue-200">Text to Speech</h3>
                        <textarea id="textToSpeak" 
                            class="w-full h-32 p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 resize-none"
                            placeholder="Type text to speak...">Hello! I'm your AI voice assistant. How can I help you today?</textarea>
                        
                        <div class="flex gap-2">
                            <button id="speakText" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                                🔊 Speak Text
                            </button>
                            <button id="stopSpeaking" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                                🔇 Stop
                            </button>
                        </div>
                        
                        <div class="flex items-center space-x-4 text-white">
                            <label class="text-sm">Speed:</label>
                            <input id="speechRate" type="range" min="0.5" max="2" step="0.1" value="1" class="flex-1">
                            <span id="rateValue" class="text-sm">1.0x</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Image Processing -->
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 border border-white/20">
                <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
                    🖼️ Image Analysis
                </h2>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Image Upload -->
                    <div class="space-y-4">
                        <div class="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-white/50 transition-colors">
                            <input type="file" id="imageInput" accept="image/*" class="hidden">
                            <label for="imageInput" class="cursor-pointer">
                                <div class="text-6xl mb-4">📸</div>
                                <p class="text-white text-lg">Click to upload image</p>
                                <p class="text-blue-200 text-sm">Supports JPG, PNG, GIF</p>
                            </label>
                        </div>
                        
                        <div class="flex gap-2">
                            <button id="analyzeImage" class="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105" disabled>
                                🔍 Analyze Image
                            </button>
                            <button id="clearImage" class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                                🗑️ Clear
                            </button>
                        </div>
                    </div>

                    <!-- Image Preview & Results -->
                    <div class="space-y-4">
                        <div id="imagePreview" class="hidden bg-white/20 rounded-xl p-4">
                            <img id="previewImg" class="w-full h-48 object-cover rounded-lg mb-2">
                            <p id="imageInfo" class="text-white text-sm"></p>
                        </div>
                        
                        <div id="analysisResults" class="hidden bg-white/20 rounded-xl p-4">
                            <h4 class="text-white font-semibold mb-2">Analysis Results:</h4>
                            <div id="analysisText" class="text-blue-200 text-sm"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chat Interface -->
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h2 class="text-2xl font-bold text-white mb-4 flex items-center">
                    💬 AI Chat
                </h2>
                
                <div id="chatMessages" class="h-64 overflow-y-auto mb-4 space-y-3 bg-white/10 rounded-xl p-4">
                    <div class="flex items-start space-x-3">
                        <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            🤖
                        </div>
                        <div class="bg-blue-500/20 rounded-xl p-3 max-w-xs">
                            <p class="text-white text-sm">Hello! I can help you with voice commands, image analysis, and general questions. Try speaking to me or uploading an image!</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex gap-2">
                    <input id="chatInput" type="text" placeholder="Type a message or use voice..." 
                        class="flex-1 p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60">
                    <button id="sendMessage" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                        📤 Send
                    </button>
                    <button id="voiceMessage" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                        🎤 Voice
                    </button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
    },
    {
      id: "styles_css",
      name: "styles.css",
      type: "css",
      content: `/* AI Voice & Image Assistant Styles */

/* Glassmorphism effects */
.glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
}

/* Animated gradient backgrounds */
@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.animated-gradient {
    background: linear-gradient(-45deg, #667eea, #764ba2, #6b73ff, #9644e0);
    background-size: 400% 400%;
    animation: gradientShift 8s ease infinite;
}

/* Voice visualization */
@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.7; }
}

.voice-pulse {
    animation: pulse 1.5s ease-in-out infinite;
}

/* Microphone animation */
@keyframes micPulse {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
    70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

.mic-active {
    animation: micPulse 2s infinite;
}

/* Waveform animation */
.waveform {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
}

.wave-bar {
    width: 3px;
    background: linear-gradient(to top, #22c55e, #16a34a);
    border-radius: 3px;
    animation: wave 1.5s ease-in-out infinite;
}

.wave-bar:nth-child(1) { animation-delay: 0s; height: 10px; }
.wave-bar:nth-child(2) { animation-delay: 0.1s; height: 20px; }
.wave-bar:nth-child(3) { animation-delay: 0.2s; height: 15px; }
.wave-bar:nth-child(4) { animation-delay: 0.3s; height: 25px; }
.wave-bar:nth-child(5) { animation-delay: 0.4s; height: 18px; }

@keyframes wave {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(0.3); }
}

/* Image upload animations */
.image-upload-area {
    transition: all 0.3s ease;
}

.image-upload-area:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.image-upload-area.dragover {
    border-color: rgba(59, 130, 246, 0.8);
    background-color: rgba(59, 130, 246, 0.1);
    transform: scale(1.02);
}

/* Chat message animations */
@keyframes messageSlide {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.chat-message {
    animation: messageSlide 0.3s ease-out;
}

.user-message {
    animation: messageSlide 0.3s ease-out;
    animation-direction: reverse;
}

/* Button hover effects */
.ai-button {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
}

.ai-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.ai-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.ai-button:hover::before {
    left: 100%;
}

/* Status indicators */
.status-indicator {
    position: relative;
}

.status-indicator::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: statusPulse 2s infinite;
}

.status-listening::before {
    background-color: #22c55e;
}

.status-speaking::before {
    background-color: #3b82f6;
}

.status-processing::before {
    background-color: #f59e0b;
}

@keyframes statusPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
}

/* Loading animations */
.loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Scrollbar styling */
#chatMessages::-webkit-scrollbar {
    width: 6px;
}

#chatMessages::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

#chatMessages::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

#chatMessages::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}

/* Responsive design */
@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }
    
    .grid {
        grid-template-columns: 1fr;
    }
    
    .flex {
        flex-direction: column;
    }
    
    .flex button {
        margin-bottom: 0.5rem;
    }
}

/* Voice command visual feedback */
.voice-command-active {
    border: 2px solid #22c55e;
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.5);
}

/* Image analysis loading */
.image-analyzing {
    position: relative;
    overflow: hidden;
}

.image-analyzing::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent);
    animation: analyzing 2s infinite;
}

@keyframes analyzing {
    0% { left: -100%; }
    100% { left: 100%; }
}`
    },
    {
      id: "script_js",
      name: "script.js",
      type: "js",
      content: `// AI Voice & Image Assistant
class AIAssistant {
    constructor() {
        this.recognition = null;
        this.synthesis = window.speechSynthesis;
        this.isListening = false;
        this.isSpeaking = false;
        this.currentUtterance = null;
        this.chatHistory = [];
        this.init();
    }

    init() {
        this.setupSpeechRecognition();
        this.setupEventListeners();
        this.setupSpeechSynthesis();
        this.initializeChat();
    }

    // Speech Recognition Setup
    setupSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = 'en-US';

            this.recognition.onstart = () => {
                this.isListening = true;
                this.updateListeningUI(true);
            };

            this.recognition.onresult = (event) => {
                let finalTranscript = '';
                let interimTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        finalTranscript += transcript;
                    } else {
                        interimTranscript += transcript;
                    }
                }

                document.getElementById('speechText').value = finalTranscript + interimTranscript;
                
                if (finalTranscript) {
                    this.processVoiceCommand(finalTranscript);
                }
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.updateListeningUI(false);
            };

            this.recognition.onend = () => {
                this.isListening = false;
                this.updateListeningUI(false);
            };
        } else {
            console.warn('Speech recognition not supported');
            this.disableSpeechFeatures();
        }
    }

    // Speech Synthesis Setup
    setupSpeechSynthesis() {
        const rateSlider = document.getElementById('speechRate');
        const rateValue = document.getElementById('rateValue');
        
        rateSlider.addEventListener('input', (e) => {
            rateValue.textContent = e.target.value + 'x';
        });
    }

    // Event Listeners
    setupEventListeners() {
        // Voice Recognition
        document.getElementById('startListening').addEventListener('click', () => this.startListening());
        document.getElementById('stopListening').addEventListener('click', () => this.stopListening());
        
        // Text to Speech
        document.getElementById('speakText').addEventListener('click', () => this.speakText());
        document.getElementById('stopSpeaking').addEventListener('click', () => this.stopSpeaking());
        
        // Image Processing
        document.getElementById('imageInput').addEventListener('change', (e) => this.handleImageUpload(e));
        document.getElementById('analyzeImage').addEventListener('click', () => this.analyzeImage());
        document.getElementById('clearImage').addEventListener('click', () => this.clearImage());
        
        // Chat
        document.getElementById('sendMessage').addEventListener('click', () => this.sendMessage());
        document.getElementById('voiceMessage').addEventListener('click', () => this.startVoiceMessage());
        document.getElementById('chatInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Drag and drop for images
        this.setupImageDragDrop();
    }

    // Voice Recognition Methods
    startListening() {
        if (this.recognition && !this.isListening) {
            this.recognition.start();
        }
    }

    stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
        }
    }

    updateListeningUI(listening) {
        const startBtn = document.getElementById('startListening');
        const stopBtn = document.getElementById('stopListening');
        const indicator = document.getElementById('listeningIndicator');

        startBtn.disabled = listening;
        stopBtn.disabled = !listening;
        
        if (listening) {
            indicator.classList.remove('hidden');
            startBtn.classList.add('mic-active');
        } else {
            indicator.classList.add('hidden');
            startBtn.classList.remove('mic-active');
        }
    }

    // Text to Speech Methods
    speakText() {
        const text = document.getElementById('textToSpeak').value;
        const rate = parseFloat(document.getElementById('speechRate').value);
        
        if (text.trim() === '') return;

        this.stopSpeaking(); // Stop any current speech

        this.currentUtterance = new SpeechSynthesisUtterance(text);
        this.currentUtterance.rate = rate;
        this.currentUtterance.pitch = 1;
        this.currentUtterance.volume = 1;

        this.currentUtterance.onstart = () => {
            this.isSpeaking = true;
            this.updateSpeakingUI(true);
        };

        this.currentUtterance.onend = () => {
            this.isSpeaking = false;
            this.updateSpeakingUI(false);
        };

        this.synthesis.speak(this.currentUtterance);
    }

    stopSpeaking() {
        if (this.synthesis.speaking) {
            this.synthesis.cancel();
            this.isSpeaking = false;
            this.updateSpeakingUI(false);
        }
    }

    updateSpeakingUI(speaking) {
        const speakBtn = document.getElementById('speakText');
        const stopBtn = document.getElementById('stopSpeaking');
        
        if (speaking) {
            speakBtn.classList.add('status-speaking');
            stopBtn.classList.remove('opacity-50');
        } else {
            speakBtn.classList.remove('status-speaking');
            stopBtn.classList.add('opacity-50');
        }
    }

    // Image Processing Methods
    setupImageDragDrop() {
        const uploadArea = document.querySelector('.border-dashed');
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            uploadArea.addEventListener(eventName, () => {
                uploadArea.classList.add('dragover');
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            uploadArea.addEventListener(eventName, () => {
                uploadArea.classList.remove('dragover');
            });
        });

        uploadArea.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.processImageFile(files[0]);
            }
        });
    }

    handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            this.processImageFile(file);
        }
    }

    processImageFile(file) {
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.getElementById('previewImg');
            const preview = document.getElementById('imagePreview');
            const info = document.getElementById('imageInfo');
            const analyzeBtn = document.getElementById('analyzeImage');

            img.src = e.target.result;
            info.textContent = \`File: \${file.name} | Size: \${(file.size / 1024).toFixed(1)} KB\`;
            preview.classList.remove('hidden');
            analyzeBtn.disabled = false;

            this.currentImage = {
                file: file,
                dataUrl: e.target.result
            };
        };
        reader.readAsDataURL(file);
    }

    analyzeImage() {
        if (!this.currentImage) return;

        const resultsDiv = document.getElementById('analysisResults');
        const analysisText = document.getElementById('analysisText');
        const analyzeBtn = document.getElementById('analyzeImage');

        analyzeBtn.classList.add('image-analyzing');
        analyzeBtn.textContent = '🔍 Analyzing...';
        analyzeBtn.disabled = true;

        // Simulate AI image analysis
        setTimeout(() => {
            const mockAnalysis = this.generateMockImageAnalysis();
            analysisText.innerHTML = mockAnalysis;
            resultsDiv.classList.remove('hidden');
            
            analyzeBtn.classList.remove('image-analyzing');
            analyzeBtn.textContent = '🔍 Analyze Image';
            analyzeBtn.disabled = false;

            // Add to chat
            this.addChatMessage('ai', \`I've analyzed your image. \${mockAnalysis}\`);
        }, 2000);
    }

    generateMockImageAnalysis() {
        const analyses = [
            'This appears to be a natural landscape with vibrant colors. I can detect elements of nature including vegetation and possibly sky elements.',
            'I can see geometric shapes and structured elements in this image. The composition suggests this might be an architectural or urban scene.',
            'This image contains rich textures and patterns. The color palette seems to be dominated by warm/cool tones with good contrast.',
            'I detect what appears to be objects or subjects in the foreground with a detailed background. The lighting conditions seem optimal.',
            'This is an interesting composition with multiple elements. I can identify various shapes, colors, and possible movement or action.'
        ];
        return analyses[Math.floor(Math.random() * analyses.length)];
    }

    clearImage() {
        document.getElementById('imagePreview').classList.add('hidden');
        document.getElementById('analysisResults').classList.add('hidden');
        document.getElementById('analyzeImage').disabled = true;
        document.getElementById('imageInput').value = '';
        this.currentImage = null;
    }

    // Chat Methods
    initializeChat() {
        this.addChatMessage('ai', 'Hello! I can help you with voice commands, image analysis, and general questions. Try speaking to me or uploading an image!');
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        
        if (message === '') return;

        this.addChatMessage('user', message);
        input.value = '';

        // Simulate AI response
        setTimeout(() => {
            const response = this.generateAIResponse(message);
            this.addChatMessage('ai', response);
        }, 1000);
    }

    startVoiceMessage() {
        if (!this.isListening) {
            this.startListening();
            // Auto-send voice message when speech ends
            const originalOnEnd = this.recognition.onend;
            this.recognition.onend = () => {
                originalOnEnd();
                const speechText = document.getElementById('speechText').value;
                if (speechText.trim()) {
                    document.getElementById('chatInput').value = speechText;
                    this.sendMessage();
                }
            };
        }
    }

    addChatMessage(sender, message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = \`flex items-start space-x-3 chat-message \${sender === 'user' ? 'user-message flex-row-reverse space-x-reverse' : ''}\`;

        const avatar = sender === 'user' ? '👤' : '🤖';
        const bgColor = sender === 'user' ? 'bg-green-500/20' : 'bg-blue-500/20';

        messageDiv.innerHTML = \`
            <div class="w-8 h-8 \${sender === 'user' ? 'bg-green-500' : 'bg-blue-500'} rounded-full flex items-center justify-center">
                \${avatar}
            </div>
            <div class="\${bgColor} rounded-xl p-3 max-w-xs">
                <p class="text-white text-sm">\${message}</p>
                <p class="text-white/60 text-xs mt-1">\${new Date().toLocaleTimeString()}</p>
            </div>
        \`;

        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        this.chatHistory.push({ sender, message, timestamp: new Date() });
    }

    generateAIResponse(message) {
        const responses = [
            "That's interesting! Tell me more about that.",
            "I understand. How can I help you with that?",
            "Great question! Let me think about that for you.",
            "I'm here to help! Would you like me to elaborate on anything?",
            "Thanks for sharing that with me. What would you like to explore next?",
            "That's a fascinating topic! I'd love to discuss it further.",
            "I see what you mean. Is there anything specific you'd like to know?",
            "Excellent! I'm always happy to chat about new topics."
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }

    processVoiceCommand(text) {
        const command = text.toLowerCase();
        
        if (command.includes('speak') || command.includes('say')) {
            const textToSpeak = text.replace(/(speak|say)\\s+/i, '');
            document.getElementById('textToSpeak').value = textToSpeak;
            this.speakText();
        } else if (command.includes('clear') || command.includes('reset')) {
            this.clearImage();
            document.getElementById('speechText').value = '';
            document.getElementById('textToSpeak').value = '';
        } else if (command.includes('hello') || command.includes('hi')) {
            this.addChatMessage('ai', 'Hello! How can I assist you today?');
        }
    }

    disableSpeechFeatures() {
        document.getElementById('startListening').disabled = true;
        document.getElementById('stopListening').disabled = true;
        document.getElementById('voiceMessage').disabled = true;
        
        const speechText = document.getElementById('speechText');
        speechText.value = 'Speech recognition not supported in this browser';
        speechText.disabled = true;
    }
}

// Initialize the AI Assistant when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const assistant = new AIAssistant();
    window.aiAssistant = assistant; // Make it globally accessible
    
    console.log('🤖 AI Voice & Image Assistant initialized!');
    console.log('✨ Features: Speech recognition, text-to-speech, image analysis, chat interface');
    console.log('🎤 Try speaking or uploading an image to get started!');
});`
    }
  ]
};
