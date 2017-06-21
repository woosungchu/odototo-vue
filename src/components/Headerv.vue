<template>
<nav id="headerv" class="nav">
  <div class="container">
    <div class="nav-left">
      <router-link id="logo" v-bind:to="'/'" class="nav-item is-active">
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
  font-size: 1.2rem;
}
</style>
