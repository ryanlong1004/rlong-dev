# Modern Software Engineer Portfolio Design Research

**Date**: December 5, 2025  
**Target Stack**: Vue 3 + Tailwind CSS

---

## Executive Summary

This document provides comprehensive research on modern software engineer portfolio website design patterns, with actionable recommendations for implementation using Vue 3 and Tailwind CSS. The research focuses on layout patterns, visual design systems, interactive elements, and integration strategies for GitHub feeds, social links, and scheduling tools.

---

## Top 7 Design Patterns for Developer Portfolios

### 1. **Minimalist Hero Section with Bold Typography**

**Pattern Description**: Clean, full-viewport hero sections with large, impactful typography and minimal distractions.

**Key Characteristics**:

- Full-height viewport (`min-h-screen`)
- Large heading text (3xl-6xl font sizes)
- Single CTA button prominently placed
- Subtle background (gradient, solid, or minimal pattern)
- Short, punchy tagline describing the developer's expertise

**Implementation Recommendation** (Vue + Tailwind):

```vue
<section
  class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
>
  <div class="max-w-4xl mx-auto px-6 text-center">
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
      Hi, I'm Ryan. I solve problems with software.
    </h1>
    <p class="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
      Full-stack developer specializing in Vue, Python, and cloud-native solutions
    </p>
    <a href="#contact" class="inline-block bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-all hover:scale-105">
      Let's Work Together
    </a>
  </div>
</section>
```

**Examples**:

- Elliott Mangham's portfolio
- Edoardo Lunardi's portfolio

---

### 2. **Fixed/Sticky Navigation with Social Integration**

**Pattern Description**: Minimal navigation bars that remain accessible while scrolling, with integrated social media icons and quick-access CTAs.

**Key Characteristics**:

- Fixed positioning (`fixed top-0` or `sticky top-0`)
- Semi-transparent background with backdrop blur
- Social icons with hover effects
- Mobile-responsive hamburger menu
- Subtle border or shadow for depth

**Implementation Recommendation** (Vue + Tailwind):

```vue
<nav
  class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
>
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <h3 class="text-2xl font-bold text-white">rlong.dev</h3>
    
    <div class="flex items-center gap-6">
      <!-- Navigation Links -->
      <a v-for="link in navLinks" :key="link.name" 
         :href="link.href"
         class="text-slate-300 hover:text-emerald-400 transition-colors">
        {{ link.name }}
      </a>
      
      <!-- Social Icons -->
      <div class="flex items-center gap-4 border-l border-slate-700 pl-6">
        <a href="https://github.com/username" 
           class="text-slate-400 hover:text-white hover:scale-110 transition-all">
          <GithubIcon class="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/username"
           class="text-slate-400 hover:text-blue-400 hover:scale-110 transition-all">
          <LinkedinIcon class="w-5 h-5" />
        </a>
        <a href="/schedule"
           class="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">
          Schedule Call
        </a>
      </div>
    </div>
  </div>
</nav>
```

**Current Implementation Note**: Your existing navbar is good but could benefit from a glassmorphism effect and more spacing between elements.

---

### 3. **Card-Based Project Grid with Hover Effects**

**Pattern Description**: Projects displayed in a responsive grid with cards that reveal details on hover or interaction.

**Key Characteristics**:

