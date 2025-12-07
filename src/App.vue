<script setup>
import HeaderItem from "@/components/HeaderItem.vue"
import HeroSection from "@/components/sections/HeroSection.vue"
import OverviewSection from "@/components/sections/OverviewSection.vue"
import AboutSection from "@/components/sections/AboutSection.vue"
import TechStackSection from "@/components/sections/TechStackSection.vue"
import GitHubSection from "@/components/sections/GitHubSection.vue"
import ProjectsSection from "@/components/sections/ProjectsSection.vue"
import FooterItem from "@/components/FooterItem.vue"
</script>

<template>
    <div class="app-wrapper">
        <HeaderItem />
        <HeroSection />
        <OverviewSection />
        <AboutSection />
        <TechStackSection />
        <GitHubSection />
        <ProjectsSection />
        <FooterItem />
    </div>
</template>

<style>
.app-wrapper {
    min-height: 100vh;
}

/* Links */
a,
a:focus,
a:hover {
    color: #fff;
    text-decoration: none;
}

/* Utility classes */
.mr-2 {
    margin-right: 0.5rem;
}

.ml-2 {
    margin-left: 0.5rem;
}

.w-4 {
    width: 1rem;
}

.h-4 {
    height: 1rem;
}

.inline {
    display: inline;
}

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
    color: #333;
    text-shadow: none;
    background-color: #fff;
    border: .05rem solid #fff;
}
</style>
