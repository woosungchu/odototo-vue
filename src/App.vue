<template>
  <div id="app">
    <headerv></headerv>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section">
  </div>
</template>

<script>
import Headerv from '@/components/common/Headerv'

export default {
  name: 'app',
  components: {
    Headerv
  }
}
</script>
<!-- styling for the component -->
<style>
@import 'assets/css/common.css';

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
