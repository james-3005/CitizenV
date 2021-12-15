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
    <a-table
      :columns="this.columns"
      :data-source="this.data"
      bordered
      :pagination="this.pagination"
      @change="handleTableChange"
      :row-key="(record) => record._id"
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
import _ from 'lodash';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import ProgressChart from '../moreclues/ProgressChart.vue';
import FormAddAccount from '../moreclues/FormAddAccount.vue';
import { getUser } from '../../services/getUser';
import { columnsAccount } from '../utilities/constTableData';
export default {
  props: {},
  data: () => ({
    data: [],
    columns: [],
    pagination: { pageSize: 5 },
    isShowProgress: false,
    visible: false,
  }),
  methods: {
    fetchData(params = {}) {
      getUser({
        ...params,
      }).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnsAccount;
      });
    },
    handleTableChange(pagination, filters, sorter) {
      this.fetchData({
        page: pagination.current,
      });
    },
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
    HeaderMenu,
    ProgressChart,
    FormAddAccount,
  },
  mounted() {
    this.fetchData();
    console.log(this.pagination.total);
  },
};
</script>
