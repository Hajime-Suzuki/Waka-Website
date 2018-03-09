<template lang='pug'>
  .top
    navbar
    .container.h100
</template>

<script>
import navbar from './menu.vue'
export default {
  components: { navbar }
}
</script>

<style lang="scss" scoped>
@import '../scss/components/var.scss';
.h100 {
  height: 100vh;
  width: 100%;
}
.container {
  background-image: url('../img/top-mobile.jpg');
  background-size: cover;
  background-position: center;
}
h1 {
  color: rgb(231, 231, 231);
  font-size: 70px;
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  margin: auto;
  font-family: $H_FONT;
}
</style>
