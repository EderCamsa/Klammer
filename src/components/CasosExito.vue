<template>
  <div class="container">
    <h1>Casos de Éxito</h1>
    <div class="casos">
      <div v-for="caso in casos" :key="caso.id" class="tarjeta_caso" @mouseover="resaltar(caso.id)" @mouseleave="quitarResaltado(caso.id)">
        <img :src="caso.rutaImagen" alt="Imagen de Caso de Éxito">
        <h2>{{ caso.nombre }}</h2>
        <p>{{ caso.texto }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import casoExito1 from '@/assets/acercaDe.png';
import casoExito2 from '@/assets/acercaDe.png';
import casoExito3 from '@/assets/acercaDe.png';

export default {
  data() {
    return {
      casos: [
        {
          id: 1,
          nombre: 'Sanatorio Español',
          texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid pariatur, exercitationem laboriosam consequuntur sit dolorum nemo esse laudantium dignissimos est similique maiores eius fugiat recusandae optio, unde ea, amet debitis.',
          rutaImagen: casoExito1,
        },
        {
          id: 2,
          nombre: 'Energéticos Nieto',
          texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid pariatur, exercitationem laboriosam consequuntur sit dolorum nemo esse laudantium dignissimos est similique maiores eius fugiat recusandae optio, unde ea, amet debitis.',
          rutaImagen: casoExito2,
        },
        {
          id: 3,
          nombre: 'Métrica Móvil',
          texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid pariatur, exercitationem laboriosam consequuntur sit dolorum nemo esse laudantium dignissimos est similique maiores eius fugiat recusandae optio, unde ea, amet debitis.',
          rutaImagen: casoExito3,
        },
      ]
    }
  },
  methods: {
    resaltar(id) {
      const casoResaltado = this.casos.find(caso => caso.id === id);
      // Modificar estilos o realizar otras acciones cuando se pasa el mouse sobre el caso de éxito
      // Por ejemplo, cambiar el color de fondo
      casoResaltado.resaltado = true;
    },
    quitarResaltado(id) {
      const casoResaltado = this.casos.find(caso => caso.id === id);
      // Restaurar estilos o deshacer acciones cuando se retira el mouse del caso de éxito
      casoResaltado.resaltado = false;
    }
  }
}
</script>

<style scoped>
/* Añadir un estilo para resaltar */
.tarjeta_caso:hover {
  border: 2px solid #FFD700; /* Cambiar el borde al pasar el mouse */
}

.container {
  height: 100%;
  min-height: 100vh;
  background-color: #545454;
}

.container h1 {
  font-size: 60px;
  color: white;
  font-weight: bold;
  padding-top: 150px;
  padding-left: 50px;
}

.casos {
  display: flex;
  align-items: end;
  justify-content: flex-end;
}

.tarjeta_caso {
  width: 300px;
  height: 400px;
  background-color: gainsboro;
  margin: 20px;
  border-radius: 10px;
  
  display: flex;
  flex-direction: column;
}

.tarjeta_caso img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: calc(100% - 120px);
  margin-top: 20px;
}

.tarjeta_caso h2 {
  margin: 20px;
  max-width: 50%;
  
  font-size: 32px;
}

.tarjeta_caso p {
  margin: 0px 20px;
  font-size: 14px;
}

@media (max-width: 1040px) {
  .container {
    min-height: 100%;
  }

  .container h1 {
    text-align: center;
    padding-left: 0;
  }
  .casos {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding-bottom: 50px;
  }
}
</style>
