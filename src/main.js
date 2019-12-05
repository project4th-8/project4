import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'amfe-flexible'
import vueAxios from 'vue-axios'
import http from './utils/http'
import './assets/style/revant.less'
import './assets/style/sc.less'



Vue.use(vueAxios,http)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
