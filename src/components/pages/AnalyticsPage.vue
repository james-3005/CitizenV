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
    <Chart></Chart>
  </div>
</template>

<script>
import moment from 'moment';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import { getUser } from '../utilities/localStorage';
import Chart from '../moreclues/Chart.vue';
import 'vue-echarts';

export default {
  components: { HeaderMenu, Chart },
  data: function () {
    return {
      level: getUser().level,
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
