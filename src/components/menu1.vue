<template lang='pug'>
  .menu(v-bind:class='{isActive : menuActive}')
    .open(@click='open')
      li
      li
      li
    p {{menuActive}}
    .close
      li
      li

    .menu-items
      li
        a(href='#top') Top
      li
        a(href='#about') About
      li
        a(href='#photos') Photos
      li
        a(href='#videos') Videos
      li
        a(href='#contact') Contact
</template>

<script>
export default {
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    open() {
      this.menuActive = !this.menuActive
    }
  }
}
</script>

<style lang="scss" scoped>
.open {
  $size: 45px;
  height: $size;
  width: $size;
  padding: 5px;
  top: 5px;
  z-index: 9999;
  li {
    margin: 6px;
    height: 5px;
    background-color: rgb(222, 222, 222);
  }
}
</style>