- CSS Grid or Flexbox layout (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Cards with consistent aspect ratios
- Image or screenshot as primary visual
- Overlay or lift effect on hover
- Tech stack tags/badges
- External link and/or live demo buttons

**Implementation Recommendation** (Vue + Tailwind):

```vue
<section class="py-20 bg-slate-900">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl font-bold text-white mb-12">Featured Projects</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article v-for="project in projects" :key="project.id"
               class="group bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
        
        <!-- Project Image -->
        <div class="relative overflow-hidden aspect-video">
          <img :src="project.image" :alt="project.title"
               class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div class="absolute bottom-4 left-4 right-4 flex gap-3">
              <a :href="project.demo" class="flex-1 bg-emerald-500 text-white py-2 text-center rounded-lg hover:bg-emerald-600">
                Live Demo
              </a>
              <a :href="project.github" class="flex-1 bg-slate-700 text-white py-2 text-center rounded-lg hover:bg-slate-600">
                Code
              </a>
            </div>
          </div>
        </div>
        
        <!-- Project Details -->
        <div class="p-6">
          <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
          <p class="text-slate-400 mb-4 line-clamp-3">{{ project.description }}</p>
          
          <!-- Tech Stack Tags -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.technologies" :key="tech"
                  class="text-xs px-3 py-1 bg-slate-700 text-emerald-400 rounded-full">
              {{ tech }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
```

---

### 4. **Live GitHub Activity Feed**

**Pattern Description**: Real-time or cached GitHub contribution data displayed as an activity stream or contribution graph.

**Key Characteristics**:

- GitHub API integration (GitHub GraphQL or REST API)
- Contribution graph (green squares) or activity list
- Recent repositories with star counts
- Language breakdown chart
- Auto-updates or periodic refresh

**Implementation Recommendation** (Vue + Tailwind):

**Component Structure**:

```vue
<!-- GitHubFeed.vue -->
<template>
  <section class="py-20 bg-slate-800">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-white mb-12">GitHub Activity</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Recent Repositories -->
        <div class="bg-slate-900 rounded-xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <GithubIcon class="w-5 h-5" />
            Recent Repositories
          </h3>

          <div class="space-y-4">
            <a
              v-for="repo in recentRepos"
              :key="repo.name"
              :href="repo.url"
              class="block p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <div class="flex items-start justify-between mb-2">
                <h4 class="font-semibold text-white">{{ repo.name }}</h4>
                <div class="flex items-center gap-3 text-slate-400 text-sm">
                  <span class="flex items-center gap-1">
                    <StarIcon class="w-4 h-4" />
                    {{ repo.stars }}
                  </span>
                  <span class="flex items-center gap-1">
                    <ForkIcon class="w-4 h-4" />
                    {{ repo.forks }}
                  </span>
                </div>
              </div>
              <p class="text-slate-400 text-sm mb-3">{{ repo.description }}</p>
              <div class="flex items-center gap-2">
                <span
                  class="w-3 h-3 rounded-full"
                  :style="{ backgroundColor: repo.languageColor }"
                ></span>
                <span class="text-sm text-slate-400">{{ repo.language }}</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Contribution Stats -->
        <div class="bg-slate-900 rounded-xl p-6">
          <h3 class="text-xl font-semibold text-white mb-4">Contribution Stats</h3>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="bg-slate-800 rounded-lg p-4">
              <div class="text-3xl font-bold text-emerald-400">{{ stats.totalCommits }}</div>
              <div class="text-sm text-slate-400">Commits This Year</div>
            </div>
            <div class="bg-slate-800 rounded-lg p-4">
              <div class="text-3xl font-bold text-blue-400">{{ stats.pullRequests }}</div>
              <div class="text-sm text-slate-400">Pull Requests</div>
            </div>
            <div class="bg-slate-800 rounded-lg p-4">
              <div class="text-3xl font-bold text-purple-400">{{ stats.repositories }}</div>
              <div class="text-sm text-slate-400">Public Repos</div>
            </div>
            <div class="bg-slate-800 rounded-lg p-4">
              <div class="text-3xl font-bold text-orange-400">{{ stats.issues }}</div>
              <div class="text-sm text-slate-400">Issues Closed</div>
            </div>
          </div>

          <!-- Language Breakdown -->
          <div>
            <h4 class="text-sm font-semibold text-slate-400 mb-3">Top Languages</h4>
            <div class="space-y-2">
              <div v-for="lang in languageStats" :key="lang.name" class="flex items-center gap-3">
                <div class="w-24 text-sm text-slate-400">{{ lang.name }}</div>
                <div class="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    class="h-full rounded-full"
                    :style="{ width: lang.percentage + '%', backgroundColor: lang.color }"
                  ></div>
                </div>
                <div class="text-sm text-slate-400">{{ lang.percentage }}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View Full Profile Button -->
      <div class="text-center mt-8">
        <a
          href="https://github.com/yourusername"
          class="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-colors"
        >
          <GithubIcon class="w-5 h-5" />
          View Full GitHub Profile
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const recentRepos = ref([])
const stats = ref({
  totalCommits: 0,
  pullRequests: 0,
  repositories: 0,
  issues: 0
})
const languageStats = ref([])

onMounted(async () => {
  // Fetch GitHub data
  await fetchGitHubData()
})

async function fetchGitHubData() {
  const username = 'ryanlong1004'

  // Fetch repos
  const reposResponse = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
  )
  const repos = await reposResponse.json()

  recentRepos.value = repos.map((repo) => ({
    name: repo.name,
    url: repo.html_url,
    description: repo.description,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language,
    languageColor: getLanguageColor(repo.language)
  }))

  // Fetch user stats
  const userResponse = await fetch(`https://api.github.com/users/${username}`)
  const user = await userResponse.json()

  stats.value = {
    totalCommits: 1200, // Would need GitHub GraphQL API for accurate count
    pullRequests: 150,
    repositories: user.public_repos,
    issues: 80
  }

  // Calculate language stats
  calculateLanguageStats(repos)
}

function getLanguageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Vue: '#41b883',
    CSS: '#563d7c',
    HTML: '#e34c26'
  }
  return colors[language] || '#8b949e'
}

function calculateLanguageStats(repos) {
  const langCounts = {}
  let total = 0

  repos.forEach((repo) => {
    if (repo.language) {
      langCounts[repo.language] = (langCounts[repo.language] || 0) + 1
      total++
    }
  })

  languageStats.value = Object.entries(langCounts)
    .map(([name, count]) => ({
      name,
      percentage: Math.round((count / total) * 100),
      color: getLanguageColor(name)
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5)
}
</script>
```

**API Considerations**:

- Use GitHub REST API for basic data (rate limit: 60 requests/hour unauthenticated, 5000 with token)
- Use GitHub GraphQL API for advanced queries (contribution graphs, commit counts)
- Consider caching responses (localStorage or backend) to avoid rate limits
- Alternative: Use services like GitHub Readme Stats or Shields.io for badges

---

### 5. **Integrated Scheduling Widget**

**Pattern Description**: Embedded calendar/scheduling tool (Calendly, Google Calendar, Cal.com) for easy meeting booking.

**Key Characteristics**:

- Modal or inline embed of scheduling widget
- Clear CTA to "Schedule a Call" or "Book Meeting"
- Timezone awareness
- Confirmation and reminder emails
- Mobile-responsive iframe or widget

**Implementation Recommendation** (Vue + Tailwind):

**Option A: Modal Popup** (Recommended)

```vue
<!-- SchedulingModal.vue -->
<template>
  <div>
    <!-- Trigger Button -->
    <button
      @click="showModal = true"
      class="bg-emerald-500 text-white px-6 py-3 rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2"
    >
      <CalendarIcon class="w-5 h-5" />
      Schedule a Call
    </button>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          @click.self="showModal = false"
        >
          <div
            class="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            <!-- Modal Header -->
            <div class="flex items-center justify-between p-6 border-b border-slate-800">
              <h3 class="text-2xl font-bold text-white">Schedule a Meeting</h3>
              <button
                @click="showModal = false"
                class="text-slate-400 hover:text-white transition-colors"
              >
                <XIcon class="w-6 h-6" />
              </button>
            </div>

            <!-- Calendly Embed -->
            <div class="h-[600px] overflow-auto">
              <iframe
                :src="calendlyUrl"
                width="100%"
                height="100%"
                frameborder="0"
                class="bg-white"
              >
              </iframe>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const calendlyUrl =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HA-h8kiHIB8ocD3mX_7JlxFUYejBsGkq6C5OSISFQVrhMZvxn0ESlXoPRRKA35Ms1gINR4JfO'
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
```

**Option B: Inline Embed**

```vue
<section class="py-20 bg-slate-900">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold text-white mb-4">Let's Connect</h2>
      <p class="text-xl text-slate-400">Book a 30-minute call to discuss your project</p>
    </div>
    
    <div class="bg-white rounded-2xl overflow-hidden shadow-2xl">
      <iframe 
        :src="calendlyUrl"
        width="100%" 
        height="700" 
        frameborder="0">
      </iframe>
    </div>
  </div>
</section>
```

**Tools Comparison**:

- **Calendly**: Most popular, clean UI, paid features for branding removal
- **Cal.com**: Open-source alternative, self-hostable, good for customization
- **Google Calendar Appointments**: Free, integrates with Google Workspace
- **Koalendar**: Free tier available, good for basic scheduling

---

### 6. **Smooth Scroll Animations and Micro-interactions**

**Pattern Description**: Elements animate into view as users scroll, with subtle hover effects throughout.

**Key Characteristics**:

- Intersection Observer API or scroll-based animations
- Fade-in, slide-in, or scale effects
- Staggered animations for lists
- Hover effects: scale, color shift, shadow
- Performance-optimized (CSS transforms)

**Implementation Recommendation** (Vue + Tailwind):

**Using Vue + Intersection Observer**:

```vue
<!-- ScrollReveal.vue Composable -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const elements = ref([])
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    elements.value = document.querySelectorAll('.reveal')
    elements.value.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { elements }
}
</script>

<!-- Usage in Component -->
<template>
  <div>
    <section class="reveal opacity-0 translate-y-10 transition-all duration-700">
      <!-- Content -->
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

onMounted(() => {
  useScrollReveal()
})
</script>

<style>
.revealed {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>
```

**Alternative: Using AOS (Animate On Scroll) Library**:

```bash
npm install aos
```

```js
// main.js
import AOS from 'aos'
import 'aos/dist/aos.css'

app.mount('#app')
AOS.init({
  duration: 800,
  once: true,
  offset: 100
})
```

```vue
<template>
  <section data-aos="fade-up" data-aos-delay="200">
    <!-- Content -->
  </section>
</template>
```

**Micro-interactions Examples**:

```vue
<!-- Hover Effects -->
<button
  class="transform hover:scale-105 transition-transform hover:shadow-lg hover:shadow-emerald-500/50"
>
  Click Me
</button>

<img class="hover:rotate-3 transition-transform duration-300" src="..." />

<a
  class="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-500 hover:after:w-full after:transition-all"
>
  Link with animated underline
</a>
```

---

### 7. **Dark Mode with Accent Colors**

**Pattern Description**: Dark backgrounds (slate/gray) with vibrant accent colors for CTAs and highlights.

**Key Characteristics**:

- Dark base colors: `slate-900`, `gray-900`, `zinc-900`
- Accent colors: emerald, cyan, purple, orange
- High contrast for readability
- Consistent color palette throughout
- Optional light/dark mode toggle

**Implementation Recommendation** (Vue + Tailwind):

**Color Palette** (Tailwind Config):

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          500: '#10b981', // emerald-500
          600: '#059669',
          700: '#047857'
        },
        dark: {
          900: '#0f172a', // slate-900
          800: '#1e293b', // slate-800
          700: '#334155' // slate-700
        }
      }
    }
  }
}
```

**Dark Mode Toggle** (Optional):

```vue
<!-- DarkModeToggle.vue -->
<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
  >
    <SunIcon v-if="isDark" class="w-5 h-5 text-yellow-400" />
    <MoonIcon v-else class="w-5 h-5 text-slate-400" />
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(true)

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark' || !('theme' in localStorage)
  applyTheme()
})

function toggleDarkMode() {
  isDark.value = !isDark.value
  applyTheme()
}

function applyTheme() {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}
</script>
```

---

## Recommended Color Schemes

### Option 1: Emerald Accent (Modern & Fresh)

```css
Background: #0f172a (slate-900)
Secondary: #1e293b (slate-800)
Text: #f1f5f9 (slate-100)
Accent: #10b981 (emerald-500)
Accent Hover: #059669 (emerald-600)
```

### Option 2: Cyan/Blue Accent (Tech & Professional)

```css
Background: #0f172a (slate-900)
Secondary: #1e293b (slate-800)
Text: #f1f5f9 (slate-100)
Accent: #06b6d4 (cyan-500)
Accent Hover: #0891b2 (cyan-600)
```

### Option 3: Purple Accent (Creative & Bold)

```css
Background: #0f172a (slate-900)
Secondary: #1e293b (slate-800)
Text: #f1f5f9 (slate-100)
Accent: #8b5cf6 (violet-500)
Accent Hover: #7c3aed (violet-600)
```

**Current Site Analysis**: Your site currently uses `#6BD10B` (lime green). Consider shifting to `#10b981` (emerald) for a more modern, professional look while maintaining the green theme.

---

## Typography Recommendations

### Font Pairings

**Option 1: Inter + JetBrains Mono** (Modern & Technical)

```css
/* Headings */
font-family: 'Inter', sans-serif;
font-weight: 700-900;

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 400-500;

/* Code */
font-family: 'JetBrains Mono', monospace;
```

**Option 2: Poppins + Roboto** (Clean & Approachable)

```css
/* Headings */
font-family: 'Poppins', sans-serif;
font-weight: 600-800;

/* Body */
font-family: 'Roboto', sans-serif;
font-weight: 400;
```

**Option 3: Space Grotesk + IBM Plex Sans** (Geometric & Modern)

```css
/* Headings */
font-family: 'Space Grotesk', sans-serif;
font-weight: 700;

/* Body */
font-family: 'IBM Plex Sans', sans-serif;
font-weight: 400-500;
```

**Implementation**:

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  }
}
```

**Current Site Note**: Your custom fonts (Gillies Gothic, Fixedsys) create a unique retro aesthetic. If you want to maintain this style, consider using them only for headings and pair with a modern sans-serif for body text.

---

## Recommended Layout Sections & Order

### 1. **Hero Section**

- Full viewport height
- Name + tagline
- Primary CTA (Schedule/Contact)
- Scroll indicator

### 2. **About/Introduction**

- Brief bio (2-3 sentences)
- Key skills/technologies
- Profile photo (optional)
- Secondary CTA (Download Resume)

### 3. **Featured Projects**

- 3-6 projects in grid
- Project cards with images
- Tech stack tags
- Live demo + code links

### 4. **GitHub Activity**

- Recent repositories
- Contribution stats
- Language breakdown
- Link to full profile

### 5. **Skills/Technologies**

- Icon grid or category-based
- Proficiency levels (optional)
- Years of experience (optional)

### 6. **Experience/Work** (Optional)

- Timeline or card-based
- Company logos
- Key achievements
- Tech used

### 7. **Contact/CTA Section**

- Scheduling widget or form
- Social links
- Email
- Location (optional)

### 8. **Footer**

- Copyright
- Quick links
- Social icons
- "Built with Vue + Tailwind" badge

---

## Specific Feature Implementation Guides

### GitHub Feed Display

**Recommended Approach**: Fetch from GitHub API and cache results

```vue
<!-- composables/useGitHub.js -->
import { ref } from 'vue'; export function useGitHub(username) { const repos = ref([]); const
profile = ref(null); const loading = ref(false); const error = ref(null); async function fetchData()
{ loading.value = true; error.value = null; try { // Check cache first (24-hour expiry) const cached
= localStorage.getItem('github-data'); if (cached) { const { data, timestamp } = JSON.parse(cached);
const hoursSince = (Date.now() - timestamp) / (1000 * 60 * 60); if (hoursSince < 24) { repos.value =
data.repos; profile.value = data.profile; loading.value = false; return; } } // Fetch fresh data
const [reposRes, profileRes] = await Promise.all([
fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
fetch(`https://api.github.com/users/${username}`) ]); repos.value = await reposRes.json();
profile.value = await profileRes.json(); // Cache the results localStorage.setItem('github-data',
JSON.stringify({ data: { repos: repos.value, profile: profile.value }, timestamp: Date.now() })); }
catch (e) { error.value = e.message; } finally { loading.value = false; } } return { repos, profile,
loading, error, fetchData }; }
```

---

### Social Links Integration

**Recommended Layout**: Fixed social sidebar or navbar integration

```vue
<!-- SocialLinks.vue -->
<template>
  <!-- Fixed Sidebar (Left or Right) -->
  <div class="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40">
    <a
      v-for="link in socialLinks"
      :key="link.name"
      :href="link.url"
      :aria-label="link.name"
      class="text-slate-400 hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300"
    >
      <component :is="link.icon" class="w-6 h-6" />
    </a>
    <div class="w-0.5 h-24 bg-slate-700"></div>
  </div>
