import { ref, onMounted } from 'vue';

const CACHE_KEY = 'spotify_now_playing';
const CACHE_DURATION = 60 * 1000; // 1 minute cache for current track

/**
 * Composable for fetching Spotify "Now Playing" data via Netlify function
 * @returns {Object} { currentTrack, loading, error, isPlaying, refetch }
 */
export function useSpotify() {
    const currentTrack = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const isPlaying = ref(false);

    const fetchNowPlaying = async () => {
        // Check cache first
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            try {
                const { data, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < CACHE_DURATION) {
                    currentTrack.value = data.track;
                    isPlaying.value = data.isPlaying;
                    loading.value = false;
                    return;
                }
            } catch (e) {
                localStorage.removeItem(CACHE_KEY);
            }
        }

        try {
            const response = await fetch('/.netlify/functions/spotify-now-playing');

            if (!response.ok) {
                throw new Error(`Spotify API error: ${response.status}`);
            }

            const data = await response.json();

            if (data.isPlaying) {
                currentTrack.value = {
                    name: data.title,
                    artist: data.artist,
                    album: data.album,
                    albumArt: data.albumImageUrl,
                    songUrl: data.songUrl
                };
                isPlaying.value = true;
            } else {
                currentTrack.value = null;
                isPlaying.value = false;
            }

            // Cache the result
            localStorage.setItem(CACHE_KEY, JSON.stringify({
                data: {
                    track: currentTrack.value,
                    isPlaying: isPlaying.value
                },
                timestamp: Date.now()
            }));
        } catch (err) {
            error.value = err.message;
            console.error('Spotify API Error:', err);
        } finally {
            loading.value = false;
        }
    };

    const refetch = () => {
        localStorage.removeItem(CACHE_KEY);
        loading.value = true;
        error.value = null;
        fetchNowPlaying();
    };

    onMounted(() => {
        fetchNowPlaying();
        // Auto-refresh every 30 seconds if playing
        const interval = setInterval(() => {
            if (isPlaying.value) {
                refetch();
            }
        }, 30000);

        // Cleanup on unmount
        return () => clearInterval(interval);
    });

    return { currentTrack, loading, error, isPlaying, refetch };
}
