import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/assets/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/destination/:slug',
    name: 'DetailsDestination',
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DetailsDestination" */ '@/views/DetailsDestination.vue'
      ),
    children: [
      {
        path: ':experienceSlug',
        name: 'DetailsExperience',
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "DetailsExperience" */ '@/views/DetailsExperience.vue'
          )
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exists) {
        next()
      } else {
        next({ name: 'NotFound' })
      }
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "User" */ '@/views/User.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () =>
      import(/* webpackChunkName: "Account" */ '@/views/Account.vue'),
    meta: { requiresAuth: true }
  },

  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  //linkExactActiveClass: 'any-class-name-you-like'
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash
        if (to.hash === '#experience') {
          position.offset = { y: 140 }
        }
        if (document.querySelector(to.hash)) {
          return position
        }
        return false
      }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //to.meta.requiresAuth - may cause errors with nested routes
    // need to login
    if (!store.user) {
      next({
        name: 'Login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
