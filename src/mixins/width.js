export const width = {
  data: () => ({
    width: window.innerWidth,
  }),
  computed: {
    isMobile() {
      return this.width <= 500 ? true : false;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
  },
};
