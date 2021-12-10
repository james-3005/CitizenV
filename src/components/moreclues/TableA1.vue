<template>
  <div class="TableA1">
    <a-table
      :row-key="(record) => record._id"
      :columns="columns2"
      :data-source="data"
      bordered
      :pagination="pagination"
      @change="handleTableChange"
      ref="table"
    >
      <a-span slot="province" slot-scope="province">
        <p class="blue" @click="this.province = province.name">
          {{ province.name }}
        </p>
      </a-span>
      <a-span slot="action" slot-scope="data">
        <a @click="() => handleAdjust(data.key)">Chỉnh sửa</a><br />
        <a @click="() => handleDelete(data.key)">Xoá</a>
      </a-span>
    </a-table>
  </div>
</template>

<script>
import _ from 'lodash';
import { getDistrict, getProvince } from '../../services/getCitizen';
import { columns2 } from '../utilities/constTableData';
export default {
  data: function () {
    return {
      columns2,
      data: [],
      pagination: {},
      province: null,
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.fetch({
        page: pagination.current,
      });
    },
    fetch(params = {}) {
      getProvince({
        ...params,
      }).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        this.data = data.data;
        this.pagination = pagination;
      });
    },
    loadDistrictData(province) {},
  },
  mounted() {
    this.fetch();
  },
};
</script>
