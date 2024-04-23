<script setup>
import '../assets/main.css'
import { ref, onBeforeMount, toRaw, onUnmounted, computed } from 'vue';


const forecast = ref([])
const url = 'https://api.weather.gov/gridpoints/BGM/82,33/forecast'
const currentWeatherData = ref({})
const intervalId = ref(null)
const refreshInterval = 60 * 1000;

onBeforeMount(async () => {
  fetchCurrentWeather()
  intervalId.value = setInterval(fetchCurrentWeather, refreshInterval);
})

onUnmounted(() => {
  clearInterval(intervalId.value)
})

const kelvinToFarenheit = (value) => {
  return Math.round((value - 273.15) * 9 / 5 + 32)
}

const currentTemp = computed(() => {
  return kelvinToFarenheit(currentWeatherData.value?.main?.temp) //TODO import as farenheit 
})

const humidity = computed(() => {
  return currentWeatherData.value?.main?.humidity //TODO import as farenheit 
})

const maxTemp = computed(() => {
  return kelvinToFarenheit(currentWeatherData.value?.main?.temp_max) //TODO import as farenheit 
})

const minTemp = computed(() => {
  return kelvinToFarenheit(currentWeatherData.value?.main?.temp_min) //TODO import as farenheit 
})

const sunrise = computed(() => {
  return new Date(currentWeatherData.value?.sys?.sunrise * 1000).toLocaleTimeString("en-US") //TODO import as farenheit 
})

const sunset = computed(() => {
  return new Date(currentWeatherData.value?.sys?.sunset * 1000).toLocaleTimeString("en-US")
})

const weatherIcon = computed(() => {
  if (!currentWeatherData.value.weather) {
    return ''
  }
  return `http://openweathermap.org/img/w/${currentWeatherData.value?.weather[0].icon}.png`;
})

async function fetchCurrentWeather() {
  console.debug(`fetching current weather conditions`)
  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-75.32&appid=b70600f4495d4665c49354e8081d5424'
  const response = await fetch(url)
  currentWeatherData.value = await response.json();
  console.log(toRaw(currentWeatherData.value))
  weatherIcon.value = `http://openweathermap.org/img/w/${currentWeatherData.value.weather[0].icon}.png`;
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
    <img :class="[weatherIcon ? 'shown' : 'hidden', 'weather-icon']" :src="weatherIcon">
    <div :class="[weatherIcon ? 'hidden' : 'shown', 'spinner-border spinner-border-sm']" role="status"></div>
  </a>

  <div class="weather">
    <div class="collapse" id="collapseExample">
      <div class="card tv crt" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <div class="align-middle" style="font-size: 4.5em; font-family: Gillies">
              {{ currentTemp }}&deg;
              <img :src="weatherIcon" :class="[weatherIcon ? shown : hidden, 'weather-icon']">
              <div :class="[weatherIcon ? 'hidden' : 'shown', 'spinner-border spinner-border-sm']" role="status"></div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card-body text-start">
              <h5 class="card-title">{{ forecast[0]?.name }} </h5>
              <p class="card-text">{{ forecast[0]?.detailedForecast }}</p>
              <h6 class="card-subtitle">High {{ maxTemp }}&deg;
                Low {{ minTemp }}&deg;</h6>
              <hr>
              <h6 class="card-subtitle">{{ humidity }}%
                humidity</h6>
              <hr>
              <h6 class="card-subtitle">sunrise: {{ sunrise }}
              </h6>
              <h6 class="card-subtitle">sunset: {{ sunset }}
              </h6>

              <h6 v-if="forecast[0]?.probabilityOfPrecipitation.value" class="card-subtitle">{{
                forecast[0]?.probabilityOfPrecipitation.value }}% chance of precipitation
              </h6>
              <h6 class="card-subtitle">{{ forecast[0]?.windSpeed }} {{ forecast[0]?.windDirection }}</h6>
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
  right: 1em;
  bottom: 1em;
}

.tv {
  color: white;
  font-family: 'pip-content' !important;
  font-size: .85em;
  background-color: gray;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  border-bottom: .25rem solid transparent;
}

.weather-icon {
  position: relative;
  left: -0.5em;
}

.weather .weather-icon {
  /* position: relative; */
  width: 2em;
  left: 0;
  top: -.5em;
}

.shown {
  visibility: visible;
}

.hidden {
  visibility: hidden;
  display: none;
}
</style>
