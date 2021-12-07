<template>
  <div class="TableCitizen">
    <a-table
      :columns="columnsCitizen"
      :data-source="data"
      bordered
      :pagination="{ pageSize: 7 }"
    >
      <span slot="name" slot-scope="data">
        {{ data.surname + ' ' + data.lastname }}
      </span>
      <span slot="status" slot-scope="status">
        <a-tag :color="status ? 'volcano' : 'green'">
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
import { columnsCitizen } from '../utilities/constTableData';
import ProgressChart from './ProgressChart.vue';
export default {
  name: 'TableCitizen',
  props: {
    data: Array,
    handleAdjust: Function,
    handleDelete: Function,
  },
  data: () => ({
    columnsCitizen,
  }),
  methods: {},
  components: {
    ProgressChart,
  },
};
</script>
