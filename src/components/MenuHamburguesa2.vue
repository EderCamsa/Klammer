<script>

export default {
  mounted() {
    let menuToggle = document.querySelector('.menuToggle');
    let header = document.querySelector('header');
    menuToggle.onclick = function () {
      header.classList.toggle('active')
    }
    window.addEventListener('resize', this.updateScreenWidth);
  },
  data() {
    return {
      screenWidth: window.innerWidth,
      submenusActivos: new Array(5).fill(false),
      modulos: [
        {
          id: 1,
          title: 'Home',
          link: '/',
          secciones: [
            {
              nombre: 'Beneficios',
              ruta: 'beneficios',
            },
            {
              nombre: 'Casos de éxito',
              ruta: 'casos-exito',
            },
          ],
        },
        {
          id: 2,
          title: '¿Quiénes Somos?',
          link: '/quienes-somos',
          secciones: [
            {
              nombre: 'Cultura',
              ruta: 'cultura',
            },
            {
              nombre: 'Valores',
              ruta: 'valores',
            },
          ],
        },
        {
          id: 3,
          title: 'Servicios',
          link: '/servicios/',
          // secciones: ['Business Intelligence', 'Robot Process Automation', 'Consultoría de Sistemas']
        },
        {
          id: 4,
          title: 'Nuestra Experiencia',
          link: '/experiencia',
          secciones: [
            {
              nombre: 'Industrias',
              ruta: 'industrias',
            },
            {
              nombre: 'Clientes',
              ruta: 'clientes',
            },
          ],
        },
        {
          id: 5,
          title: 'Contacto',
          link: '',
          contacto: 'contacto',
        }
      ],
    };
  },
  methods: {
    scrollTo(target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    mostrarSubMenu(index) {
      this.submenusActivos = this.submenusActivos.map((estado, i) => (i === index ? !estado : false));
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <header>
    <a href="/"><img class="logo" src="../assets/Klammer_logo_INV_Horizontal_blanco_amarillo.png" alt="" srcset=""></a>
    <div class="menuToggle"></div>
    <nav>
      <ul>
        <li v-for="(modulo, index) in modulos" :key="modulo.id" @click="scrollTo(modulo.contacto)">
          <div class="seccion-boton">
            <router-link :to="modulo.link" class="router-link">
              <a>{{ modulo.title }}</a>
            </router-link>
            <button v-if="modulo.secciones" @click="mostrarSubMenu(index)">
              <font-awesome-icon :icon="submenusActivos[index] ? 'chevron-up' : 'chevron-down'" size="lg" />
            </button>
          </div>
          <div v-if="screenWidth <= 1024">
            <ul v-if="submenusActivos[index] && screenWidth <= 1024" class="submenu-desplegar">
              <li v-for="seccion in modulo.secciones">
                <a :href="`${modulo.link}#${seccion.ruta}`">{{ seccion.nombre }}</a>
              </li>
            </ul>
          </div>
          <div v-if="screenWidth > 1024">
            <ul>
              <li v-for="seccion in modulo.secciones">
                <a :href="`${modulo.link}#${seccion.ruta}`">{{ seccion.nombre }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>

  </header>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.router-link {
  margin: -20px;
}

header {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  /* position: absolute; */
  width: 100%;
  max-height: 70px;
  background-color: #2d2b2b;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  width: 100%;
  max-width: 200px;
}

header ul {
  position: relative;
}

header ul li {
  position: relative;
  list-style: none;
  float: left;
}

header ul li a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
}

header ul li a:hover {
  /* background-color: #383838; */
  color: white;
  cursor: pointer;
}

header ul li ul {
  position: absolute;
  left: 0;
  width: 150px;
  background-color: #383838;
  display: none;
}

header ul li:hover a {
  color: #EBCD00;
}

header ul li:hover ul a {
  color: white;
}

header ul li:hover ul {
  display: block;
}

header ul li ul li {
  position: relative;
  width: 100%;
  border: 1px solid #252424;
}

header nav ul li ul li:hover {
  background-color: #a8a7a4;
}

header nav ul li ul li:hover a {
  color: black;
}

.seccion-boton button {
  display: none;
}

@media (max-width: 1024px) {
  header {
    padding: 10px 20px;
    z-index: 1000;
  }

  header nav {
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    background-color: #2d2b2b;
    /* display: none; */
  }

  /* header.active nav {
    display: block;
    transition: display 6s ease-in;
  } */

  header nav {
    /* Otros estilos... */
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in;
  }

  header.active nav {
    max-height: 100vh;
    /* Altura máxima que desees mostrar */
  }

  header nav ul li {
    width: 100%;
  }

  header nav ul li ul {
    position: relative;
    width: 90%;
    left: 10%;
  }

  /* header nav ul li:hover ul li {
    background-color: #474644;
    max-height: 50px;
    display: flex;
    align-items: center;
  } */

  header nav ul li ul li:hover {
    background-color: #a8a7a4;
  }

  .menuToggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menuToggle::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: white;
    transform: translateY(-12px);
    box-shadow: 0 12px #fff;
  }

  .menuToggle::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: white;
    transform: translateY(12px);
  }

  header.active .menuToggle::before {
    transform: rotate(45deg);
    box-shadow: 0 0 #fff;
  }

  header.active .menuToggle::after {
    transform: rotate(315deg);
  }

  header ul li ul {
    display: none;
  }

  .seccion-boton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
  }

  .seccion-boton button {
    display: block;
    margin: 10px 10px;
    width: 30px;
    height: 30px;
    color: white;
    border: none;
    background: transparent;
  }

  /* header ul li:hover ul.active*/ .submenu-desplegar {
    display: block;
  }

  .submenu-desplegar li {
    background-color: #474644;
  }

}
</style>