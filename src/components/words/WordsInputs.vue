<template>
  <section class="section">

	<ul>

      <li class="columns field is-grouped">
      	<p class="column is-5 control">
	      <input class="input" name="text" type="text" placeholder="단어">
	    </p>
        <p class="column is-5 control">
	      <input class="input" name="meaning" type="text" placeholder="뜻">
	    </p>
	    <p class="column is-2 control">
          <a class="button is-info" v-on:click="addQuiz">Add</a>
        </p>
      </li>

      <div id="quiz-tags">
        <span class="tag is-primary" v-for="(quiz,index) in quizzes">
          {{quiz.text}}
          <button class="delete is-small" v-on:click="removeQuiz(index)"></button>
        </span>
      </div>

    </ul>


  </section>
</template>

<script>
export default {
  name: 'words-inputs',
  props: ['quizzes'],
  methods:{
    addQuiz(){
      let inputText = this.$el.querySelector('input[name=text]'),
          inputMeaning = this.$el.querySelector('input[name=meaning]'),
          quiz= {text:'',meaning:''};

      if(inputText || inputMeaning){
        quiz.text = inputText.value;
        quiz.meaning = inputMeaning.value;
        this.quizzes.push(quiz)

        inputText.value = "";
        inputMeaning.value = "";
      }

    },//end addQuiz()
    removeQuiz(index){
      this.quizzes.splice(index,1);
    }//end removeQuiz()
  }
}
</script>

<style scoped>
#quiz-tags .tag {
  margin-right:3px;
  margin-bottom:3px;
  background-color:rgba(0,136,209,0.6);
}
</style>
