<script setup>
import { ref, onMounted, toRaw } from 'vue';
import { supabase } from '@/js/supabaseClient';
import BookItem from '@/components/bookshelf/BookItem.vue'

const social = ref([])

async function getSocial() {
    const { data } = await supabase.from('social').select()
    social.value = data
    console.debug(toRaw(social.value))
}

onMounted(() => {
    getSocial();
})

</script>

<template>
    <div class="longevity col-12 col-6">
        <div v-for="(item, index) in social" :key="index" class="card mb-1 list-group-item">
            <div class=" card-body">
                <!-- <h5 class="card-title"></h5> -->
                <p class="card-text"><small>{{ item.timestamp }}</small></p>
                <p class="card-text">{{ item.content }}</p>
            </div>
            <hr>
        </div>
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <BookItem image-path="https://m.media-amazon.com/images/I/81OvszBEdhL._SL1500_.jpg" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.longevity {
    padding-top: 2em;
    position: fixed;
    left: 0;
    top: 0;
    width: 20vw;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
}

.card {
    background-color: transparent;
    color: white;
    border: none;
    text-align: start;
}

.card-text {
    margin-bottom: .25em;
}

hr {
    margin: 0px 0px 5px 0px;
}

/**********************************************************************************
	MAGAZINES
	**********************************************************************************/

.mag {
    display: inline-block;
    width: 190px;
    height: 280px;
    margin: 20px 20px 0 20px;
    padding: 0;
    vertical-align: top;
}

.mag img {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
}

.mag-square img {
    height: 100%;
}

.mag ul {
    max-width: 155px;
    list-style: none;
    margin: 15px auto;
    padding: 0;

    transform-style: preserve-3d;
    perspective: 800px;
}

.mag li {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;

    backface-visibility: hidden;
    transform-origin: 0% 50% 0;
}

.mag .page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.page img,
.cover img {
    outline: 1px solid transparent;
}

.cover {
    transform: rotateY(0deg) translateZ(0px);
}

.page1 {
    transform: rotateY(20deg) translateZ(-1px);
}

.page2 {
    transform: rotateY(30deg) translateZ(-2px);
}

.page3 {
    transform: rotateY(40deg) translateZ(-3px);
}
</style>