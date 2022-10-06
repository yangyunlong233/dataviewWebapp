<template>
  <div id="nav">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted () {
    this.set_page_width()
  },
  methods: {
    set_page_width () {
      // get screen width
      const screentWidth = window.screen.width
      // Calculate the scaling ratio
      const x = screentWidth / 1920
      document.body.style.transform = `scale(${x},${x})`
    }
  }
}
</script>

<style lang="scss">
@import "./assets/css/normalize.scss";
@import "./assets/css/main.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 1920px;
  height: 1080px;
}
</style>
