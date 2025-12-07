<template>
    <footer class="footer">
        <div class="footer-container">
            <!-- Spotify Now Playing -->
            <div class="spotify-section">
                <SpotifyCard />
            </div>

            <div class="footer-content">
                <!-- Brand Section -->
                <div class="footer-section">
                    <h3 class="footer-brand">rlong.dev</h3>
                    <p class="footer-tagline">Building elegant solutions with modern technology</p>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#github">GitHub</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>

                <!-- Connect -->
                <div class="footer-section">
                    <h4 class="footer-heading">Connect</h4>
                    <div class="footer-social">
                        <a href="https://github.com/ryanlong1004" target="_blank" rel="noopener noreferrer"
                            title="GitHub">
                            <font-awesome-icon icon="fa-brands fa-github" />
                        </a>
                        <a href="https://www.linkedin.com/in/rlongdev/" target="_blank" rel="noopener noreferrer"
                            title="LinkedIn">
                            <font-awesome-icon icon="fa-brands fa-linkedin" />
                        </a>
                        <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HA-h8kiHIB8ocD3mX_7JlxFUYejBsGkq6C5OSISFQVrhMZvxn0ESlXoPRRKA35Ms1gINR4JfO"
                            target="_blank" rel="noopener noreferrer" title="Schedule a Call">
                            <font-awesome-icon icon="fa-regular fa-calendar-days" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <p>&copy; {{ new Date().getFullYear() }} Ryan Long. All rights reserved.</p>
                <button @click="scrollToTop" class="scroll-to-top" title="Back to top">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </button>
            </div>
        </div>
    </footer>
</template>

<script setup>
import SpotifyCard from '@/components/ui/SpotifyCard.vue';

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
.footer {
    background: linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 15, 30, 0.98) 100%);
    border-top: 1px solid rgba(16, 185, 129, 0.2);
    padding: 3rem 2rem 1.5rem;
    color: rgba(241, 245, 249, 0.8);
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
}

.spotify-section {
    max-width: 700px;
    margin: 0 auto 3rem;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(51, 65, 85, 0.5);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-bottom: 2.5rem;
}

.footer-section h3,
.footer-section h4 {
    margin: 0 0 1rem 0;
}

.footer-brand {
    font-family: 'pip-title', serif;
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.5rem;
}

.footer-tagline {
    color: rgba(241, 245, 249, 0.6);
    font-size: 0.9375rem;
    line-height: 1.6;
}

.footer-heading {
    font-size: 1.125rem;
    font-weight: 600;
    color: rgb(16, 185, 129);
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-links li {
    margin-bottom: 0.75rem;
}

.footer-links a {
    color: rgba(241, 245, 249, 0.7);
    text-decoration: none;
    font-size: 0.9375rem;
    transition: all 0.3s ease;
    display: inline-block;
}

.footer-links a:hover {
    color: rgb(16, 185, 129);
    transform: translateX(4px);
}

.footer-social {
    display: flex;
    gap: 1rem;
}

.footer-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(30, 41, 59, 0.6);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: 8px;
    color: rgba(241, 245, 249, 0.7);
    font-size: 1.25rem;
    transition: all 0.3s ease;
}

.footer-social a:hover {
    background: rgba(16, 185, 129, 0.15);
    border-color: rgb(16, 185, 129);
    color: rgb(16, 185, 129);
    transform: translateY(-3px);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(51, 65, 85, 0.5);
    font-size: 0.875rem;
    color: rgba(241, 245, 249, 0.5);
}

.footer-bottom p {
    margin: 0;
}

.scroll-to-top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: 8px;
    color: rgb(16, 185, 129);
    cursor: pointer;
    transition: all 0.3s ease;
}

.scroll-to-top:hover {
    background: rgba(16, 185, 129, 0.2);
    border-color: rgb(16, 185, 129);
    transform: translateY(-3px);
}

@media (max-width: 768px) {
    .footer {
        padding: 2rem 1.5rem 1rem;
    }

    .spotify-section {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
    }

    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}
</style>