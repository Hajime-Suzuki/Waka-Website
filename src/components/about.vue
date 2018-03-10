<template lang='pug'>
  .container
    .indication
      p -1-
      p About
    svg.dots
      use(xlink:href='#dots')
    .bio-line
      p Waka is a jazz singer from the most unlikely of backgrounds. She was born in the heart of the city of Tokyo, growing up in a typical tiny city-apartment, without any music around her but the deepest silence.
      p Since her childhood, she promptly did whatever her curiosity took her; taking magic lessons, practicing Kendo, going to dancing schools. When she  turned 16 years old, she made a decision to leave Tokyo for a while and live somewhere else. She got enrolled to a local high school in the middle of cotton fields in the state of Mississippi, the U.S., where she had her destined encounters of her life, Philosophy and Jazz.
    svg.dots
      use(xlink:href='#dots')
    img(src='../img/about.jpg')
    .indication.indication-bottom
      p -1-
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../scss/components/var';

img {
  margin-top: $MARGIN_VALUE;
  width: 100%;
  @include desktop_s() {
    // width: calc(100% - #{$MARGIN_VALUE_SIDE_PC} *2);
    // width: 100%;
    max-width: $MAX_WIDTH_PC;
    display: block;
    margin: $MARGIN_VALUE_PC auto;
  }
}
</style>
