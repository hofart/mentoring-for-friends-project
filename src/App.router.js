import { createRouter, createWebHistory } from "vue-router";

// Routes
import { HomeRoutes } from "./features/home";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
    },
    ...HomeRoutes,
  ],
});

export default router;
