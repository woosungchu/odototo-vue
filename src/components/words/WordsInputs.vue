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
	      <input class="input" type="text" placeholder="단어">
	    </p>
        <p class="column is-5 control">
	      <input class="input" type="text" placeholder="뜻">
	    </p>
	    <p class="column is-2 control">
          <a class="button is-info">Add</a>
        </p>
      </li>
      
      <li class="columns" v-for="input in inputs">
        <span class="column is-5">{{input.text}}</span>
        <span class="column is-5">{{input.meaning}}</span>
        <span class="column is-2">remove</span>
      </li>
    </ul>

  </section>	
</template>

<script>
export default {
  name: 'words-inputs',
  props: ['quizzes'],
  data(){
  	return {
  		inputs:[
  			{text:'text1',meaning:'meaning1'},
  			{text:'text2',meaning:'meaning2'},
  			{text:'text3',meaning:'meaning3'},
  			{text:'text4',meaning:'meaning4'}
  		]
  	}
  }
}
</script>
