import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";
import AppActivities from "../views/AppActivities.vue";

const routes = [
    { path: "/", component: AppHome },
    { path: "/activities", component: AppActivities },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
