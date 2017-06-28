<template>
  <div id="words-container">

    <a class="button is-pulled-right" v-on:click="print">프린트</a>
    <h1 class="title">단어 맞추기</h1>

  	<div class="tabs">
  	  <ul>
  	    <li v-on:click="updateSelected(1)" v-bind:class="{ 'is-active': selectedTab == 1 }"><a>기본</a></li>
  	    <li v-on:click="updateSelected(2)" v-bind:class="{ 'is-active': selectedTab == 2 }"><a>줄긋기</a></li>
  	  </ul>
  	</div>

    <!-- tab-contents -->
	  <div class="tab-content" v-bind:class="{ 'is-active': selectedTab == 1 }" v-show="selectedTab == 1">
	    <words-basic v-bind:quizzes="quizzes"></words-basic>
	  </div>
	  <div class="tab-content" v-bind:class="{ 'is-active': selectedTab == 2 }" v-show="selectedTab == 2">
	    <words-matchup v-bind:quizzes="quizzes"></words-matchup>
	  </div>

    <words-inputs v-bind:quizzes="quizzes"></words-inputs>
    
    <comments v-bind:identifier=identifier></comments>

  </div>
</template>

<script>
import WordsBasic from './WordsBasic'
import WordsMatchup from './WordsMatchup'
import WordsInputs from './WordsInputs'
import Comments from '@/components/common/Comments'

export default {
  name: 'words',
  components: {
  	WordsBasic,
  	WordsMatchup,
  	WordsInputs,
  	Comments
  },
  data () {
    return {
      selectedTab: 1,
      quizzes : [
      	{text:'First quiz',meaning:'First Meaning'},
      	{text:'Second quiz',meaning:'Second Meaning'},
      	{text:'Third quiz',meaning:'Third Meaning'}
      ],
      identifier : 'word'//'words'
    }
  },
  methods: {
    updateSelected: function(tab) {
      this.selectedTab = tab;
    },
    print: function(){
      let target = this.$el.querySelector('.tab-content.is-active');

      target.className += ' printing';
      window.print();
      target.className = target.className.replace('printing','');

    }
  }

}
</script>

<style>
#words-container .quiz-list {
  padding-top:9px;
  height:100%;
  min-height:400px;
  max-height:400px;
  overflow-x: hidden;
  overflow-y: auto;
}

#words-container .quiz-list .quiz:nth-child(odd){
  background-color : rgba(0,136,209,0.1);
}
</style>
