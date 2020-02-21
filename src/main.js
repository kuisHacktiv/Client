import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.prototype.$socket = io.connect('https://kuis-hacktiv.herokuapp.com')
Vue.prototype.$baseUrl = 'https://kuis-hacktiv.herokuapp.com'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
