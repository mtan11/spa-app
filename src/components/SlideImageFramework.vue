<template>
  <div id="framework">
    <div class="m-tech-slideshow">
      <div class="m-mover">
        <img src="../assets/logo-vuejs-min.png" />
        <img src="../assets/logo-laravel.png" />
        <img src="../assets/logo-flutter.png" />
        <img src="../assets/logo-swift.png" />
        <img src="../assets/logo-leaflet.png" />
        <img src="../assets/logo-mapbox.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Start slide show
.m-tech-slideshow {
  height: 180px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-self: center;
}

.m-mover {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  img {
    display: inline-block;
    vertical-align: middle;
    width: 160px;
    margin: 0 20px;
  }
}
</style>
