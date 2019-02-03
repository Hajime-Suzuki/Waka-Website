<template lang='pug'>
  .container
    .indication
      p -3-
      p Videos
    svg.dots
      use(xlink:href='#dots')
    .bio-line
      p The girl, straight out of Tokyo and Mississippi, moved to the Netherlands to study Jazz Voice. Since her relocation to the NL, she has been involved in multiple projects of hers such as HBB, WAKA4tet, JAZAMBEI and Waka & Tiago.
    svg.dots
      use(xlink:href='#dots')
    .video-container
      .video
        iframe(src="https://www.youtube.com/watch?v=dWKE4jXrjV8" frameborder="0" allowfullscreen)
        h3.caption WAKA4TET At JZ brat Sound of Tokyo
      .video
        iframe(src="https://vimeo.com/277906972" frameborder="0" allowfullscreen)
        h3.caption HBB music video 'Ela é Carioca'
      .video
        iframe(src="https://www.youtube.com/watch?time_continue=3&v=Dwts_sraxeY" frameborder="0" allowfullscreen)
        h3.caption SUS2 at TivoliVredenburg 
      .video
        iframe(src="https://www.youtube.com/watch?v=8XNNGI-rRi0" frameborder="0"  allowfullscreen)
        h3.caption WAKA4TET At Morrow's
    .indication.indication-bottom
      p -3-
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/components/var";
@import "../scss/components/mixin";

.video-container {
  margin: $MARGIN_VALUE 0;
  @include desktop_s() {
    @include flex();
    flex-wrap: wrap;
  }
}
.video {
  margin: $MARGIN_VALUE 0;
  @include desktop_s() {
    margin: 30px 1vw;
  }
}
iframe {
  width: 100vw - $MARGIN_VALUE_SIDE * 2;
  height: (100vw - $MARGIN_VALUE_SIDE * 2) * (9/16);
  @include desktop_s() {
    width: (94vw - $MARGIN_VALUE_SIDE_PC * 2) / 2;
    max-width: $MAX_WIDTH_PC;
    height: ((98vw - $MARGIN_VALUE_SIDE_PC * 2) / 2) * (9/16);
  }
}

.caption {
  font-size: $FONT_SIZE_BODY;
  color: lighten($FONT_COLOR, 30%);
}
</style>
