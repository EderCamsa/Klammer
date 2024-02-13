<script setup>
import Industrias from './Industrias.vue';
import Clientes from './Clientes.vue';

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
  <Industrias id="industrias"></Industrias>
  <Clientes id="clientes"></Clientes>
</template>

<style scoped></style>