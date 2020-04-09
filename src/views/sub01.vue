<template>
  <div class="sub01">
    <h1>Sub01 page</h1>
    <slickSort></slickSort>
  </div>
</template>

<script>
import slickSort from '@/components/slickSort.vue';

export default {
  props: {
    test: String
  },
  components: {
    slickSort
  },
  created() {}
};
</script>

<style scoped></style>
