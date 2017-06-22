<template>
  <div>
  	
	<div class="columns header">
      <div class="column">
        <span>#</span>
      </div>
      <div class="column is-3">
        <span>단어</span>
      </div>
      <div class="column"></div>
      <div class="column is-7">
        <span>뜻</span>
      </div>
    </div>
    
    <div class="columns" v-for="(quiz,index) in quizzes">
    	<div class="column">
	      <span>{{index + 1}}</span>
	    </div>
	    <div class="column is-3 qz-block">
	      <span class="none">{{quiz.text}}</span>
	    </div>
	    <div class="column"></div>
	    <div class="column is-7 qz-block">
	      <span>{{quiz.meaning}}</span>
	    </div>
    </div>

  </div>	
</template>

<script>
export default {
  name: 'words-scramble',
  props: ['quizzes']
}
</script>
