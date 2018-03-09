<template lang='pug'>
  .gallery.container
    navbar
    h1 Gallery
    //- .grid(ref='grid' class="pswp")
    //-   .pswp__scroll-wrap
    //-     .pswp__container
    //-       img.grid-item.pswp__item(v-for='num in 27' :src='"../img/gallery/1500/1500 (" + num + ").jpg"')
    .grid(ref='grid')
      img.grid-item(v-for='num in 27' :src='"../img/gallery/1500/1500 (" + num + ").jpg"' @click='clickImg')
</template>

<script>
import navbar from './menu.vue'

import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesLoaded'
import 'basicLightbox/dist/basicLightbox.min.css'
import * as basicLightbox from 'basiclightbox'
// import { VueMasonryPlugin } from 'vue-masonry'
// Vue.use(VueMasonryPlugin)

// import Vue from 'vue'
// import { VueMasonryPlugin } from 'vue-masonry'
// Vue.use(VueMasonryPlugin)

export default {
  components: {
    navbar
  },
  data() {
    return {
      lightBoxInstance: [],
      createHTML: e => {
        console.log(e.target.eventParam.src)
        const html = `<img src="${e.target.eventParam.src}">`
        this.lightBoxInstance.push(basicLightbox.create(html))
        basicLightbox.create(html).show()
        // console.log(this.lightBoxInstance)
      }
    }
  },
  mounted() {
    let grid = document.querySelector('.grid')

    imagesLoaded(grid, function() {
      let msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 10,
        fitWidth: true
      })
    })

    document.querySelectorAll('.grid-item').forEach(item => {
      item.addEventListener('click', this.createHTML)
      item.eventParam = item
    })
  },
  destroyed() {
    document.querySelectorAll('.grid-item').forEach(item => {
      item.removeEventListener('click', this.createHTML)
    })
  },
  methods: {
    clickImg() {
      console.log('close')
      this.$emit('closeImg')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/components/var';

h1 {
  color: $MAINCOLOR_gray3;
  text-align: center;
}

.gallery {
  min-height: 100vh;
}
.grid {
  margin: 0 auto;
}
.grid-item {
  width: 30%;
  min-width: 150px;
  margin-bottom: 10px;
}
</style>
