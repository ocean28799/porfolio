import { ProjectTemplate } from '../types.js';

export const voiceToTextProject: ProjectTemplate = {
  id: 'voice_to_text',
  name: "Voice to Text",
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
    <title>Voice to Text</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
    <div class="container mx-auto px-4 py-8">
        <header class="text-center mb-8">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                <span class="text-white text-2xl">🎤</span>
            </div>
            <h1 class="text-4xl font-bold text-white mb-2">Voice to Text</h1>
            <p class="text-blue-200">Simple speech recognition demo</p>
        </header>

        <div class="max-w-2xl mx-auto">
            <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div class="text-center mb-6">
                    <div id="status" class="text-blue-200 mb-4">Ready to listen</div>
                    <button id="startBtn" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 mr-2">
                        🎙️ Start
                    </button>
                    <button id="stopBtn" class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300" disabled>
                        ⏹️ Stop
                    </button>
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-semibold mb-2">Transcript:</label>
                    <textarea id="transcript" 
                        class="w-full h-40 p-4 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 resize-none" 
                        placeholder="Your speech will appear here..."
                        readonly></textarea>
                </div>

                <div class="flex gap-2">
                    <button id="clearBtn" class="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                        Clear
                    </button>
                    <button id="copyBtn" class="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                        Copy
                    </button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
    },
    {
      id: "style_css",
      name: "style.css",
      type: "css",
      content: `/* Voice to Text Styles */
.listening {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.status-listening {
    color: #10b981 !important;
}

.status-error {
    color: #ef4444 !important;
}

button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

button:disabled:hover {
    transform: none !important;
}

.speech-visualizer {
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
    border-radius: 2px;
    margin: 1rem 0;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.speech-visualizer.active {
    opacity: 1;
    animation: audioWave 1.5s ease-in-out infinite;
}

@keyframes audioWave {
    0%, 100% { transform: scaleX(1); }
    50% { transform: scaleX(1.1); }
}`
    },
    {
      id: "script_js",
      name: "script.js",
      type: "js",
      content: `// Simple Voice to Text Implementation
let recognition = null;
let isListening = false;
let finalTranscript = '';

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Voice to Text initialized!');
    setupSpeechRecognition();
    setupEventListeners();
});

function setupSpeechRecognition() {
    // Check if speech recognition is supported
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        recognition = new SpeechRecognition();
        
        // Configure recognition settings
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        
        // Handle recognition events
        recognition.onstart = function() {
            isListening = true;
            updateStatus('Listening...', 'listening');
            updateButtons();
        };
        
        recognition.onresult = function(event) {
            let interimTranscript = '';
            
            // Process results
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const transcript = event.results[i][0].transcript;
                if (event.results[i].isFinal) {
                    finalTranscript += transcript + ' ';
                } else {
                    interimTranscript += transcript;
                }
            }
            
            // Update transcript display
            const transcriptEl = document.getElementById('transcript');
            transcriptEl.value = finalTranscript + interimTranscript;
            transcriptEl.scrollTop = transcriptEl.scrollHeight;
        };
        
        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
            updateStatus('Error: ' + event.error, 'error');
            stopListening();
        };
        
        recognition.onend = function() {
            isListening = false;
            updateStatus('Ready to listen', 'ready');
            updateButtons();
        };
        
    } else {
        console.warn('Speech recognition not supported');
        updateStatus('Speech recognition not supported in this browser', 'error');
        disableFeatures();
    }
}

function setupEventListeners() {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    
    if (startBtn) {
        startBtn.addEventListener('click', startListening);
    }
    
    if (stopBtn) {
        stopBtn.addEventListener('click', stopListening);
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearTranscript);
    }
    
    if (copyBtn) {
        copyBtn.addEventListener('click', copyTranscript);
    }
}

function startListening() {
    if (recognition && !isListening) {
        try {
            recognition.start();
        } catch (error) {
            console.error('Failed to start recognition:', error);
            updateStatus('Failed to start listening', 'error');
        }
    }
}

function stopListening() {
    if (recognition && isListening) {
        recognition.stop();
    }
}

function updateStatus(message, type) {
    const statusEl = document.getElementById('status');
    if (statusEl) {
        statusEl.textContent = message;
        statusEl.className = 'text-blue-200 mb-4';
        
        if (type === 'listening') {
            statusEl.className = 'text-green-400 mb-4 listening';
        } else if (type === 'error') {
            statusEl.className = 'text-red-400 mb-4';
        }
    }
}

function updateButtons() {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    if (startBtn) startBtn.disabled = isListening;
    if (stopBtn) stopBtn.disabled = !isListening;
}

function clearTranscript() {
    finalTranscript = '';
    const transcriptEl = document.getElementById('transcript');
    if (transcriptEl) {
        transcriptEl.value = '';
    }
}

function copyTranscript() {
    const transcriptEl = document.getElementById('transcript');
    if (transcriptEl && transcriptEl.value) {
        navigator.clipboard.writeText(transcriptEl.value).then(function() {
            updateStatus('Transcript copied to clipboard!', 'success');
            setTimeout(() => {
                updateStatus('Ready to listen', 'ready');
            }, 2000);
        }).catch(function(err) {
            console.error('Failed to copy:', err);
            updateStatus('Failed to copy transcript', 'error');
        });
    } else {
        updateStatus('No transcript to copy', 'error');
    }
}

function disableFeatures() {
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    if (startBtn) startBtn.disabled = true;
    if (stopBtn) stopBtn.disabled = true;
}`
    }
  ]
};
