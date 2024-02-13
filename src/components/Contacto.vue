<script>
</script>

<template>
  <div class="container-contacto">
    <div class="figura">
      <div class="box"></div>
      <div class="box2"></div>
    </div>
    <div class="informacion-contacto">
      <div class="contacto-titulo">¡Trabajemos Juntos!</div>
      <div class="contacto-subtitulo">Contáctanos y agendamos una cita</div>

      <!-- Formulario de contacto añadido aquí -->
      <form class="formulario-contacto" action="https://formspree.io/f/mrgnqbdd" method="POST">
        <div class="campo-formulario">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required>
        </div>
        <div class="campo-formulario">
          <label for="telefono">Teléfono</label>
          <input type="text" id="telefono" name="telefono" required>
        </div>
        <div class="campo-formulario">
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="campo-formulario">
          <label for="servicio">Servicio de interés</label>
          <select id="servicio" name="servicio">
            <option value="business_intelligence">Business Intelligence</option>
            <option value="rpa">Robot Process Automation</option>
            <option value="consultoria_sistemas">Consultoría de Sistemas</option>
          </select>
        </div>
        <div class="campo-formulario">
          <button type="submit">Contactar</button>
        </div>
      </form>


      <div class="contacto-medios">
        <div class="contacto-area">
          <div class="titulo-medio">Phone</div>
          <div class="dato-medio">(+52)-871-140-3693</div>
        </div>
        <div class="contacto-area">
          <div class="titulo-medio">Email</div>
          <div class="dato-medio">contacto@klammer.com.mx</div>
        </div>
        <div class="contacto-area">
          <div class="titulo-medio">Social</div>
          <div class="dato-medio redes-sociales">
            <a href="https://www.facebook.com/profile.php?id=100083714932510" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook-f" /></a>
            <a href="https://twitter.com" target="_blank"><font-awesome-icon icon="fa-brands fa-x-twitter" /></a>
            <a href="https://www.instagram.com" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            <a href="https://www.linkedin.com" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container-contacto {
  background-color: #FBFDF3;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: center;
}

.box {
  z-index: 100;
  position: absolute;
  margin-left: 50px;
  background-image: url(../assets/TKL_Contacto.jpg);
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  width: 500px;
  height: 600px;
  aspect-ratio: 1;
  clip-path: polygon(100.00% 20.00%,
      100% 50%,
      38.87% 100%,
      4.95% 100%,
      4.95% 28.31%,
      38.87% 0%,
      81.17% 0%);
}

.box2 {
  margin-left: 70px;
  margin-top: 15px;
  background-color: #F4B73F;
  width: 500px;
  height: 600px;
  aspect-ratio: 1;
  clip-path: polygon(100.00% 20.00%,
      100% 50%,
      38.87% 100%,
      4.95% 100%,
      4.95% 28.31%,
      38.87% 0%,
      81.17% 0%);
}

.informacion-contacto {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 200px;
  margin-top: 100px;
}

.contacto-titulo {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 60px;
  font-weight: 800;
  text-transform: uppercase;
  color: #313433;
}

.contacto-subtitulo {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  color: #999999;
  font-size: 28px;
}

.contacto-medios {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.contacto-area {
  text-align: center;
  margin: 20px 20px;
}

.contacto-area .titulo-medio {
  font-weight: 700;
  text-transform: uppercase;
  color: #313433;
  text-align: center;
}

.contacto-area .dato-medio {
  margin-top: 20px;
  font-size: 18px;
}

.contacto-area .dato-medio a {
  text-decoration: none;
  color: #313433;
}

.contacto-area .redes-sociales {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.contacto-area .redes-sociales a {
  margin: 0 10px;
}

@media (max-width: 1140px) {

  .container-contacto {
    padding-bottom: 50px;
  }

  .informacion-contacto {
    width: 80%;
    margin-bottom: 10px;
  }

  .contacto-titulo {
    padding-top: 100px;
    font-size: 40px;
  }

  .contacto-titulo {
    max-width: 100%;
  }

  .contacto-subtitulo {
    font-size: 18px;
  }

  .box,
  .box2 {
    max-width: 80vw;
    width: 350px;
    height: 400px;
  }
}

@media (max-width: 480px) {

  .contacto-titulo {
    font-size: 30px;
  }

  .contacto-subtitulo {
    font-size: 20px;
  }

  .box {
    margin-left: 5px;
  }

  .box2 {
    margin-left: 15px;
  }

  .contacto-area .dato-medio {
    margin-top: 5px;
  }

  .informacion-contacto {
    margin-top: 0;
  }
}

/* Estilos para el formulario de contacto */
.formulario-contacto {
  padding: 20px; /* Ajusta el padding del formulario según sea necesario */
  max-width: 500px; /* Ancho máximo para el formulario */
  width: 100%; /* Asegura que el formulario sea fluido y se ajuste al contenedor padre */
  box-sizing: border-box; /* El padding y el borde no afectarán el ancho total */
  margin: auto; /* Centra el formulario en su contenedor padre */
}

/* Ajustar los campos del formulario para que tengan un espaciado consistente y no se superpongan */
.campo-formulario {
  margin-bottom: 1rem; /* Espacio debajo de cada campo para evitar la superposición */
}

/* Ajustar los estilos de las etiquetas y los campos de entrada */
.campo-formulario label {
  display: block;
  margin-bottom: 0.5rem;
  color: #313433; /* Color de texto para las etiquetas, similar al de la imagen */
}

.campo-formulario input,
.campo-formulario select {
  width: 100%; /* Reducir el ancho para dejar espacio para el borde y el padding */
  padding: 10px; /* Reducir el padding para dejar más espacio dentro del contenedor */
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing: border-box;
}

/* Estilizar el botón de envío para que coincida con los colores del diseño */
.campo-formulario button {
  background-color: #F4B73F; /* Color de fondo del botón, tomado de la imagen */
  color: #fff; /* Color de texto del botón */
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold; /* Hacer que el texto del botón sea negrita */
  text-transform: uppercase;
  margin-top: 10px; /* Espacio adicional por encima del botón */
}

.campo-formulario button:hover {
  background-color: #e0a32e; /* Color de fondo del botón al pasar el mouse por encima */
}

/* Media queries para ajustar el formulario en pantallas más pequeñas */
@media (max-width: 480px) {
  .formulario-contacto {
    padding: 15px;
    max-width: 90%; /* Permite que el formulario sea un poco más estrecho en pantallas pequeñas */
  }
}

/* Media queries para ajustar el formulario en pantallas medianas */
@media (min-width: 481px) and (max-width: 768px) {
  .formulario-contacto {
    max-width: 80%; /* Permite que el formulario sea más ancho en pantallas medianas */
  }
}

/* Media queries para ajustar el formulario en pantallas grandes */
@media (min-width: 769px) {
  .formulario-contacto {
    max-width: 400px; /* Restablece el ancho máximo del formulario para pantallas grandes */
  }
}

@media (max-width: 480px) {
  .campo-formulario select {
    position: relative; /* Establece la posición relativa */
    bottom: 0; /* Forzar el listado de opciones a desplegarse hacia abajo */
  }
}
</style>

