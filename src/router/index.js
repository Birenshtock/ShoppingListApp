import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import itemPage from '../views/itemPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: "/item/:itemId",
      name: "item-page",
      component: itemPage,
    },
  ]
})

export default router
