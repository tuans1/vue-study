import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../src/style/main.css";
import { ValidationProvider } from "vee-validate";
import CustomValidation from "@/custom/validation";
Vue.config.productionTip = false;
Vue.component("ValidationProvider", ValidationProvider);
Vue.use(ElementUI);
Vue.use(CustomValidation);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
