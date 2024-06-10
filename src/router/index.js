import { createRouter, createWebHistory } from 'vue-router';
import CharacterAPI from '../views/CharacterAPI.vue'

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: CharacterAPI
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
