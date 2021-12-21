<template>
  <div class="Chart">
    <apexchart
      width="50%"
      height="50%"
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
  props: ['ageCategories', 'maleAges', 'femaleAges'],
  data: function () {
    return {
      bus: new Vue(),
      chartOptions: {
        chart: {
          type: 'bar',
          height: 440,
          stacked: true,
        },
        colors: ['#008FFB', '#FF4560'],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
          colors: ['#fff'],
        },

        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        yaxis: {
          min: -5,
          max: 5,
          title: {
            // text: 'Age',
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val;
            },
          },
          y: {
            formatter: function (val) {
              return Math.abs(val) + '%';
            },
          },
        },
        title: {
          text: 'Tháp tuổi',
        },
        xaxis: {
          categories: [],
          title: {
            text: 'Percent',
          },
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + '%';
            },
          },
        },
      },
      series: [
        {
          name: 'Males',
          data: [],
        },
        {
          name: 'Females',
          data: [],
        },
      ],
    };
  },
  methods: {
    handleClick(ageCategories, maleAges, femaleAges) {
      this.chartOptions.xaxis.categories = ageCategories;
      this.series = [
        {
          name: 'Males',
          data: maleAges,
        },
        {
          name: 'Females',
          data: femaleAges,
        },
      ];
      // re-render
      console.log(ageCategories);
      console.log(maleAges);
      console.log(femaleAges);
    },
    handler(e) {
      console.log('recieved: ', e);
    },
  },
  mounted() {},
  created() {
    EventBus.$on('hello', (args) => {
      this.handleClick(args.ageCategories, args.maleAges, args.femaleAges);
    });
  },
  destroyed() {
    // Stop listening the event hello with handler
    EventBus.$off('hello', this.handler);
  },
};
</script>
