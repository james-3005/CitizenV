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
          @change="(value) => onChangeChecked(data, value)"
          :disabled="userPermission !== '1111'"
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
import { getAccount, updatePermission } from '../../services/getUser';
import { getUser } from '../utilities/localStorage';
import {
  columnsAccount,
  addSTTcolumnsAccount,
} from '../utilities/constTableData';
import { message } from '../utilities/messageValidate';
export default {
  props: {},
  data: () => ({
    data: [],
    columns: [],
    pagination: { pageSize: 7 },
    isShowProgress: false,
    visible: false,
    userLevel: getUser().level,
    userPermission: getUser().permissions,
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
    onChangeChecked(data, value) {
      updatePermission(data._id, value).then((res) => {
        if (res.success) {
          this.$message.info(
            `${message.UPDATE_PERMISSION_SUCCESS} cho ${res.data.name}`,
          );
        } else this.$message.error(message.UPDATE_PERMISSION_FALIL);
      });
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
