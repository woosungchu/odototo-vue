<template>
  <div>
  	<div class="columns header">
      <div class="column">
        <span>#</span>
      </div>
      <div class="column is-3">
        <span>단어</span>
      </div>
      <div class="column is-2"></div>
      <div class="column is-6">
        <span>뜻</span>
      </div>
    </div>
    
    <div class="columns" v-for="(quiz,index) in quizzes">
    	<div class="column">
	      <span>{{index + 1}}</span>
	    </div>
	    <div class="column is-3">
	      <span class="none">{{quiz.text}}</span>
	    </div>
	    <div class="column is-2 dot-in"></div>
	    <div class="column is-6 dot-out">
	      <span>{{quiz.meaning}}</span>
	    </div>
    </div>
  </div>	
</template>

<script>
export default {
  name: 'words-matchup',
  props: ['quizzes']
}
</script>

<style scoped>
.dot-out{
  display: list-item;
}

.dot-in{
  display: list-item;
  list-style-position: inside;
}
</style>