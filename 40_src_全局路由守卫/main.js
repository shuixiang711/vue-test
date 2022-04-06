import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index'

Vue.use(VueRouter)
new Vue({
  el: "#app",
  /* render(h) {
    return h(App)
  }, */
  render: h => h(App),
  router:router
})