import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import VueRouter from 'vue-router'
import vueScrollto from 'vue-scrollto'

import gallery from './components/gallery.vue'
import main from './components/main.vue'

import './svg/dots.svg'
import './svg/facebook.svg'
import './svg/instagram.svg'
import './svg/instagram.svg'

Vue.use(VueRouter)

// import { VueMasonryPlugin } from 'vue-masonry'
// Vue.use(VueMasonryPlugin)

Vue.use(vueScrollto, {
  duration: 1000,
  easing: 'ease-in-out'
})

const router = new VueRouter({
  routes: [
    { path: '/gallery', component: gallery, name: 'gallery' },
    { path: '/', component: main, name: 'main' }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let position

        if (to.params.position) position = { selector: to.params.position }
        else if (savedPosition) position = savedPosition
        else position = { x: 0, y: 0 }

        resolve(position)
      }, 1000)
    })
  }
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
