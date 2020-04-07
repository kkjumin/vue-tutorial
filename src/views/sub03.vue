<template>
  <div class="about">
    <h1>Sub03 {{ test2 }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Sub03',
  components: {},
  data() {
    return {
      test: '테스트입니다'
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
>
