import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueScrollmagic from "vue-scrollmagic"

Vue.config.productionTip = false;
Vue.use(VueScrollmagic)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
