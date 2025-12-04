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
/*
 * Header
 */
.masthead {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(51, 51, 51, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: visible;
}

.masthead .inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.masthead-brand {
    margin-bottom: 0;
    font-family: 'pip-title' !important;
    font-size: 2em;
    line-height: 1;
}

.nav {
    align-items: center;
    margin: 0;
}

.nav-masthead .nav-link {
    padding: 0.5rem 0.75rem;
    font-weight: 700;
    color: rgba(255, 255, 255, .5);
    font-size: 1.25em;
    background-color: transparent;
    border-bottom: .25rem solid transparent;
    transition: all 0.2s ease;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
    color: white;
}

.nav-masthead .nav-link h1 {
    margin: 0;
    font-size: 1em;
}

.nav-masthead .nav-link+.nav-link {
    margin-left: 0.5rem;
}

.nav-masthead .active {
    color: #fff;
    border-bottom-color: #fff;
}

.shimmy:hover {
    color: rgb(107, 209, 11);
    transform:
        perspective(1000px) rotateX(14deg) rotateY(6deg) rotateZ(24deg);
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

@media (max-width: 48em) {
    .masthead .inner {
        flex-direction: column;
        gap: 1rem;
        padding: 0 1rem;
    }

    .masthead-brand {
        font-size: 1.5em;
    }

    .nav-masthead .nav-link {
        font-size: 1em;
        padding: 0.5rem;
    }

    .nav-masthead .nav-link+.nav-link {
        margin-left: 0.25rem;
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