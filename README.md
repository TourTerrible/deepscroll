# DeepScroll 🧠

**Counter-doomscrolling made beautiful.**

A mobile-first web app that replicates the psychological mechanics of TikTok/Instagram Reels—but replaces mindless entertainment with cognitively enriching micro-content.

---

## ✨ Features

- **Vertical Scroll Feed**: Snap-scroll experience optimized for mobile
- **Text-First Design**: Minimalist Apple-style UI with optional contextual images
- **Enriching Content**: Mental models, psychology insights, philosophy, and more
- **Save & Share**: Bookmark content locally and share via Web Share API
- **Dark/Light Mode**: Beautiful dark mode (default) with theme toggle
- **Infinite Scroll**: Seamless content loading as you scroll
- **AI Content Generation**: OpenAI integration for dynamic content (optional)

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔧 Configuration

### Environment Variables (Optional)

For AI-generated content, create a `.env.local` file:

```bash
cp .env.example .env.local
```

Then add your OpenAI API key:

```
OPENAI_API_KEY=your_api_key_here
```

Get your API key from: [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)

---

## 📁 Project Structure

```
/app
  /page.tsx              # Main page (renders Feed)
  /layout.tsx            # Root layout with theme support
  /api/generate/route.ts # OpenAI content generation API
/components
  Feed.tsx               # Vertical scroll feed with infinite loading
  FeedItem.tsx           # Individual content card
  ThemeToggle.tsx        # Dark/light mode toggle
/lib
  getFeedItems.ts        # Abstracted content loader
/data
  seedContent.ts         # 25 curated micro-learning units
```

---

## 🎨 Design Philosophy

### Text-First Approach
Images increase dopamine but reduce retention. DeepScroll prioritizes text to maximize cognitive engagement.

### Minimalist UI
- System font stack for performance
- Generous white space
- Subtle animations (fade-in, slight upward motion)
- No clutter, no dark patterns, zero ads

### Mobile-First
- Full viewport height cards (100vh)
- Snap scroll behavior
- Max width: 600px
- Touch-optimized interactions

---

## 💾 Features in Detail

### Save Functionality
- Uses localStorage for client-side persistence
- No account required
- Saved items persist across sessions

### Share Feature
- Web Share API for native sharing (mobile)
- Clipboard fallback for desktop
- Shares formatted text with title, body, and category

### Content Sources

**Current**: 25 curated seed content items covering:
- brain hacks (Second-Order Thinking, Inversion, etc.)
- mind games (Dunning-Kruger, Confirmation Bias, etc.)
- deep thoughts (Antifragility, Via Negativa, etc.)
- money moves (Opportunity Cost, Compounding, etc.)
- life hacks (Eisenhower Matrix, Parkinson's Law, etc.)

**Future**: Extensible architecture supports:
- OpenAI API generation (implemented)
- Supabase/Firebase
- Notion API
- Any CMS

---

## 🔮 Future Expansion Hooks

The codebase includes TODO comments for:
- User accounts and authentication
- AI personalization based on reading history
- Streak tracking for daily engagement
- Daily digest mode
- Category filtering
- Saved items view

---

## 🏗️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **Deployment**: Vercel-ready

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

This project is optimized for Vercel deployment:

**Quick Deploy:**
1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Click "Deploy" (auto-detects Next.js settings)

**CLI Deploy:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📱 Mobile Experience

DeepScroll is designed mobile-first:
1. Each content card fills the screen
2. Swipe vertically to navigate
3. Tap save/share buttons for actions
4. Theme toggle in top-right corner

---

## 🧪 Performance

- Lazy loading for images
- Optimized for Lighthouse score >90 on mobile
- Minimal bundle size
- Server components where possible

---

## 📄 License

MIT

---

## 🙏 Credits

Built with the philosophy that technology should enrich minds, not extract attention.

Inspired by the counter-doomscroll movement.
