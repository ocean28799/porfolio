import { ProjectTemplate } from '../types.js'

export const aiImageGeneratorProject: ProjectTemplate = {
  id: 'ai_image_generator',
  name: "AI Image Generator",
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
    <title>AI Image Generator</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'pulse-slow': 'pulse 3s ease-in-out infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'gradient': 'gradient 15s ease infinite',
                        'shimmer': 'shimmer 2s linear infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' }
                        },
                        gradient: {
                            '0%, 100%': { 'background-position': '0% 50%' },
                            '50%': { 'background-position': '100% 50%' }
                        },
                        shimmer: {
                            '0%': { transform: 'translateX(-100%)' },
                            '100%': { transform: 'translateX(100%)' }
                        }
                    }
                }
            }
        }
    </script>
    <style>
        .gradient-text {
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .glass-effect {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .loading-shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 2s infinite;
        }
        
        .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
        }
        
        .image-card {
            transition: all 0.3s ease;
            transform: scale(1);
        }
        
        .image-card:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .prompt-suggestions {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        
        .suggestion-tag {
            padding: 0.5rem 1rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.875rem;
        }
        
        .suggestion-tag:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <div class="container mx-auto px-4 py-8 max-w-6xl">
        <!-- Header -->
        <div class="text-center mb-12">
            <h1 class="text-5xl font-bold gradient-text mb-4 animate-float">🎨 AI Image Generator</h1>
            <p class="text-gray-300 text-xl">Transform your imagination into stunning visuals with AI</p>
        </div>

        <!-- Input Section -->
        <div class="glass-effect rounded-3xl p-8 mb-8 shadow-2xl">
            <div class="mb-6">
                <label class="block text-white text-lg font-semibold mb-3">✨ Describe your image</label>
                <div class="relative">
                    <textarea 
                        id="prompt-input" 
                        placeholder="A futuristic cityscape at sunset with flying cars, neon lights, and towering skyscrapers..."
                        class="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-300 resize-none"
                        rows="3"
                    ></textarea>
                    <div class="absolute bottom-3 right-3 text-gray-400 text-sm">
                        <span id="char-count">0</span>/500
                    </div>
                </div>
            </div>
            
            <!-- Style Options -->
            <div class="mb-6">
                <label class="block text-white text-lg font-semibold mb-3">🎭 Art Style</label>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button class="style-btn active" data-style="realistic">📸 Realistic</button>
                    <button class="style-btn" data-style="anime">🌸 Anime</button>
                    <button class="style-btn" data-style="digital-art">💎 Digital Art</button>
                    <button class="style-btn" data-style="oil-painting">🎨 Oil Painting</button>
                </div>
            </div>

            <!-- Quality Settings -->
            <div class="mb-6">
                <label class="block text-white text-lg font-semibold mb-3">⚙️ Quality & Size</label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select id="quality-select" class="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option value="standard">Standard Quality</option>
                        <option value="hd">HD Quality</option>
                        <option value="ultra">Ultra HD</option>
                    </select>
                    <select id="size-select" class="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option value="1024x1024">Square (1024x1024)</option>
                        <option value="1024x1792">Portrait (1024x1792)</option>
                        <option value="1792x1024">Landscape (1792x1024)</option>
                    </select>
                </div>
            </div>

            <!-- Generate Button -->
            <div class="text-center">
                <button 
                    id="generate-btn"
                    class="px-12 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-lg font-bold rounded-2xl hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    <span id="btn-text">🚀 Generate Image</span>
                    <div id="btn-loading" class="hidden flex items-center justify-center">
                        <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Generating...
                    </div>
                </button>
            </div>

            <!-- Prompt Suggestions -->
            <div class="prompt-suggestions">
                <div class="suggestion-tag" data-prompt="A majestic dragon flying over a mystical forest with glowing mushrooms">🐉 Fantasy Dragon</div>
                <div class="suggestion-tag" data-prompt="Cyberpunk city street with neon signs and rain reflections">🌆 Cyberpunk City</div>
                <div class="suggestion-tag" data-prompt="Serene mountain landscape with aurora borealis in the sky">🏔️ Aurora Mountains</div>
                <div class="suggestion-tag" data-prompt="Underwater palace with coral gardens and tropical fish">🏰 Ocean Palace</div>
                <div class="suggestion-tag" data-prompt="Steampunk airship floating above Victorian city">⚙️ Steampunk Scene</div>
                <div class="suggestion-tag" data-prompt="Magical library with floating books and mystical creatures">📚 Magic Library</div>
            </div>
        </div>

        <!-- Generated Images Section -->
        <div id="results-section" class="hidden">
            <h2 class="text-3xl font-bold text-white mb-6 text-center">✨ Your Generated Images</h2>
            <div id="images-grid" class="image-grid">
                <!-- Generated images will appear here -->
            </div>
        </div>

        <!-- Gallery Section -->
        <div id="gallery-section">
            <h2 class="text-3xl font-bold text-white mb-6 text-center">🖼️ Example Gallery</h2>
            <div class="image-grid">
                <div class="image-card bg-white/10 rounded-2xl p-4 backdrop-blur-lg">
                    <div class="h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl mb-3 flex items-center justify-center">
                        <span class="text-white text-4xl">🌅</span>
                    </div>
                    <p class="text-white text-sm">"Sunset over alien landscape"</p>
                </div>
                <div class="image-card bg-white/10 rounded-2xl p-4 backdrop-blur-lg">
                    <div class="h-64 bg-gradient-to-br from-green-400 to-blue-600 rounded-xl mb-3 flex items-center justify-center">
                        <span class="text-white text-4xl">🏰</span>
                    </div>
                    <p class="text-white text-sm">"Medieval castle in the clouds"</p>
                </div>
                <div class="image-card bg-white/10 rounded-2xl p-4 backdrop-blur-lg">
                    <div class="h-64 bg-gradient-to-br from-pink-400 to-red-600 rounded-xl mb-3 flex items-center justify-center">
                        <span class="text-white text-4xl">🦄</span>
                    </div>
                    <p class="text-white text-sm">"Unicorn in enchanted forest"</p>
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="glass-effect p-6 rounded-2xl text-center">
                <div class="text-3xl font-bold text-white mb-2" id="images-generated">0</div>
                <div class="text-gray-300">Images Generated</div>
            </div>
            <div class="glass-effect p-6 rounded-2xl text-center">
                <div class="text-3xl font-bold text-purple-400 mb-2">⚡</div>
                <div class="text-gray-300">AI Powered</div>
            </div>
            <div class="glass-effect p-6 rounded-2xl text-center">
                <div class="text-3xl font-bold text-pink-400 mb-2">🎨</div>
                <div class="text-gray-300">Creative Freedom</div>
            </div>
        </div>
    </div>

    <script>
        let generatedCount = 0;
        const promptInput = document.getElementById('prompt-input');
        const generateBtn = document.getElementById('generate-btn');
        const btnText = document.getElementById('btn-text');
        const btnLoading = document.getElementById('btn-loading');
        const charCount = document.getElementById('char-count');
        const imagesGenerated = document.getElementById('images-generated');
        const resultsSection = document.getElementById('results-section');
        const imagesGrid = document.getElementById('images-grid');
        
        let selectedStyle = 'realistic';
        
        // Character count
        promptInput.addEventListener('input', () => {
            const count = promptInput.value.length;
            charCount.textContent = count;
            charCount.style.color = count > 450 ? '#ef4444' : '#9ca3af';
        });
        
        // Style selection
        document.querySelectorAll('.style-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedStyle = btn.dataset.style;
            });
        });
        
        // Prompt suggestions
        document.querySelectorAll('.suggestion-tag').forEach(tag => {
            tag.addEventListener('click', () => {
                promptInput.value = tag.dataset.prompt;
                promptInput.dispatchEvent(new Event('input'));
                promptInput.focus();
            });
        });
        
        // Generate image
        generateBtn.addEventListener('click', async () => {
            const prompt = promptInput.value.trim();
            if (!prompt) {
                alert('Please enter a description for your image!');
                return;
            }
            
            // Show loading state
            btnText.classList.add('hidden');
            btnLoading.classList.remove('hidden');
            generateBtn.disabled = true;
            
            // Simulate API call
            try {
                await simulateImageGeneration(prompt);
            } catch (error) {
                console.error('Error generating image:', error);
                alert('Failed to generate image. Please try again.');
            } finally {
                // Reset button state
                btnText.classList.remove('hidden');
                btnLoading.classList.add('hidden');
                generateBtn.disabled = false;
            }
        });
        
        async function simulateImageGeneration(prompt) {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 3000));
            
            // Create new image card
            const imageCard = document.createElement('div');
            imageCard.className = 'image-card bg-white/10 rounded-2xl p-4 backdrop-blur-lg animate-fade-in';
            
            // Generate random gradient for demo
            const gradients = [
                'from-purple-400 to-pink-600',
                'from-blue-400 to-cyan-600',
                'from-green-400 to-emerald-600',
                'from-yellow-400 to-orange-600',
                'from-red-400 to-pink-600',
                'from-indigo-400 to-purple-600'
            ];
            const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
            
            imageCard.innerHTML = \`
                <div class="h-64 bg-gradient-to-br \${randomGradient} rounded-xl mb-3 flex items-center justify-center relative overflow-hidden">
                    <div class="absolute inset-0 bg-black/20"></div>
                    <div class="relative text-white text-center p-4">
                        <div class="text-4xl mb-2">🎨</div>
                        <div class="text-sm font-medium">AI Generated</div>
                    </div>
                </div>
                <div class="flex justify-between items-start mb-2">
                    <p class="text-white text-sm flex-1 mr-2">\${prompt.length > 50 ? prompt.substring(0, 50) + '...' : prompt}</p>
                    <button class="text-purple-400 hover:text-purple-300 transition-colors" onclick="downloadImage(this)">
                        📥
                    </button>
                </div>
                <div class="text-xs text-gray-400">Style: \${selectedStyle} • Just now</div>
            \`;
            
            // Show results section if hidden
            if (resultsSection.classList.contains('hidden')) {
                resultsSection.classList.remove('hidden');
            }
            
            // Add to grid
            imagesGrid.insertBefore(imageCard, imagesGrid.firstChild);
            
            // Update counter
            generatedCount++;
            imagesGenerated.textContent = generatedCount;
            
            // Add fade-in animation
            setTimeout(() => {
                imageCard.style.opacity = '0';
                imageCard.style.transform = 'translateY(20px)';
                imageCard.style.transition = 'all 0.5s ease';
                setTimeout(() => {
                    imageCard.style.opacity = '1';
                    imageCard.style.transform = 'translateY(0)';
                }, 10);
            }, 10);
            
            console.log(\`🎨 Generated image: "\${prompt}" in \${selectedStyle} style\`);
        }
        
        function downloadImage(btn) {
            // Simulate download
            const link = document.createElement('a');
            link.download = 'ai-generated-image.png';
            link.href = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';
            link.click();
            
            // Visual feedback
            btn.textContent = '✅';
            setTimeout(() => {
                btn.textContent = '📥';
            }, 1000);
        }
        
        // Add CSS for style buttons
        const style = document.createElement('style');
        style.textContent = \`
            .style-btn {
                padding: 0.75rem 1rem;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 0.75rem;
                color: white;
                transition: all 0.3s ease;
                cursor: pointer;
                font-size: 0.875rem;
            }
            
            .style-btn:hover {
                background: rgba(255, 255, 255, 0.2);
                transform: translateY(-2px);
            }
            
            .style-btn.active {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-color: transparent;
            }
            
            .animate-fade-in {
                animation: fadeIn 0.5s ease forwards;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            select option {
                background: #1f2937;
                color: white;
            }
        \`;
        document.head.appendChild(style);
        
        // Auto-focus prompt input
        promptInput.focus();
        
        console.log('🎨 AI Image Generator initialized!');
        console.log('✨ Ready to create amazing images from your imagination!');
    </script>
</body>
</html>`
    },
    {
      id: "styles_css",
      name: "styles.css",
      type: "css",
      content: `/* AI Image Generator Custom Styles */

/* Global Enhancements */
* {
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow-x: hidden;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #5a67d8, #6b46c1);
}

/* Advanced Animations */
@keyframes float {
    0%, 100% { 
        transform: translateY(0px) rotateX(0deg); 
    }
    50% { 
        transform: translateY(-10px) rotateX(5deg); 
    }
}

@keyframes gradient {
    0%, 100% { 
        background-position: 0% 50%; 
    }
    50% { 
        background-position: 100% 50%; 
    }
}

@keyframes shimmer {
    0% { 
        transform: translateX(-100%) skewX(-15deg); 
    }
    100% { 
        transform: translateX(200%) skewX(-15deg); 
    }
}

@keyframes pulse-glow {
    0%, 100% { 
        box-shadow: 0 0 20px rgba(124, 58, 237, 0.3); 
    }
    50% { 
        box-shadow: 0 0 30px rgba(124, 58, 237, 0.6); 
    }
}

@keyframes slide-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Enhanced Glass Effect */
.glass-effect {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-effect:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    transition: all 0.3s ease;
}

/* Advanced Button Styles */
.suggestion-tag {
    position: relative;
    overflow: hidden;
}

.suggestion-tag::before {
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

.suggestion-tag:hover::before {
    left: 100%;
}

/* Image Card Enhancements */
.image-card {
    position: relative;
    overflow: hidden;
}

.image-card::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.image-card:hover::before {
    opacity: 1;
}

/* Loading Animation */
.loading-shimmer {
    position: relative;
    overflow: hidden;
}

.loading-shimmer::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.3),
        transparent
    );
    animation: shimmer 2s infinite;
}

/* Interactive Elements */
.style-btn {
    position: relative;
    overflow: hidden;
}

.style-btn::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.style-btn.active::after,
.style-btn:hover::after {
    width: 80%;
}

/* Responsive Enhancements */
@media (max-width: 768px) {
    .image-grid {
        grid-template-columns: 1fr;
    }
    
    .prompt-suggestions {
        justify-content: center;
    }
    
    .suggestion-tag {
        flex-shrink: 0;
    }
}

/* Focus States */
textarea:focus,
select:focus,
input:focus {
    outline: none;
    box-shadow: 
        0 0 0 2px rgba(124, 58, 237, 0.3),
        0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Custom Select Styling */
select {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1rem;
    appearance: none;
}

/* Tooltip Effects */
[data-tooltip] {
    position: relative;
}

[data-tooltip]:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    white-space: nowrap;
    z-index: 1000;
    animation: slide-up 0.3s ease;
}`
    },
    {
      id: "script_js",
      name: "script.js",
      type: "js", 
      content: `// AI Image Generator Advanced Features

class AIImageGenerator {
    constructor() {
        this.apiKey = null;
        this.generatedImages = [];
        this.currentModel = 'dall-e-3';
        this.maxPromptLength = 500;
        this.supportedFormats = ['PNG', 'JPEG', 'WEBP'];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadUserPreferences();
        this.initializeTooltips();
        console.log('🎨 AI Image Generator Pro initialized!');
    }

    setupEventListeners() {
        // Advanced prompt handling
        const promptInput = document.getElementById('prompt-input');
        promptInput.addEventListener('input', this.handlePromptInput.bind(this));
        promptInput.addEventListener('keydown', this.handleKeyboardShortcuts.bind(this));

        // Real-time validation
        promptInput.addEventListener('blur', this.validatePrompt.bind(this));

        // Advanced style selection with preview
        document.querySelectorAll('.style-btn').forEach(btn => {
            btn.addEventListener('mouseenter', this.previewStyle.bind(this));
            btn.addEventListener('click', this.selectStyle.bind(this));
        });

        // Batch generation support
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 'Enter') {
                this.generateBatch();
            }
        });
    }

    handlePromptInput(event) {
        const prompt = event.target.value;
        const charCount = document.getElementById('char-count');
        
        // Update character count with color coding
        charCount.textContent = prompt.length;
        charCount.className = this.getCharCountClass(prompt.length);
        
        // Real-time prompt suggestions
        this.updatePromptSuggestions(prompt);
        
        // Auto-save to localStorage
        localStorage.setItem('lastPrompt', prompt);
    }

    getCharCountClass(length) {
        if (length > 450) return 'text-red-400 font-bold';
        if (length > 350) return 'text-yellow-400 font-semibold';
        return 'text-gray-400';
    }

    handleKeyboardShortcuts(event) {
        // Ctrl+Enter to generate
        if (event.ctrlKey && event.key === 'Enter') {
            event.preventDefault();
            this.generateImage();
        }
        
        // Escape to clear
        if (event.key === 'Escape') {
            event.target.value = '';
            this.handlePromptInput(event);
        }
    }

    validatePrompt(event) {
        const prompt = event.target.value.trim();
        const feedback = this.getPromptFeedback(prompt);
        this.showPromptFeedback(feedback);
    }

    getPromptFeedback(prompt) {
        if (prompt.length < 10) {
            return { type: 'warning', message: 'Prompt too short - add more details for better results' };
        }
        if (prompt.length > 400) {
            return { type: 'warning', message: 'Very long prompt - consider shortening for better performance' };
        }
        if (this.containsProhibitedContent(prompt)) {
            return { type: 'error', message: 'Prompt contains prohibited content' };
        }
        return { type: 'success', message: 'Great prompt! Ready to generate amazing images' };
    }

    containsProhibitedContent(prompt) {
        const prohibited = ['violence', 'inappropriate', 'harmful'];
        return prohibited.some(word => prompt.toLowerCase().includes(word));
    }

    showPromptFeedback(feedback) {
        // Remove existing feedback
        const existingFeedback = document.querySelector('.prompt-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Create new feedback element
        const feedbackEl = document.createElement('div');
        feedbackEl.className = \`prompt-feedback mt-2 p-2 rounded-lg text-sm \${
            feedback.type === 'error' ? 'bg-red-500/20 text-red-300' :
            feedback.type === 'warning' ? 'bg-yellow-500/20 text-yellow-300' :
            'bg-green-500/20 text-green-300'
        }\`;
        feedbackEl.textContent = feedback.message;

        // Insert after prompt input
        const promptInput = document.getElementById('prompt-input');
        promptInput.parentNode.insertBefore(feedbackEl, promptInput.nextSibling);

        // Auto-remove after 5 seconds
        setTimeout(() => feedbackEl.remove(), 5000);
    }

    previewStyle(event) {
        const style = event.target.dataset.style;
        const preview = this.getStylePreview(style);
        
        // Show preview tooltip
        this.showStylePreview(event.target, preview);
    }

    getStylePreview(style) {
        const previews = {
            realistic: { emoji: '📸', desc: 'Photo-realistic, detailed imagery' },
            anime: { emoji: '🌸', desc: 'Japanese animation style, vibrant colors' },
            'digital-art': { emoji: '💎', desc: 'Modern digital artwork, sharp details' },
            'oil-painting': { emoji: '🎨', desc: 'Classical painting style, artistic brushstrokes' }
        };
        return previews[style] || { emoji: '🎨', desc: 'Artistic style' };
    }

    showStylePreview(element, preview) {
        // Implementation for style preview tooltip
        console.log(\`Style preview: \${preview.emoji} \${preview.desc}\`);
    }

    selectStyle(event) {
        document.querySelectorAll('.style-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        this.selectedStyle = event.target.dataset.style;
        
        // Save preference
        localStorage.setItem('preferredStyle', this.selectedStyle);
    }

    async generateImage() {
        const prompt = document.getElementById('prompt-input').value.trim();
        
        if (!this.validateGeneration(prompt)) {
            return;
        }

        this.showGenerationProgress();
        
        try {
            const imageData = await this.callImageAPI(prompt);
            this.displayGeneratedImage(imageData, prompt);
            this.updateStatistics();
        } catch (error) {
            this.handleGenerationError(error);
        } finally {
            this.hideGenerationProgress();
        }
    }

    validateGeneration(prompt) {
        if (!prompt) {
            this.showNotification('Please enter a description for your image!', 'warning');
            return false;
        }
        
        if (prompt.length > this.maxPromptLength) {
            this.showNotification(\`Prompt too long. Maximum \${this.maxPromptLength} characters.\`, 'error');
            return false;
        }
        
        return true;
    }

    showGenerationProgress() {
        const btnText = document.getElementById('btn-text');
        const btnLoading = document.getElementById('btn-loading');
        const generateBtn = document.getElementById('generate-btn');
        
        btnText.classList.add('hidden');
        btnLoading.classList.remove('hidden');
        generateBtn.disabled = true;
        
        // Add progress animation
        generateBtn.classList.add('animate-pulse-slow');
    }

    hideGenerationProgress() {
        const btnText = document.getElementById('btn-text');
        const btnLoading = document.getElementById('btn-loading');
        const generateBtn = document.getElementById('generate-btn');
        
        btnText.classList.remove('hidden');
        btnLoading.classList.add('hidden');
        generateBtn.disabled = false;
        generateBtn.classList.remove('animate-pulse-slow');
    }

    async callImageAPI(prompt) {
        // Simulate advanced API call with realistic timing
        const quality = document.getElementById('quality-select').value;
        const size = document.getElementById('size-select').value;
        
        // Realistic generation time based on quality
        const generationTime = {
            'standard': 2000,
            'hd': 4000,
            'ultra': 6000
        }[quality] || 2000;
        
        await this.simulateProgress(generationTime);
        
        // Return mock image data
        return {
            url: this.generateMockImageURL(),
            prompt: prompt,
            style: this.selectedStyle,
            quality: quality,
            size: size,
            timestamp: new Date().toISOString(),
            id: this.generateUniqueId()
        };
    }

    async simulateProgress(duration) {
        const steps = 10;
        const stepTime = duration / steps;
        
        for (let i = 0; i <= steps; i++) {
            await new Promise(resolve => setTimeout(resolve, stepTime));
            
            // Update progress indicator if needed
            const progress = (i / steps) * 100;
            this.updateProgressIndicator(progress);
        }
    }

    updateProgressIndicator(progress) {
        // Implementation for progress bar
        console.log(\`Generation progress: \${progress.toFixed(1)}%\`);
    }

    generateMockImageURL() {
        const colors = ['purple', 'blue', 'green', 'pink', 'yellow', 'red'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return \`https://via.placeholder.com/512x512/\${randomColor}/white?text=AI+Generated\`;
    }

    generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    displayGeneratedImage(imageData, prompt) {
        const resultsSection = document.getElementById('results-section');
        const imagesGrid = document.getElementById('images-grid');
        
        // Show results section
        if (resultsSection.classList.contains('hidden')) {
            resultsSection.classList.remove('hidden');
            resultsSection.style.animation = 'slide-up 0.5s ease';
        }
        
        // Create image card
        const imageCard = this.createImageCard(imageData);
        
        // Add to grid with animation
        imagesGrid.insertBefore(imageCard, imagesGrid.firstChild);
        
        // Store in history
        this.generatedImages.unshift(imageData);
        
        // Limit stored images
        if (this.generatedImages.length > 50) {
            this.generatedImages = this.generatedImages.slice(0, 50);
        }
        
        // Save to localStorage
        localStorage.setItem('generatedImages', JSON.stringify(this.generatedImages));
        
        this.showNotification('Image generated successfully!', 'success');
    }

    createImageCard(imageData) {
        const card = document.createElement('div');
        card.className = 'image-card bg-white/10 rounded-2xl p-4 backdrop-blur-lg';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        card.innerHTML = \`
            <div class="relative group">
                <div class="h-64 bg-gradient-to-br from-\${this.getRandomColor()}-400 to-\${this.getRandomColor()}-600 rounded-xl mb-3 flex items-center justify-center overflow-hidden">
                    <div class="absolute inset-0 bg-black/20"></div>
                    <div class="relative text-white text-center p-4">
                        <div class="text-4xl mb-2">🎨</div>
                        <div class="text-sm font-medium">AI Generated</div>
                        <div class="text-xs mt-1 opacity-75">\${imageData.quality.toUpperCase()} • \${imageData.size}</div>
                    </div>
                    <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button class="p-2 bg-black/50 rounded-lg hover:bg-black/70 transition-colors" onclick="aiGenerator.viewFullscreen('\${imageData.id}')">
                            🔍
                        </button>
                    </div>
                </div>
                <div class="flex justify-between items-start mb-2">
                    <p class="text-white text-sm flex-1 mr-2" title="\${imageData.prompt}">
                        \${imageData.prompt.length > 50 ? imageData.prompt.substring(0, 50) + '...' : imageData.prompt}
                    </p>
                    <div class="flex space-x-1">
                        <button class="text-purple-400 hover:text-purple-300 transition-colors" onclick="aiGenerator.shareImage('\${imageData.id}')" title="Share">
                            📤
                        </button>
                        <button class="text-green-400 hover:text-green-300 transition-colors" onclick="aiGenerator.downloadImage('\${imageData.id}')" title="Download">
                            📥
                        </button>
                    </div>
                </div>
                <div class="text-xs text-gray-400">
                    Style: \${imageData.style} • \${this.formatTime(imageData.timestamp)}
                </div>
            </div>
        \`;
        
        // Animate in
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
        
        return card;
    }

    getRandomColor() {
        const colors = ['purple', 'blue', 'green', 'pink', 'yellow', 'red', 'indigo', 'cyan'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    formatTime(timestamp) {
        const now = new Date();
        const time = new Date(timestamp);
        const diff = now - time;
        
        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return \`\${Math.floor(diff / 60000)}m ago\`;
        if (diff < 86400000) return \`\${Math.floor(diff / 3600000)}h ago\`;
        return time.toLocaleDateString();
    }

    viewFullscreen(imageId) {
        // Implementation for fullscreen view
        console.log(\`Viewing image \${imageId} in fullscreen\`);
        this.showNotification('Fullscreen view would open here', 'info');
    }

    shareImage(imageId) {
        // Implementation for sharing
        if (navigator.share) {
            navigator.share({
                title: 'AI Generated Image',
                text: 'Check out this amazing AI-generated image!',
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            this.showNotification('Link copied to clipboard!', 'success');
        }
    }

    downloadImage(imageId) {
        // Find image data
        const imageData = this.generatedImages.find(img => img.id === imageId);
        if (!imageData) return;
        
        // Create download link
        const link = document.createElement('a');
        link.download = \`ai-image-\${imageId}.png\`;
        link.href = imageData.url;
        link.click();
        
        this.showNotification('Image downloaded!', 'success');
    }

    generateBatch() {
        // Implementation for batch generation
        this.showNotification('Batch generation would start here', 'info');
    }

    updateStatistics() {
        const counter = document.getElementById('images-generated');
        const currentCount = parseInt(counter.textContent) || 0;
        const newCount = currentCount + 1;
        
        // Animate counter
        this.animateCounter(counter, currentCount, newCount);
    }

    animateCounter(element, from, to) {
        const duration = 500;
        const steps = 20;
        const stepSize = (to - from) / steps;
        let current = from;
        
        const timer = setInterval(() => {
            current += stepSize;
            element.textContent = Math.round(current);
            
            if (current >= to) {
                clearInterval(timer);
                element.textContent = to;
            }
        }, duration / steps);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = \`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 \${
            type === 'success' ? 'bg-green-500' :
            type === 'warning' ? 'bg-yellow-500' :
            type === 'error' ? 'bg-red-500' :
            'bg-blue-500'
        } text-white\`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.style.transition = 'transform 0.3s ease';
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    loadUserPreferences() {
        // Load saved preferences
        const savedStyle = localStorage.getItem('preferredStyle');
        if (savedStyle) {
            const styleBtn = document.querySelector(\`[data-style="\${savedStyle}"]\`);
            if (styleBtn) {
                styleBtn.click();
            }
        }
        
        const lastPrompt = localStorage.getItem('lastPrompt');
        if (lastPrompt) {
            document.getElementById('prompt-input').value = lastPrompt;
        }
        
        // Load generation history
        const savedImages = localStorage.getItem('generatedImages');
        if (savedImages) {
            this.generatedImages = JSON.parse(savedImages);
            document.getElementById('images-generated').textContent = this.generatedImages.length;
        }
    }

    initializeTooltips() {
        // Add tooltips to interactive elements
        const tooltips = {
            'generate-btn': 'Click to generate or press Ctrl+Enter',
            'quality-select': 'Higher quality takes longer to generate',
            'size-select': 'Choose aspect ratio for your image'
        };
        
        Object.entries(tooltips).forEach(([id, text]) => {
            const element = document.getElementById(id);
            if (element) {
                element.setAttribute('title', text);
            }
        });
    }

    handleGenerationError(error) {
        console.error('Generation error:', error);
        this.showNotification('Failed to generate image. Please try again.', 'error');
    }
}

// Initialize the AI Image Generator
const aiGenerator = new AIImageGenerator();

// Export for global access
window.aiGenerator = aiGenerator;

console.log('🚀 AI Image Generator Pro loaded successfully!');
console.log('✨ Advanced features: Batch generation, real-time validation, smart suggestions');`
    }
  ]
}
