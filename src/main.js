import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/vuematerial'
import './plugins/scroll'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// Recompute vh to avoid status bar issue
// see https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
