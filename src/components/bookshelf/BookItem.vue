<script setup>
const props = defineProps(['imagePath'])

</script>

<template>
    <div class="wrapper">
        <div class="book">
            <div class="inner-book">
                <div class="img" style="padding-top: calc(1.07 * 100%)">
                    <img :src="props.imagePath" />
                </div>
                <div class="page"></div>
                <div class="page page-2"></div>
                <div class="page page-3"></div>
                <div class="page page-4"></div>
                <div class="page page-5"></div>
                <div class="img final-page" style="padding-top: calc(1.07 * 100%)">
                    <img :src="props.imagePath" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    /* width: 100%; */
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
}

.inner-book {
    width: 5vw;
    max-width: 70vh;
}

.book {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateZ(0);
}

.inner-book {
    display: flex;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 2000px;
}

.inner-book {
    display: flex;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 2000px;
}

.inner-book:before {
    content: "";
    width: 100%;
    position: absolute;
    height: 0;
    bottom: 14px;
    transform: rotateY(-20deg) translateZ(-20px);
    z-index: 0;
    box-shadow: 10px 12px 20px 13px rgba(0, 0, 0, 0.3);
}

.inner-book .img {
    transform: rotateY(-20deg);
    width: 100%;
    z-index: 5;
    clear: both;
    height: 100%;
    background: #ddd;
}

.inner-book img {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
}

.inner-book .img:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-left: 4px solid rgba(0, 0, 0, 0.3);
    z-index: 2;
}

.page {
    width: calc(100% - 20px);
    height: calc(100% - 2px);
    position: absolute;
    box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.2),
        inset -1px 0px 1px rgba(150, 150, 150, 0.1);
    border-radius: 0px 3px 3px 0px;
    transform: rotateY(-20deg) translateZ(-5px);
    right: -3px;
    z-index: 4;
    background: white;
}

.page-2 {
    height: calc(100% - 4px);
    right: -6px;
    z-index: 3;
}

.page-3 {
    height: calc(100% - 6px);
    right: -9px;
    z-index: 2;
}

.page-4 {
    height: calc(100% - 8px);
    right: -12px;
    z-index: 1;
}

.page-5 {
    height: calc(100% - 10px);
    right: -15px;
    z-index: 0;
}

.img.final-page {
    position: absolute;
    z-index: -1;
    right: -17px;
    transform: rotateY(-19deg) translateZ(-10px) scale(0.984);
}
</style>