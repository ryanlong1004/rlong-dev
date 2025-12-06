import './assets/tailwind.css'
import './assets/main.css'
import './assets/cover.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// Fontawesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faCloudRain, faFileSignature, faCode, faLaptopCode, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createApp } from 'vue'
import App from './App.vue'

library.add(faPhone, faCloudRain, faGithub, faCalendarDays, faLinkedin, faFileSignature, faCode, faLaptopCode, faWrench)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

