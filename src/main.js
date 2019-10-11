import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Home from './views/Home.vue'
import VueResource from 'vue-resource'

/*
router.beforeEach((to, from, next) => {
	alert('main check route')
	next()
	//next(false)
	//next('/')
	//next({})
})
*/

Vue.use(VueResource)

Vue.http.options.root = 'https://vuecli3-37025.firebaseio.com/'

Vue.http.interceptors.push((request, next) => {
	console.log(request)
	if(request.method == 'POST') {
		request.method = 'PUT'
	}
	next(
		response => {
		response.json = () => { return { messages: response.body} }
	}
	)
})

Vue.config.productionTip = false

//global component
Vue.component('app-servers', Home)

//export const eventBus = new Vue();

export const eventBus = new Vue({
    methods: {
        changeAge(age) {
            this.$emit('ageWasEdited', age);
        }
    }
});

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        //el.style.backgroundColor = 'green'
				//el.style.backgroundColor = binding.value;
        if(binding.arg == 'background') {
            el.style.backgroundColor = binding.value
        } else {
            el.style.color = binding.value
        }
    }
})

Vue.directive('delay', {
	bind(el, binding, vnode) {
			//el.style.backgroundColor = 'green'
			//el.style.backgroundColor = binding.value;
			var delay = 0;
			if(binding.modifiers['delayed']) {
					delay = 3000
			}

			setTimeout(() => {
				if(binding.arg == 'background') {
					el.style.backgroundColor = binding.value
			} else {
					el.style.color = binding.value
			}
			}, delay)
	}
})

Vue.filter('toLowercase', function(value) {
	return value.toLowerCase();
})

Vue.mixin({
	created() {
		// console.log('Global maxin')
	}
})

new Vue({
  data: {
    title: 'this is title'
  },
	router,
	store,
    render: h => h(App)
}).$mount('#app')
