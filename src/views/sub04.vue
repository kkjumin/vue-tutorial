<template>
  <div class="sub04">
    <h1 class="contentTitle">Menu04 {{ test2 }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Menu04',
  components: {},
  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8']
    };
  },
  computed: {
    test2() {
      return this.$store.state.testState;
    }
  },
  methods: {}
};
</script>
