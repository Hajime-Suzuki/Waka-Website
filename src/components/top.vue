<template lang='pug'>
  .top
    //- navbar
    .container.h100
    h1.logo WAKA
</template>

<script>
// import navbar from './menu.vue'
export default {
  // components: { navbar }
}
</script>

<style lang="scss" scoped>
@import '../scss/components/var';
@import '../scss/components/mixin';

.top {
  position: relative;
}
.h100 {
  height: 100vh;
  width: 100%;
}
.container {
  background-image: url('../img/top-mobile.jpg');
  background-size: cover;
  background-position: center;
  @include desktop_s() {
    background-image: url('../img/top2.jpg');
    background-position: top;
  }
}
.logo {
  color: rgb(231, 231, 231);
  font-size: 90px;
  height: 90px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15%;
  margin: auto;
  font-family: $H_FONT;
  z-index: 10;
  color: rgb(218, 216, 216);
  letter-spacing: 0.5em;
  @include phone() {
    display: none;
  }
}
</style>
