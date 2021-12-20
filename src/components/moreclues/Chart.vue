<template>
  <div class="Chart">
    <apexchart
      width="100%"
      height="100%"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
import _ from 'lodash';
export default {
  props: ['names', 'data'],
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar',
          // type: 'donut'
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            distributed: true,
          },
        },
        xaxis: {
          categories: [],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [],
        },
      ],
    };
  },
  mounted() {
    var chartOptions = _.cloneDeep(this.chartOptions);
    var series = _.cloneDeep(this.series);
    // modify
    chartOptions.xaxis.categories = this.names;
    series = [
      {
        data: this.names,
      },
    ];
    // re-render
    this.chartOptions = chartOptions;
    this.series = series;
  },
};
</script>
