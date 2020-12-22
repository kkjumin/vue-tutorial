<template>
  <div v-if="show" class="text-center progress-circular">
    <v-progress-circular
      :size="30"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  props: { show: Boolean },
};
</script>

<style scoped>
.progress-circular {
  float: right;
  margin: 5px 25px 0 0;
}
</style>
