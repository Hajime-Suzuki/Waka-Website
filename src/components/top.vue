<template lang='pug'>
  .container.h100
    h1 WAKA
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../scss/components/var.scss';
.h100 {
  height: 100vh;
  width: 100%;
}
.container {
  background-image: url('../img/top.jpg');
  background-size: cover;
  background-position: 85%;
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
