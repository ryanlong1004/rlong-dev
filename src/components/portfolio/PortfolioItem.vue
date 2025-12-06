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
    link: "https://spot.weather.gov/"
}, {
    title: "Wasabi AIR",
    text: "Wasabi AIR is a cloud-based storage service provided by Wasabi, designed to offer fast, reliable, and cost-effective storage solutions. It focuses on delivering low-latency access to stored data, making it ideal for applications requiring frequent data retrieval. Wasabi AIR leverages Wasabi's hot cloud storage technology to provide scalable storage options, often at a lower cost than traditional cloud storage providers, without sacrificing performance or security.",
    imageLink: "https://wasabi.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1019449%2F811x613%2F173e91969b%2Fwasabi-air-ui-logo.png%2Fm%2F1024x0%2Ffilters%3Aquality(70)&w=1920&q=75",
    link: "https://wasabi.com/cloud-object-storage/wasabi-air"
}]

</script>

<template>
    <div id="projects" class="container-fluid">
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
    text-shadow: none !important;
}

.card-text,
.card-title {
    text-shadow: none !important;
}

.card-text {
    text-align: left;
    text-shadow: none !important
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .portfolio {
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>