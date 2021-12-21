<template>
  <div class="TableCitizen">
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      :pagination="pagination"
      @change="handleTableChange"
      :row-key="(record) => record._id"
      :scroll="scroll"
    >
      <span slot="customTitle"
        ><a-icon type="plus-circle" theme="twoTone" class="add"
      /></span>
      <span slot="add" slot-scope="data">
        <a-icon
          type="plus-circle"
          theme="twoTone"
          class="add"
          @click="() => handleAddGroup({ name: data.name, code: data.code })"
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
        {{ data.fullname }}
      </span>
      <span slot="district" slot-scope="district">
        <p class="blue" @click="() => handleClickDistrict(district.name)">
          <a-tooltip>
            <template slot="title"> Đi đến {{ district.name }} </template>
            {{ district.name }}
          </a-tooltip>
        </p>
      </span>
      <span slot="dob" slot-scope="data">
        <p>
          {{ moment(data.dob).format('DD-MM-YYYY') }}
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
      <span slot="status" slot-scope="data">
        <a-tag
          :color="
            data.status == null
              ? 'grey'
              : data.status == 1
              ? 'green'
              : 'volcanic'
          "
          @click="() => confirmForm(data.code)"
        >
          {{
            data.status == null
              ? 'Chưa mở'
              : data.status == 1
              ? 'Hoàn thành'
              : 'Chưa xong'
          }}
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
import moment from 'moment';
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
    'scroll',
  ],
  data: () => {
    return {
      moment: moment,
    };
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
    handleAddGroup(name) {
      this.$props.addGroup(name);
    },
    confirmForm(code) {
      console.log(code);
    },
  },
};
</script>
