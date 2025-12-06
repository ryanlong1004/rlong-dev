<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const { isVisible, targetRef } = useScrollAnimation(0.3);

const bio = {
    intro: "I'm a software engineer passionate about building scalable, user-focused applications that solve real-world problems. With expertise spanning full-stack development, DevOps, and cloud architecture, I transform complex technical challenges into elegant solutions.",
    focus: "My work focuses on creating maintainable, performant systems while staying at the forefront of emerging technologies and best practices.",
};

const stats = [
    {
        value: '5+',
        label: 'Years Experience',
        icon: 'fa-solid fa-code'
    },
    {
        value: '50+',
        label: 'Projects Completed',
        icon: 'fa-solid fa-laptop-code'
    },
    {
        value: '1000+',
        label: 'GitHub Contributions',
        icon: 'fa-brands fa-github'
    },
    {
        value: '20+',
        label: 'Technologies',
        icon: 'fa-solid fa-wrench'
    },
];
</script>

<template>
    <section id="about" class="about-section" ref="targetRef">
        <div class="about-container" :class="{ 'fade-in': isVisible }">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <p class="bio-text">{{ bio.intro }}</p>
                <p class="bio-text">{{ bio.focus }}</p>
            </div>
            <div class="stats-grid">
                <div v-for="stat in stats" :key="stat.label" class="stat-card">
                    <font-awesome-icon :icon="stat.icon" class="stat-icon" />
                    <div class="stat-value">{{ stat.value }}</div>
                    <div class="stat-label">{{ stat.label }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-section {
    min-height: 400px;
    padding: 6rem 2rem;
    background: linear-gradient(180deg,
            rgba(15, 23, 42, 0.95) 0%,
            rgba(30, 41, 59, 0.98) 100%);
}

.about-container {
    max-width: 900px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-container.fade-in {
    opacity: 1;
    transform: translateY(0);
}

.section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 2.5rem;
    color: #fff;
    position: relative;
    display: inline-block;
    width: 100%;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg,
            transparent 0%,
            rgb(16, 185, 129) 50%,
            transparent 100%);
    border-radius: 2px;
}

.about-content {
    margin-bottom: 3rem;
}

.bio-text {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.8;
    color: rgba(241, 245, 249, 0.85);
    margin-bottom: 1.25rem;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
}

.stat-card {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg,
            transparent 0%,
            rgb(16, 185, 129) 50%,
            transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-8px);
    border-color: rgb(16, 185, 129);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
}

.stat-card:hover::before {
    opacity: 1;
}

.stat-icon {
    font-size: 2rem;
    color: rgb(16, 185, 129);
    margin-bottom: 1rem;
}

.stat-value {
    font-size: 2.5rem;
    font-weight: 800;
    color: #fff;
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
}

.stat-label {
    font-size: 0.875rem;
    color: rgba(241, 245, 249, 0.7);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

@media (max-width: 768px) {
    .about-section {
        padding: 4rem 1.5rem;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    .stat-card {
        padding: 1.5rem 1rem;
    }

    .stat-value {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
}
</style>
