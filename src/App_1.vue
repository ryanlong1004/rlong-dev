<script setup>
import HeaderItem from "@/components/HeaderItem.vue"
import CoverItem from "@/components/CoverItem.vue"
import FooterItem from "@/components/FooterItem.vue"
import CardItem from "@/components/Longevity/CardItem.vue"

</script>

<template>
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <HeaderItem />
        <CoverItem />
        <FooterItem />
        <!-- <CardItem /> -->
    </div>
</template>

<style>
/*
 * Globals
 */

/* Links */
a,
a:focus,
a:hover {
    color: #fff;
}

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
    color: #333;
    text-shadow: none;
    /* Prevent inheritance from `body` */
    background-color: #fff;
    border: .05rem solid #fff;
}

.cover-container {
    max-width: 42em;
}
</style>
