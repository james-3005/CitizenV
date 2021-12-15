<template>
  <div class="TableCitizen">
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      :pagination="pagination"
      @change="handleTableChange"
      :row-key="(record) => record._id"
    >
      <span slot="province" slot-scope="province">
        <p class="blue" @click="() => handleClickProvince(province.name)">
          {{ province.name }}
        </p>
      </span>
      <span slot="name" slot-scope="data">
        {{ data.surname + ' ' + data.lastname }}
      </span>
      <span slot="district" slot-scope="district">
        <p class="blue" @click="() => handleClickDistrict(district.name)">
          {{ district.name }}
        </p>
      </span>
      <span slot="ward" slot-scope="ward">
        <p class="blue" @click="() => handleClickWard(ward.name)">
          {{ ward.name }}
        </p>
      </span>
      <span slot="quater" slot-scope="quater">
        <p class="blue" @click="() => handleClickQuater(quater.name)">
          {{ quater.name }}
        </p>
      </span>
      <span slot="code" slot-scope="code">
        <a-tag color="blue">
          {{ code }}
        </a-tag>
      </span>
      <span slot="status" slot-scope="status">
        <a-tag :color="status ? 'green' : 'volcano'">
          {{ status ? 'Hoàn thành' : 'Còn thiếu' }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="data">
        <a class="adjust" @click="() => handleAdjust(data.key)">Chỉnh sửa</a
        ><br />
        <a class="delete" @click="() => handleDelete(data.key)">Xoá</a>
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
    handleClickQuater(quaterName) {
      this.$router.push({
        query: {
          ...this.$route.query,
          quaterName,
        },
      });
    },
  },
};
</script>
