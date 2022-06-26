import { createRouter, createWebHistory} from "vue-router";
import ACom from "../components/ACom.vue";

const routes = [
  {
    path: "/micro-vue/a-com",
    name: "ACom",
    component: ACom
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;