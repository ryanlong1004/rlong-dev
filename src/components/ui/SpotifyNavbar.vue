<script setup>
import { useSpotify } from '@/composables/useSpotify';

const { currentTrack, loading, error, isPlaying } = useSpotify();
</script>

<template>
    <div class="spotify-navbar">
        <!-- Loading State -->
        <div v-if="loading" class="spotify-state">
            <svg class="spotify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span class="status-text">Loading...</span>
        </div>

        <!-- Not Playing or Error -->
        <div v-else-if="!isPlaying || !currentTrack || error" class="spotify-state">
            <svg class="spotify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span class="status-text">Not playing</span>
        </div>

        <!-- Now Playing -->
        <a v-else :href="currentTrack.songUrl" target="_blank" rel="noopener noreferrer" class="spotify-playing">
            <svg class="spotify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <div class="track-compact">
                <span class="track-name">{{ currentTrack.name }}</span>
                <span class="separator">•</span>
                <span class="track-artist">{{ currentTrack.artist }}</span>
            </div>
            <div class="playing-indicator">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </a>
    </div>
</template>

<style scoped>
.spotify-navbar {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 0.75rem;
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(30, 215, 96, 0.3);
    border-radius: 20px;
    transition: all 0.3s ease;
}

.spotify-navbar:has(.spotify-playing:hover) {
    border-color: #1DB954;
    box-shadow: 0 4px 12px rgba(29, 185, 84, 0.2);
}

.spotify-state {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.spotify-playing {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
    width: 100%;
}

.spotify-icon {
    width: 20px;
    height: 20px;
    color: #1DB954;
    flex-shrink: 0;
}

.status-text {
    font-size: 0.8125rem;
    color: rgba(241, 245, 249, 0.7);
    white-space: nowrap;
}

.track-compact {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
    flex: 1;
}

.track-name {
    font-weight: 600;
    color: rgb(241, 245, 249);
    font-size: 0.8125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.separator {
    color: rgba(241, 245, 249, 0.4);
    font-size: 0.75rem;
    flex-shrink: 0;
}

.track-artist {
    color: rgba(241, 245, 249, 0.7);
    font-size: 0.8125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.playing-indicator {
    display: flex;
    align-items: flex-end;
    gap: 2px;
    height: 12px;
    flex-shrink: 0;
}

.bar {
    width: 2px;
    background: #1DB954;
    border-radius: 1px;
    animation: bounce 1.2s ease-in-out infinite;
}

.bar:nth-child(1) {
    animation-delay: 0s;
}

.bar:nth-child(2) {
    animation-delay: 0.2s;
}

.bar:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes bounce {

    0%,
    100% {
        height: 4px;
    }

    50% {
        height: 12px;
    }
}

@media (max-width: 768px) {
    .spotify-navbar {
        width: 100%;
        max-width: none;
    }

    .track-name,
    .track-artist {
        font-size: 0.75rem;
    }
}
</style>
