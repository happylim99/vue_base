import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import RouterUser from './views/Router.vue'
//import RouterUserStart from './components/RouterUser/RouterUserStart.vue'
//import RouterUserDetails from './components/RouterUser/RouterUserDetails.vue'
//import RouterUserEdit from './components/RouterUser/RouterUserEdit.vue'

const RouterUser = resolve => {
	require.ensure(['./views/Router.vue'], () => {
		resolve(require('./views/Router.vue'))
	}, 'groupLoad')
}

const RouterUserStart = resolve => {
	require.ensure(['./components/RouterUser/RouterUserStart.vue'], () => {
		resolve(require('./components/RouterUser/RouterUserStart.vue'))
	}, 'groupLoad')
}

const RouterUserDetails = resolve => {
	require.ensure(['./components/RouterUser/RouterUserDetails.vue'], () => {
		resolve(require('./components/RouterUser/RouterUserDetails.vue'))
	})
}

const RouterUserEdit = resolve => {
	require.ensure(['./components/RouterUser/RouterUserEdit.vue'], () => {
		resolve(require('./components/RouterUser/RouterUserEdit.vue'))
	})
}

//methods
function checkUserDetail(){
	alert('check user detail')
}

Vue.use(Router)

//export default new Router({
const router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition
		}
		if(to.hash) {
			return { selector: to.hash }
		}
		//return {x: 0, y: 700};
	},

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
      name: 'server-view',
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
      name: 'bar-quotes',
      component: () => import('./views/BarQuote.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('./views/Form.vue')
    },
    {
      path: '/directives',
      name: 'directives',
      component: () => import('./views/Directive.vue')
	},
	{
	  path: '/filter',
	  name: 'filters',
	  component: () => import('./views/Filter.vue')
	},
	{
	  path: '/mixins',
	  name: 'mixins',
	  component: () => import('./views/FruitList.vue')
	},
	{
	  path: '/animation',
	  name: 'animation',
	  component: () => import('./views/Animation.vue')
	},
	{
	  path: '/question',
	  name: 'question',
	  component: () => import('./views/Question.vue')
	},
	{
	  path: '/vue_resource',
	  name: 'vue_resource',
	  component: () => import('./views/VueResource.vue')
	},
	{
	  path: '/redirect-me',
	  redirect: { name: 'home' }
	},
	{
	  path: '/router_user',
	  component: RouterUser,
	  children: [
		{
			path: '',
			components: {
				default: Home,
				'top': RouterUserStart
			}
		},
		{
			path: ':id',
			component: RouterUserDetails,
			/*
			beforeEnter: (to, from, next) => {
				alert('before enter')
				next()
			}
			*/
			/*
			beforeEnter: (to, from, next) => {
				checkUserDetail()
				next()
			}
			*/
		},
		{
			path: ':id/edit',
			name: 'routerUserEdit',
			component: RouterUserEdit
		}
	  ]
	},
	{
	  path: '*',
	  redirect: '/'
	},
  ]
})
/*
router.beforeEach((to, from, next) => {
	alert('check route')
	next()
	//next(false)
	//next('/')
	//next({})
})
*/

export default router
