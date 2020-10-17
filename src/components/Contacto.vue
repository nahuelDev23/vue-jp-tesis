<template>
  <!--contactenos-->
  <div class="contactenos">
    <img class="contactenos_bg" src="../assets/img/contactobg.webp" alt="" />
    <div class="contactenos_container">
      <div class="contactenos_title" name="tres" id="tres">
        Estamos para ayudarte
      </div>
      <form class="contactenos_form" action="">
        <span>
          <label for="name">Nombre</label>
          <input type="text" id="name" />
        </span>
        <span>
          <label for="telefono">Telefono</label>
          <input type="phone" id="telefono" />
        </span>
        <span>
          <label for="Email">Email</label>
          <input type="email" id="Email" />
        </span>
        <span>
          <label for="Motivo">Motivo</label>
          <input type="text" id="Motivo" />
        </span>
        <span>
          <label for="Mensaje">Mensaje</label>
          <textarea name="Mensaje" id="Mensaje" cols="30" rows="10"></textarea>
        </span>
        <div class="contactenos_form_enviar">
          Enviar
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contacto"
};
</script>
