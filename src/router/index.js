import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/Home.vue";
import EventView from "../views/Events.vue";
import SisterhoodView from "../views/Sisterhood.vue";
import AboutView from "../views/About.vue";
import ImpactView from "../views/Impact.vue";
import ApplyView from "../views/Apply.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/events",
      name: "events",
      component: EventView,
    },
    {
      path: "/sisterhood",
      name: "sisterhood",
      component: SisterhoodView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/impact",
      name: "impact",
      component: ImpactView,
    },
    {
      path: "/apply",
      name: "apply",
      component: ApplyView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
