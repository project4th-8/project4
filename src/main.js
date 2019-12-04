import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from './utils/http'
import 'amfe-flexible'
import vueAxios from 'vue-axios'
import './assets/style/sc.less'
import { Step, Steps ,Cell,Icon } from 'vant';
import echarts from 'echarts'



Vue.use(Step).use(Steps).use(Cell).use(Icon);

Vue.use(vueAxios,http,echarts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
