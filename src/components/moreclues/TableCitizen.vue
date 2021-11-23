<template>
  <div class="TableCitizen">
    <HeaderMenu
      header="Danh sách người dân"
      :onExit="() => {}"
      type="default"
    />
    <div class="TableCitizen-header">
      <a-button type="primary" icon="user-add" size="small">
        Thêm người
      </a-button>
      <a-button type="default" icon="file-excel" size="small">
        Xuất excel
      </a-button>
      <a-button
        type="default"
        icon="bar-chart"
        size="small"
        @click="handleToggleProgress"
      >
        Mở biểu đồ
      </a-button>
    </div>

    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      :pagination="{ pageSize: 6 }"
    >
      <span slot="name" slot-scope="data">
        {{ data.surname + ' ' + data.lastname }}
      </span>
      <span slot="status" slot-scope="status">
        <a-tag :color="status === 'Chưa điền' ? 'volcano' : 'green'">
          {{ status }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="data">
        <a @click="() => handleAdjust(data.key)">Chỉnh sửa</a><br />
        <a @click="() => handleDelete(data.key)">Xoá</a>
      </span>
    </a-table>
    <ProgressChart
      v-if="isShowProgress"
      :handleToggleProgress="handleToggleProgress"
      :list="data"
    />
  </div>
</template>

<script>
import { data, columns } from '../utilities/constTableData';
import ProgressChart from './ProgressChart.vue';
import HeaderMenu from './HeaderMenu.vue';
export default {
  name: 'TableCitizen',
  props: {},
  data: () => ({
    data,
    columns,
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
    ProgressChart,
    HeaderMenu,
  },
};
</script>
