<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vuelog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h5>리액트 개발자의 블로그 입니다.</h5>
    <p>- 뷰로 만들었음</p>
  </div>

  <!-- 블로그 리스트 -->
  <PostList :blogData="blogData" />
  <!-- //블로그 리스트 -->
</template>

<script>
import PostList from './components/PostList.vue';
import blogData from './assets/blog';

export default {
  name: 'App',
  components: {
    PostList: PostList,
  },
  data() {
    return {
      blogData: blogData,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
