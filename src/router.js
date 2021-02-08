import Home from "./components/Home/Home.vue";
import Details from "./components/Details/Details.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/pokemon/:id", component: Details },
];

export const router = new VueRouter({
  routes, // short for `routes: routes`
});
