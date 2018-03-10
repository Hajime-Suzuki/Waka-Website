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
    //- .button(@click='toTop') Back
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
        const html = `<img src="${e.target.eventParam.src}">`
        this.lightBoxInstance.push(basicLightbox.create(html))
        basicLightbox.create(html).show()
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
    // toTop() {
    //   this.$router.push({ name: 'main', params: { position: '#photos' } })
    // }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/components/var';
@import '../scss/components/mixin';

h1 {
  color: $MAINCOLOR_gray3;
  text-align: center;
  font-family: $H_FONT;
}

.gallery {
  min-height: 100vh;
  padding-bottom: $MARGIN_VALUE;
}
.grid {
  margin: $MARGIN_VALUE auto 0;
}
.grid-item {
  width: 100%;
  margin-bottom: 10px;
  @include tablet() {
    width: 48%;
    margin-bottom: 10px;
  }
}
</style>
