<template>
  <div class="TableCitizen">
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      :pagination="pagination"
      @change="handleTableChange"
    >
      <a-span slot="province" slot-scope="province">
        <p class="blue" @click="() => handleClickProvince(province.name)">
          {{ province.name }}
        </p>
      </a-span>
      <a-span slot="name" slot-scope="data">
        {{ data.surname + ' ' + data.lastname }}
      </a-span>
      <a-span slot="district" slot-scope="district">
        <p class="blue" @click="() => handleClickDistrict(district.name)">
          {{ district.name }}
        </p>
      </a-span>
      <span slot="status" slot-scope="status">
        <a-tag :color="status ? 'green' : 'volcano'">
          {{ status ? 'Hoàn thành' : 'Còn thiếu' }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="data">
        <a @click="() => handleAdjust(data.key)">Chỉnh sửa</a><br />
        <a @click="() => handleDelete(data.key)">Xoá</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'TableCitizen',
  props: [
    'columns',
    'data',
    'pagination',
    'fetch',
    // handleAdjust: Function,
    // handleDelete: Function,
  ],
  data: () => {
    return {
      provinceName: null,
      districtName: null,
      wardName: null,
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.fetch({
        page: pagination.current,
      });
    },
    handleClickProvince(provinceName) {
      this.provinceName = provinceName;
      this.$router.push({
        query: { provinceName: this.provinceName },
      });
    },
    handleClickDistrict(districtName) {
      this.districtName = districtName;
      this.$router.push({
        query: {
          provinceName: this.provinceName,
          districtName: this.districtName,
        },
      });
    },
  },
  mounted() {},
};
</script>
