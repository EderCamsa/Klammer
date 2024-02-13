<script setup>
import Cultura from './Cultura.vue';
import Valores from './Valores.vue';

const scroll = () => {
  window.scrollTo(0, 0);
};

scroll();


</script>

<template>
  <Cultura id="cultura" />
  <Valores id="valores" />
</template>

<style>

</style>