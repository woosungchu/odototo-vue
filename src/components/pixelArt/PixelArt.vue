<template>
  <div id="pixel-art-container">
    <h1 class="title">픽셀아트</h1>

    <converter></converter>
<!--
    <comments v-bind:identifier=identifier></comments>
-->

  </div>
</template>

<script>
import Comments from '@/components/common/Comments'
import Converter from './Converter'

export default {
  name: 'pixelArt',
  components:{
    Comments,
    Converter
  },
  data(){
    return{
      identifier:'pixelArt'
    }
  }
}
</script>

<style scoped>

</style>
