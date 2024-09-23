import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";
import AppActivities from "../views/AppActivities.vue";
import AppHistory from "../views/AppHistory.vue";
import AppContact from "../views/AppContact.vue";
import AppIndoors from "../views/AppIndoors.vue"
import AppOutdoors from "../views/AppOutdoors.vue"
import AppPrices from "../views/AppPrices.vue"

const routes = [
    { path: "/", component: AppHome },
    { path: "/activities", component: AppActivities },
    { path: "/history", component: AppHistory },
    { path: "/contact", component: AppContact },
    { path: "/indoors", component: AppIndoors },
    { path: "/outdoors", component: AppOutdoors },
    { path: "/prices", component: AppPrices },
     // Ruta para manejar 404
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
