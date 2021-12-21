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
import Vue from 'vue';
import EventBus from '../utilities/eventBus';
export default {
  props: ['populationYears', 'population'],
  data: function () {
    return {
      bus: new Vue(),
      chartOptions: {
        chart: {
          //   height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
            // colors: ['#008FFB'],
          },
        },
        colors: ['#77B6EA'],
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },

        xaxis: {
          categories: [],
          position: 'bottom',
          axisBorder: {
            show: true,
          },
          axisTicks: {
            show: false,
          },
          title: {
            text: 'Năm',
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          title: {
            text: 'Triệu người',
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: true,
            formatter: function (val) {
              return val;
            },
          },
        },
        title: {
          text: 'Dân số',
          //   floating: true,
          //   offsetY: 500,
          align: 'center',
          //   style: {
          //     color: "#444",
          //   },
        },
      },
      series: [
        {
          name: 'Inflation',
          data: [],
        },
      ],
    };
  },
  methods: {
    render(populationYears, population) {
      var chartOptions = _.cloneDeep(this.chartOptions);
      var series = _.cloneDeep(this.series);
      chartOptions.xaxis.categories = populationYears;
      series = [
        {
          name: 'Inflation',
          data: population,
        },
      ];
      // re-render
      this.chartOptions = chartOptions;
      this.series = series;
    },
    handler(e) {
      console.log('recieved: ', e);
    },
  },
  mounted() {},
  created() {
    EventBus.$on('hello', (args) => {
      this.render(args.populationYears, args.population);
    });
  },
  destroyed() {
    // Stop listening the event hello with handler
    EventBus.$off('hello', this.handler);
  },
};
</script>
