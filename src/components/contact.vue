<template lang='pug'>
  .container.bg-purple
    svg.dots
      use(xlink:href='#dots')
    p With her uniquely captivating voice that is warm and soothing, she enchanted her audience with classics like ‘East Of The Sun’, but also with her unique take on numbers like Nick Drake’s ‘Riverman’, and her own arrangement of all-time Bossa Nova favorite ‘Dindi’, in her performance in Utrecht Jazz festival 2017 at TivoliVredenburg, UT
    svg.dots
      use(xlink:href='#dots')
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../scss/components/var';

p {
  color: $MAINCOLOR_white1;
}
</style>
