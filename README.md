
# 🚀 Tran Anh Duc — Senior React Native & AI Integration Specialist

<p align="center">
  <img src="https://media.daily.dev/image/upload/s--aWLslYU3--/f_auto/v1744482505/ugc/content_50c23b68-02a5-43d8-bb3e-e0b3b2f269d0" alt="Portfolio Preview" width="80%" />
</p>

<p align="center">
  <b>50+ Apps Deployed</b> • <b>2M+ Users</b> • <b>15+ Countries</b> • <b>95% Client Satisfaction</b>
</p>

<p align="center">
  <a href="https://trananhducdev.com">🌐 Live Portfolio</a> •
  <a href="https://github.com/ocean28799">GitHub</a> •
  <a href="https://linkedin.com/in/trananhduc99">LinkedIn</a> •
  <a href="mailto:ocean28799@gmail.com">Email</a>
</p>

---

## 👋 About Me

**Hi, I’m Tran Anh Duc — a Senior React Native & AI Integration Specialist.**

- 4+ years of experience building enterprise-grade mobile & web apps
- Founder of <b>AI Interview Assistant</b> (helping job seekers with 85% improved success rate)
- 50+ production apps deployed, serving 2M+ users in 15+ countries
- 95% client satisfaction, 50% revenue increases, 40% cost reductions for clients
- Expert in React Native, Next.js 15, TypeScript, OpenAI GPT-4, computer vision, and scalable cross-platform solutions

<details>
<summary>📈 <b>Professional Highlights</b></summary>

- 🚀 <b>Enterprise Focus:</b> Specialized in high-performance, scalable mobile & web solutions
- 🌍 <b>Global Reach:</b> Apps deployed across 15+ countries
- 🤖 <b>AI Integration:</b> OpenAI, GPT-4, computer vision, ML models
- 🏆 <b>Business Impact:</b> 50% revenue growth, 40% cost reduction, 95% accuracy, 50ms response times
- 🛠️ <b>Tech Stack:</b> React Native, Next.js 15, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui, MagicUI, AceternityUI

</details>

---


## ✨ Features

- 🌗 <b>Light/Dark Mode</b> — Smooth theme transitions
- 🎨 <b>Modern Design</b> — Clean, animated, professional UI
- 📱 <b>Fully Responsive</b> — Mobile-first, all screen sizes
- ⚡ <b>Performance Optimized</b> — Fast, SEO-friendly, accessible
- 🧠 <b>AI & Spotify Integration</b> — Theme-aware, interactive elements
- 🏆 <b>Project Gallery</b> — Dynamic, detailed, and visually engaging

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15+, Tailwind CSS, Framer Motion, shadcn/ui, MagicUI, AceternityUI
- **AI:** OpenAI GPT-4, Computer Vision, ML Models
- **Backend:** Node.js, REST APIs
- **Cloud:** Vercel, Netlify

---

## 🚀 Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 👤 Author & Contact

