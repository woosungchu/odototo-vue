<template>
  <div>

	   <div class="columns header">
      <div class="column has-text-centered">
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

    <div class="quiz-list">
      <div class="columns quiz" v-for="(quiz,index) in quizzes">
      	<div class="column has-text-centered">
  	      <span>{{index + 1}}</span>
  	    </div>
  	    <div class="column is-4">
  	      <span class="none">{{quiz.text}}</span>
  	    </div>
  	    <div class="column is-6 dashed-underline">
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
</style>
