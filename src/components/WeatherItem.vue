<script setup>
import '../assets/main.css'
import { ref, onBeforeMount, toRaw, onUnmounted, computed } from 'vue';


const currentWeatherData = ref({})
const weatherForecastData = ref({})
const intervalId = ref(null)
const refreshInterval = 60 * 1000;

onBeforeMount(async () => {
  fetchCurrentWeatherStats();
  fetchCurrentWeatherForecast();
  setupIntervals();

})

onUnmounted(() => {
  clearInterval(intervalId.value)
})

function setupIntervals() {
  intervalId.value = setInterval(fetchCurrentWeatherStats, refreshInterval);
  intervalId.value = setInterval(fetchCurrentWeatherForecast, refreshInterval * 60);
}

// Function to convert temperature in Kelvin to Fahrenheit
const kelvinToFahrenheit = (value) => {
  return Math.round((value - 273.15) * 9 / 5 + 32);
}

// Computed property to get the current temperature in Fahrenheit
const currentTemp = computed(() => {
  return kelvinToFahrenheit(currentWeatherData.value?.main?.temp);
});

// Computed property to get the humidity
const humidity = computed(() => {
  return currentWeatherData.value?.main?.humidity;
});

// Computed property to get the maximum temperature in Fahrenheit
const maxTemp = computed(() => {
  return kelvinToFahrenheit(currentWeatherData.value?.main?.temp_max);
});

// Computed property to get the minimum temperature in Fahrenheit
const minTemp = computed(() => {
  return kelvinToFahrenheit(currentWeatherData.value?.main?.temp_min);
});

// Computed property to get the sunrise time in local time
const sunrise = computed(() => {
  return new Date(currentWeatherData.value?.sys?.sunrise * 1000).toLocaleTimeString("en-US");
});

// Computed property to get the sunset time in local time
const sunset = computed(() => {
  return new Date(currentWeatherData.value?.sys?.sunset * 1000).toLocaleTimeString("en-US");
});

// Computed property to get the forecast
const forecast = computed(() => {
  return weatherForecastData.value?.properties?.periods[0];
});


/**
 * Computed property to generate the URL for the weather icon based on current weather data.
 * @returns {string} URL of the weather icon image.
 */
const weatherIcon = computed(() => {
  // Check if currentWeatherData contains weather information
  if (!currentWeatherData.value.weather) {
    return ''; // Return an empty string if weather data is not available
  }

  // Generate the URL for the weather icon image
  return `http://openweathermap.org/img/w/${currentWeatherData.value?.weather[0].icon}.png`;
});


/**
 * Fetches current weather conditions from the OpenWeatherMap API.
 */
async function fetchCurrentWeatherStats() {
  try {
    console.debug(`Fetching current weather conditions`);

    // API URL for current weather data
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-75.32&appid=b70600f4495d4665c49354e8081d5424';

    // Fetch data from the API
    const response = await fetch(url);

    // Convert response to JSON format
    currentWeatherData.value = await response.json();

    // Log the raw data for debugging purposes
    console.log(toRaw(currentWeatherData.value));
  } catch (error) {
    console.error(`Error fetching current weather: ${error}`);
  }
}


/**
 * Fetches weather forecast data from the National Weather Service API.
 */
async function fetchCurrentWeatherForecast() {
  try {
    console.debug(`Fetching weather forecast`);

    // API URL for weather forecast data
    const url = 'https://api.weather.gov/gridpoints/BGM/82,33/forecast';

    // Fetch data from the API
    const response = await fetch(url);

    // Convert response to JSON format
    weatherForecastData.value = await response.json();

    // Log the raw data for debugging purposes
    console.log(toRaw(weatherForecastData.value));
  } catch (error) {
    console.error(`Error fetching weather forecast: ${error}`);
  }
}


</script>

<template>
  <a data-bs-toggle="collapse" class="menu-temp" href="#collapseExample" role="button" aria-expanded="false"
    aria-controls="collapseExample">
    {{ currentTemp }}&deg;
    <img :class="[weatherIcon ? 'shown' : 'hidden', 'weather-icon']" :src="weatherIcon">
    <div :class="[weatherIcon ? 'hidden' : 'shown', 'spinner-border spinner-border-sm']" role="status"></div>
  </a>

  <Teleport to="body">
    <div class="weather">
      <div class="collapse" id="collapseExample">
        <div class="card tv crt">
          <div class="row g-0">
            <div class="col-md-4">
              <div class="temp align-middle">
                {{ currentTemp }}&deg;
                <img :src="weatherIcon" :class="[weatherIcon ? shown : hidden, 'weather-icon']">
                <div :class="[weatherIcon ? 'hidden' : 'shown', 'spinner-border spinner-border-sm']" role="status"></div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body text-start">
                <h5 class="card-title">{{ forecast?.name }} </h5>
                <hr>
                <p class="card-text">{{ forecast?.detailedForecast }}</p>
                <hr>
                <h4 class="card-subtitle">
                  <span>{{ maxTemp }}&deg;/</span>
                  <span>{{ minTemp }}&deg; </span>
                  <span>{{ humidity }}%</span>
                </h4>
                <br>
                <h6 class="card-subtitle">
                  <pre>
                  sunrise: {{ sunrise }}
                  sunset:  {{ sunset }}
                </pre>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
a {
  text-decoration: none;
  font-size: 1.25em;
}

.weather {
  float: inline-end;
  position: fixed;
  z-index: 999;
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

.menu-temp {
  display: flex;
  color: white;
  font-size: 1.5em;
}

.temp {
  font-size: 4.5em;
  font-family: "Gillies";
}

.weather .weather-icon {
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

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .weather .weather-icon {
    width: 1em;
    left: 0;
    top: -.5em;
  }

  .tv {
    max-width: 80vw;
    font-size: .65em;
  }

  .card-subtitle {
    font-size: 1.1em;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  weather .weather-icon {
    /* position: relative; */
    width: 1em;
    left: 0;
    top: -.5em;
  }

  .tv {
    max-width: 70vw;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  weather .weather-icon {
    /* position: relative; */
    width: 1em;
    left: 0;
    top: -.5em;
  }

  .tv {
    max-width: 60vw;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .tv {
    max-width: 40vw;
  }
}
</style>
