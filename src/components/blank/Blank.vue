<template>
  <div>
    <h1 class="title">빈칸 채우기</h1>
    <converter></converter>
    <guide></guide>
  </div>
</template>

<script>
import Converter from './Converter'
import Guide from './Guide'

export default {
  name: 'blank',
  components:{
    Converter,
    Guide
  },
  data () {
    return {
      msg: 'Try Blank!'
    }
  }
}
</script>

<style scoped>
</style>
