<template>
  <div id="app">
    <div id="page_wrapper" class="page-wrapper">
      <app-header></app-header>
      <app-slide-image-framework></app-slide-image-framework>
      <app-home-body></app-home-body>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import BodyHomeVue from './components/BodyHome.vue';
import HeaderVue from './components/Header.vue';
import SlideImageFrameworkVue from './components/SlideImageFramework.vue';
import FooterVue from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    appHeader: HeaderVue,
    appHomeBody: BodyHomeVue,
    appSlideImageFramework: SlideImageFrameworkVue,
    appFooter: FooterVue,
  },
  mounted() {
  },
  methods: {

  },
};
</script>

<style lang="scss">
#app {
  font-family: Maison Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}
.page-wrapper {
  overflow: auto;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.text-red {
  color: #ef0d33 !important;
}
.text-blue {
  color: #007bff !important;
}
.btn-blue {
  background-color: #007afc !important;
  color: #fff !important;
}
.btn-white {
  background-color: transparent;
  color: #fff !important;
  border: 2px solid #fff !important;
}

</style>
