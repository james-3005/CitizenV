<template>
  <div class="ListCitizen">
    <div class="ListCitizen-header">
      <a-button
        v-if="userLevel < 5"
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
    >
      <span slot="permission" slot-scope="data">
        <a-switch
          checked-children="Đọc/sửa"
          un-checked-children="Chỉ đọc"
          :default-checked="data.permissions === '1111'"
          @change="(value) => onChangeChecked(value, data)"
        />
      </span>
    </a-table>
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
import { getAccount } from '../../services/getUser';
import { getUser } from '../utilities/localStorage';
import {
  columnsAccount,
  addSTTcolumnsAccount,
} from '../utilities/constTableData';
export default {
  props: {},
  data: () => ({
    data: [],
    columns: [],
    pagination: { pageSize: 7 },
    isShowProgress: false,
    visible: false,
    userLevel: getUser().level,
  }),
  methods: {
    fetchData(params = {}) {
      getAccount({
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
    onChangeChecked(value, data) {
      console.log(value, data);
    },
  },
  components: {
    HeaderMenu,
    ProgressChart,
    FormAddAccount,
  },
  mounted() {
    addSTTcolumnsAccount.bind(this)(columnsAccount);
    this.fetchData();
  },
};
</script>
