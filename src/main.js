import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueParticles from "vue-particles";
import vuetify from "./assets/plugins/vuetify"; // path to vuetify export
import PrettyCheckbox from 'pretty-checkbox-vue';
Vue.use(PrettyCheckbox);
var VueScrollTo = require("vue-scrollto");

Vue.use(VueParticles);
Vue.use(VueScrollTo);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