</template>

<script setup>
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon } from '@/components/icons'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ryanlong1004', icon: GithubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/rlongdev', icon: LinkedinIcon },
  { name: 'Twitter', url: 'https://twitter.com/username', icon: TwitterIcon },
  { name: 'Email', url: 'mailto:ryan@rlong.dev', icon: MailIcon }
]
</script>
```

---

### Scheduling Integration

**Best Practices**:

1. **Modal Popup**: Less intrusive, works well in navbar
2. **Dedicated Section**: Better for converting visitors into leads
3. **Inline Embed**: Shows availability without clicks
4. **Hybrid Approach**: CTA button in hero, full embed in contact section

**Recommended Services**:

- **Calendly** (easiest, most features, $8/mo for branding removal)
- **Cal.com** (open-source, free self-hosting)
- **Google Calendar Appointments** (free, but Google branding)

---

## Animation Libraries Recommendations

### 1. **AOS (Animate On Scroll)** - Simple & Effective

```bash
npm install aos
```

- Pros: Easy to use, small size, good defaults
- Cons: Limited customization

### 2. **GSAP (GreenSock)** - Professional Grade

```bash
npm install gsap
```

- Pros: Powerful, performant, full control
- Cons: Steeper learning curve, larger bundle

### 3. **Lottie** - JSON-based Animations

```bash
npm install lottie-web
```

- Pros: Designer-friendly, beautiful results
- Cons: Requires animation files from After Effects

### 4. **Framer Motion** (React) / **Motion One** (Vue)

```bash
npm install motion
```

- Pros: Modern API, great for complex interactions
- Cons: Newer ecosystem

**Recommendation for Your Project**: Start with AOS for scroll animations + custom CSS transitions for micro-interactions. Graduate to GSAP if you need complex timeline animations.

---

## Responsive Design Breakpoints

```js
// Recommended Tailwind breakpoints
screens: {
  'sm': '640px',   // Mobile landscape
  'md': '768px',   // Tablet
  'lg': '1024px',  // Laptop
  'xl': '1280px',  // Desktop
  '2xl': '1536px'  // Large desktop
}
```

**Mobile-First Approach**:

```vue
<div
  class="
  text-2xl                 /* Mobile: base */
  sm:text-3xl              /* Small devices */
  md:text-4xl              /* Tablets */
  lg:text-5xl              /* Laptops */
  xl:text-6xl              /* Desktops */
