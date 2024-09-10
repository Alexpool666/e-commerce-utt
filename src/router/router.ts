import { createRouter, createWebHistory } from "vue-router";

import RegisterView from "../views/Register.vue";
import LoginView from "../views/Login.vue";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "initial",
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (!localStorage.getItem('user')) {
          next('/login');
        } else {
          next();
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginView
    },
    {
      path: "/registro",
      name: "register",
      component: RegisterView
    }
  ],
});

export default router;