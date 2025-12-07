<script setup>
import { ref } from 'vue'

const props = defineProps({
    project: {
        type: Object,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    }
})

const isHovered = ref(false)
</script>

<template>
    <article class="project-card" :class="{ 'featured': featured }" @mouseenter="isHovered = true"
        @mouseleave="isHovered = false">
        <div class="project-image-wrapper">
            <img :src="project.image" :alt="project.title" class="project-image" loading="lazy" />
            <div class="project-overlay">
                <div class="project-links">
                    <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer"
                        class="project-link">
                        <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                        <span>Live Demo</span>
                    </a>
                    <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer"
                        class="project-link project-link-secondary">
                        <font-awesome-icon :icon="['fab', 'github']" />
                        <span>View Code</span>
                    </a>
                    <div v-if="!project.demoUrl && !project.githubUrl" class="project-link project-link-disabled">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                        <span>Private Project</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-category">{{ project.category }}</span>
            </div>

            <p class="project-description">
                {{ project.description }}
            </p>

            <div class="project-technologies">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                </span>
            </div>
        </div>
    </article>
</template>

<style scoped>
.project-card {
    background: rgba(30, 41, 59, 0.4);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-8px);
    background: rgba(30, 41, 59, 0.8);
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
}

.project-image-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: rgb(15, 23, 42);
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: brightness(0.9);
}

.project-card:hover .project-image {
    transform: scale(1.08);
    filter: brightness(0.7);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 23, 42, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
    backdrop-filter: blur(8px);
}

.project-card:hover .project-overlay {
    opacity: 1;
    pointer-events: auto;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    background: rgb(16, 185, 129);
    color: rgb(15, 23, 42);
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9375rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.project-link:hover {
    background: rgb(5, 150, 105);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.project-link-secondary {
    background: rgb(51, 65, 85);
    color: rgb(241, 245, 249);
}

.project-link-secondary:hover {
    background: rgb(71, 85, 105);
}

.project-link-disabled {
    background: rgb(51, 65, 85);
    color: rgb(148, 163, 184);
    cursor: not-allowed;
    opacity: 0.6;
}

.project-content {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
}

.project-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: rgb(241, 245, 249);
    margin: 0;
}

.project-category {
    font-size: 0.75rem;
    color: rgb(16, 185, 129);
    background: rgba(16, 185, 129, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    white-space: nowrap;
}

.project-description {
    color: rgba(241, 245, 249, 0.85);
    line-height: 1.7;
    margin: 0;
    flex: 1;
    font-size: 0.9375rem;
}

.project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
}

.tech-tag {
    font-size: 0.8125rem;
    font-weight: 500;
    color: rgba(241, 245, 249, 0.9);
    background: rgba(16, 185, 129, 0.15);
    padding: 0.375rem 0.875rem;
    border-radius: 20px;
    transition: all 0.3s ease;
}

.tech-tag:hover {
    background: rgba(16, 185, 129, 0.25);
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .project-links {
        flex-direction: column;
    }

    .project-link {
        width: 100%;
        justify-content: center;
    }

    .project-header {
        flex-direction: column;
        gap: 0.5rem;
    }

    .project-category {
        align-self: flex-start;
    }
}
</style>
