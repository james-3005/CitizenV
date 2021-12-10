<template>
  <div class="TableA1">
    <a-table
      :row-key="(record) => record._id"
      :columns="columns3"
      :data-source="data"
      bordered
      :pagination="pagination"
      @change="handleTableChange"
      ref="table"
    >
      <a-span slot="district" slot-scope="district">
        <p class="blue">{{ district.name }}</p>
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
import { getDistrict } from '../../services/getCitizen';
import { columns3 } from '../utilities/constTableData';
export default {
  data: function () {
    return {
      columns3,
      data: [],
      pagination: {},
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.fetch({
        page: pagination.current,
      });
    },
    fetch(params = {}) {
      getDistrict({
        ...params,
      }).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        this.data = data.data;
        this.pagination = pagination;
      });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
