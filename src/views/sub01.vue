<template>
  <div class="menu01">
    <h1 class="contentTitle">Menu01 page</h1>
    <slickSort></slickSort>
  </div>
</template>

<script>
import slickSort from '@/components/slickSort.vue';

export default {
  name: 'Menu01',
  props: {
    test: String
  },
  components: {
    slickSort
  },
  data() {
    return {};
  },
  created() {}
};
</script>

<style scoped></style>
