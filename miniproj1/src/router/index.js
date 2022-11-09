import { createRouter, createWebHistory } from 'vue-router'
import Master from '../views/Master.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Master
  },
  {
    path: '/whoiam',
    name: 'whoiam',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pages/WhoIam.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
