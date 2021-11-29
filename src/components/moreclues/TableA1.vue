<template>
  <div class="TableCitizen">
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      :pagination="{ pageSize: 7 }"
    >
      <!-- <span slot="name" slot-scope="data">
        {{ data.surname + ' ' + data.lastname }}
      </span> -->
    </a-table>
  </div>
</template>

<script>
import { columns, columnsA1 } from '../utilities/constTableData';
import ProgressChart from './ProgressChart.vue';
export default {
  props: {
    data: Array,
  },
  data: () => ({
    columns: columnsA1,
  }),
  methods: {},
  components: {
    ProgressChart,
  },
};
</script>
