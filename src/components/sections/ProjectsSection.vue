<script setup>
import { ref, computed } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects'

const { isVisible, targetRef } = useScrollAnimation()
const showAll = ref(false)

const featuredProjects = computed(() =>
    projects.filter(p => p.featured).slice(0, 3)
)

const displayedProjects = computed(() =>
    showAll.value ? projects : featuredProjects.value
)

const hasMoreProjects = computed(() =>
    projects.length > featuredProjects.value.length
)

const toggleProjects = () => {
    showAll.value = !showAll.value
}
</script>

<template>
    <section id="projects" class="projects-section">
        <div class="container">
            <div ref="targetRef" class="section-header" :class="{ 'animate': isVisible }">
                <h2 class="section-title">Featured Projects</h2>
                <p class="section-subtitle">
                    A curated collection of professional work spanning full-stack applications, cloud infrastructure,
                    and DevOps automation. Each project showcases problem-solving approaches and technical expertise
                    across different domains and technology stacks.
                </p>
            </div>

            <div class="projects-grid">
                <transition-group name="project-list">
                    <div v-for="project in displayedProjects" :key="project.id" class="project-item">
                        <ProjectCard :project="project" :featured="project.featured" />
                    </div>
                </transition-group>
            </div>

            <div v-if="hasMoreProjects" class="view-more-wrapper">
                <button @click="toggleProjects" class="view-more-btn">
                    <span>{{ showAll ? 'Show Less' : 'View All Projects' }}</span>
                    <font-awesome-icon :icon="['fas', showAll ? 'chevron-up' : 'chevron-down']" class="icon" />
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects-section {
    padding: 3rem 0;
    background: linear-gradient(135deg,
            rgb(15, 23, 42) 0%,
            rgb(30, 41, 59) 100%);
    position: relative;
}

.projects-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg,
            transparent,
            rgb(16, 185, 129),
            transparent);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section-header {
    text-align: center;
    margin-bottom: 2.5rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.section-header.animate {
    opacity: 1;
    transform: translateY(0);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(241, 245, 249);
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
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
    font-size: 1.125rem;
    color: rgb(148, 163, 184);
    max-width: 700px;
    margin: 1.5rem auto 0;
    line-height: 1.7;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 1.25rem;
    margin-bottom: 1.5rem;
}

.project-item {
    animation: fadeInUp 0.6s ease backwards;
}

.project-item:nth-child(1) {
    animation-delay: 0.1s;
}

.project-item:nth-child(2) {
    animation-delay: 0.2s;
}

.project-item:nth-child(3) {
    animation-delay: 0.3s;
}

.view-more-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.view-more-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: transparent;
    color: rgb(16, 185, 129);
    border: 2px solid rgb(16, 185, 129);
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.view-more-btn:hover {
    background: rgb(16, 185, 129);
    color: rgb(15, 23, 42);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
}

.view-more-btn .icon {
    transition: transform 0.3s ease;
}

.view-more-btn:hover .icon {
    transform: translateY(2px);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.project-list-enter-active,
.project-list-leave-active {
    transition: all 0.3s ease;
}

.project-list-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.project-list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

@media (max-width: 768px) {
    .projects-section {
        padding: 1.5rem 0;
    }

    .container {
        padding: 0 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .section-subtitle {
        font-size: 1rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .view-more-btn {
        width: 100%;
        justify-content: center;
    }
}

@media (prefers-reduced-motion: reduce) {

    .section-header,
    .project-item {
        animation: none;
        transition: none;
    }
}
</style>
