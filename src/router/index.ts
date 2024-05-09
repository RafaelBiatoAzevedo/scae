import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
  ],
});
