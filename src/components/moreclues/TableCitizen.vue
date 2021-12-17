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
      <span slot="customTitle"
        ><a-icon type="plus-circle" theme="twoTone" class="add"
      /></span>
      <span slot="add" slot-scope="data">
        <a-icon
          type="plus-circle"
          theme="twoTone"
          class="add"
          @click="() => handleAddGroup(data.name)"
        />
      </span>
      <span slot="province" slot-scope="province">
        <p class="blue" @click="() => handleClickProvince(province.name)">
          <a-tooltip>
            <template slot="title"> Đi đến {{ province.name }} </template>
            {{ province.name }}
          </a-tooltip>
        </p>
      </span>
      <span slot="name" slot-scope="data">
        {{ data.surname + ' ' + data.lastname }}
      </span>
      <span slot="district" slot-scope="district">
        <p class="blue" @click="() => handleClickDistrict(district.name)">
          <a-tooltip>
            <template slot="title"> Đi đến {{ district.name }} </template>
            {{ district.name }}
          </a-tooltip>
        </p>
      </span>
      <span slot="ward" slot-scope="ward">
        <p class="blue" @click="() => handleClickWard(ward.name)">
          <a-tooltip>
            <template slot="title"> Đi đến {{ ward.name }} </template>
            {{ ward.name }}
          </a-tooltip>
        </p>
      </span>
      <span slot="quater" slot-scope="quater">
        <p class="blue" @click="() => handleClickQuater(quater.name)">
          <a-tooltip>
            <template slot="title"> Đi đến {{ quater.name }} </template>
            {{ quater.name }}
          </a-tooltip>
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
    'groupSearch',
    'addGroup',
    'clearGroup',
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
      this.clearGroup();
      this.$router.push({
        query: {
          ...this.$route.query,
          provinceName,
        },
      });
    },
    handleClickDistrict(districtName) {
      this.clearGroup();
      this.$router.push({
        query: {
          ...this.$route.query,
          districtName,
        },
      });
    },
    handleClickWard(wardName) {
      this.clearGroup();
      this.$router.push({
        query: {
          ...this.$route.query,
          wardName,
        },
      });
    },
    handleClickQuater(quaterName) {
      this.clearGroup();
      this.$router.push({
        query: {
          ...this.$route.query,
          quaterName,
        },
      });
    },
    handleAddGroup(name) {
      this.$props.addGroup(name);
    },
  },
};
</script>
