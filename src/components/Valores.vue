<template>
  <div class="contenedor-valores">
    <div class="valores-titulo">Nuestros Valores</div>
    <div class="valores">
      <div class="valor" v-for="valor in valores" :key="valor.id" @mouseover="resaltarValor(true, valor.id)" @mouseleave="resaltarValor(false, valor.id)">
        <div class="icono-valor"><font-awesome-icon :icon="valor.icon" size="lg" /></div>
        <h2>{{ valor.titulo }}</h2>
        <p>{{ valor.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valores: [
        {
          id: '1',
          titulo: 'Innovación Continua',
          descripcion: 'Abrazamos la curiosidad y la creatividad como motores de innovación. Nos desafiamos constantemente a repensar y mejorar nuestras soluciones, anticipándonos a las necesidades futuras de nuestros clientes.',
          icon: 'microchip',
          resaltado: false
        },
        {
          id: '2',
          titulo: 'Colaboración sin límites',
          descripcion: 'Creemos en el poder de la colaboración para superar obstáculos. Fomentamos un entorno donde las ideas fluyen libremente, la comunicación es abierta y el trabajo en equipo es esencial para el éxito colectivo.',
          icon: 'people-group',
          resaltado: false
        },
        {
          id: '3',
          titulo: 'Orientados a la solución',
          descripcion: 'Nos esforzamos por la excelencia en todo lo que hacemos. Cada línea de código, cada diseño y cada interacción con el cliente están impregnados de un compromiso implacable con la calidad y la eficiencia.',
          icon: 'list-check',
          resaltado: false
        },
        {
          id: '4',
          titulo: 'Empoderamiento Individual',
          descripcion: 'Reconocemos que nuestro éxito como empresa se construye sobre el talento y la dedicación de cada miembro del equipo. Fomentamos un entorno que empodera a nuestros empleados, alienta la toma de decisiones informadas y reconoce los logros individuales y colectivos.',
          icon: 'hand-fist',
          resaltado: false
        }
      ]
    }
  },
  methods: {
    resaltarValor(resaltar, id) {
      this.valores.forEach(valor => {
        if (valor.id === id) {
          valor.resaltado = resaltar;
        } else {
          valor.resaltado = false;
        }
      });
    }
  }
}
</script>

<style scoped>
.contenedor-valores {
  min-height: 100vh;
  height: 100%;
  background-color: #545454;
  margin: 0;
  color: white;
  display: block;
  padding-bottom: 30px;
}

.valores-titulo {
  text-transform: uppercase;
  padding-top: 100px;
  margin-left: 50px;
  font-size: 36px;
  font-weight: 600;
}

.valores {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.valor {
  margin: 10px 10px;
  padding: 20px;
  min-height: 450px;
  width: 230px;
  background-color: #373737;
  transition: background-color 0.3s, box-shadow 0.3s;
}

/* Cambia el color de fondo y añade una sombra al resaltar */
.valor:hover, .valor[resaltado] {
  background-color: #454545;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.icono-valor {
  font-size: 30px;
  text-align: center;
  margin-bottom: 40px;
  color: #DDCD44;
  padding-top: 30px;
}

.valor {
  margin: 10px 10px;
  padding: 20px;
  min-height: 450px;
  width: 230px;
  background-color: #373737;
}

@media (max-width: 480px) {
  .contenedor-valores {
    padding-bottom: 50px;
  }
}
</style>