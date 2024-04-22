<script setup>
import { ref, onMounted, toRaw } from 'vue';
import { supabase } from '@/js/supabaseClient';

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
</style>