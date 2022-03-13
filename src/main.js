/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: LiYansheng
 * @Date: 2022-03-13 13:38:59
 * @LastEditors: CoderXZ
 * @LastEditTime: 2022-03-13 21:32:15
 */
import Vue from 'vue'
import App from './App.vue'

import router from './router/index'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' //这行别忘了，否则不生效

Vue.use(ElementUI)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
