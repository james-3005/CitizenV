<template>
  <div class="HomePage">
    <HeaderMenu header="Cài đặt" type="default" :notShow="true" />
  </div>
</template>

<script>
import _ from 'lodash';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import { getProvince } from '../../services/getCitizen';
import { columns2 } from '../utilities/constTableData';
import { wipeRightToLeft } from '../utilities/constAnimation';
import ButtonBackDrillDown from '../atoms/ButtonBackDrillDown.vue';
export default {
  components: { HeaderMenu, ButtonBackDrillDown },
  data: function () {
    return {
      columns2,
      data: [],
      pagination: {
        pageSize: 7,
      },
      wipeRightToLeft,
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      this.fetch({
        page: pagination.current,
        perPage: 7,
      });
    },
    fetch(params = {}) {
      getProvince({
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
    this.fetch({ perPage: 7 });
  },
};
</script>
