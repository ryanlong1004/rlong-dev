# Portfolio Redesign - Implementation Plan

## Design Decisions (Confirmed)

✅ **Color Scheme:** Emerald Professional

- Primary: `#10b981` (emerald-500)
- Background: `#0f172a` (slate-900)
- Surface: `#1e293b` (slate-800)
- Text: `#f1f5f9` (slate-100)
- Accent: `#06b6d4` (cyan-500)

✅ **Typography:** Modern Sans-Serif

- Display/Body: Inter
- Logo: Keep existing pip-title for brand identity
- Mono: JetBrains Mono for code snippets

✅ **GitHub Feed:** Recent repos + Contribution graph

✅ **Projects:** 3 featured (most time-intensive) + "View More" button to expand

✅ **About Section:** Minimal (no photo)

✅ **Skills:** Tag cloud with hover effects

✅ **Contact:** Email form + social links + scheduling modal

---

## Site Structure (Final)

### 1. Hero Section

**Height:** Full viewport (100vh)
**Content:**

- Name (large, pip-title font)
- Animated tagline: "Software Engineer • Problem Solver • Tech Enthusiast"
- 2-sentence value proposition
- Primary CTA: "Schedule a Call" (opens modal)
- Secondary CTA: "View My Work" (smooth scroll to projects)
- Scroll indicator at bottom

**Animations:**

- Fade in + slide up on load
- Gradient background with subtle animation
- Typing effect for tagline (optional)

---

### 2. Navigation Bar

**Type:** Fixed/sticky header
**Height:** 50px (compact)
**Layout:** Single row

- Left: Logo (rlong.dev)
- Center: Nav links (About, Work, Skills, Contact)
- Right: Social icons (GitHub, LinkedIn) + Weather widget

**Styling:**

- Glassmorphism (backdrop-blur)
- Emerald border-bottom
- Smooth scroll behavior

---

### 3. About Section

**Height:** ~400px
**Layout:** Single column, centered, max-width 800px

**Content:**

- "About Me" heading
- 2-3 paragraphs bio (who you are, what you do, what drives you)
- Key stats row:
  - Years of Experience
  - Projects Completed
  - GitHub Contributions (this year)
  - Technologies Mastered

**Styling:**

- Clean, readable typography
- Stats in cards with icons
- Fade in on scroll

---

### 4. GitHub Activity Section

**Height:** ~700px
**Heading:** "Recent Work"

**Components:**

**A. Contribution Graph (Top)**

- GitHub-style heatmap showing last 12 months
- Tooltips on hover (date + contribution count)
- API: GitHub GraphQL or use library (github-calendar)

**B. Recent Repositories (Bottom)**

- Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Display 6 most recent repos
- Each card shows:
  - Repository name (clickable)
  - Description (truncated 100 chars)
  - Language (color dot + name)
  - Stars count
  - Forks count
  - Last updated (relative time)
- Hover: Card lifts, background changes, emerald glow

**API Integration:**

```javascript
// Fetch repos
GET https://api.github.com/users/ryanlong1004/repos?sort=updated&per_page=6

// Cache in localStorage for 1 hour
// Fallback UI if rate-limited
```

---

### 5. Projects Section

**Height:** ~900px
**Heading:** "Featured Projects"

**Layout:**

- 3 featured projects (large cards)
- Grid: 1 column (stacked)
- "View More Projects" button (expands to show 6-9 more)

**Each Project Card:**

- Screenshot/demo GIF (left side, 60% width)
- Content (right side, 40% width):
  - Project name (h3)
  - Description (2-3 sentences)
  - Tech stack tags (pill-shaped badges)
  - Buttons: "Live Demo" + "View Code"
- Hover: Screenshot zooms slightly, card shadow increases

**Featured Projects:** (Based on time invested)

1. Most complex/time-intensive project
2. Second most significant project
3. Third featured project

**Expanded Projects:**

- Show in 3-column grid (smaller cards)
- Click "View More" toggles expanded state

---

### 6. Skills Section

**Height:** ~500px
**Heading:** "Technologies & Tools"

**Layout:** Tag Cloud (interactive)

- Tags sized by proficiency/usage frequency
- Larger tags = more experience
- Colors vary by category:
  - Languages: Emerald shades
  - Frameworks: Cyan shades
  - Tools: Slate shades
  - Cloud: Purple shades

**Hover Effects:**

- Tag scales up (1.1x)
- Background color intensifies
- Slight rotation (2-3 degrees)
- Shadow increases

**Categories (in cloud):**

- **Languages:** Python, JavaScript, TypeScript, Go, etc.
- **Frameworks:** Vue, React, FastAPI, Django, etc.
- **Tools:** Git, Docker, Kubernetes, CI/CD, etc.
- **Cloud:** AWS, GCP, Azure, Netlify, etc.

