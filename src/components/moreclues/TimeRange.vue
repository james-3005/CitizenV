<template>
  <div class="TimeRange">
    <a-space direction="vertical">
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
    </a-space>
  </div>
</template>

<script>
import moment from 'moment';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import { getUser } from '../utilities/localStorage';
import { setDate } from '../../services/auth';

export default {
  components: { HeaderMenu },
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
    };
  },
  methods: {
    setDate() {
      // console.log(moment(this.ranges[0]).format());
      // console.log(moment(this.ranges[1]).format());
      // const startTime = moment(this.ranges[0]).format();
      // const endTime = moment(this.ranges[1]).format();
      // setDate({}).then()
      console.log(getUser());
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
