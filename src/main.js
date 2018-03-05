import Vue from 'vue'
import App from './App.vue'

import store from './store/store'

import dots from './svg/dots.svg'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