**Implementation:**

```vue
<div class="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
  <span v-for="skill in skills" 
        :class="['skill-tag', `size-${skill.size}`, `cat-${skill.category}`]"
        :key="skill.name">
    {{ skill.name }}
  </span>
</div>
```

---

### 7. Contact Section

**Height:** ~600px
**Heading:** "Let's Build Something Together"

**Layout:** Two columns (desktop), stacked (mobile)

**Left Column (60%):** Contact Form

- Fields:
  - Name (required)
  - Email (required, validated)
  - Message (required, textarea)
  - Submit button: "Send Message"
- Form validation with error messages
- Success message after submission
- Submit to email service (FormSpree, Netlify Forms, or custom API)

**Right Column (40%):** Quick Links

- Social media links (large, card-style):
  - GitHub profile
  - LinkedIn profile
  - Email (opens mail client)
- "Schedule a Call" button (opens Google Calendar modal)

**Styling:**

- Form inputs: Slate-800 background, emerald focus ring
- Submit button: Emerald background, hover lift effect
- Link cards: Hover state with icon animation

---

### 8. Footer

**Height:** ~120px
**Content:**

- Copyright: "© 2025 Ryan Long. All rights reserved."
- Tech stack: "Built with Vue 3 + Vite + Tailwind CSS"
- Social links (small icons)
- "Back to Top" button (smooth scroll to hero)

**Styling:**

- Dark background (slate-950)
- Subtle top border (emerald)
- Centered text
- Compact padding

---

## Component Architecture

### New Components to Create:

```
src/
├── components/
│   ├── sections/
│   │   ├── HeroSection.vue          ✨ NEW
│   │   ├── AboutSection.vue         ✨ NEW
│   │   ├── GitHubSection.vue        ✨ NEW
│   │   ├── ProjectsSection.vue      🔄 REPLACE PortfolioItem.vue
│   │   ├── SkillsSection.vue        ✨ NEW
│   │   ├── ContactSection.vue       ✨ NEW
│   │   └── FooterSection.vue        🔄 UPDATE FooterItem.vue
│   ├── ui/
│   │   ├── ProjectCard.vue          ✨ NEW
│   │   ├── RepoCard.vue             ✨ NEW
│   │   ├── ContributionGraph.vue    ✨ NEW
│   │   ├── SkillTag.vue             ✨ NEW
│   │   ├── ContactForm.vue          ✨ NEW
│   │   ├── SchedulerModal.vue       ✨ NEW
│   │   └── ScrollToTop.vue          ✨ NEW
│   └── HeaderItem.vue               🔄 UPDATE (keep, refine)
├── composables/
│   ├── useGitHub.js                 ✨ NEW (API calls)
│   ├── useScrollAnimation.js        ✨ NEW (Intersection Observer)
│   └── useContactForm.js            ✨ NEW (form handling)
├── App.vue                          🔄 MAJOR UPDATE
└── main.js                          🔄 UPDATE (add Inter font)
```

---

## Implementation Phases

### Phase 1: Foundation & Design System (Day 1)

**Goal:** Set up color scheme, typography, and core layout

**Tasks:**

1. Update color variables (Tailwind config or CSS custom properties)
2. Add Inter font from Google Fonts
3. Update `main.css` with new design tokens
4. Refine HeaderItem.vue:
   - Single row layout
   - Inline social icons
   - Emerald accent color
   - Smooth scroll behavior
5. Create new `App.vue` structure (single-page with sections)
6. Set up scroll animations composable

**Deliverable:** Updated design system, refined navbar, clean canvas for sections

---

### Phase 2: Hero & About Sections (Day 1-2)

**Goal:** Create impactful first impression

**Tasks:**

1. Build HeroSection.vue:
   - Full viewport height
   - Animated gradient background
   - Name + tagline (typing effect optional)
   - Dual CTAs (Schedule + View Work)
   - Scroll indicator
2. Build AboutSection.vue:
   - Minimal bio (2-3 paragraphs)
   - Stats cards with icons
   - Fade-in animation on scroll
3. Update CoverItem.vue or integrate into App.vue
4. Test responsive design

**Deliverable:** Polished hero and about sections

---

### Phase 3: GitHub Activity Section (Day 2)

**Goal:** Showcase live GitHub activity

**Tasks:**

1. Create `useGitHub` composable:
   - Fetch user repos (sorted by updated)
   - Fetch user stats (total contributions, etc.)
   - Implement caching (1 hour)
   - Error handling for rate limits
2. Build RepoCard.vue:
   - Display repo data
   - Language color dots
   - Hover effects
