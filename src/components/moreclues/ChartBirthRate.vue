<template>
  <div class="Chart">
    <apexchart
      width="100%"
      height="100%"
      type="line"
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
  props: ['childrenYears', 'childrenBorn'],
  data: function () {
    return {
      bus: new Vue(),
      chartOptions: {
        chart: {
          //   height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth',
        },
        title: {
          text: 'Tỷ lệ sinh',
          align: 'center',
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: [],
          title: {
            text: 'Năm',
          },
        },
        yaxis: {
          title: {
            text: '',
          },
          min: 0,
          max: 5,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
      series: [
        {
          name: 'High - 2013',
          data: [],
        },
      ],
    };
  },
  methods: {
    render(childrenYears, childrenBorn) {
      var chartOptions = _.cloneDeep(this.chartOptions);
      var series = _.cloneDeep(this.series);
      chartOptions.xaxis.categories = childrenYears;
      series = [
        {
          name: 'Inflation',
          data: childrenBorn,
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
    // catch click event from analytics page
    EventBus.$on('hello', (args) => {
      this.render(args.childrenYears, args.childrenBorn);
    });
  },
  destroyed() {
    // Stop listening the event hello with handler
    EventBus.$off('hello', this.handler);
  },
};
</script>
