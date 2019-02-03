<template lang='pug'>
    .gallery.container(@click='clickBody')
      h1 Gallery
      .grid(ref='grid')
        img.grid-item(v-for='num in 27' :src='"../img/gallery/1500/1500 (" + num + ").jpg"')
</template>

<script>
import navbar from "./menu.vue";

import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import "basiclightbox/dist/basicLightbox.min.css";
import * as basicLightbox from "basiclightbox";

export default {
  components: {
    navbar
  },
  data() {
    return {
      lightBoxInstance: [],
      createHTML: e => {
        const html = `<img src="${e.target.eventParam.src}">`;
        const instance = basicLightbox.create(html);
        this.lightBoxInstance.push(instance);
        instance.show();
      }
    };
  },
  mounted() {
    this.$store.state.isMenuOpen = false;
    let grid = document.querySelector(".grid");

    imagesLoaded(grid, function() {
      let msnry = new Masonry(grid, {
        itemSelector: ".grid-item",
        gutter: 10,
        fitWidth: true
      });
    });
    document.querySelectorAll(".grid-item").forEach(item => {
      item.addEventListener("click", this.createHTML);
      item.eventParam = item;
    });
  },
  destroyed() {
    this.lightBoxInstance.forEach(v => v.close());
    document.querySelectorAll(".grid-item").forEach(item => {
      item.removeEventListener("click", this.createHTML);
    });
  },
  methods: {
    clickBody() {
      this.$store.state.isMenuOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/components/var";
@import "../scss/components/mixin";

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
