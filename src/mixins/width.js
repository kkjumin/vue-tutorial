export const contentsWidth = {
  mounted() {
    window.addEventListener('resize', this.handleResize2);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize2);
  },

  methods: {
    handleResize2() {
      this.areaWidth = document.getElementById('videoContents').offsetWidth;
    },
  },
};
