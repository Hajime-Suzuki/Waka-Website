<template lang='pug'>
  .menu(:class='{isActive : menuActive}')
    .open(@click='open'  @closeImg='test' :class='{isActive : menuActive}')
      li
      li
      li
    .menu-items(:class='{isActive : menuActive}')
      h3 -CHAPTERS-
      .item(v-for='item in menuItems')
        li(v-scroll-to="item.link" @click='clickMenu(item.link)') {{item.name}}
</template>

<script>
export default {
  data() {
    return {
      menuActive: false,
      menuItems: [
        { name: 'Top', link: '#top' },
        { name: 'About', link: '#about' },
        { name: 'Photos', link: '#photos' },
        { name: 'Videos', link: '#videos' },
        { name: 'Contact', link: '#contact' }
      ]
    }
  },
  methods: {
    test() {
      console.log(':;adfadfadfa')
    },
    open() {
      this.menuActive = !this.menuActive
    },
    clickMenu(position) {
      this.menuActive = false
      if (this.$route.name === 'gallery') {
        this.$router.push({ name: 'main', params: { position } })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/components/var';
$menubar_size: 250px;
$speed: 0.5s;
.menu {
  position: fixed;
  width: $menubar_size;
  height: 100vh;
  top: 0;
  right: - $menubar_size - 50px;
  z-index: 999;
  background-color: $MAINCOLOR_green1;
  transition: $speed;
  box-shadow: 0px -20px 20px rgb(126, 126, 126);
  &.isActive {
    right: 0;
  }
}
.open {
  $size: 45px;
  height: $size;
  width: $size;
  padding: 2px;
  position: fixed;
  top: 0;
  right: 0;
  transition: $speed - 0.2;

  li {
    margin: 6px;
    height: 4px;
    background-color: rgb(182, 182, 182);
    transition: $speed;
  }
  &.isActive li {
    background-color: lighten($MAINCOLOR_gray1, 15%);
    &:nth-child(1) {
      transform: translate(0px, 10px) rotate(-45deg);
    }
    &:nth-child(2) {
      opacity: 0;
      transform: translate(-20px, 0);
    }
    &:nth-child(3) {
      transform: translate(0px, -10px) rotate(45deg);
    }
  }
}
.menu-items {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  %item {
    text-align: center;
    font-size: $FONT_SIZE_H4;
    letter-spacing: 0.1em;
    margin: 20px;
    color: $MAINCOLOR_gray3;
  }
  li {
    @extend %item;
  }

  h3 {
    @extend %item;
    letter-spacing: 0.3em;
    color: lighten($MAINCOLOR_gray3, 25%);
  }
}
</style>
