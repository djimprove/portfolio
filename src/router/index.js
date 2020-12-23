import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(from)
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
