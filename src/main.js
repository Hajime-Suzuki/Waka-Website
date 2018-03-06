import Vue from 'vue'
import App from './App.vue'

import store from './store/store'

import './svg/dots.svg'
import './svg/facebook.svg'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
