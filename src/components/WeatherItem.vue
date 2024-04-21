<script setup>
import '../assets/main.css'
import { ref, onBeforeMount, toRaw } from 'vue';


const forecast = ref([])
const url = 'https://api.weather.gov/gridpoints/BGM/82,33/forecast'

onBeforeMount(async () => {
  const response = await fetch(url)
  const data = await response.json();
  forecast.value = data.properties.periods;
  console.log(toRaw(forecast.value[0]))
})

</script>

<template>
  <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
    aria-controls="collapseExample">
    {{ forecast[0]?.temperature }}&deg;
  </a>

  <div class="weather">
    <div class="collapse" id="collapseExample">
      <div class="card mb-3 tv crt" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 text-center">
            <span class="align-middle" style="font-size: 4.5em; font-family: Gillies">
              <font-awesome-icon :icon="['fa', 'cloud-rain']" />
              {{ forecast[0]?.temperature }}&deg;
            </span>
          </div>
          <div class="col-md-8">
            <div class="card-body text-start">
              <h5 class="card-title">{{ forecast[0]?.name }} </h5>
              <p class="card-text">{{ forecast[0]?.detailedForecast }}</p>
              <h6 class="card-subtitle">{{ forecast[0]?.relativeHumidity.value }}% humidity</h6>
              <h6 class="card-subtitle">{{ forecast[0]?.probabilityOfPrecipitation.value }}% chance of precipitation
              </h6>
              <h6 class="card-subtitle">{{ forecast[0]?.windSpeed }} {{ forecast[0]?.windDirection }}</h6>
              <!-- <p class="card-text"><small>Last updated 3 mins ago</small></p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
a {
  text-decoration: none;
  font-size: 1.25em;
}

.weather {
  float: inline-end;
  position: absolute;
  z-index: 1000;
  right: 0;
  bottom: 0;
}

.tv {
  color: white;
  font-family: 'pip-content' !important;
  font-size: .85em;
  background-color: gray;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  border-bottom: .25rem solid transparent;
}
</style>
