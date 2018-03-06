<template lang='pug'>
  .container.bg-purple
    .indication
      p -4-
      p Contact
    svg.dots
      use(xlink:href='#dots')
    .bio-line
      p.first-white
        | With her uniquely captivating voice that is warm and soothing, she enchanted her audience with classics like ‘East Of The Sun’, but also with her unique take on numbers like Nick Drake’s ‘Riverman’, and her own arrangement of all-time Bossa Nova favorite ‘Dindi’, in her performance in Utrecht Jazz festival 2017 at TivoliVredenburg, UT
    svg.dots
      use(xlink:href='#dots')

    .contact-info
      h1 WAKA
      p.singer Jazz Singer
      a(href='https://www.facebook.com/WAKASOUND/')
        svg.facebook
          use(xlink:href='#facebook')
      p mail@mail.com
    .indication.indication-bottom
      p -4-
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../scss/components/var';

p {
  color: $MAINCOLOR_white1;
}

.contact-info {
  margin-top: $MARGIN_VALUE;
  $width: 30px;

  a {
    display: block;
    width: $width;
    height: $width;
    margin: $MARGIN_VALUE/2 auto;
  }
  svg {
    width: $width;
    height: $width;
    fill: lighten($MAINCOLOR_gray1, 50%);
  }
  h1 {
    color: $MAINCOLOR_white1;
    font-size: $FONT_SIZE_H1 * 1.3;
    font-family: $H_FONT;
  }
  p {
    margin: 0;
    text-align: center;
  }
  .singer {
  }
}
</style>
