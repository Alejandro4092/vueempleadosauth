import { createWebHistory, createRouter } from "vue-router";
import {HomeComponent} from "./components/HomeComponent"
const myRoutes = [
    { path: "/", component: HomeComponent },
    
];
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
});
export default router;