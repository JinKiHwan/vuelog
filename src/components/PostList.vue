<template>
  <div v-for="(item, i) in list.slice(0, 3)" :key="i">
    <h5 @click="$router.push(`/detail/${i}`)">{{ blogData[i].title }}</h5>
    <p>{{ blogData[i].date }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    blogData: Array,
  },

  data() {
    return {
      list: [1, 2, 3, 4, 5, 6],
    };
  },
};
</script>

<style></style>
