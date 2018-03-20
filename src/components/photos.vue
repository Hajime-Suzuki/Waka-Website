<template lang='pug'>
  .container.bg-purple
    .indication
      p -2-
      p Photos
    svg.dots.dots-white
      use(xlink:href='#dots')
    .bio-line
      p.first-white
        | As soon as she came back to Tokyo, she started her BA study in Philosophy, which she graduated with her thesis about “Creative intuition in practice of improvisational music”. Spending her days philosophizing about Jazz music in her vintage clothing, and her nights singing in Karaoke box on her way home, it came naturally for Waka to start singing Jazz.
    svg.dots.dots-white
      use(xlink:href='#dots')
    .img-container
      img(src='../img/photo1.jpg')
      img(src='../img/photo2.jpg')
      img(src='../img/photo3.jpg')
    router-link(:to="{ name: 'gallery'}" tag='a' class='button')
      | More
    .indication.indication-bottom
      p -2-
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../scss/components/var';
@import '../scss/components/mixin';

p {
  color: $MAINCOLOR_white1;
}
.img-container {
  margin-top: $MARGIN_VALUE;
  @include desktop_s() {
    @include flex();
    margin-top: $MARGIN_VALUE_PC;
  }
  & img {
    width: 100%;
    &:nth-of-type(n + 2) {
      margin-top: $MARGIN_VALUE/2;
    }

    @include desktop_s() {
      width: 33.3%;
      &:nth-of-type(n + 2) {
        margin: 0 5px;
      }
    }
  }
}
.button {
  $color: darken($MAINCOLOR_white1, 10%);
  display: block;
  letter-spacing: 0.3em;
  width: 100px;
  padding: 3px;
  margin: $MARGIN_VALUE auto;
  color: $color;
  border: 2px solid $color;
  background-color: darken($BG_purple, 30%);
  &:hover {
    background-color: darken($BG_purple, 15%);
  }
}
</style>
