<template>
  <div class="sub04">
    <h1 class="contentTitle">Chart</h1>
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
import lineChart from '@/components/lineChart.vue';
import barChart from '@/components/barChart.vue';
import pieChart from '@/components/pieChart.vue';
import mixedChart from '@/components/mixedChart.vue';

export default {
  name: 'Menu04',
  components: {
    lineChart,
    barChart,
    pieChart,
    mixedChart
  },
  data: () => ({}),

  computed: {},
  mounted() {},
  methods: {}
};
</script>
