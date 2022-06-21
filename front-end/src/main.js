import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Todo : Bootstrap import 4개
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/styles2.css';

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
