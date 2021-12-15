<template>
  <div class="TableAccount">
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      :pagination="pagination"
      @change="handleTableChange"
      :row-key="(record) => record._id"
    >
      <span slot="name" slot-scope="data">
        {{ data.surname + ' ' + data.lastname }}
      </span>
      <span slot="permission" slot-scope="data">
        {{ data.permission }}
      </span>
    </a-table>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'TableAccount',
  props: [
    'columns',
    'data',
    'pagination',
    'fetch',
    // handleAdjust: Function,
    // handleDelete: Function,
  ],
  data: () => {
    return {};
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.fetch({
        page: pagination.current,
      });
    },
    handleClickProvince(provinceName) {
      this.$router.push({
        query: {
          ...this.$route.query,
          provinceName,
        },
      });
    },
    handleClickDistrict(districtName) {
      this.$router.push({
        query: {
          ...this.$route.query,
          districtName,
        },
      });
    },
    handleClickWard(wardName) {
      this.$router.push({
        query: {
          ...this.$route.query,
          wardName,
        },
      });
    },
  },
  mounted() {},
};
</script>
