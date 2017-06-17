<template>
  <nav id="headerv" class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link id="logo" v-bind:to="'/'" class="navbar-brand">
          오동통통
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'headerv'
}
</script>


<style scoped>
#headerv {
  background-color: rgba(39,137,216,.95);
  border : 0;
}

#logo {
  color: white;
}
</style>
