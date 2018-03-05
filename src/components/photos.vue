<template lang='pug'>
  .container.bg-purple
    svg.dots
      use(xlink:href='#dots')
    p As soon as she came back to Tokyo, she started her BA study in Philosophy, which she graduated with her thesis about “Creative intuition in practice of improvisational music”. Spending her days philosophizing about Jazz music in her vintage clothing, and her nights singing in Karaoke box on her way home, it came naturally for Waka to start singing Jazz.
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
