import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Home from './views/Home.vue'

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

new Vue({
  data: {
    title: 'this is title'
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
