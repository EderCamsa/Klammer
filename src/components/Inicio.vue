<script setup>
import AcercaDe from './AcercaDe.vue';
import CasosExito from './CasosExito.vue';

const scrollTo = (target) => {
  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo(0, 0);
  }
};

// Método para verificar y desplazarse a la sección si hay un fragmento en la URL
const scrollIfFragmentExists = () => {
  const hash = window.location.hash.substring(1);
  if (hash) {
    scrollTo(hash);
  } else {
    window.scrollTo(0, 0);
  }
};

scrollIfFragmentExists();

</script>

<template>
  <div class="inicio">
    <img src="../assets/Inicio_gif.gif" alt="">
  </div>
  <AcercaDe id="beneficios" />
  <CasosExito id="casos-exito" />
</template>

<style scoped >
.inicio {
  height: 100vh;
  background-image: url('../assets/Background.png');
  background-position: center;
  background-size: cover;

}

.inicio img {
  width: 500px;
  position: absolute;
  bottom: 30px;
  right: 20px;
}

@media (max-width: 1024px) {

  .inicio img {
    width: 450px;
  }
}

@media (max-width: 480px) {
  .inicio img {
    width: 300px;
    bottom: 80px;
    right: 0;
  }
}
</style>