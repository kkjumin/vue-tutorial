<template>
  <div>{{ year }}</div>
</template>

<script>
export default {
  name: 'currentTime',
  data: () => ({
    date: '',
  }),
  computed: {
    year() {
      return getDate => getDate;
    },
  },
  created() {
    this.getYear();
  },
  methods: {
    getYear() {
      const YAER = new Date();
      console.log(YAER);
      this.date = YAER;
    },
  },
};
</script>
