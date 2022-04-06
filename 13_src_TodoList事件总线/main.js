import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//应用插件

new Vue({
  el: "#app",
  /* render(h) {
    return h(App)
  }, */
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
})