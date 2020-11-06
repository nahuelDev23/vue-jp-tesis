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
              <img src="../assets/img/team/jp.jpg" alt="" />
            </li>
            <li class="main_menu_list">
              <router-link to="/" class="main_menu_link">Salir</router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="panel">
      <div class="panel_header">
        <div class="panel_header_objetivos">Objetivos</div>
        <div class="panel_header_buscador">
          <i class="fas fa-search"></i
          ><input type="text" placeholder="Buscar" />
        </div>
        <div class="panel_header_agregar" @click="openModal">
          <span>Agregar</span>
        </div>
      </div>

      <table class="panel_table">
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha de Carga</th>
          <th>Status</th>
          <th>Descargar</th>
        </tr>
        <tr>
          <td>Diego </td>
          <td>Esteve</td>
          <td>17/10/2020</td>
          <td><span class="finalizado">Finalizado</span></td>
          <td>
            <a href="descargas/TESIS.pdf" download
              ><i class="fas fa-cloud-download-alt"></i
            ></a>
          </td>
        </tr>
        <tr>
          <td>Gaston</td>
          <td>Mullen</td>
          <td>20/10/2020</td>
          <td><span class="proceso">En proceso</span></td>
          <td><i class="fas fa-cloud-download-alt"></i></td>
        </tr>
        <tr>
          <td>Javier</td>
          <td>Pina</td>
          <td>15/9/2020</td>
          <td><span class="verificacion"> En verificación</span></td>
          <td><i class="fas fa-cloud-download-alt"></i></td>
        </tr>
      </table>
    </div>

    <transition name="fade">
      <div class="modal" v-if="show">
        <div class="modal__dialog">
          <div class="modal__header">
            <h1>Terminos y condiciones</h1>
            <button type="button" class="modal__close" @click="closeModal()">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="modal__body">
            <p>
              Se requerira la presentacion del consentimiento escrito del
              objetivo de la busqueda adjuntando su Documento Nacional de
              Identidad y documentacion que pruebe que esa persona trabaja en la
              compañia.
            </p>
          </div>

          <div class="modal__footer">
            <div class="modal__footer_terms">
              <input type="checkbox" />
              Acepto los terminos y condiciones
            </div>
            <div class="modal__footer_aceptar">
              <div @click="openForm()">Aceptar</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="modal" v-if="showform">
        <div class="modal__dialog shadow-box">
          <div class="modal__header">
            <h1>Agregar nuevo objetivo</h1>
            <button type="button" class="modal__close" @click="closeForm()">
              <i class="fas fa-times"></i>
            </button>
          </div>

          <div class="modal__body">
            <div class="contactenos">
              <div class="contactenos_container">
                <form class="contactenos_form" action="">
                  <span>
                    <label for="name">Nombre</label>
                    <input type="text" id="name" />
                  </span>
                  <span>
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" />
                  </span>
                  <span>
                    <label for="Email">Email/s</label>
                    <input type="email" id="Email" />
                  </span>
                  <span>
                    <label for="file">Adjuntar</label>
                    <input type="file" id="file" />
                  </span>
                   <span>
                    <label for="tipo">Tipo de busqueda</label>
                    <label><input type="checkbox" id="cbox1" value="first_checkbox"> Estandar</label><br>
                    <label><input type="checkbox" id="cbox1" value="first_checkbox"> Deep / darkweb</label><br>
                  </span>
                </form>
              </div>
            </div>
          </div>

          <div class="modal__footer">
            <div class="modal__footer_aceptar">
              <div @click="closeForm()">Enviar</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Panel",
  data() {
    return {
      show: false,
      showform: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    openForm() {
      this.closeModal();
      this.showform = true;
      document.querySelector("form").classList.remove("overflow-hidden");
    },
    closeForm() {
      this.closeModal();
      this.showform = false;
    }
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
.contene {
  position: relative;
}

.main_menu {
  display: flex;
  align-items: center;

  &_list {
    & img {
      object-fit: cover;
      width: 40px;
      display: block;
      border-radius: 50%;
    }
  }
}

.panel {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  &_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    &_agregar {
      background-color: var(--color-principal);
      padding: 0.5rem;
      color: #fff;
      border-radius: 4px;
    }
    &_objetivos {
      font-weight: bold;
      font-size: 1.2rem;
    }
    &_buscador {
      color: #fff;
      & input {
        color: #fff;
        border: 1px solid #fff;
        border-radius: 2px;
        margin-left: 1rem;
        padding: 0.3rem;
      }
    }
  }
  &_table {
    text-align: center;
    width: 100%;
    border-collapse: collapse;
    align-self: center;
    color: #fff;
    margin: 1rem;
    & th,
    td {
      padding: 1rem;
    }
    & tr:nth-child(odd) {
      //background-color: #e6e6e6;
    }
  }
}
.finalizado {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
  padding: 0.3rem;
  border-radius: 2px;
}
.proceso {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
  padding: 0.3rem;
  border-radius: 2px;
}
.verificacion {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 0.3rem;
  border-radius: 2px;
}

.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 30px;
    height: 30px;
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;

    &_terms {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      & > input {
        margin-right: 0.5rem;
      }
    }
    &_aceptar {
      display: inline-block;
      background-color: var(--color-principal);
      padding: 0.5rem;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.contactenos {
  color: #000;
  &_container {
    color: #000;
  }
  &_form {
    color: #000;
    margin: 0;
    max-width: 100%;
    & span input {
      border: 1px solid #000;
      line-height: 2;
      border-radius: 4px;
    }
  }
}

.shadow-box {
  box-shadow: var(--box-shadow);
}
</style>
