<script>
import { Pie } from 'vue-chartjs';

export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: ['1월', '2월', '3월', '4월', '5월'],
      datasets: [
        {
          label: 'Data One',
          data: [1, 5, 3, 2, 4],
          backgroundColor: [
            'rgba(255,0,0,0.5)',
            'rgba(0,0,255,0.5)',
            'rgba(0,255,0,0.5)',
            'rgba(0,255,255,0.5)',
            'rgba(255,0,255,0.5)',
          ],
          lineTension: 0.1,
          borderWidth: 1,
          borderAlign: 'center',
          weight: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      // animateRotate: true
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
