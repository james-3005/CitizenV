<template>
  <div class="ListCitizen">
    <div class="ListCitizen-header">
      <a-button
        type="primary"
        icon="user-add"
        size="small"
        class="ListCitizen-header-button"
      >
        Thêm người
      </a-button>
      <a-button
        type="default"
        icon="file-excel"
        size="small"
        class="ListCitizen-header-button"
      >
        Xuất excel
      </a-button>
      <a-button
        type="default"
        icon="bar-chart"
        size="small"
        @click="handleToggleProgress"
        class="ListCitizen-header-button"
      >
        Mở biểu đồ
      </a-button>
    </div>
    <TableCitizen
      :data="data"
      :handleAdjust="handleAdjust"
      :handleDelete="handleDelete"
    />
    <ProgressChart
      v-if="isShowProgress"
      :handleToggleProgress="handleToggleProgress"
      :list="data"
    />
  </div>
</template>

<script>
import { data } from '../utilities/constTableData';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableCitizen from '../moreclues/TableCitizen.vue';
import ProgressChart from '../moreclues/ProgressChart.vue';
export default {
  props: {},
  data: () => ({
    data,
    isShowProgress: false,
  }),
  methods: {
    handleAdjust: function (key) {
      this.data = this.data.filter((item) => item.key !== key);
    },
    handleDelete: function (key) {
      this.data = this.data.filter((item) => item.key !== key);
    },
    handleToggleProgress: function () {
      this.isShowProgress = !this.isShowProgress;
    },
  },
  components: {
    TableCitizen,
    HeaderMenu,
    ProgressChart,
  },
};
</script>
