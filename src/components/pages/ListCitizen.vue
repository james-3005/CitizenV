<template>
  <div class="ListCitizen">
    <div class="ListCitizen-header">
      <a-button
        type="primary"
        icon="user-add"
        size="small"
        class="ListCitizen-header-button"
        @click="openAdd"
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
    <!-- <TableCitizen
      :data="data"
      :handleAdjust="handleAdjust"
      :handleDelete="handleDelete"
    /> -->
    <TableA1
      :data="dataA1"
      :handleAdjust="handleAdjust"
      :handleDelete="handleDelete"
    />
    <!-- <ProgressChart
      v-if="isShowProgress"
      :handleToggleProgress="handleToggleProgress"
      :list="data"
    /> -->
  </div>
</template>

<script>
import { data, dataA1, dataA2 } from '../utilities/constTableData';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableCitizen from '../moreclues/TableCitizen.vue';
import TableA1 from '../moreclues/TableA1.vue';
import ProgressChart from '../moreclues/ProgressChart.vue';
import FormCitizen from '../moreclues/FormCitizen.vue';
export default {
  props: {},
  data: () => ({
    data,
    dataA1,
    isShowProgress: false,
    visible: false,
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
    openAdd() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
  components: {
    TableCitizen,
    TableA1,
    HeaderMenu,
    ProgressChart,
    FormCitizen,
  },
};
</script>
