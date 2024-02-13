<script setup>

</script>

<template>
  <div class="acerca-de">
    <div class="titulo">
      <div class="llave_izquierda">
        <img src="../assets/Llave_izquierda.png" alt="Llave izquierda" srcset="">
      </div>
      <div class="texto">Key in your data</div>
      <div class="llave_derecha">
        <img src="../assets/Llave_derecha.png" alt="Llave derecha" srcset="">
      </div>
    </div>

    <div class="informacion">
      <div class="info_texto">
        El elemento más importante para un Klammer es la información. Transformar tu data en
        soluciones es la llave para lograr ventajas competitivas en un mercado hostil y demasiado dinámico. Creamos
        herramientas tecnológicas para la automatización de procesos por medio de robots y la inteligencia empresarial.
      </div>
      <div class="info_imagen"></div>
    </div>


  </div>
</template>

<style scoped>
.acerca-de {
  background-color: #2d2b2b;
  min-height: 100vh;
  height: 100%;
  padding-top: 100px;
}

.titulo {
  display: grid;
  grid-template-columns: 1.1fr 0.8fr 1.1fr;
}

.llave_izquierda img,
.llave_derecha img {
  height: 100px;
}

.llave_izquierda {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
  padding-right: 20px;
}

.llave_derecha {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  padding-left: 20px;
}

.texto {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 44px;
  font-weight: bold;
  color: white;
  padding-top: 30px;
}

.informacion {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  margin-top: 100px;
}

.informacion .info_texto {
  display: flex;
  align-items: center;
  padding: 10px 20px 30px 80px;
  text-align: right;
  font-size: 24px;
  line-height: 1.5;
  color: white;
}

.informacion .info_imagen {
  height: 400px;
  background-image: url(../assets/acercaDe.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


@media (max-width: 768px) {

  .titulo {
    grid-template-columns: 0.8fr 1.4fr 0.8fr;
  }

  .llave_izquierda,
  .llave_derecha {
    margin: 0;
    padding: 0;
  }

  .texto {
    font-size: 32px;
    margin-bottom: 30px;
  }

  .informacion {
    grid-template-rows: repeat(2, 1fr);
    margin-top: 10px;
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
}

@media (max-width: 480px) {

  .llave_izquierda img,
  .llave_derecha img {
    height: 70px;
  }

  .texto {
    font-size: 22px;
  }
}

</style>