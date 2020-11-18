<template>
  <div style="position: absolute;right: 20px;">
    {{ hour }}:{{ min }}:{{ sec }}
  </div>
</template>

<script>
export default {
  data: () => ({
    hour: null,
    min: null,
    sec: null,
  }),
  created() {
    this.currentTime();
  },
  methods: {
    currentTime() {
      setInterval(() => {
        this.hour = new Date().getHours();
        this.min = new Date().getMinutes();
        this.sec =
          new Date().getSeconds() < 10
            ? '0' + new Date().getSeconds()
            : new Date().getSeconds();
      }, 100);
    },
  },
};
</script>
