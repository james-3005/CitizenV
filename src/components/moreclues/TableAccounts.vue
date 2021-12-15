<template>
  <div class="ListCitizen">
    <div class="ListCitizen-header">
      <a-button
        v-if="accountLevel < 5"
        type="primary"
        icon="user-add"
        size="small"
        class="ListCitizen-header-button"
        @click="openAdd"
      >
        Thêm TK
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
    <a-drawer
      title="Tạo tài khoản mới"
      width="auto"
      :visible="visible"
      class="drawer"
      @close="onClose"
    >
      <form-add-account />
    </a-drawer>
  </div>
</template>

<script>
import { data } from '../utilities/constTableData';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableCitizen from '../moreclues/TableCitizen.vue';
import ProgressChart from '../moreclues/ProgressChart.vue';
import FormAddAccount from '../moreclues/FormAddAccount.vue';
import { getUser } from '../utilities/localStorage';
export default {
  props: {},
  data: () => ({
    accountLevel: getUser().level,
    data,
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
    HeaderMenu,
    ProgressChart,
    FormAddAccount,
  },
};
</script>
