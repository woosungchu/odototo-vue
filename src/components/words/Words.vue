<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">단어 맞추기</h1>
      </div>
    </section>

	<div class="tabs">
	  <ul>
	    <li v-on:click="updateSelected(1)" v-bind:class="{ 'is-active': selectedTab == 1 }"><a>기본</a></li>
	    <li v-on:click="updateSelected(2)" v-bind:class="{ 'is-active': selectedTab == 2 }"><a>줄긋기</a></li>
	  </ul>
	</div>
	
	<!-- tab-contents -->
	<div class="container">
	  <div class="tab-content" v-show="selectedTab == 1">
	    <words-scramble v-bind:quizzes="quizzes"></words-scramble>
	  </div>
	  <div class="tab-content" v-show="selectedTab == 2">
	    <words-matchup v-bind:quizzes="quizzes"></words-matchup>
	  </div>
	</div>
	
  </div>	
</template>

<script>
import WordsScramble from './WordsScramble'
import WordsMatchup from './WordsMatchup'

export default {
  name: 'words',
  components: {
  	WordsScramble,
  	WordsMatchup
  },
  data () {
    return {
      selectedTab: 1,
      quizzes : [
      	{id:1,text:'First quiz',meaning:'First Meaning'},
      	{id:2,text:'Second quiz',meaning:'Second Meaning'},
      	{id:3,text:'Third quiz',meaning:'Third Meaning'}
      ]
    }
  },
  methods: {
    updateSelected: function(tab) {
      this.selectedTab = tab;
    }
  }
  
}
</script>

<style scoped>
</style>
