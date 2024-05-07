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
    margin-bottom: 2rem;
}

.masthead-brand {
    margin-bottom: 0;
    font-family: 'pip-title' !important;
    font-size: 3em;
}

.nav {
    align-items: baseline;
}

.nav-masthead .nav-link {
    padding: .25rem 0;
    font-weight: 700;
    color: rgba(255, 255, 255, .5);
    font-size: 1.25em;
    background-color: transparent;
    border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
    color: white;
}

.nav-masthead .nav-link+.nav-link {
    margin-left: 1rem;
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

@media (min-width: 48em) {
    .masthead-brand {
        float: left;
    }

    .nav-masthead {
        float: right;
    }
}
</style>