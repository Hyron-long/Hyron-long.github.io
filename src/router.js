import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import Article from "./pages/article.vue";
import Tech from "./pages/tech.vue";
import Photography from "./pages/photography.vue";
import About from "./pages/about.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/article", name: "Article", component: Article },
  { path: "/tech-stack", name: "Tech", component: Tech },
  { path: "/photography", name: "Photography", component: Photography },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
