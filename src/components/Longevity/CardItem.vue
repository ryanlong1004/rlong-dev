<script setup>
import { computed } from 'vue';

/**
 * Adds leading zero to a single digit value if needed.
 * @param {number} value - The value to pad.
 * @returns {string} The padded value.
 */
const pad = (value) => {
    return ('0' + value).slice(-2);
}

/**
 * Computes the current date and time formatted as MM/DD/YYYY HH:MM:SS.
 * @returns {string} The formatted current date and time.
 */
const current_time = computed(() => {
    // Get the current date and time
    const currentdate = new Date();

    // Format the date as MM/DD/YYYY
    const date = `${pad(currentdate.getMonth() + 1)}/${pad(currentdate.getDate())}/${currentdate.getFullYear()}`

    // Format the time as HH:MM:SS
    const time = `${pad(currentdate.getHours())}:${pad(currentdate.getMinutes())}:${pad(currentdate.getSeconds())}`

    // Combine the formatted date and time and return
    return `${date} ${time}`;
});

const items = [
    "Starting my day with a cup of coffee and some morning vibes! ☕️🌅 #GoodMorning #CoffeeLover",
    "Just finished an intense workout session 💪 Feeling pumped and ready to take on the day! #FitnessGoals #WorkoutMotivation"
]



</script>

<template>
    <div class="container list-group longevity">
        <div v-for="(content, index) in items" :key="index" class="card mb-1 list-group-item" style="max-width: 540px;">
            <div class="card-body">
                <!-- <h5 class="card-title"></h5> -->
                <p class="card-text"><small>{{ current_time }}</small></p>
                <p class="card-text">{{ content }}</p>
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
    max-width: 20vw;
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