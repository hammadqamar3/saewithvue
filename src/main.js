import Vue from "vue";
import Clipboard from "v-clipboard";
import App from "./App.vue";
import router from "./router";

import "../src/assets/css/general.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery.js";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false;
Vue.use(Clipboard);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
