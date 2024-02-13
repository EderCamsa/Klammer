<script setup>
import './style/base.css'
import MenuHamburguesa2 from './components/MenuHamburguesa2.vue';
import Contacto from './components/Contacto.vue';
</script>

<template>

  <MenuHamburguesa2 />
  <router-view></router-view>
  <Contacto id="contacto" />
</template>

<style scoped></style>
