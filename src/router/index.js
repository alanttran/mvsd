import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/Home.vue";
import EventView from "../views/Events.vue";
import SisterhoodView from "../views/Sisterhood.vue";
import AboutView from "../views/About.vue";
import ImpactView from "../views/Impact.vue";
import ApplyView from "../views/Apply.vue";
import ReignView from "../views/Reign.vue";
import CompetitionView from "../views/Competition.vue";

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
      path: "/reign",
      name: "reign",
      component: ReignView,
    },
    {
      path: "/competition",
      name: "competition",
      component: CompetitionView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "home",
      component: HomeView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // If there's a hash, scroll to the element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80, // Offset for fixed navbar
      };
    }
    // If there's a saved position (browser back/forward), use it
    if (savedPosition) {
      return savedPosition;
    }
    // Otherwise, scroll to top
    return { top: 0 };
  },
});

export default router;
