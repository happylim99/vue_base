import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/server-view',
      name: 'server view',
      component: () => import('./views/ServerView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/User.vue')
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: () => import('./views/Quote.vue')
    },
    {
      path: '/bar-quotes',
      name: 'bar quotes',
      component: () => import('./views/BarQuote.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('./views/Form.vue')
    }
  ]
})
