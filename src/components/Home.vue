<template>
  <!-- Page Header -->
<div>
	
  <section class="section">
    <div class="container">
      <h1 class="title">참 잘했어요!</h1>
      <h2 class="subtitle">
        다음은 무엇을 해볼까요?
      </h2>
    </div>
  </section>	

  <!-- Projects Row -->
  <section class="section">
  <div class="container">
  
  	<div class="columns">
  	
      <div class="column is-one-two-desktop is-full-mobile">
      	<router-link v-bind:to="'/blank'">
	        <div class="card">
			  <div class="card-image">
			    <figure class="image is-4by3">
		          <img class="img-responsive" src="http://placehold.it/700x400" alt="Blank">
			    </figure>
			  </div>
			  <div class="card-content">
			    <div class="media">
			      <div class="media-content">
			        <p class="title is-4">빈칸 채우기</p>
			        <p class="subtitle is-6">글의 원하는 단어를 빈칸으로 만들어 버립니다!</p>
			      </div>
			    </div>
			  </div>
			</div>
		</router-link>
      </div>
      
      <div class="column is-one-two-desktop is-full-mobile">
      	<router-link v-bind:to="'/words'">
	        <div class="card">
			  <div class="card-image">
			    <figure class="image is-4by3">
		          <img class="img-responsive" src="http://placehold.it/700x400" alt="Words">
			    </figure>
			  </div>
			  <div class="card-content">
			    <div class="media">
			      <div class="media-content">
			        <p class="title is-4">단어 맞추기</p>
			        <p class="subtitle is-6">단어의 개념을 이해하는 데 도움을 줄 학습지 제작</p>
			      </div>
			    </div>
			  </div>
			</div>
		</router-link>
      </div>
      
     </div><!-- columns -->
     
  </div><!-- container -->
  </section>
  
</div>


</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
#main-index {
	margin: 0 auto;
}
</style>