3. Build ContributionGraph.vue:
   - Use GitHub calendar library or custom implementation
   - Last 12 months heatmap
   - Tooltips
4. Build GitHubSection.vue:
   - Integrate contribution graph
   - Grid of repo cards
   - Loading states
5. Test with real API data

**Deliverable:** Fully functional GitHub activity display

---

### Phase 4: Projects Section (Day 3)

**Goal:** Showcase featured work with expandable gallery

**Tasks:**

1. Create projects data structure:
   - Array of project objects with all metadata
   - Mark 3 as featured (most time-intensive)
2. Build ProjectCard.vue:
   - Screenshot + content layout
   - Tech stack tags
   - Action buttons (Demo + Code)
   - Hover effects
3. Build ProjectsSection.vue:
   - Display 3 featured (large cards)
   - "View More" button
   - Expandable grid (9 more projects)
   - Smooth expand/collapse transition
4. Optimize images (WebP format)
5. Add lazy loading

**Deliverable:** Interactive projects showcase

---

### Phase 5: Skills Section (Day 3)

**Goal:** Visual, interactive skills display

**Tasks:**

1. Create skills data structure:
   - Array with: name, category, size (proficiency)
2. Build SkillTag.vue:
   - Dynamic sizing classes
   - Category-based colors
   - Hover animations
3. Build SkillsSection.vue:
   - Tag cloud layout (flexbox wrap)
   - Centered, max-width container
   - Scroll animation
4. Fine-tune tag sizes and colors

**Deliverable:** Engaging tag cloud

---

### Phase 6: Contact Section (Day 4)

**Goal:** Multiple contact options with form

**Tasks:**

1. Build ContactForm.vue:
   - Form fields (name, email, message)
   - Validation (client-side)
   - Submit handler
   - Success/error states
2. Integrate form backend:
   - Option A: Netlify Forms (easiest)
   - Option B: FormSpree
   - Option C: Custom API endpoint
3. Build SchedulerModal.vue:
   - Teleport to body
   - Embedded Google Calendar iframe
   - Close button
4. Build ContactSection.vue:
   - Two-column layout
   - Form + quick links
   - Social cards with animations
5. Test form submission

**Deliverable:** Functional contact section with multiple options

---

### Phase 7: Footer & Polish (Day 4)

**Goal:** Complete the page, add final touches

**Tasks:**

1. Update FooterSection.vue:
   - Copyright info
   - Tech stack credit
   - Social links
   - Back-to-top button
2. Build ScrollToTop.vue:
   - Fixed position button (bottom-right)
   - Appears after scrolling 500px
   - Smooth scroll to top
3. Add scroll animations to all sections:
   - Use `useScrollAnimation` composable
   - Fade-in effects
   - Stagger children (optional)
4. Test entire page flow
5. Responsive design pass (all breakpoints)

**Deliverable:** Complete, polished single-page portfolio

---

### Phase 8: Optimization & Launch (Day 5)

**Goal:** Performance, accessibility, and deployment

**Tasks:**

1. **Performance:**
   - Optimize all images (compress, WebP)
   - Lazy load images below fold
   - Code splitting (dynamic imports)
   - Remove unused CSS
   - Run Lighthouse audit
   - Fix performance issues
2. **Accessibility:**
   - Semantic HTML check
   - ARIA labels for icon buttons
   - Keyboard navigation test
   - Focus states
   - Color contrast check (WCAG AA)
   - Screen reader test
3. **Cross-browser testing:**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome)
4. **Final QA:**
   - All links work
   - Forms submit correctly
   - Animations smooth
   - No console errors
5. **Deploy:**
   - Build production bundle
   - Push to GitHub
   - Netlify auto-deploys
   - Verify live site
   - Test domain (rlong.dev)

**Deliverable:** Live, optimized portfolio at rlong.dev

---

## Technical Implementation Details

### Color System (Tailwind Config)

```javascript
// Add to tailwind.config.js (or use v4 CSS variables)
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        accent: '#06b6d4'
      }
    }
  }
}
```

### Typography Setup

```css
/* Add to main.css or index.html */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

body {
  font-family: var(--font-inter);
}
```

### Smooth Scroll

