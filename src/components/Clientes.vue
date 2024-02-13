<script>

import cliente1 from '@/assets/TKL_Logo_Afirme.png';
import cliente2 from '@/assets/TKL_Logo_Energeticos_Nieto.png';
import cliente3 from '@/assets/TKL_Logo_Looper.png';
import cliente4 from '@/assets/TKL_Logo_Metrica.png';
import cliente5 from '@/assets/TKL_Logo_Peninsula.png';
import cliente6 from '@/assets/TKL_Logo_Sanatorio_Espanol.png';
import cliente7 from '@/assets/TKL_Logo_Tigres_UANL.png';
import cliente8 from '@/assets/TKL_Logo_Versa.png';

export default {
  data() {
    return {
      imagenes: [
        {
          id: 1,
          source: cliente1,
        },
        {
          id: 2,
          source: cliente2,
        },
        {
          id: 3,
          source: cliente3,
        },
        {
          id: 4,
          source: cliente4,
        },
        {
          id: 5,
          source: cliente5,
        },
        {
          id: 6,
          source: cliente6,
        },
        {
          id: 7,
          source: cliente7,
        },
        {
          id: 8,
          source: cliente8,
        },
      ]
    }
  }
}

</script>

<template>
  <div class="container-clientes">
    <div class="clientes-titulo">Clientes</div>
    <div class="clientes-descripcion">En nuestra perspectiva, otorgamos una importancia fundamental a nuestros clientes. Más allá de proporcionar productos y servicios de alta calidad, nos esforzamos por construir vínculos y relaciones duraderas. Fundamentamos esta conexión en la prestación de asesoría profesional, experiencia especializada, confianza, ética, colaboración efectiva y empatía. Nos comprometemos a superar las expectativas, no solo en la entrega de soluciones excepcionales, sino también en la construcción de asociaciones solidas y gratificantes.</div>
    <div class="clientes-imagenes">
      <img class="blanco-negro" v-for="imagen in imagenes" :src="imagen.source" alt="">
    </div>
  </div>
</template>

<style scoped>
.container-clientes {
  height: 100%;
  min-height: 100vh;
  background-color: #434242;
  padding-top: 100px;
  color: white;
}

.clientes-titulo {
  text-transform: uppercase;
  font-size: 38px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.clientes-descripcion {
  padding: 0 50px;
  text-align: center;
}

.clientes-imagenes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin: 0 auto;
  padding-top: 50px;
  margin-top: 50px;
}

img {
  width: 130px;
  margin: 20px 60px;
}

.blanco-negro {
  filter: grayscale(100%);
  transition: filter 0.2s ease-in-out;
}

.blanco-negro:hover {
  filter: grayscale(0%)
}


@media (max-width: 768px) {

  .clientes-imagenes {
    margin-top: 50px;
    padding-top: 0;
  }

  img {
    width: 100px;
    margin: 10px;
  }
}

@media (max-width: 480px) {

  .clientes-imagenes {
    width: 100%;
  }

  img {
    width: 100px;
    margin: 30px;
  }
}
</style>