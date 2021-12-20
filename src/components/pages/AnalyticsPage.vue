<template>
  <div class="HomePage">
    <HeaderMenu header="Thống kê" type="default" :notShow="true" />
    <!-- <a-space direction="vertical">
      <a-space direction="horizontal" class="timeRange">
        <div class="rangeTitle">My appointed time range:</div>
        <a-range-picker
          show-time
          format="YYYY-MM-DD HH:mm:ss"
          :value="value3"
          disabled
        />
      </a-space>
      <a-space direction="horizontal" class="timeRange">
        <div class="rangeTitle">
          Set time range for level {{ level + 1 }} units:
        </div>
        <a-range-picker
          show-time
          format="YYYY-MM-DD HH:mm:ss"
          :ranges="boundedRanges"
          v-model="ranges"
        />
        <a-button
          type="primary"
          size="small"
          class="ListCitizen-header-button"
          @click="setDate"
        >
          Set date
        </a-button>
      </a-space>
    
    </a-space> -->
    <Chart :names="[1, 2, 3, 4, 5]" :data="[5, 10, 15, 20]" />
  </div>
</template>

<script>
import moment from 'moment';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import { getUser } from '../utilities/localStorage';
import Chart from '../moreclues/Chart.vue';

export default {
  components: { HeaderMenu, Chart },
  data: function () {
    return {
      level: getUser().level,
      ranges: [],
      boundedRanges: {
        Today: [moment(), moment()],
        'This Month': [moment(), moment().endOf('month')],
        // 'This Month': [moment(getUser().startDate), moment(getUser().endDate)],
      },
      value3: [
        moment('2015-06-06', 'YYYY-MM-DD'),
        moment('2015-06-06', 'YYYY-MM-DD'),
      ],
      data: {
        labels: [1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
        datasets: [
          {
            data: [70, 95, 100, 120, 257, 271, 300, 321, 383, 450],
            label: 'Cây lương thực',
            borderColor: '#3e95cd',
          },
          {
            data: [70, 80, 111, 129, 135, 209, 247, 372, 400, 426],
            label: 'Cây công nghiệp',
            borderColor: '#8e5ea2',
          },
          {
            data: [70, 78, 128, 150, 203, 276, 300, 317, 375, 434],
            label: 'Rau đậu',
            borderColor: '#3cba9f',
          },
          {
            data: [70, 107, 170, 200, 254, 293, 314, 337, 268, 384],
            label: 'Cây ăn quả',
            borderColor: '#e8c3b9',
          },
          {
            data: [70, 100, 135, 157, 187, 201, 222, 272, 312, 433],
            label: 'Cây khác',
            borderColor: '#c45850',
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Đồ thị tăng trưởng giá trị sản xuất các nhóm cây trồng',
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    setDate() {
      console.log(moment(this.ranges[0]).format());
      console.log(moment(this.ranges[1]).format());
    },
  },
  mounted() {
    this.$watch(
      () => this.$route.query,
      (query) => {
        // xử lý query params
        console.log(query);
      },
    );
  },
  updated() {
    console.log('updated');
  },
};
</script>
