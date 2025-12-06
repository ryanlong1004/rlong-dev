<script setup>
import { useSpotify } from '@/composables/useSpotify';

const { currentTrack, loading, error, isPlaying } = useSpotify();
</script>

<template>
    <div class="spotify-card">
        <div class="spotify-header">
            <svg class="spotify-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span class="spotify-title">Currently Listening</span>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="spotify-loading">
            <div class="pulse"></div>
            <span>Fetching track...</span>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="spotify-error">
            <span>Unable to load Spotify data</span>
        </div>

        <!-- Not Playing -->
        <div v-else-if="!isPlaying || !currentTrack" class="spotify-idle">
            <svg class="idle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="8" y1="12" x2="16" y2="12" />
            </svg>
            <span>Not listening right now</span>
        </div>

        <!-- Now Playing -->
        <a v-else :href="currentTrack.songUrl" target="_blank" rel="noopener noreferrer" class="spotify-track">
            <img :src="currentTrack.albumArt" :alt="currentTrack.album" class="album-art" />
            <div class="track-info">
                <div class="track-name">{{ currentTrack.name }}</div>
                <div class="track-artist">{{ currentTrack.artist }}</div>
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
.spotify-card {
    background: rgba(30, 41, 59, 0.6);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(30, 215, 96, 0.3);
    border-radius: 12px;
    padding: 1.25rem;
    transition: all 0.3s ease;
}

.spotify-card:has(.spotify-track:hover) {
    border-color: #1DB954;
    box-shadow: 0 8px 24px rgba(29, 185, 84, 0.2);
    transform: translateY(-2px);
}

.spotify-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.spotify-icon {
    width: 24px;
    height: 24px;
    color: #1DB954;
}

.spotify-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: rgba(241, 245, 249, 0.9);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.spotify-loading,
.spotify-error,
.spotify-idle {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    color: rgba(241, 245, 249, 0.6);
    font-size: 0.875rem;
}

.pulse {
    width: 8px;
    height: 8px;
    background: #1DB954;
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.5;
        transform: scale(1.2);
    }
}

.idle-icon {
    width: 20px;
    height: 20px;
    color: rgba(241, 245, 249, 0.4);
}

.spotify-track {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
    padding: 0.5rem;
    border-radius: 8px;
    transition: background 0.2s ease;
}

.spotify-track:hover {
    background: rgba(29, 185, 84, 0.05);
}

.album-art {
    width: 56px;
    height: 56px;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.track-info {
    flex: 1;
    min-width: 0;
}

.track-name {
    font-weight: 600;
    color: rgb(241, 245, 249);
    font-size: 0.9375rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.25rem;
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
    gap: 3px;
    height: 16px;
}

.bar {
    width: 3px;
    background: #1DB954;
    border-radius: 2px;
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
        height: 6px;
    }

    50% {
        height: 16px;
    }
}

@media (max-width: 768px) {
    .spotify-card {
        padding: 1rem;
    }

    .album-art {
        width: 48px;
        height: 48px;
    }

    .track-name {
        font-size: 0.875rem;
    }

    .track-artist {
        font-size: 0.75rem;
    }
}
</style>
