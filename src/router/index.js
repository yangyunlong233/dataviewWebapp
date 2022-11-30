import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List')
  },
  {
    path: '/device',
    name: 'Device',
    component: () => import('../views/Device')
  },
  {
    path: '/mapinner',
    name: 'MapInner',
    component: () => import('../views/MapInner')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
