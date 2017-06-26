<template>
  <div>

	   <div class="columns header">
      <div class="column">
        <span>#</span>
      </div>
      <div class="column is-4">
        <span>단어</span>
      </div>
      <div class="column is-6">
        <span>뜻</span>
      </div>
      <div class="column"></div>
    </div>

    <div id="quiz-list">
      <div class="columns quiz" v-for="(quiz,index) in quizzes">
      	<div class="column">
  	      <span>{{index + 1}}</span>
  	    </div>
  	    <div class="column is-4">
  	      <span class="none">{{quiz.text}}</span>
  	    </div>
  	    <div class="column is-6">
  	      <span></span>
  	    </div>
        <div class="column"></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'words-basic',
  props: ['quizzes']
}
</script>

<style scoped>
#quiz-list {
  padding-top:10px;
  height:100%;
  min-height:350px;
  max-height:350px;
  overflow-x: hidden;
  overflow-y: scroll;
}

.columns > div:first-child {
  text-align: center;
}
.quiz:nth-child(odd) > div:nth-child(3n){
  background-color : rgba(0,136,209,0.1);
}

</style>
