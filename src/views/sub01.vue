<template>
  <div class="sub01">
    <h1>Sub01 page</h1>
  </div>
</template>

<script>
export default {
  props: {
    test: String
  },
  created() {
    console.log('### router params', this.test);
  }
};
</script>
