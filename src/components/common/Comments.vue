<template>
  <div class="comments">
    <disqus shortname="odototo" :identifier=identifier></disqus>
  </div>
</template>

<script>
import Disqus from 'vue-disqus/VueDisqus.vue'

export default {
  name: 'comments',
  props: ['identifier'],
  components: {
    Disqus
  }
}
</script>