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
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/fipu',
    name: 'fipu',
    component: () => import(/* webpackChunkName: "fipu" */ '../views/fipu.vue')
  },
  {
    path: '/ffpu',
    name: 'ffpu',
    component: () => import(/* webpackChunkName: "ffpu" */ '../views/ffpu.vue')
  },
  {
    path: '/fet',
    name: 'fet',
    component: () => import(/* webpackChunkName: "fet" */ '../views/fet.vue')
  },
  {
    path: '/favoriti',
    name: 'favoriti',
    component: () => import(/* webpackChunkName: "favoriti" */ '../views/favoriti.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
