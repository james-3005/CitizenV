<template>
  <div class="TimeRange">
    <a-space direction="vertical">
      <a-space direction="horizontal" class="timeRange">
        <div class="rangeTitle">My appointed time range:</div>
        <a-range-picker
          show-time
          format="YYYY-MM-DD HH:mm:ss"
          :value="appointedRange"
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
          @click="handleSetDate"
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
import { getDate } from '../../services/getUser';

export default {
  components: { HeaderMenu },
  data: function () {
    return {
      level: getUser().level,
      ranges: [],
      boundedRanges: {
        // "Hợp lệ": [moment(), moment().endOf("month")],
        // 'Hợp lệ': [moment(getUser().startDate), moment(getUser().endDate)],
      },
      appointedRange: [
        moment('2015-06-06', 'YYYY-MM-DD'),
        moment('2015-06-06', 'YYYY-MM-DD'),
      ],
      startValue: '',
      endValue: '',
      boundedStart: '',
    };
  },
  methods: {
    disabledStartDate() {
      return this.startValue < this.appointedRange[0];
    },
    handleSetDate() {
      // console.log(moment(this.ranges[0]).format());
      // console.log(moment(this.ranges[1]).format());
      const startTime = moment(this.ranges[0]).format();
      const endTime = moment(this.ranges[1]).format();
      if (
        startTime >= moment(this.appointedRange[0]).format() &&
        endTime <= moment(this.appointedRange[1]).format()
      ) {
        setDate({
          resourceCode: getUser().resourceCode,
          createdAt: startTime,
          expiresAt: endTime,
        }).then((res) => console.log(res.data));
      } else {
        this.$message.warning('Vui lòng chọn khoảng thời gian hợp lệ.');
        console.log(startTime, this.appointedRange[0]);
      }
    },

    handleGetDate() {
      getDate().then((res) => console.log(res.data[0].createdAt));
      const startTime = moment(this.ranges[0]).format();
      const endTime = moment(this.ranges[1]).format();
      console.log(startTime < this.appointedRange[0]);
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
    getDate().then((res) => {
      this.appointedRange = [res.data[0].createdAt, res.data[0].expiresAt];
      this.boundedRanges = {
        'Hợp lệ': [
          moment(res.data[0].createdAt),
          moment(res.data[0].expiresAt),
        ],
      };
    });
  },
  updated() {
    console.log('updated');
  },
};
</script>
