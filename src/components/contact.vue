<template lang='pug'>
  .container.bg-purple
    .indication
      p -4-
      p Contact
    svg.dots
      use(xlink:href='#dots')
    .bio-line
      p.first-white
        | With her uniquely captivating voice that is organic and warm, she enchanted her audience with Jazz classics like ‘East Of The Sun’, but also with a powerful Samba like Elis Regina’s ‘Menino das Laranjas’, and her own arrangement of all time Bossa Nova favorite ‘Dindi'. She has sung in numerous festivals such as Utrecht Jazz festival, Jazz on the Sofa Festival, Middelheim Jazz festival, North Sea Jazz festival, Sapporo City Jazz Festival, and venues like TivoliVredenburg and JZ Brat SOUND OF TOKYO.
    svg.dots
      use(xlink:href='#dots')

    .contact-info
      h1 WAKA
      p.singer a singer, a thinker, a humanitarian
      .icons
        a(href='https://www.facebook.com/WAKASOUND/')
          svg.facebook
            use(xlink:href='#facebook')
        a(href='https://www.instagram.com/waka.sound/')
          svg.facebook
            use(xlink:href='#instagram')
      p wakasound@gmail.com
    .indication.indication-bottom
      p -4-
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/components/var";

p {
  color: $MAINCOLOR_white1;
}

.contact-info {
  margin-top: $MARGIN_VALUE;
  margin-top: $MARGIN_VALUE_PC;

  h1 {
    color: $MAINCOLOR_white1;
    font-size: $FONT_SIZE_H1 * 1.3;
    font-family: $H_FONT;
    letter-spacing: 0.2em;
  }
  p {
    margin: 0;
    text-align: center;
  }
}

.icons {
  $width: 30px;
  display: flex;
  width: 100px;
  margin: auto;
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
    transition: 0.5s;
    &:hover {
      fill: lighten($MAINCOLOR_gray1, 10%);
    }
  }
}
</style>
