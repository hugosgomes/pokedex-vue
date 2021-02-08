import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home/Home.vue";
import Details from "@/components/Details/Details.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/pokemon/:id", component: Details },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
