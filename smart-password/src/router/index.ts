// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("@/views/Register.vue"),
      },
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
