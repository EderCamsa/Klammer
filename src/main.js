import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

import Inicio from './components/Inicio.vue';
import Servicios from './components/Servicios.vue';
import Experiencia from './components/Experiencia.vue';
import QuienesSomos from './components/QuienesSomos.vue';

// Icons ---------------------

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons: */

/* Valores */
import { faMicrochip, faPeopleGroup, faListCheck, faHandFist } from '@fortawesome/free-solid-svg-icons';
/* Servicios */
import { faMagnifyingGlassChart, faRobot, faLaptopMedical } from '@fortawesome/free-solid-svg-icons';
/* Industrias */
import { faEarthAmericas, faTruckFast, faFireFlameSimple, faHospital, faFutbol, faCarBurst, faCalculator } from '@fortawesome/free-solid-svg-icons';
/* Menú (Responsivo) */
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
/* Redes Sociales */
import { faFacebookF, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


/* add icons to the library */
library.add(faMicrochip, faPeopleGroup, faListCheck, faHandFist);
library.add(faMagnifyingGlassChart, faRobot, faLaptopMedical);
library.add(faEarthAmericas, faTruckFast, faFireFlameSimple, faHospital, faFutbol, faCarBurst, faCalculator);
library.add(faChevronUp, faChevronDown);
library.add(faFacebookF, faXTwitter, faInstagram, faLinkedin);

// Router ------------------

const routes = [
  { path: '/', component: Inicio },
  { path: '/quienes-somos', component: QuienesSomos },
  { path: '/servicios', component: Servicios },
  { path: '/experiencia', component: Experiencia },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Cerrar el menú al cambiar de ruta
router.afterEach(() => {
  const header = document.querySelector('header');
  header.classList.remove('active');
});

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');

