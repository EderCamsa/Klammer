<script>

</script>

<template>
  <div class="container-cultura">
    <div class="informacion">
      <div class="info_imagen"></div>
      <div class="info_texto">
        <div class="titulo">Nuestra<br>Cultura</div>
        <div class="titulo2">Nuestra Cultura</div>
        <p>En <span>Klammer</span>, nuestra cultura está arraigada en la pasión por
          acelerar el progreso de nuestros clientes y motivar a nuestros
          empleados a alcanzar su máximo <span>potencial</span>. Somos más que una
          empresa de desarrollo de software; somos <span>impulsores</span> de la
          innovación y colaboradores incansables en la búsqueda de la <span>excelencia</span>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container-cultura {
  background-color: #313433;
  min-height: 100vh;
  height: 100%;
}

.informacion {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  padding-top: 200px;
}

.informacion .info_texto {
  padding: 0 80px;
  text-align: left;
  font-size: 18px;
  line-height: 1.5;
  color: white;
}

.informacion .info_imagen {
  height: 400px;
  background-image: url(../assets/TKL_Cultura.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


.informacion .info_texto .titulo,
.titulo2 {
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 66px;
}

.informacion .info_texto span {
  color: #F4B73F;
}

.titulo2 {
  display: none;
}

@media (max-width: 900px) {
  .informacion .info_texto {
    padding: 0 50px;
  }
}


@media (max-width: 768px) {

  .informacion {
    grid-template-rows: repeat(2, 1fr);
    padding-top: 100px;
  }

  .informacion .info_texto {
    grid-row: 1;
    grid-column: 1 / 3;
    text-align: justify;
    font-size: 14px;
    padding: 0 20px;
  }

  .informacion .info_imagen {
    grid-row: 2;
    grid-column: 1 / 3;
    height: 300px
  }

  .titulo {
    display: none;
  }

  .titulo2 {
    display: block;
    font-size: 30px;
  }
}
</style>