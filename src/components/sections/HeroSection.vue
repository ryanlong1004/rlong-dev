<script setup>
import { ref } from 'vue';
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const { isVisible, targetRef } = useScrollAnimation(0.2);

const calendarUrl = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HA-h8kiHIB8ocD3mX_7JlxFUYejBsGkq6C5OSISFQVrhMZvxn0ESlXoPRRKA35Ms1gINR4JfO";

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <section id="hero" class="hero-section" ref="targetRef">
    <div class="hero-content" :class="{ 'fade-in': isVisible }">
      <h1 class="hero-title">Ryan Long</h1>
      <p class="hero-tagline">
        <span class="tagline-text">Software Engineer • Problem Solver • Tech Enthusiast</span>
      </p>
      <p class="hero-description">
        Transforming complex challenges into elegant solutions with modern technology and creative thinking.
      </p>
      <div class="hero-cta">
        <a :href="calendarUrl" target="_blank" class="btn-primary">
          <font-awesome-icon icon="fa-regular fa-calendar-days" class="mr-2" />
          Schedule a Call
        </a>
        <button @click="scrollToProjects" class="btn-secondary">
          View My Work
          <svg class="ml-2 w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div class="scroll-indicator">
        <svg class="scroll-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 2rem;
  background: linear-gradient(135deg, 
    rgba(15, 23, 42, 0.95) 0%, 
    rgba(30, 41, 59, 0.9) 50%, 
    rgba(15, 23, 42, 0.95) 100%);
}

.hero-content {
  max-width: 800px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-content.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.hero-title {
  font-family: 'pip-title', serif;
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 0%, rgb(16, 185, 129) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
  letter-spacing: -0.02em;
}

.hero-tagline {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: rgba(241, 245, 249, 0.9);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.tagline-text {
  display: inline-block;
  position: relative;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(241, 245, 249, 0.7);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 4rem;
}

.btn-primary,
.btn-secondary {
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border: 2px solid transparent;
}

.btn-primary {
  background: rgb(16, 185, 129);
  color: #0f172a;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
}

.btn-primary:hover {
  background: rgb(5, 150, 105);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.6);
}

.btn-secondary {
  background: transparent;
  color: rgb(16, 185, 129);
  border-color: rgb(16, 185, 129);
}

.btn-secondary:hover {
  background: rgba(16, 185, 129, 0.1);
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.2);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 32px;
  height: 32px;
  color: rgba(16, 185, 129, 0.6);
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 0 1rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-indicator {
    animation: none;
  }
}
</style>
