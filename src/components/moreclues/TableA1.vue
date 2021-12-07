<template>
  <div class="TableA1">
    <a-table
      :columns="columnsA1"
      :data-source="data"
      bordered
      :pagination="{ pageSize: 5 }"
    >
      <span slot="action" slot-scope="data">
        <a @click="() => handleAdjust(data.key)">Chỉnh sửa</a><br />
        <a @click="() => handleDelete(data.key)">Xoá</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import { columnsA1 } from '../utilities/constTableData';
import ProgressChart from './ProgressChart.vue';
export default {
  props: {
    data: Array,
    handleAdjust: Function,
    handleDelete: Function,
  },
  data: () => ({
    columnsA1,
  }),
  methods: {},
  components: {
    ProgressChart,
  },
};
</script>
