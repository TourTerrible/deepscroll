
# 🔧 Prompt: Build Mobile-First Counter-Doomscroll Web App (MVP)

You are building a production-ready MVP called **“DeepScroll”**.

The goal is to replicate the psychological mechanics of doomscrolling (vertical swipe, short units, infinite feed) but replace content with cognitively enriching micro-content.

The output must be a working mobile-first web app.

---

## 1️⃣ Product Thesis

Build a vertically scrollable feed where each screen contains:

* Short, dense text content (5–8 lines max)
* Optional small contextual image (only if high signal)
* Category tag
* Save button
* Share button

The experience must:

* Feel like Instagram Reels / TikTok scroll
* Snap per screen
* No clutter
* Minimalist Apple-style UI
* Zero ads
* No dark patterns
* Dark mode, white mode toggle. dark mode default

---

## 2️⃣ Psychological Design Decision (Important)

Default to:

**Text-first. Image optional.**

Reason:

* Images increase dopamine but reduce retention of ideas.
* Text-only increases cognitive engagement.
* If image is used, it must be small, subtle, and contextual (not decorative).

Therefore:

Each content card supports:

```
{
  id: string,
  title: string,
  body: string,
  category: string,
  imageUrl?: string
}
```

Image is optional.

---

## 3️⃣ Tech Stack

Use:

* Next.js (App Router)
* TypeScript
* TailwindCSS
* Vercel-ready
* Server components where possible
* Client component for scroll interaction
* Framer Motion for subtle transitions

Do NOT over-engineer.

---

## 4️⃣ Layout Requirements

Mobile-first only.

Each content card:

* Full viewport height (100vh)
* Snap scroll (CSS scroll-snap)
* Centered vertically
* Max width: 600px
* Large readable typography
* Generous white space
* Dark mode default

No navbar.
No header.
No footer.
Only vertical feed.
Later you would add bookmark/save feature, but not now.

---

## 5️⃣ Scrolling Behavior

Implement:

* `overflow-y: scroll`
* `scroll-snap-type: y mandatory`
* Each card: `scroll-snap-align: start`
* Infinite scroll (load next 10 items when near bottom)

---

## 6️⃣ Content Sourcing Strategy

Implement 3 content modes:

### Mode A – Static Seed Data (for development)

Hardcoded JSON file:

```
/data/seedContent.ts
```

Add 20 example entries including:

* Mental models
* Book insights
* Cognitive reframes
* Historical micro-events

---

### Mode B – OpenAI API Generation

Create API route:

```
/app/api/generate/route.ts
```

Environment variable:

```
OPENAI_API_KEY
```

Prompt template for generation:

"Generate 5 dense, scroll-optimized micro learning units. Each must:

* Be under 120 words
* Contain a strong opening hook
* Be intellectually rigorous
* Avoid fluff
* No emojis
* No hashtags
* No motivational tone
* Output JSON array with title, body, category"

Store response in memory (MVP only, no DB required).

---

### Mode C – Future Extensible

Architect content loader so it can later plug into:

* Supabase
* Notion API
* Firebase
* CMS

Keep interface abstracted via:

```
getFeedItems()
```

---

## 7️⃣ State Management

Use:

* React useState + useEffect only
* No Redux
* No heavy libraries

---

## 8️⃣ Save Feature (Local Only)

Implement:

* Save button on each card
* Use localStorage
* Saved items accessible via swipe-left gesture OR small floating icon

Do not build full account system.

---

## 9️⃣ Share Feature

Use Web Share API:

```
navigator.share()
```

Fallback: copy to clipboard.

---

## 🔟 UI Design Rules (Strict)

Typography:

* System font stack
* Title: text-2xl font-semibold
* Body: text-base leading-relaxed
* Category tag: small, muted, uppercase

Colors:

* Background: black or near-black
* Text: white or near-white
* Accent: subtle blue or neutral gray

Spacing:

* Large padding
* No borders unless subtle
* No shadows unless extremely soft

Animation:

* Fade in on mount
* Slight upward motion (4–8px max)
* No bounce
* No flashy transitions

---

## 1️⃣1️⃣ Performance

* Lazy load images
* No heavy images
* Lighthouse score > 90 mobile

---

## 1️⃣2️⃣ File Structure

```
/app
  /page.tsx
  /api/generate/route.ts
/components
  Feed.tsx
  FeedItem.tsx
/lib
  getFeedItems.ts
/data
  seedContent.ts
```

---

## 1️⃣3️⃣ Initial Seed Content Examples

Include examples like:

Title: Second-Order Thinking
Body:
Most decisions are evaluated on immediate outcomes.
Intelligent decision-makers ask: what happens after this happens?
Short-term relief often creates long-term fragility.
Second-order thinkers optimize for downstream consequences.

Category: Mental Model

Add at least 20 entries.

---

## 1️⃣4️⃣ Future Expansion Hooks (Scaffold Only)

Leave TODO comments for:

* User accounts
* AI personalization
* Streak tracking
* Daily digest mode
* Category filtering

---

## 1️⃣5️⃣ Deliverables

Generate:

* Complete project code
* All components
* Tailwind config
* Example .env file
* Clear run instructions:

```
npm install
npm run dev
```

---

# End of Prompt


