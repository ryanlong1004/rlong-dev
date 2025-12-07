<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation';

const { isVisible, targetRef } = useScrollAnimation(0.2);

const techStack = [
    {
        capability: '🌐 Frontend Engineering',
        skills: ['Vue.js', 'React', 'Svelte', 'Tailwind', 'Bootstrap', 'HTML5', 'CSS3']
    },
    {
        capability: '⚙️ Backend Engineering',
        skills: ['FastAPI', 'Flask', 'Django', 'Node.js', 'Symfony', 'PHP']
    },
    {
        capability: '💻 Core Languages',
        skills: ['Python', 'JavaScript', 'TypeScript', 'Golang', 'Bash', 'Shell']
    },
    {
        capability: '☁️ DevOps & Platform',
        skills: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'GitLab CI', 'AWS', 'Netlify', 'DigitalOcean']
    },
    {
        capability: '🗃️ Data & Storage',
        skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLAlchemy', 'Alembic']
    },
    {
        capability: '🔄 Integration & APIs',
        skills: ['REST API', 'Twilio', 'Spotify API', 'OAuth2', 'Webhooks', 'Celery']
    },
    {
        capability: '🛠️ Tools & Systems',
        skills: ['Git', 'Linux', 'Nginx', 'RabbitMQ', 'Raspberry Pi', 'Pydantic']
    }
];
</script>

<template>
    <section id="tech-stack" class="tech-stack-section" ref="targetRef">
        <div class="container" :class="{ 'fade-in': isVisible }">
            <h2 class="section-title">Tech Stack</h2>
            <p class="section-subtitle">
                Technologies and tools I work with to build scalable, modern applications
            </p>

            <div class="capabilities-grid">
                <div v-for="group in techStack" :key="group.capability" class="capability-group">
                    <h3 class="capability-title">{{ group.capability }}</h3>
                    <div class="tech-grid">
                        <span v-for="skill in group.skills" :key="skill" class="tech-badge">
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.tech-stack-section {
    padding: 3rem 2rem;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.container.fade-in {
    opacity: 1;
    transform: translateY(0);
}

.section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5rem;
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

.section-subtitle {
    text-align: center;
    color: rgba(241, 245, 249, 0.7);
    font-size: 1.125rem;
    margin: 1.5rem auto 2rem;
    max-width: 600px;
    line-height: 1.6;
}

.capabilities-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.capability-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.capability-title {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(241, 245, 249, 0.9);
    letter-spacing: 0.01em;
}

.tech-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: flex-start;
}

.tech-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 0.875rem;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 6px;
    color: rgba(241, 245, 249, 0.9);
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: default;
    white-space: nowrap;
}

.tech-badge:hover {
    background: rgba(16, 185, 129, 0.2);
    color: #fff;
}

@media (max-width: 768px) {
    .tech-stack-section {
        padding: 2rem 1.5rem;
    }

    .capabilities-grid {
        gap: 1.5rem;
    }

    .capability-group {
        gap: 0.5rem;
    }

    .tech-grid {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        gap: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .tech-grid::-webkit-scrollbar {
        display: none;
    }

    .tech-badge {
        flex-shrink: 0;
        padding: 0.5rem 0.75rem;
        font-size: 0.8125rem;
        white-space: nowrap;
    }
}
</style>
