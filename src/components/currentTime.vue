<template>
  <div class="current-time">
    {{ addZero(hour) }}:{{ addZero(min) }}:{{ addZero(sec) }}
  </div>
</template>

<script>
export default {
  data: () => ({
    hour: 0,
    min: 0,
    sec: 0,
  }),
  created() {
    this.currentTime();
  },
  computed: {
    addZero() {
      return time => {
        return time < 10 ? '0' + time : time;
      };
    },
  },
  methods: {
    currentTime() {
      setInterval(() => {
        this.hour = new Date().getHours();
        this.min = new Date().getMinutes();
        this.sec = new Date().getSeconds();
      }, 1000);
    },
  },
};
</script>

<style>
.current-time {
  position: absolute;
  right: 20px;
}
</style>
