<template>
  <div>
  	<div class="columns header">
      <div class="column has-text-centered">
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

    <div class="quiz-list">
      <div class="columns quiz" v-for="(quiz,index) in mixed">
      	<div class="column has-text-centered">
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

  </div>
</template>

<script>
export default {
  name: 'words-matchup',
  props: ['quizzes'],
  methods: {
    shuffle : function(){
      let array = this.quizzes.slice(),
          currentIndex = array.length,
          randomIndex, tempA, tempB;

      if(array && array.length > 0){

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          tempA = {
            text:array[currentIndex].text,
            meaning:array[randomIndex].meaning
          };
          tempB = {
            text:array[randomIndex].text,
            meaning:array[currentIndex].meaning
          };

          array[currentIndex] = tempA;
          array[randomIndex] = tempB;
        }
      }

      return array;
    }
  },
  data(){
    let mixed = this.shuffle();
    return {
      mixed : mixed
    }
  },
  watch:{
    quizzes: function(){
      this.mixed =this.shuffle();
    }
  }
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
