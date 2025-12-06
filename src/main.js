import './assets/tailwind.css'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// Fontawesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileSignature, faCode, faLaptopCode, faWrench, faExternalLinkAlt, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { createApp } from 'vue'
import App from './App.vue'

library.add(faGithub, faCalendarDays, faLinkedin, faFileSignature, faCode, faLaptopCode, faWrench, faExternalLinkAlt, faChevronDown, faChevronUp)



createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

