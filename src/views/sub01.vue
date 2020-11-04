<template>
  <div class="menu01">
    <h1>SlickSort</h1>

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

  data() {
    return {};
  },

  created() {}
};
</script>

<style scoped></style>
