<template>
  <div
    class="floating-btn"
    :style="scroll > 0 ? 'bottom:50px;' : 'bottom:-100px;'"
  >
    <v-btn class="mx-2" fab dark large color="primary" @click="top()">
      <v-icon dark>
        mdi-menu-up
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    scroll: window.scrollY,
  }),
  methods: {
    top() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    getScroll() {
      this.scroll = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.getScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getScroll);
  },
};
</script>

<style>
.floating-btn {
  position: fixed;
  bottom: 50px;
  right: 20px;
  z-index: 50;
  transition: 1s;
}

.floating-btn button span i::before {
  font-size: 60px;
  padding-bottom: 5px;
}
</style>
