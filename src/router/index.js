import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Register from '../views/Register.vue'
import Reset from '../views/Reset.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
