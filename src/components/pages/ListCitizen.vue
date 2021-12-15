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
    <TableAccount
      :columns="this.columnsAccount"
      :data="this.data"
      :pagination="this.pagination"
      :fetch="this.fetchData"
    />
    <ProgressChart
      v-if="isShowProgress"
      :handleToggleProgress="handleToggleProgress"
      :list="data"
    />
    <a-drawer
      title="Tạo tài khoản mới"
      width="auto"
      :visible="visible"
      class="drawer"
      @close="onClose"
    >
      <form-citizen />
    </a-drawer>
  </div>
</template>

<script>
import { columnsAccount } from '../utilities/constTableData';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableAccount from '../moreclues/TableAccount.vue';
import ProgressChart from '../moreclues/ProgressChart.vue';
import FormCitizen from '../moreclues/FormCitizen.vue';
export default {
  props: {},
  data: () => ({
    columnsAccount,
    data: [],
    pagination: {},
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
    TableAccount,
    HeaderMenu,
    ProgressChart,
    FormCitizen,
  },
};
</script>
