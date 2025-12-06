<script setup>
import HeaderItem from '@/components/HeaderItem.vue';

const url = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HA-h8kiHIB8ocD3mX_7JlxFUYejBsGkq6C5OSISFQVrhMZvxn0ESlXoPRRKA35Ms1gINR4JfO"

const coverHeading = `Hi, I'm Ryan. I solve problems with software and technology.`

const content = `
Discover innovative solutions tailored to your needs with your local software development expert.
`
</script>

<template>
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <HeaderItem />
        <div class="wrapper" style="padding-top: 50px;">
            <main role="main" class="inner cover">
                <h1 class="cover-heading">{{ coverHeading }}</h1>
                <p class="lead">{{ content }}</p>
                <p class="lead">
                    <a :href="url" target="_BLANK" class="btn btn-lg btn-secondary">Lets Chat</a>
                </p>
            </main>
        </div>
    </div>
</template>

<style scoped>
/*
 * Cover
 */
.wrapper {
    min-height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cover {
    padding: 0 1.5rem;
}

.cover .btn-lg {
    padding: .75rem 1.25rem;
    font-weight: 700;
}

.cover-container {
    max-width: 42em;
}
</style>