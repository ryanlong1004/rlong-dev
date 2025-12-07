<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation';
import { useGitHub } from '@/composables/useGitHub';
import RepoCard from '@/components/ui/RepoCard.vue';

const { isVisible, targetRef } = useScrollAnimation(0.2);
const { repos, user, loading, error } = useGitHub();
</script>

<template>
    <section id="github" class="github-section" ref="targetRef">
        <div class="github-container" :class="{ 'fade-in': isVisible }">
            <h2 class="section-title">Recent Work</h2>
            <p class="section-subtitle">Latest activity from my GitHub</p>

            <!-- GitHub Stats -->
            <div v-if="user" class="github-stats">
                <div class="stat-item">
                    <span class="stat-number">{{ user.public_repos }}</span>
                    <span class="stat-label">Public Repos</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">{{ user.followers }}</span>
                    <span class="stat-label">Followers</span>
                </div>
                <div class="stat-item">
                    <span class="stat-number">{{ user.following }}</span>
                    <span class="stat-label">Following</span>
                </div>
            </div>

            <!-- Contribution Graph -->
            <div class="contribution-section">
                <h3 class="subsection-title">Contribution Activity</h3>
                <div class="contribution-wrapper">
                    <img src="https://ghchart.rshah.org/10b981/ryanlong1004" alt="GitHub Contribution Chart"
                        class="contribution-chart" />
                    <a href="https://github.com/ryanlong1004" target="_blank" rel="noopener noreferrer"
                        class="github-profile-link">
                        <font-awesome-icon :icon="['fab', 'github']" class="github-icon" />
                        <span>View Full Profile on GitHub</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path
                                d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z" />
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Recent Repositories -->
            <div class="repos-section">
                <h3 class="subsection-title">Recent Repositories</h3>

                <!-- Loading State -->
                <div v-if="loading" class="loading-state">
                    <div class="spinner"></div>
                    <p>Loading repositories...</p>
                </div>

                <!-- Error State -->
                <div v-else-if="error" class="error-state">
                    <p>⚠️ {{ error }}</p>
                    <p class="error-hint">GitHub API rate limit may have been exceeded. Try again later.</p>
                </div>

                <!-- Repos Grid -->
                <div v-else-if="repos.length > 0" class="repos-grid">
                    <RepoCard v-for="repo in repos" :key="repo.id" :repo="repo" />
                </div>

                <!-- Empty State -->
                <div v-else class="empty-state">
                    <p>No repositories found</p>
                </div>

                <!-- View All Link -->
                <div class="view-all">
                    <a href="https://github.com/ryanlong1004?tab=repositories" target="_blank" class="view-all-link">
                        View All Repositories on GitHub
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path
                                d="M3.75 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 013.75 2zm8.5 0a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5a.75.75 0 01.75-.75zm-4.25 0a.75.75 0 01.75.75v11.5a.75.75 0 01-1.5 0V2.75a.75.75 0 01.75-.75z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.github-section {
    padding: 4rem 2rem;
    background: linear-gradient(180deg,
            rgba(30, 41, 59, 0.98) 0%,
            rgba(15, 23, 42, 0.95) 100%);
}

.github-container {
    max-width: 1200px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.github-container.fade-in {
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
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.github-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 2.5rem;
    flex-wrap: wrap;
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 800;
    color: rgb(16, 185, 129);
}

.stat-label {
    font-size: 0.875rem;
    color: rgba(241, 245, 249, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.contribution-section {
    margin-bottom: 2.5rem;
}

.subsection-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1.5rem;
    text-align: center;
}

.contribution-wrapper {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease;
}

.contribution-wrapper:hover {
    border-color: rgb(16, 185, 129);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
}

.contribution-chart {
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 8px;
    background: rgba(15, 23, 42, 0.8);
    padding: 1rem;
}

.github-profile-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: rgb(16, 185, 129);
    text-decoration: none;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: 2px solid rgba(16, 185, 129, 0.3);
    border-radius: 8px;
    transition: all 0.3s ease;
}

.github-profile-link:hover {
    border-color: rgb(16, 185, 129);
    background: rgba(16, 185, 129, 0.1);
    transform: translateY(-2px);
}

.github-icon {
    font-size: 1.25rem;
}

.repos-section {
    margin-top: 2.5rem;
}

.repos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.loading-state,
.error-state,
.empty-state {
    text-align: center;
    padding: 3rem;
    color: rgba(241, 245, 249, 0.7);
}

.spinner {
    width: 40px;
    height: 40px;
    margin: 0 auto 1rem;
    border: 4px solid rgba(16, 185, 129, 0.2);
    border-top-color: rgb(16, 185, 129);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.error-state {
    color: #f87171;
}

.error-hint {
    font-size: 0.875rem;
    color: rgba(241, 245, 249, 0.5);
    margin-top: 0.5rem;
}

.view-all {
    text-align: center;
    margin-top: 2rem;
}

.view-all-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: rgb(16, 185, 129);
    font-weight: 600;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border: 2px solid rgb(16, 185, 129);
    border-radius: 0.5rem;
    transition: all 0.3s ease;
}

.view-all-link:hover {
    background: rgba(16, 185, 129, 0.1);
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .github-section {
        padding: 3rem 1.5rem;
    }

    .repos-grid {
        grid-template-columns: 1fr;
    }

    .github-stats {
        gap: 2rem;
    }

    .contribution-wrapper {
        padding: 1.5rem 1rem;
    }

    .contribution-chart {
        padding: 0.5rem;
    }

    .github-profile-link {
        font-size: 0.875rem;
        padding: 0.625rem 1.25rem;
    }
}
</style>
