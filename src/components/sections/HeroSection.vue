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
        <div class="hero-background">
            <div class="grid-pattern"></div>
            <div class="gradient-orb orb-1"></div>
            <div class="gradient-orb orb-2"></div>
            <div class="gradient-orb orb-3"></div>
        </div>
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
    overflow: hidden;
    background: rgb(15, 23, 42);
}

.hero-background {
    position: absolute;
    inset: 0;
    z-index: 0;
}

.grid-pattern {
    position: absolute;
    inset: 0;
    background-image:
        linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(50px, 50px);
    }
}

.gradient-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
    animation: float 20s ease-in-out infinite;
}

.orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%);
    top: -250px;
    right: -200px;
    animation-delay: 0s;
}

.orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
    bottom: -150px;
    left: -150px;
    animation-delay: -7s;
}

.orb-3 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -14s;
}

@keyframes float {

    0%,
    100% {
        transform: translate(0, 0) scale(1);
    }

    25% {
        transform: translate(30px, -30px) scale(1.1);
    }

    50% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    75% {
        transform: translate(40px, 10px) scale(1.05);
    }
}

.hero-content {
    max-width: 800px;
    text-align: center;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
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
    color: rgb(15, 23, 42);
    box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);
    cursor: pointer;
}

.btn-primary:hover {
    background: rgb(5, 150, 105);
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.6);
}

.btn-secondary {
    background: transparent;
    color: rgb(16, 185, 129);
    border-color: rgb(16, 185, 129);
    cursor: pointer;
}

.btn-secondary:hover {
    background: rgb(16, 185, 129);
    color: rgb(15, 23, 42);
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.5);
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

    0%,
    100% {
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
