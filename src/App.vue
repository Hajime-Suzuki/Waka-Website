<template lang='pug'>
  .app
    top
    about
    photos
    videos
    contact
</template>


<script>
import top from './components/top'
import about from './components/about'
import photos from './components/photos'
import videos from './components/videos'
import contact from './components/contact'

export default {
  components: {
    top,
    about,
    photos,
    videos,
    contact
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