"
>
  Responsive Heading
</div>
```

---

## Performance Optimization Tips

1. **Lazy Load Images**: Use native `loading="lazy"` or Vue plugin
2. **Code Splitting**: Use Vue's `defineAsyncComponent` for heavy components
3. **Optimize Images**: Use WebP format, compress with Sharp or Squoosh
4. **Minimize JavaScript**: Remove unused dependencies, tree-shake libraries
5. **Use CSS Transforms**: Hardware-accelerated animations (avoid `top`, `left`)
6. **Debounce Scroll Events**: If using custom scroll listeners
7. **Cache API Responses**: Store GitHub data in localStorage with expiry
8. **Preload Critical Assets**: Use `<link rel="preload">` for fonts/hero images

---

## Accessibility Checklist

- [ ] Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] ARIA labels for icon-only links (`aria-label="GitHub Profile"`)
- [ ] Keyboard navigation support (Tab order, focus states)
- [ ] Color contrast ratio ≥ 4.5:1 (use WebAIM checker)
- [ ] Alt text for all images
- [ ] Skip to content link
- [ ] Focus visible styles (`:focus-visible`)
- [ ] Responsive text sizing (avoid fixed `px`)
- [ ] Reduced motion support (`prefers-reduced-motion`)

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Next Steps for Your Portfolio

### Immediate Wins (1-2 hours)

1. Update navbar with glassmorphism effect
2. Add hover effects to project cards
3. Implement scroll reveal animations with AOS
4. Create scheduling modal component
5. Update color palette to emerald accent

### Medium-Term Improvements (1-2 days)

1. Integrate GitHub API for live repository data
2. Add contribution stats visualization
3. Create skills/technologies section
4. Implement smooth scroll navigation
5. Add animated hero section

### Long-Term Enhancements (1 week+)

1. Build blog section with Markdown support
2. Add case studies for major projects
3. Create interactive demos or code playgrounds
4. Implement analytics (Plausible or Umami)
5. Add testimonials section
6. Create email newsletter signup

---

## Conclusion

Modern developer portfolios prioritize:

- **Clarity**: Information hierarchy is clear
- **Speed**: Fast load times, smooth interactions
- **Personality**: Unique touches without sacrificing usability
- **Functionality**: GitHub integration, easy contact methods
- **Professionalism**: Clean design, no broken links, mobile-friendly

Your existing portfolio has a strong foundation with Vue and Tailwind. Focus on refining the visual hierarchy, adding smooth animations, and integrating real-time GitHub data to make it truly stand out.

---

## Resources & Inspiration

**Portfolio Examples**:

- https://brittanychiang.com (Excellent interactions)
- https://jacekjeznach.com (Creative layout)
- https://bruno-simon.com (3D interactive)
- https://www.joshwcomeau.com (Teaching-focused)
- https://leerob.io (Clean, modern)

**Tools**:

- https://tailwindui.com (Premium Tailwind components)
- https://headlessui.com (Accessible UI components)
- https://icones.js.org (Icon search across sets)
- https://coolors.co (Color palette generator)
- https://github-readme-stats.vercel.app (GitHub stats API)

**Learning**:

- https://web.dev/patterns (Google's design patterns)
- https://dribbble.com/search/developer-portfolio (Design inspiration)
- https://awwwards.com/websites/portfolio (Award-winning portfolios)

---

**Document Version**: 1.0  
**Last Updated**: December 5, 2025
