<template>
  <div>
    <h6>{{ blogData[$route.params.id].title }}</h6>
    <p>{{ blogData[$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  name: 'detailList',

  props: {
    blogData: Array,
  },
};
</script>

<style>
h6 {
  font-size: 20px;
  font-weight: 600;
}
p {
  font-size: 18px;
}
</style>
