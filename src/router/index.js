import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/informations',
    name: 'informations',
    component: () => import('../views/Informations.vue')
  },
  {
    path: '/myfans',
    name: 'myfans',
    component: () => import('../views/Myfans.vue')
  },
  {
    path: '/attention',
    name: 'attention',
    component: () => import('../views/Attention.vue')
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: () => import('../views/Authentication.vue')
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    component: () => import('../views/Dynamic.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/Comment.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/safety',
    name: 'safety',
    component: () => import('../views/Safety.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
