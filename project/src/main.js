import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import arr from "./js/task-1__v-0.1";
import alertMessage from "./js/task-1__v-0.2";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

console.log(arr)
alertMessage(arr.text1)
alertMessage(arr.text2)