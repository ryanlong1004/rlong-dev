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

            <!-- Contribution Graph Placeholder -->
            <div class="contribution-section">
                <h3 class="subsection-title">Contribution Activity</h3>
                <a :href="`https://github.com/ryanlong1004`" target="_blank" class="contribution-graph">
                    <div class="graph-placeholder">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="github-icon">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <div class="graph-text">
                            <p class="graph-message">View full contribution graph on GitHub</p>
                            <p class="graph-hint">Click to see detailed activity →</p>
                        </div>
                    </div>
                </a>
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
    min-height: 700px;
    padding: 6rem 2rem;
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
    margin-bottom: 3rem;
}

.github-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 4rem;
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
    margin-bottom: 4rem;
}

.subsection-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1.5rem;
    text-align: center;
}

.contribution-graph {
    display: block;
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 1rem;
    padding: 3rem;
    transition: all 0.3s ease;
    text-decoration: none;
    color: inherit;
}

.contribution-graph:hover {
    border-color: rgb(16, 185, 129);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
    transform: translateY(-4px);
}

.graph-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
}

.github-icon {
    width: 64px;
    height: 64px;
    color: rgba(16, 185, 129, 0.8);
}

.graph-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.graph-message {
    font-size: 1.25rem;
    font-weight: 600;
    color: #fff;
    margin: 0;
}

.graph-hint {
    font-size: 0.875rem;
    color: rgba(241, 245, 249, 0.6);
    margin: 0;
}

.repos-section {
    margin-top: 4rem;
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
        padding: 4rem 1.5rem;
    }

    .repos-grid {
        grid-template-columns: 1fr;
    }

    .github-stats {
        gap: 2rem;
    }

    .contribution-graph {
        padding: 2rem 1rem;
    }
}
</style>
