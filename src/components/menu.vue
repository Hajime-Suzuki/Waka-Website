<template lang='pug'>
  .menu(:class='{isActive : menuActive}')
    .open(@click='open' :class='{isActive : menuActive}')
      li
      li
      li

    .menu-items(:class='{isActive : menuActive}')
      .item(v-for='item in menuItems')
        li
          a(:href='item.link') {{item.name}}
      //- li
      //-   a(href='#top') Top
      //- li
      //-   a(href='#about') About
      //- li
      //-   a(href='#photos') Photos
      //- li
      //-   a(href='#videos') Videos
      //- li
      //-   a(href='#contact') Contact
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
    open() {
      this.menuActive = !this.menuActive
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
  z-index: 9999;
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
  li {
    text-align: center;
    font-size: $FONT_SIZE_H4;
    letter-spacing: 0.1em;
    margin: 20px;
  }

  a {
    color: $MAINCOLOR_gray3;
  }
}
</style>
