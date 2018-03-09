<template lang='pug'>
  .main
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
  }
}
</script>

<style lang="scss" scoped>

</style>
