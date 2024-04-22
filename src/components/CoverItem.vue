<script setup>

const url = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HA-h8kiHIB8ocD3mX_7JlxFUYejBsGkq6C5OSISFQVrhMZvxn0ESlXoPRRKA35Ms1gINR4JfO"

const coverHeading = `Hi, I'm Ryan. I solve problems with software and technology.`

const content = `
Discover innovative solutions tailored to your needs with your local software development expert.
`
</script>

<template>
    <main role="main" class="inner cover">
        <h1 class="cover-heading">{{ coverHeading }}</h1>
        <p class="lead">{{ content }}</p>
        <p class="lead">
            <a :href="url" target="_BLANK" class="btn btn-lg btn-secondary">Lets Chat</a>
        </p>
    </main>
</template>

<style scoped>
/*
 * Cover
 */
.cover {
    padding: 0 1.5rem;
}

.cover .btn-lg {
    padding: .75rem 1.25rem;
    font-weight: 700;
}
</style>