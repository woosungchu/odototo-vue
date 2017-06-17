<template>
  <div id="app">
    <headerv></headerv>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Headerv from '@/components/Headerv'

export default {
  name: 'app',
  components: {
    Headerv
  }
}
</script>
<!-- styling for the component -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 14px;
  line-height: 1.5;
  color: #24292e;
  background-color: #fff;
}
</style>
