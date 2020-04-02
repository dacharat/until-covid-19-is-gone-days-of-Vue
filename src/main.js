import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import routes from "./routers";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({ mode: "history", routes });

export const bus = new Vue(); // for day 10 eventbus

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
