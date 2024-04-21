<script setup>
import HeaderItem from "@/components/HeaderItem.vue"
import CoverItem from "@/components/CoverItem.vue"
import FooterItem from "@/components/FooterItem.vue"
import CardItem from "@/components/Longevity/CardItem.vue"

</script>

<template>
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <img src="@/assets/images/dog1.png" class="img-thumbnail photo" alt="dog">
        <HeaderItem />
        <CoverItem />
        <FooterItem />
        <CardItem />
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

.photo {
    position: fixed;
    height: 15vh;
    right: 10vw;
    bottom: 10vh;
    transform:
        perspective(1000px) rotateX(14deg) rotateY(6deg) rotateZ(24deg);
    box-shadow: 24px 16px 64px 0 rgba(0, 0, 0, 0.08);
    border-radius: 2px;
}

.photo:hover {
    transform:
        perspective(1000px) rotateX(14deg) rotateY(6deg) rotateZ(24deg);
    box-shadow: 0px 0px 5px 5px #29a6d5;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
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

.glow {
    text-shadow: 0px 0px 25px #29a6d5;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
}

.cover-container {
    max-width: 42em;
}
</style>
