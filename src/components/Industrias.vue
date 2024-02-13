<script>

import industria1 from '@/assets/TKL_Industrias_Geolocalizacion_1.jpg';
import industria2 from '@/assets/TKL_Industrias_Logistica.jpg';
import industria3 from '@/assets/TKL_Industrias_Hidrocarburos.jpg';
import industria4 from '@/assets/TKL_Industrias_Hospital.jpg';
import industria5 from '@/assets/TKL_Industrias_Deportivos.jpg';
import industria6 from '@/assets/TKL_Industrias_Seguros.jpg';
import industria7 from '@/assets/TKL_Industrias_Financiero.jpg';

export default {
  data() {
    return {
      industrias: [
        {
          id: 1,
          nombre: 'Geolocalización',
          icon: 'earth-americas',
          color: '#FFB400',
          rutaImagen: industria1,
          texto: 'Con la adopción de Qlik Sense, se optimiza el análisis de la conducción adecuada y la identificación de malos hábitos de manejo, lo que resulta en una reducción significativa del riesgo de accidentes. Además, se facilita la selección y capacitación del personal, alineando sus habilidades con las características específicas de las rutas de transporte.',
        },
        {
          id: 2,
          nombre: 'Logística',
          icon: 'truck-fast',
          color: '#666666',
          rutaImagen: industria2,
          texto: 'Qlik facilita la gestión y seguimiento de cuentas pendientes de cobro, simplificando el proceso y brindando mayor control y visibilidad sobre la situación financiera.',
        },
        {
          id: 3,
          nombre: 'Hidrocarburos',
          icon: 'fire-flame-simple',
          color: '#FA0644',
          rutaImagen: industria3,
          texto: 'La implementación de análisis de datos para el control financiero, cuentas por cobrar y ventas ha resultado en la consecución de objetivos destacados y en la toma de decisiones estratégicas que han impulsado significativamente el crecimiento del sector',
        },
        {
          id: 4,
          nombre: 'Hospitalaria',
          icon: 'hospital',
          color: '#666666',
          rutaImagen: industria4,
          texto: 'Se ha encontrado un beneficio significativo al analizar la información generada diariamente en la operación, lo que ha posibilitado una toma de decisiones más informada y la definición de estrategias efectivas para el crecimiento. ',
        },
        {
          id: 5,
          nombre: 'Deportivos',
          icon: 'futbol',
          color: '#004AAD',
          rutaImagen: industria5,
          texto: 'Con la implementación de Qlik Sense, se simplificaron las labores administrativas vinculadas a la gestión de incentivos para los jugadores y la supervisión de presupuestos financieros.',
        },
        {
          id: 6,
          nombre: 'Seguros',
          icon: 'car-burst',
          color: '#666666',
          rutaImagen: industria6,
          texto: 'Qlik Sense ha tenido un impacto significativo en diversas áreas del negocio, incluyendo Finanzas, Actuaría, Contabilidad, Recursos Humanos y Comercial. Su contribución se refleja en una mejora sustancial en la toma de decisiones, fundamentada en un análisis más profundo de los datos disponibles.',
        },
        {
          id: 7,
          nombre: 'Financiero',
          icon: 'calculator',
          color: '#FFB400',
          rutaImagen: industria7,
          texto: 'La incorporación de una aplicación personalizada, con capacidad de comunicación en tiempo real, brinda un apoyo significativo a las operaciones de una institución financiera. La tecnología demuestra su capacidad para mantener en perfecta sincronía y comunicación a toda la organización.',
        },
      ]
    }
  }
}

</script>

<template>
  <div class="container-industrias">
    <div class="space"></div>
    <h2 class="titulo">Industrias</h2>

    <div class="contenedor-tarjetas">

      <div class="tarjeta" v-for="industria in industrias" :key="industria.id">
        <div class="background-back-gradient"></div>
        <div class="background-back" :style="{ 'background-image': 'url(' + industria.rutaImagen + ')' }"></div>

        <div class="texto">
          <p>{{ industria.texto }}</p>
          <div class="icono-titulo">
            <font-awesome-icon :icon="industria.icon" size="lg" class="texto-icon" />
            <h2 class="titulo-tarjeta">{{ industria.nombre }}</h2>
          </div>
        </div>

        <div class="background">
          <div class="bg-color" :style="{ 'background-color': industria.color }"></div>
          <div class="bg-image"></div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.container-industrias {
  background-color: white;
  height: 100%;
  min-height: 100vh;
  padding-bottom: 100px;
}

.space {
  background-color: transparent;
  height: 100px;
}

.container-industrias .titulo {
  font-size: 38px;
  border-radius: 5px;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  margin-bottom: -10px;
}

.contenedor-tarjetas {
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 270px);
  row-gap: 20px;
  margin-bottom: 50px;
}

.contenedor-tarjetas .tarjeta:nth-child(1) {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.tarjeta {
  z-index: 100;
  margin: 0;
  width: 250px;
  height: 100%;
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
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -10;
  transition: background-color 0.3s ease-in;
}

.background-back-gradient {
  width: 100%;
  min-height: 100%;
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
  max-width: 100%;
  margin-left: 20px;
}

.texto p {
  max-width: 85%;
  font-size: 12px;
}

.tarjeta:hover .texto {
  margin-top: 10px;
}

.tarjeta:nth-child(1):hover .texto p {
  margin-top: 25px;
}

.texto {
  margin-top: 70%;
  color: white;
}

.texto .texto-icon {
  font-size: 40px;
  margin: 0;
}

.contenedor-tarjetas .tarjeta:nth-child(1) .texto {
  margin-top: 180%;
}

.texto .titulo-tarjeta {
  font-size: 18px;
}

.texto p {
  display: none;
}

.texto .titulo {
  font-size: 22px;
  text-align: center;
}

.tarjeta:hover .texto p {
  display: block;
  color: white;
}

.icono-titulo {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

.tarjeta:hover .icono-titulo {
  flex-direction: row;
  align-items: start;
  position: absolute;
  bottom: 15px;
}

.contenedor-tarjetas .tarjeta:nth-child(1):hover .texto {

  position: absolute;
  bottom: 5px;
}

.tarjeta:hover .icono-titulo .titulo-tarjeta {
  margin-left: 10px;
}

@media (max-width: 1300px) {

  .container-industrias {
    padding-bottom: 100px;
  }

  .contenedor-tarjetas {
    width: 90%;
  }

}

@media (max-width: 1200px) {

  .contenedor-tarjetas {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 300px);
    width: 100%;
  }

  .contenedor-tarjetas .tarjeta:nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .texto {
    margin-top: 75%;
    color: white;
  }

  .contenedor-tarjetas .tarjeta:nth-child(1) .texto {
    margin-top: 75%;
  }

  .contenedor-tarjetas .tarjeta:nth-child(1):hover .texto {
    margin-top: 10px;
  }
}

@media (max-width: 800px) {

  .contenedor-tarjetas {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 300px);
    width: 100%;
  }
}

@media (max-width: 600px) {

  .contenedor-tarjetas {
    grid-template-columns: 100%;
    grid-template-rows: repeat(7, 300px);
    width: 100%;
  }

  .container-industrias .titulo {
    font-size: 1.6rem;
  }
}
</style>
