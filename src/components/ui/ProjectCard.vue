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
                        class="project-link">
                        <font-awesome-icon :icon="['fab', 'github']" />
                        <span>View Code</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-category">{{ project.category }}</span>
            </div>

            <p class="project-description">
                {{ featured ? project.longDescription || project.description : project.description }}
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
    background: rgb(30, 41, 59);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgb(51, 65, 85);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.project-card:hover {
    transform: translateY(-4px);
    border-color: rgb(16, 185, 129);
    box-shadow: 0 20px 25px -5px rgba(16, 185, 129, 0.1),
        0 10px 10px -5px rgba(16, 185, 129, 0.04);
}

.project-card.featured {
    border-color: rgb(16, 185, 129);
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
    transition: transform 0.3s ease;
}

.project-card:hover .project-image {
    transform: scale(1.05);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(15, 23, 42, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgb(16, 185, 129);
    color: rgb(15, 23, 42);
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
}

.project-link:hover {
    background: rgb(5, 150, 105);
    transform: translateY(-2px);
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
    color: rgb(203, 213, 225);
    line-height: 1.6;
    margin: 0;
    flex: 1;
}

.project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
}

.tech-tag {
    font-size: 0.875rem;
    color: rgb(148, 163, 184);
    background: rgb(51, 65, 85);
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
    border: 1px solid rgb(71, 85, 105);
    transition: all 0.2s ease;
}

.tech-tag:hover {
    color: rgb(16, 185, 129);
    border-color: rgb(16, 185, 129);
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
