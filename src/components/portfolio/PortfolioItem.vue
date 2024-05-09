<script setup>
import ProjectItem from './ProjectItem.vue';

import img_spot from '@/assets/images/portfolio/spot.png'
import img_samtube from '@/assets/images/portfolio/sam-tube-ss.png'

const data = [{
    title: "SamTube",
    text: "An application I built for my son to curate his favorite YouTube videos and share them with his teachers.",
    technologies: "Svelte, HTML, JavaScript, YouTube API, CSS, Netlify, Bootstrap",
    link: "https://sam-tube.netlify.app/",
    imageLink: img_samtube
}, {
    title: "Spot Network",
    text: "An application to create communication between first responders, meteorologiests and the public.",
    technologies: "PHP, Symfony, Python, VueJS",
    imageLink: img_spot,
    link: "https://www.weather.gov/spot/"
}]

</script>

<template>
    <div class="container-fluid">
        <div class="portfolio">
            <div v-for="item in data" :key="item.title">
                <ProjectItem :data="item" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.portfolio {
    padding: 1em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: #333333;
    width: 80vw;
}

.item {
    display: flex;
    max-width: 20vw;
}

.card-text,
.card-title {
    text-shadow: none;
}

.card-text {
    text-align: left;
}
</style>