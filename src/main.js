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

new Vue({
  data: {
    title: 'this is title'
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
