import { ref, onMounted } from 'vue';

const CACHE_KEY = 'github_repos';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

/**
 * Composable for fetching GitHub user data
 * @param {string} username - GitHub username
 * @returns {Object} { repos, user, loading, error, refetch }
 */
export function useGitHub(username = 'ryanlong1004') {
  const repos = ref([]);
  const user = ref(null);
  const loading = ref(true);
  const error = ref(null);

  const fetchRepos = async () => {
    // Check cache first
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          repos.value = data;
          loading.value = false;
          return;
        }
      } catch (e) {
        // Invalid cache, continue to fetch
        localStorage.removeItem(CACHE_KEY);
      }
    }

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
      );
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const data = await response.json();
      repos.value = data;
      
      // Cache the result
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
    } catch (err) {
      error.value = err.message;
      console.error('GitHub API Error:', err);
    } finally {
      loading.value = false;
    }
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        user.value = await response.json();
      }
    } catch (err) {
      console.error('GitHub User API Error:', err);
    }
  };

  const refetch = () => {
    localStorage.removeItem(CACHE_KEY);
    loading.value = true;
    error.value = null;
    fetchRepos();
  };

  onMounted(() => {
    fetchRepos();
    fetchUser();
  });

  return { repos, user, loading, error, refetch };
}
