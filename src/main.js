import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueNotification from "@kugatsu/vuenotification";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

// Vue.use(VueMaterial.default)

Vue.config.productionTip = false;

Vue.use(VueNotification, {
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


