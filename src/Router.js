import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import PerfilComponent from './components/PerfilComponent.vue';
import SubordinadosComponent from './components/SubordinadosComponent.vue';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/login', component: LoginComponent },
  { path: '/perfil', component: PerfilComponent },
  { path: '/subordinados', component: SubordinadosComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
