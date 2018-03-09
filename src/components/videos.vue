<template lang='pug'>
  .container
    .indication
      p -3-
      p Videos
    svg.dots
      use(xlink:href='#dots')
    .bio-line
      p The girl, straight out of Tokyo and Mississippi, moved to the Netherlands to study Jazz Voice. Since her relocation to the NL, she has been involved in multiple projects of hers such as HBB, Crack Anew Sofa, and SUS2.
    svg.dots
      use(xlink:href='#dots')
    .video-container
      //- .video
      //-   iframe(src="https://www.youtube.com/embed/MAUGXSVIUNM?rel=0&showinfo=1" frameborder="0" allowfullscreen)
      //-   h3.caption sus2 East of the Sun (1934) Brooks Bowman
      //- .video
      //-   iframe(src="https://www.youtube.com/embed/tN2fDgFRdEQ?rel=0&amp;showinfo=1" frameborder="0"  allowfullscreen)
      //-   h3.caption Crack Anew Sofa - Bossa Nova -
      //- .video
      //-   iframe(src="https://www.youtube.com/embed/EsDQr2PZjKY" frameborder="0" allowfullscreen)
      //-   h3.caption Crack Anew Sofa - Swing -
    .indication.indication-bottom
      p -3-
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../scss/components/var';

.video-container {
  margin: $MARGIN_VALUE 0;
}
.video {
  margin: $MARGIN_VALUE 0;
}
iframe {
  width: 100%;
  height: 200px;
}

.caption {
  font-size: $FONT_SIZE_BODY;
  color: lighten($FONT_COLOR, 30%);
}
</style>
