<script setup>
import '../assets/main.css'
import { ref, onBeforeMount, toRaw } from 'vue';


const forecast = ref([])
const url = 'https://api.weather.gov/gridpoints/BGM/82,33/forecast'
const currentTemp = ref(0)
const weatherIcon = ref('')

onBeforeMount(async () => {
  const response = await fetch(url)
  const data = await response.json();
  forecast.value = data.properties.periods;
  console.log(toRaw(forecast.value[0]))
  fetchCurrentTemp()
})

async function fetchCurrentTemp() {
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-75.32&appid=b70600f4495d4665c49354e8081d5424'
  const response = await fetch(url)
  const data = await response.json();
  currentTemp.value = `${Math.round(data.main.temp * 0.13)}`
  weatherIcon.value = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  console.log(weatherIcon.value)
}

// const getForecast = async () => {
//   const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-75.32&appid=b70600f4495d4665c49354e8081d5424'
//   const response = await fetch(url)
//   const data = await response.json();
//   console.log(toRaw(data))
//   console.log(`${Math.round(data.main.temp * 0.13)} &degF`)
//   console.log(data.weather[0].description.toLowerCase());
//   const weather_icon = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" height=25px/>`;
//   console.log(weather_icon);
// }

</script>

<template>
  <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
    aria-controls="collapseExample">
    {{ currentTemp }}&deg;
    <img :src="weatherIcon">
  </a>

  <div class="weather">
    <div class="collapse" id="collapseExample">
      <div class="card mb-3 tv crt" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 text-center">
            <span class="align-middle" style="font-size: 4.5em; font-family: Gillies">
              {{ currentTemp }}<img :src="weatherIcon">
            </span>
          </div>
          <div class="col-md-8">
            <div class="card-body text-start">
              <h5 class="card-title">{{ forecast[0]?.name }} </h5>
              <p class="card-text">{{ forecast[0]?.detailedForecast }}</p>
              <h6 class="card-subtitle">{{ forecast[0]?.relativeHumidity.value }}%
                humidity</h6>
              <h6 v-if="forecast[0]?.probabilityOfPrecipitation.value" class="card-subtitle">{{
                forecast[0]?.probabilityOfPrecipitation.value }}% chance of precipitation
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
