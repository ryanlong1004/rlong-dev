<script setup>
import WeatherItem from "@/components/WeatherItem.vue"
const title = "rlong.dev"
</script>

<template>
    <header class="masthead mb-auto">
        <div class="inner">
            <h3 class="masthead-brand">{{ title }}</h3>
            <nav class="nav nav-masthead justify-content-center">
                <a title="Schedule time with Ryan" class="nav-link"
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HA-h8kiHIB8ocD3mX_7JlxFUYejBsGkq6C5OSISFQVrhMZvxn0ESlXoPRRKA35Ms1gINR4JfO"
                    target="_BLANK">
                    <h1><font-awesome-icon class="shimmy" icon="fa-regular fa-calendar-days" /></h1>
                </a>
                <a title="Github Profile" class="nav-link" href="https://github.com/ryanlong1004" target="_BLANK">
                    <h1><font-awesome-icon class="shimmy" icon="fa-brands fa-github" /></h1>
                </a>
                <a title="LinkedIn Profile" class="nav-link" href="https://www.linkedin.com/in/rlongdev/"
                    target="_BLANK">
                    <h1><font-awesome-icon class="shimmy" icon="fa-brands fa-linkedin" /></h1>
                </a>
                <a title="Resume" class="nav-link" href="/resume_ryan_long.pdf" target="_BLANK">
                    <h1><font-awesome-icon class="shimmy" icon="fa-solid fa-file-signature" /></h1>
                </a>
                <a title="Current Weather" class="nav-link" href="#">
                    <WeatherItem />
                </a>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.masthead {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 100%);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(16, 185, 129, 0.3);
    padding: 0.3rem 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    overflow: visible;
}

.masthead .inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.masthead-brand {
    margin-bottom: 0;
    font-family: 'pip-title' !important;
    font-size: 1.3em;
    line-height: 1;
    color: #fff;
    text-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
}

.masthead-brand:hover {
    color: rgb(16, 185, 129);
    text-shadow: 0 2px 12px rgba(16, 185, 129, 0.6);
}

.nav {
    align-items: center;
    margin: 0;
    gap: 0.25rem;
}

.nav-masthead .nav-link {
    padding: 0.3rem 0.5rem;
    font-weight: 700;
    color: rgba(255, 255, 255, .6);
    font-size: 1em;
    background-color: transparent;
    border-radius: 6px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-masthead .nav-link::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px;
    background: rgba(16, 185, 129, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.nav-masthead .nav-link:hover::before {
    opacity: 1;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
    color: white;
    transform: translateY(-2px);
}

.nav-masthead .nav-link h1 {
    margin: 0;
    font-size: 1em;
}

.nav-masthead .active {
    color: #fff;
}

.shimmy {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.shimmy:hover {
    color: rgb(16, 185, 129);
    transform: scale(1.15) rotate(-5deg);
    filter: drop-shadow(0 4px 8px rgba(16, 185, 129, 0.4));
}

@media (max-width: 48em) {
    .masthead {
        padding: 0.4rem 0;
    }

    .masthead .inner {
        flex-direction: column;
        gap: 0.6rem;
        padding: 0 1rem;
    }

    .masthead-brand {
        font-size: 1.3em;
    }

    .nav-masthead .nav-link {
        font-size: 0.95em;
        padding: 0.3rem 0.5rem;
    }
}

@media (min-width: 48em) {
    .masthead-brand {
        float: none;
    }

    .nav-masthead {
        float: none;
    }
}
</style>