<template>
  <div>
    <h1 class="title">빈칸 채우기</h1>
    <converter></converter>
    <guide></guide>
    <comments v-bind:identifier=identifier></comments>
  </div>
</template>

<script>
import Converter from './Converter'
import Guide from './Guide'
import Comments from '@/components/common/Comments'

export default {
  name: 'blank',
  components:{
    Converter,
    Guide,
  	Comments
  },
  data () {
    return {
      msg: 'Try Blank!',
      identifier : 'blank'
    }
  }
}
</script>

<style scoped>
</style>