- **Tran Anh Duc** — [Portfolio](https://trananhducdev.com) • [GitHub](https://github.com/ocean28799) • [LinkedIn](https://linkedin.com/in/trananhduc99) • [Email](mailto:ocean28799@gmail.com)

---

<p align="center">
  <b>Made with ❤️ by Tran Anh Duc — Let’s build something amazing together!</b>
</p>

## ✨ Features

- **Light/Dark**: Switch between light and dark themes with smooth transitions
- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Fast loading times with optimized assets
- **Interactive Elements**: Engaging user experience with smooth transitions
- **SEO Friendly**: Optimized for search engines
- **Accessibility**: Built with accessibility best practices
- **Project Showcase**: Dynamic project gallery with detailed descriptions
- **Skills Visualization**: Interactive skills and technology display
- **Spotify Integration**: Embedded playlist with theme-aware styling

## 🛠️ Tech Stack

### Frontend

- ⚛️ **Framework**: [Next.js 15+](https://nextjs.org/)
- 🎨 **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- 🌀 **Animations**: [Framer Motion](https://motion.dev/)
- 🧩 **UI Components**: [shadcn/ui](https://ui.shadcn.com/) • [MagicUI](https://magicui.design/) • [AceternityUI](https://ui.aceternity.com/)
- 🔣 **Icons**: [Lucide React](https://lucide.dev/) • [Tabler Icons](https://tabler.io/icons)
- 🔤 **Typography**: Custom [Google Fonts](https://fonts.google.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** / **yarn** / **pnpm**
- **Git**

## 🚀 Quick Start

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Spotify Playlist Integration
NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID=your_playlist_id_here
```

### 4. Run Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser.

## 🎵 Spotify Playlist Integration

This portfolio features an embedded Spotify playlist that adapts to the current theme (dark/light mode).

### Setting up Spotify Playlist

1. **Get Your Spotify Playlist ID**:

   - Open your Spotify playlist in the web player
   - Copy the playlist URL (e.g., `https://open.spotify.com/playlist/677KIyayzcVJeA77I9hEi0`)
   - Extract the playlist ID from the URL (the part after `/playlist/`)

2. **Configure Environment Variable**:

   ```env
   NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID=your_playlist_id_here
   ```

3. **Implementation Example**:
   ```jsx
   // Theme-aware Spotify embed
   <iframe
     src={`https://open.spotify.com/embed/playlist/${
       process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID
     }?utm_source=generator&theme=${currentTheme === "dark" ? "0" : "1"}`}
     width="100%"
     height="352"
     frameBorder="0"
     allowtransparency="true"
     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
     loading="lazy"
   />
   ```


**Playlist Not Loading**:

- Ensure the playlist is set to public
- Verify the playlist ID is correct
- Check that the Spotify embed URL is properly formatted

**Theme Not Switching**:

- Confirm the theme state is being passed correctly
- Verify the conditional logic for theme values (0 for dark, 1 for light)

## 🎨 Customization

### Personal Information

Edit the following files to customize with your information:

1. **My Social Networks**: `src/data/my-networks.ts`
2. **Role Titles**: `src/data/role-titles.ts`
3. **Resume File**: `public/file/kinhbach_resume.ts`
4. **Experience**: `src/data/experience.tsx`
5. **Projects**: `src/data/projects.ts`
6. **Tech Stacks**: `src/data/tech-stack.ts`
7. **Learning Resource**: `src/data/learning-resource.ts`

### Styling

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Components**: Customize components in `src/components/`

### Content Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components
│   ├── sections/       # Page sections (Hero, About, Projects, etc.)
│   └── layout/         # Layout components (Header, Footer)
├── data/               # Static data files
├── lib/                # Utility functions
├── styles/             # Global styles
└── app/                # Next.js app directory
```

## 📁 Project Structure

```
trananhducdev-portfolio/
├── public/             # Static assets
│   ├── images/         # Images and media
│   ├── icons/          # Favicon and icons
│   └── resume.pdf      # Downloadable resume
├── src/
│   ├── app/            # Next.js app router
│   ├── components/     # React components
│   ├── data/           # Static data
│   ├── lib/            # Utilities
│   └── styles/         # CSS files
├── .env.local          # Environment variables
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## 🚢 Deployment

### Vercel (Recommended)

1. Fork this repository
2. Connect your GitHub account to [Vercel](https://vercel.com)
3. Import your forked repository
4. Configure environment variables
5. Deploy!

### Other Platforms

- **Netlify**: Connect your GitHub repo and deploy
- **GitHub Pages**: Use `npm run build` and `npm run export`
- **Custom Server**: Build with `npm run build` and serve the `out/` directory

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1440px

## ⚡ Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Static Generation**: Pre-rendered pages for faster loading
- **Lazy Loading**: Components and images loaded on demand
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🐛 Bug Reports

If you find a bug, please create an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and device information

## 👨‍💻 Author

**[Tran Anh Duc]**

- GitHub: [@ocean28799](https://github.com/ocean28799)
- LinkedIn: [@trananhduc99](https://www.linkedin.com/in/trananhduc99/)
- Email: [ocean28799@gmail.com](mailto:ocean28799@gmail.com)
- Website: [trananhducdev.com](https://trananhducdev.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform
- [Lucide](https://lucide.dev/) - Icon library
- [Tabler](https://tabler.io/) - Icon library
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [MagicUI](https://magicui.design/) - Animation presets
- [AceternityUI](https://ui.aceternity.com/) - Animated UI components

## 🔧 Troubleshooting

### Common Issues

**Build Errors**

```bash
# Clear cache and reinstall dependencies

# Using npm
rm -rf .next node_modules package-lock.json
npm install

# Using yarn
rm -rf .next node_modules yarn.lock
yarn cache clean
yarn install

# Using pnpm
rm -rf .next node_modules pnpm-lock.yaml
pnpm store prune
pnpm install
```

**Environment Variables Not Loading**

- Ensure `.env.local` file is in the root directory
- Restart the development server after adding new variables
- Check that variable names start with `NEXT_PUBLIC_` for client-side access

**Spotify Playlist Not Displaying**

- Verify the playlist is public in Spotify
- Check the playlist ID in your environment variables
- Ensure the embed URL is correctly formatted
- Test the playlist URL directly in browser

**Styling Issues**

- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS classes
- Verify responsive breakpoints

## 📈 Roadmap

- [ ] Implement blog functionality
- [ ] Add project filtering and search
- [ ] Add multi-language support
- [ ] Implement advanced animations
- [ ] Add project case studies
- [ ] Integrate testimonials section

---

⭐ If you found this project useful, please consider giving it a star on GitHub!

Made with ❤️ by ocean28799
