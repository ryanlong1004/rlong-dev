<script setup>
import { getLanguageColor, formatRelativeTime } from '@/utils/github';

const props = defineProps({
    repo: {
        type: Object,
        required: true
    }
});

const languageColor = props.repo.language ? getLanguageColor(props.repo.language) : null;
</script>

<template>
    <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="repo-card">
        <div class="repo-header">
            <div class="repo-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path
                        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
                </svg>
            </div>
            <h3 class="repo-name">{{ repo.name }}</h3>
        </div>

        <p class="repo-description">
            {{ repo.description || 'No description provided' }}
        </p>

        <div class="repo-footer">
            <div class="repo-stats">
                <span v-if="repo.language" class="repo-language">
                    <span class="language-dot" :style="{ backgroundColor: languageColor }"></span>
                    {{ repo.language }}
                </span>
                <span v-if="repo.stargazers_count > 0" class="repo-stat">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path
                            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                    </svg>
                    {{ repo.stargazers_count }}
                </span>
                <span v-if="repo.forks_count > 0" class="repo-stat">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path
                            d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    </svg>
                    {{ repo.forks_count }}
                </span>
            </div>
            <span class="repo-updated">
                {{ formatRelativeTime(repo.updated_at) }}
            </span>
        </div>
    </a>
</template>

<style scoped>
.repo-card {
    display: flex;
    flex-direction: column;
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    color: inherit;
    height: 100%;
}

.repo-card:hover {
    transform: translateY(-8px);
    border-color: rgb(16, 185, 129);
    box-shadow: 0 10px 30px rgba(16, 185, 129, 0.2);
    background: rgba(30, 41, 59, 0.8);
}

.repo-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
}

.repo-icon {
    color: rgba(241, 245, 249, 0.5);
    flex-shrink: 0;
}

.repo-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: rgb(16, 185, 129);
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.repo-description {
    flex: 1;
    font-size: 0.875rem;
    color: rgba(241, 245, 249, 0.7);
    line-height: 1.6;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.repo-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-top: auto;
    font-size: 0.75rem;
    color: rgba(241, 245, 249, 0.6);
}

.repo-stats {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
}

.repo-language {
    display: flex;
    align-items: center;
    gap: 0.375rem;
}

.language-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.repo-stat {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.repo-stat svg {
    opacity: 0.7;
}

.repo-updated {
    white-space: nowrap;
}

@media (max-width: 640px) {
    .repo-card {
        padding: 1rem;
    }

    .repo-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}
</style>
