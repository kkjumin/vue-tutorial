<template>
  <div class="sub04">
    <h1>{{ this.$route.name }}</h1>
    <pie-chart />
    <div style="margin-top:50px;"></div>
    <line-chart />
    <div style="margin-top:50px;"></div>
    <bar-chart />
    <div style="margin-top:50px;"></div>
    <mixed-chart />
  </div>
</template>
<script>
import lineChart from '@/components/Chart/lineChart';
import barChart from '@/components/Chart/barChart.vue';
import pieChart from '@/components/Chart/pieChart.vue';
import mixedChart from '@/components/Chart/mixedChart.vue';

export default {
  components: {
    lineChart,
    barChart,
    pieChart,
    mixedChart,
  },
  data: () => ({}),

  computed: {},
  mounted() {},
  methods: {},
};
</script>
