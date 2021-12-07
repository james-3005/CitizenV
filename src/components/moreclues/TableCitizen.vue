<template>
  <div class="TableCitizen">
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      :pagination="{ pageSize: 10 }"
    >
      <span slot="name" slot-scope="data">
        {{ data.surname + ' ' + data.lastname }}
      </span>
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
import { columns } from '../utilities/constTableData';
import { getCitizen } from '../../services/getCitizen';
export default {
  name: 'TableCitizen',
  props: {
    // data: Array,
    handleAdjust: Function,
    handleDelete: Function,
  },
  data: () => ({
    columns,
    data: [],
    pagination: {},
  }),
  methods: {
    fetch(params = {}) {
      getCitizen({
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
    for (let i = 1; i <= 50; i++)
      this.data.push({
        key: i,
        surname: i % 2 == 1 ? 'John' : 'Will',
        lastname: i % 3 == 0 ? 'Brown' : 'Ali',
        dob: '1/1/2001',
        sex: i % 4 == 0 ? 'Nam' : 'Nữ',
        identification: 12331132,
        address: 'New York, 1 Dinistric, 369 ',
        status: i % 3 === 0 ? true : false,
      });
  },
};
</script>
