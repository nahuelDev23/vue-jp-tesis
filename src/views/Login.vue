<template>
  <div class="centrar">
    <img class="img_bg" src="../assets/img/bg.png" alt="" />
    <vue-particles color="#dedede" class="particles"></vue-particles>
    <div class="contene">
      <div class="login">
        <div class="login_title">Iniciar Sesión</div>
        <span>
          <label for="email">Email</label>
          <input type="email" name="email" />
        </span>
        <span>
          <label for="password">Contraseña</label>
          <input type="password" name="password" />
        </span>
        <span>
          <div class="login_iniciar">
            <router-link to="/panel" class="main_menu_link">
              Iniciar Sesión</router-link
            >
          </div>
        </span>
        <span>
          <div class="login_forgot">Olvidaste la contraseña?</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {}
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
input {
  border: 1px solid #000;
  line-height: 1.5;
  border-radius: 4px;
}
</style>
