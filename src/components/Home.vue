<template>
  <!-- Page Header -->
<div>
  <div class="row">
      <div class="col-lg-12">
          <h1 class="page-header">
              참 잘했어요!
              <small>다음은 무엇을 해볼까요?</small>
          </h1>
      </div>
  </div>
  <!-- /.row -->

  <!-- Projects Row -->
  <div class="row">
      <div class="col-sm-6 odo-panel">
          <router-link v-bind:to="'/blank'">
              <img class="img-responsive" src="http://placehold.it/700x400" alt="Blank">
              <h3>빈칸 채우기</h3>
          </router-link>
          <p>글의 원하는 단어를 빈칸으로 만들어 버립니다!</p>
      </div>
      <div class="col-sm-6 odo-panel">
        <router-link v-bind:to="'/words'">
            <img class="img-responsive" src="http://placehold.it/700x400" alt="Words">
            <h3>단어 맞추기</h3>
        </router-link>
        <p>단어의 개념을 이해하는 데 도움을 줄 학습지 제작</p>
      </div>
  </div>
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
