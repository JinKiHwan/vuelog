<template>
  <div v-for="(a, i) in 3" :key="i">
    <h5 @click="$router.push(`/detail/${i}`)">{{ blogData[i].title }}</h5>
    <p>{{ blogData[i].date }}</p>
  </div>
  <!-- <div>
    <h5 @click="$router.push('/detail/1')">{{ blogData[1].title }}</h5>
    <p>{{ blogData[1].date }}</p>
  </div>
  <div>
    <h5 @click="$router.push('/detail/2')">{{ blogData[2].title }}</h5>
    <p>{{ blogData[2].date }}</p>
  </div> -->
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