```css
/* Add to main.css */
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

### Scroll Animation Composable

```javascript
// src/composables/useScrollAnimation.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(threshold = 0.1) {
  const isVisible = ref(false)
  const targetRef = ref(null)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target) // Trigger once
        }
      },
      { threshold }
    )

    if (targetRef.value) {
      observer.observe(targetRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { isVisible, targetRef }
}
```

### GitHub API Composable

```javascript
// src/composables/useGitHub.js
import { ref, onMounted } from 'vue'

const CACHE_KEY = 'github_repos'
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

export function useGitHub(username = 'ryanlong1004') {
  const repos = ref([])
  const loading = ref(true)
  const error = ref(null)

  const fetchRepos = async () => {
    // Check cache first
    const cached = localStorage.getItem(CACHE_KEY)
    if (cached) {
      const { data, timestamp } = JSON.parse(cached)
      if (Date.now() - timestamp < CACHE_DURATION) {
        repos.value = data
        loading.value = false
        return
      }
    }

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
      )
      if (!response.ok) throw new Error('Failed to fetch repos')

      const data = await response.json()
      repos.value = data

      // Cache the result
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          data,
          timestamp: Date.now()
        })
      )
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchRepos)

  return { repos, loading, error }
}
```

### Language Colors

```javascript
// src/utils/languageColors.js
export const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Vue: '#41b883',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c'
  // Add more as needed
}
```

---

## Project Data Structure

```javascript
// src/data/projects.js
export const projects = [
  {
    id: 1,
    name: 'Project Name',
    description:
      'Brief description of the project (2-3 sentences explaining what it does and its impact)',
    image: '/images/portfolio/project1.jpg', // or .webp
    demoUrl: 'https://demo.example.com',
    codeUrl: 'https://github.com/ryanlong1004/project',
    tags: ['Vue', 'Python', 'Docker', 'AWS'],
    featured: true, // One of your 3 most time-intensive
    timeInvested: 'high' // high, medium, low (for sorting)
  }
  // Add 9-12 projects total
]
```

---

## Skills Data Structure

```javascript
// src/data/skills.js
export const skills = [
  { name: 'Python', category: 'language', size: 'xl' }, // Most proficient
  { name: 'JavaScript', category: 'language', size: 'xl' },
  { name: 'Vue', category: 'framework', size: 'lg' },
  { name: 'Docker', category: 'tool', size: 'lg' },
  { name: 'AWS', category: 'cloud', size: 'md' },
  { name: 'TypeScript', category: 'language', size: 'md' },
  { name: 'Git', category: 'tool', size: 'sm' }
  // Add 20-30 skills total
  // Sizes: xl (expert), lg (advanced), md (intermediate), sm (familiar)
]
```

---

## Contact Form Integration (Netlify)

```html
<!-- In ContactForm.vue -->
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />
  <!-- Spam protection -->

  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

Add to `public/` folder:

```html
<!-- public/success.html -->
<!doctype html>
<html>
  <head>
    <title>Thank You!</title>
  </head>
  <body>
    <h1>Message Sent!</h1>
    <p>Thanks for reaching out. I'll get back to you soon.</p>
    <a href="/">Back to Home</a>
  </body>
</html>
```

---

## Responsive Breakpoints

```css
/* Mobile First Approach */
/* Base styles: < 640px (mobile) */

@media (min-width: 640px) {
  /* sm: tablets portrait */
}

@media (min-width: 768px) {
  /* md: tablets landscape */
}

@media (min-width: 1024px) {
  /* lg: desktop */
}

@media (min-width: 1280px) {
  /* xl: large desktop */
}
```

---

## Animation Examples

```css
/* Fade in + Slide up */
.fade-up-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* Card hover */
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
}

/* Skill tag hover */
.skill-tag {
  transition: all 0.2s ease;
}
.skill-tag:hover {
  transform: scale(1.1) rotate(2deg);
}
```

---

## Success Metrics

**Performance Targets:**

- Lighthouse Score: 90+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Total page size: < 2MB

**Functionality Checklist:**

- ✅ All navigation links work (smooth scroll)
- ✅ GitHub feed loads and displays correctly
- ✅ Project images load (lazy loaded)
- ✅ Skills tag cloud is interactive
- ✅ Contact form submits successfully
- ✅ Scheduler modal opens/closes
- ✅ Responsive on mobile, tablet, desktop
- ✅ Keyboard navigation works
- ✅ No console errors

**Accessibility Checklist:**

- ✅ WCAG AA color contrast
- ✅ Focus states visible
- ✅ Semantic HTML
- ✅ Alt text on images
- ✅ ARIA labels where needed
- ✅ Keyboard accessible

---

## Timeline Summary

- **Day 1:** Foundation, Hero, About sections
- **Day 2:** GitHub activity section
- **Day 3:** Projects and Skills sections
- **Day 4:** Contact section, Footer, Polish
- **Day 5:** Optimization, Testing, Launch

**Total Estimated Time:** 5 days (incremental, testable progress each day)

---

## Next Steps

1. ✅ Review this plan and confirm approach
2. Create project and skills data files
3. Begin Phase 1: Foundation & Design System
4. Implement incrementally, test at each phase
5. Deploy to staging for review before final launch

Ready to start with Phase 1?
