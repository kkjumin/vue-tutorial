<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월'],
      datasets: [
        {
          label: 'Data One',
          data: [1, 5, 4, 2, 4, 3, 3, 4],
          borderColor: 'red',
          backgroundColor: 'rgba(255,0,0,0)',
          lineTension: 0.1,
          type: 'line',
        },
        {
          label: 'Data Two',
          data: [2, 4, 6, 3, 4, 2, 2, 2],
          borderColor: 'blue',
          backgroundColor: 'rgba(0,0,255,0.1)',
          lineTension: 0.1,
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
