<template>
  <!--ejemplos-->
  <div class="recomendacion">
    <vue-particles color="#fff" id="particles2-js" class="particles "></vue-particles>
      <div class="recomendacion_container">
        <img class="recomendacion_container_img" src="../assets/img/amazon.jpg" alt="">
        <div class="recomandacion_container_texto">
          <h1 class="recomendacion_container_texto_title">Jeff Bezos confia en nosotros</h1>
          <p class="recomendacion_container_texto_dicho">"Confio en el equipo porque conozco la capacidad y la experiencia de las personas que lo estan llevando adelante..."</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "Recomendacion"
};
</script>
<style lang="scss" scope>
.particles {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
</style>