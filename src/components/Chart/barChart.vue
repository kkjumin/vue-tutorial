<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ],
      datasets: [
        {
          label: 'Data One',
          data: [1, 5, 3, 2, 4, 3, 5, 4, 4, 1, 2, 2],
          borderColor: 'rgba(0,0,255,1)',
          backgroundColor: 'rgba(0,0,255,0.1)',
          borderWidth: 3,
        },
        {
          label: 'Data Two',
          data: [2, 4, 6, 3, 4, 2, 2, 2, 4, 5, 2, 5],
          borderColor: 'rgba(255,0,0,1)',
          backgroundColor: 'rgba(255,0,0,0.1)',
          borderWidth: 3,
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
