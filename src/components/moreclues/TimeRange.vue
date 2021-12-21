<template>
  <div class="TimeRange">
    <a-space direction="vertical">
      <a-space direction="horizontal" class="timeRange">
        <div class="rangeTitle">Mốc khai báo</div>
        <a-range-picker
          show-time
          format="YYYY-MM-DD"
          :value="appointedRange"
          disabled
        />
      </a-space>
      <a-space direction="horizontal" class="timeRange">
        <div class="rangeTitle">
          Cài mốc khai báo cho cấp {{ formatLevelName() }}
        </div>
        <a-range-picker
          show-time
          format="YYYY-MM-DD"
          :ranges="boundedRanges"
          v-model="ranges"
        />
        <a-button
          type="primary"
          size="small"
          class="ListCitizen-header-button"
          @click="handleSetDate"
        >
          Cài
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
import { message } from '../utilities/messageValidate';

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
        }).then((res) => {
          if (res.success) this.$message.info(message.TIME_SET_SUCCESS);
          else this.$message.error(message.TIME_SET_FAIL);
        });
      } else {
        this.$message.error(message.TIME_INVALID);
      }
    },

    handleGetDate() {
      getDate().then((res) => console.log(res.data[0].createdAt));
      const startTime = moment(this.ranges[0]).format();
      const endTime = moment(this.ranges[1]).format();
      console.log(startTime < this.appointedRange[0]);
    },
    formatLevelName() {
      switch (this.level + 1) {
        case 1:
          return 'A1';
        case 2:
          return 'A2';
        case 3:
          return 'A3';
        case 4:
          return 'B1';
        case 5:
          return 'B2';
        default:
          return '';
      }
    },
  },
  mounted() {
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
  updated() {},
};
</script>
