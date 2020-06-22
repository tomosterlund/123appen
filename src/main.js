import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Body from './AppBody.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

export const eventBus = new Vue();

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.component('appHeader', Header)
Vue.component('appBody', Body)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
