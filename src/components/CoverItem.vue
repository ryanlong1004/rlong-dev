<script setup>
import HeaderItem from "@/components/HeaderItem.vue"
import FooterItem from "@/components/FooterItem.vue"

const url = "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0HA-h8kiHIB8ocD3mX_7JlxFUYejBsGkq6C5OSISFQVrhMZvxn0ESlXoPRRKA35Ms1gINR4JfO"

const coverHeading = `Hi, I'm Ryan. I solve problems with software and technology.`

const content = `
Discover innovative solutions tailored to your needs with your local software development expert.
`
</script>

<template>
    <div class="bg">
        <div class="cover d-flex h-100 flex-column">
            <HeaderItem />
            <h1 class="cover-heading">{{ coverHeading }}</h1>
            <p class="lead">{{ content }}</p>
            <p class="lead">
                <a :href="url" target="_BLANK" class="btn btn-lg btn-secondary">Lets Chat</a>
            </p>
            <FooterItem />
        </div>
    </div>
</template>

<style scoped>
/*
 * Cover
 */

.cover {
    padding: 0 20rem;
}

.bg {
    display: block;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
}

.cover .btn-lg {
    padding: .75rem 1.25rem;
    font-weight: 700;
}
</style>