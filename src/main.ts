import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index.ts'
//初始化样式
import "@/assets/css/reset.css"

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false
//全局引入http,且挂载在vue原型上
import { $http } from '@/axiosRequest/request'
Vue.prototype.$http = $http;
//引入mock
require('@/mock')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
