import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../src/style/main.css";
import { ValidationProvider } from "vee-validate";
import CustomValidation from "@/custom/validation";
import routes from "./router";
import VueRouter from "vue-router";
import moment from "moment";
// IMPORTED
import '@/style/element-ui/main.scss'
Vue.config.productionTip = false;
Vue.prototype.moment = moment;
Vue.component("ValidationProvider", ValidationProvider);
Vue.use(ElementUI);
Vue.use(CustomValidation);
// Vue.use(VueRouter);
// Vue.use(routes);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
