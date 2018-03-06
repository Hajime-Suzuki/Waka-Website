<template lang='pug'>
  .app
    navbar
    top#top
    about#about
    photos#photos
    videos#videos
    contact#contact
</template>


<script>
import top from './components/top'
import about from './components/about'
import photos from './components/photos'
import videos from './components/videos'
import contact from './components/contact'
import navbar from './components/menu'

export default {
  components: {
    top,
    about,
    photos,
    videos,
    contact,
    navbar
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
@import './scss/components/var';
@import './scss/components/reset';
@import './scss/components/main';

.app {
  font-family: $P_FONT;
  width: 100%;
}
</style>
