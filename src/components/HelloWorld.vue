<template>
  <div class="wrapper">
    <img class="img_bg" src="../assets/img/bg.png" alt="" />
    <div class="contene">
      <vue-particles color="#dedede" class="particles"></vue-particles>
      <header class="header">
        <div class="header_logo"><img class="logo" src="../assets/img/logo.png" alt=""></div>
        <nav class="main_nav">
          <ul class="main_menu">
            <li class="main_menu_list">
              <a v-scroll-to="'#uno'" class="main_menu_link"
                >Nuestros servicios</a
              >
            </li>
            <li class="main_menu_list">
              <a v-scroll-to="'#dos'" class="main_menu_link">Nuestro Equipo</a>
            </li>
            <li class="main_menu_list">
              <a
                v-scroll-to="{ el: '#tres', duration: 1000 }"
                class="main_menu_link"
                >Contactenos</a
              >
            </li>
            <li class="main_menu_list">
              <router-link to="/login" class="main_menu_link">
                Login</router-link
              >
            </li>
          </ul>
        </nav>
      </header>

      <div class="banner">
        <div class="banner_text">
          Nuestra tecnologia recolecta mejores datos para sus analisis,
          inteligencia y percepcion
        </div>
        <div class="banner_img">
          <img class="" src="../assets/img/Header_network.png" alt="" />
        </div>
      </div>
    </div>
    <Services />
    <Recomendacion />
    <Staff />
    <Contacto />
  </div>
</template>

<script>
import Services from "@/components/Services.vue";
import Contacto from "@/components/Contacto.vue";
import Staff from "@/components/Staff.vue";
import Recomendacion from "@/components/Recomendacion.vue";
export default {
  name: "HelloWorld",
  components: {
    Services,
    Contacto,
    Staff,
    Recomendacion
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.particles {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>
