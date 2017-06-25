<template>
  <section class="section">

	<ul>
<!--
      <li class="columns">
        <label class="column is-5 label">단어</label>
        <label class="column is-5 label">뜻</label>
        <span class="column is-2"></span>
      </li>
  -->
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

      <li class="columns" v-for="(quiz,index) in quizzes">
        <span class="column is-5">{{quiz.text}}</span>
        <span class="column is-5">{{quiz.meaning}}</span>
        <span class="column is-2" v-on:click="removeQuiz(index)">X</span>
      </li>
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
