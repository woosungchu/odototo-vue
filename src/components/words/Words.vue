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
	<div class="tab-content" v-show="selectedTab == 1">
	  <words-scramble></words-scramble>
	</div>
	<div class="tab-content" v-show="selectedTab == 2">
	  <words-matchup></words-matchup>
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
      selectedTab: 1
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
