import { ref, onMounted, onUnmounted } from 'vue';

/**
 * Composable for animating elements on scroll using Intersection Observer
 * @param {number} threshold - Percentage of element visibility to trigger (0-1)
 * @param {boolean} triggerOnce - Whether to trigger animation only once
 * @returns {Object} { isVisible, targetRef }
 */
export function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const isVisible = ref(false);
  const targetRef = ref(null);
  let observer = null;

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          if (triggerOnce && observer) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          isVisible.value = false;
        }
      },
      { threshold }
    );

    if (targetRef.value) {
      observer.observe(targetRef.value);
    }
  });

  onUnmounted(() => {
    if (observer) observer.disconnect();
  });

  return { isVisible, targetRef };
}
