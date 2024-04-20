import './assets/main.css'
import './assets/cover.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';

library.add(faPhone)
library.add(faCloudRain)
library.add(faGithub)
library.add(faCalendarDays)
library.add(faLinkedin)


import { createApp } from 'vue'
import App from './App_1.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

