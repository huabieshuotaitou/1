import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/components/login.vue";
import Home from "@/components/home.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;
