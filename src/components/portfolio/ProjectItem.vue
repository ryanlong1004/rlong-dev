<script setup>
const props = defineProps(['data'])
</script>
<template>
    <div class="item">
        <div class="card">
            <img :src="props.data.imageLink" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">{{ props.data.title }}</h4>
                <hr>
                <p class="card-text">{{ props.data.text }}</p>
                <p class="card-text technologies">{{ props.data.technologies }}
                </p>
                <a :href="props.data.link" target="_BLANK" class="btn btn-primary">Check it out</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.technologies {
    font-style: italic;
}

.item {
    padding: .25em;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .item {
        width: 95vw !important;
        max-width: 100vw !important;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>