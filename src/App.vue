<script setup>
import CoverItem from "@/components/CoverItem.vue"
import FooterItem from "@/components/FooterItem.vue"
import PortfolioItem from "./components/portfolio/PortfolioItem.vue";
// import BookShelfItem from "@/components/bookshelf/BookShelfItem.vue";

</script>

<template>
    <div class="wrapper">
        <CoverItem />
        <PortfolioItem />
        <!-- <BookShelfItem /> -->
        <FooterItem />
        <!-- <CardItem /> -->
    </div>
</template>

<style>
/* Links */
a,
a:focus,
a:hover {
    color: #fff;
    text-decoration: none;
}

.photo {
    position: fixed;
    height: 15vh;
    right: 10vw;
    bottom: 10vh;
    transform:
        perspective(1000px) rotateX(14deg) rotateY(6deg) rotateZ(24deg);
    box-shadow: 24px 16px 64px 0 rgba(0, 0, 0, 0.08);
    border: 0;
    /* border-radius: 2px; */
    background-color: transparent;
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

.bookshelf {
    background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
    max-height: 25vh;
    position: absolute;
    bottom: 0;
    left: 0;


}
</style>
