<script>

import imagenBI from '@/assets/TKL_BI_2.jpg';
import imagenRPA from '@/assets/TKL_RPA_1.jpg';
import imagenConsultoria from '@/assets/TKL_Consultoria_3.jpg';

export default {
  mounted() {
    scroll()
  },
  data() {
    return {
      servicios: [
        {
          id: 1,
          nombre: 'Business Intelligence',
          texto: 'BI es esencial en entornos empresariales competitivos, ya que permite a las organizaciones comprender mejor su entorno, adaptarse a cambios y mantenerse ágiles en un mercado en constante evolución. Además, BI proporciona una base sólida para la implementación de estrategias más efectivas y la consecución de objetivos comerciales.',
          rutaImagen: imagenBI,
          icon: 'magnifying-glass-chart',
        },
        {
          id: 2,
          nombre: 'Robot Process Automation',
          texto: 'La RPA se utiliza en una variedad de industrias y funciones empresariales, desde finanzas y recursos humanos hasta atención al cliente y procesamiento de datos. Ayuda a liberar tiempo y recursos, permitiendo que el personal humano se enfoque en tareas más complejas y estratégicas.',
          rutaImagen: imagenRPA,
          icon: 'robot',
        },
        {
          id: 3,
          nombre: 'Consultoría de Sistemas',
          texto: 'Trabajamos en colaboración para evaluar las necesidades tecnológicas, proponer soluciones adecuadas y optimizar el uso de la tecnología para lograr los objetivos comerciales.',
          rutaImagen: imagenConsultoria,
          icon: 'laptop-medical',
        },
      ]
    }
  }
}

const scroll = () => {
  window.scrollTo(0, 0);
};

</script>

<template>
  <div class="container">
    <div class="titulo-servicios">Nuestros Servicios</div>
    <div class="distribucion">

      <div class="tarjetas-juntas">
        <div class="tarjeta" v-for="servicio in servicios" :key="servicio.id">
          <div class="background-back-gradient"></div>
          <img class="background-back" :src="servicio.rutaImagen" alt="">
          <div class="texto">
            <h2 class="titulo">
              <font-awesome-icon :icon="servicio.icon" size="lg" class="texto-icon" /> <br>
              <div class="titulo-texto">{{ servicio.nombre }}</div>
            </h2>
            <p>{{ servicio.texto }}</p>
          </div>

          <div class="background">
            <div class="bg-color"></div>
            <div class="bg-image"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100vh;
  height: 100%;
  padding-top: 150px;
  background-color: #545454;
}

.distribucion {
  display: grid;
  grid-template-columns: 15% 70% 15%;
}

.titulo-servicios {
  color: white;
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.tarjetas-juntas {
  margin-top: 30px;
  grid-column: 2 / 3;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.tarjeta {
  z-index: 100;
  margin: 0 10px;
  width: 250px;
  height: 430px;
  max-height: 450px;
  position: relative;
  margin: 50px auto;
  border-radius: 20px;
  overflow: hidden;

  transition: transform 0.3s ease-in;
  transform-origin: top;

  box-shadow: 0px 0px 22px -7px rgba(0, 0, 0, 0.62);
  -webkit-box-shadow: 0px 0px 22px -7px rgba(0, 0, 0, 0.62);
  -moz-box-shadow: 0px 0px 22px -7px rgba(0, 0, 0, 0.62);
}


.background-back {
  height: 100%;
  position: absolute;
  right: -10%;
  z-index: -10;
  transition: background-color 0.3s ease-in;
}

.tarjeta:nth-child(1) .background-back,
.tarjeta:nth-child(3) .background-back {
  left: -80%;
}

.background-back-gradient {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  z-index: -1;
  transition: background-color 0.3s ease-in;
}


.background,
.texto {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  z-index: 10;
  color: #393939;
}

.texto {
  z-index: 1;
}

.background {
  z-index: 0;
  height: 200%;
  overflow: hidden;
}

.bg-color,
.bg-image {
  border-radius: 20px;
}

.bg-color {
  width: 100%;
  height: 50%;
  background-color: #D9B012;
  overflow: hidden;

  transition: transform 0.3s ease-in;
  transform-origin: top;
}

.tarjeta:hover .background .bg-color {
  transform: translateY(-100%);
}

.tarjeta:hover {
  color: white;
  transform: translateY(-10px);
  transition: transform 0.3s ease-in;
}

.tarjeta:hover .background {
  display: block;
  transform: translateY(-50%);
  overflow: hidden;
  transition: transform 0.3s ease-in;
}

.texto {
  max-width: 80%;
  padding-left: 20px;
}

.texto .titulo .titulo-texto {
  margin-top: 10px;
}

.texto p {
  font-size: 14px;
  display: none;
}

.texto .titulo {
  font-size: 24px;
  margin-top: 150%;
  text-align: left;
}

.tarjeta:hover .titulo {
  margin-top: 20px;
  text-align: left;
}

.tarjeta:hover .texto {
  color: white;
}

.tarjeta:hover .texto p {
  display: block;
}

@media (max-width: 768px) {
  .container {
    padding-top: 50px;
    grid-template-columns: 5% 90% 5%;
  }

  .titulo-servicios {
    margin-top: 50px;
  }
}

@media (max-width: 480px) {
  .container {
    padding-top: 50px;
  }
}
</style>