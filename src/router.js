import CustomerList from "./pages/customer/CustomerList.vue";
import CustomerAdd from "./pages/customer/CustomerAdd.vue";
import NotFound404 from "./pages/error404/NotFound404.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "CustomerList", component: CustomerList },
  { path: "/customer/add", name: "CustomerAdd", component: CustomerAdd },
  // { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound404 },
  ,
];
const routers = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default routers;
