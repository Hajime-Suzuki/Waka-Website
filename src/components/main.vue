<template lang='pug'>
    .main(@click='clickBody')
      top#top
      about#about
      photos#photos
      videos#videos
      contact#contact
</template>

<script>
import top from './top'
import about from './about'
import photos from './photos'
import videos from './videos'
import contact from './contact'
import navbar from './menu'

export default {
  components: {
    top,
    about,
    photos,
    videos,
    contact,
    navbar
  },
  methods: {
    clickBody() {
      this.$store.state.isMenuOpen = false
    }
  },
  mounted() {
    this.$store.state.isMenuOpen = false
  }
}
</script>

<style lang="scss" scoped>

</style>
