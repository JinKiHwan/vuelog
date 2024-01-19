<template>
  <div>
    <router-link to="/detail">
      <h5>{{ blogData[0].title }}</h5>
    </router-link>
    <p>{{ blogData[0].date }}</p>
  </div>
  <div>
    <router-link to="/detail">
      <h5>{{ blogData[1].title }}</h5>
    </router-link>
    <p>{{ blogData[1].date }}</p>
  </div>
  <div>
    <router-link to="/detail">
      <h5>{{ blogData[2].title }}</h5>
    </router-link>
    <p>{{ blogData[2].date }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    blogData: Array,
  },
};
</script>

<style></style>
