<template>
  <!-- Page Header -->
<div>

  <div>
    <h1 class="title">참 잘했어요!</h1>
    <h2 class="subtitle">
      다음은 무엇을 해볼까요?
    </h2>
  </div>

  <!-- Projects Row -->
	<div class="columns">

    <div class="column is-one-two-desktop is-full-mobile" v-for="content in contents">
      <router-link v-bind:to=content.route>
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
                <img class="img-responsive" src="http://placehold.it/700x400" alt=content.title>
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{content.title}}</p>
                <p class="subtitle is-6">{{content.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>

 </div><!-- columns -->

</div>


</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      contents: [
        {route:'/blank', title:'빈칸 채우기', description:'글의 원하는 단어를 빈칸으로 만들어 버립니다!', },
        {route:'/words', title:'단어 맞추기', description:'단어의 개념을 이해하는 데 도움을 줄 학습지 제작', }
      ]
    }
  }
}
</script>

<style scoped>
#main-index {
	margin: 0 auto;
}
</style>
