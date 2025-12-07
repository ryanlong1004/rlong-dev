<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const { isVisible, targetRef } = useScrollAnimation(0.2);

const cards = [
    {
        icon: '🚀',
        title: 'What I Do',
        items: [
            'Full-stack web + API development',
            'Cloud infrastructure + automation',
            'Scalable, data-driven systems',
            'UX/UI design for modern apps'
        ]
    },
    {
        icon: '🧰',
        title: 'Tools I Use',
        items: [
            'Golang, Python, TypeScript',
            'Vue, React, Tailwind',
            'Docker, Kubernetes, Nomad',
            'AWS, Wasabi, DigitalOcean'
        ]
    },
    {
        icon: '💼',
        title: 'Experience',
        items: [
            'Built multi-tenant AI/ML systems',
            'Designed scalable infrastructure',
            'Led DevOps automation efforts',
            'Architected cloud-native solutions'
        ]
    }
];
</script>

<template>
    <section ref="targetRef" class="overview-section" :class="{ 'fade-in': isVisible }">
        <div class="container">
            <div class="cards-grid">
                <div v-for="card in cards" :key="card.title" class="overview-card">
                    <div class="card-icon">{{ card.icon }}</div>
                    <h3 class="card-title">{{ card.title }}</h3>
                    <ul class="card-list">
                        <li v-for="item in card.items" :key="item">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.overview-section {
    padding: 4rem 2rem;
    background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.overview-section.fade-in {
    opacity: 1;
    transform: translateY(0);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.overview-card {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
}

.overview-card:hover {
    border-color: #10b981;
    box-shadow: 0 8px 32px rgba(16, 185, 129, 0.15);
    transform: translateY(-4px);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    line-height: 1;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: rgb(241, 245, 249);
    margin-bottom: 1.5rem;
}

.card-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.card-list li {
    color: rgba(241, 245, 249, 0.8);
    font-size: 0.9375rem;
    line-height: 1.6;
    padding-left: 1.5rem;
    position: relative;
}

.card-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 6px;
    height: 6px;
    background: #10b981;
    border-radius: 50%;
}

@media (max-width: 768px) {
    .overview-section {
        padding: 3rem 1.5rem;
    }

    .cards-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .overview-card {
        padding: 1.5rem;
    }

    .card-icon {
        font-size: 2.5rem;
    }

    .card-title {
        font-size: 1.25rem;
    }

    .card-list li {
        font-size: 0.875rem;
    }
}
</style>
