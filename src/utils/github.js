// Language colors matching GitHub's color scheme
export const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Vue: '#41b883',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
  Shell: '#89e051',
  HTML: '#e34c26',
  CSS: '#563d7c',
  PHP: '#4F5D95',
  Ruby: '#701516',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Svelte: '#ff3e00',
  Jupyter: '#DA5B0B',
  Dockerfile: '#384d54',
};

/**
 * Get color for a programming language
 * @param {string} language - Programming language name
 * @returns {string} Hex color code
 */
export function getLanguageColor(language) {
  return languageColors[language] || '#8b949e';
}

/**
 * Format relative time (e.g., "2 days ago")
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted relative time
 */
export function formatRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };
  
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);
    if (interval >= 1) {
      return `${interval} ${unit}${interval !== 1 ? 's' : ''} ago`;
    }
  }
  
  return 'just now';
}
