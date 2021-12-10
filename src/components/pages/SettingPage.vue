<template>
  <div class="HomePage">
    <HeaderMenu header="Cài đặt" type="default" :notShow="true" />
    <div class="flex">
      <div class="backButton">
        <ButtonBackDrillDown text="Sài gòn" :disable="true" onClick />
        <ButtonBackDrillDown text="NTL" :disable="false" onClick />
      </div>
      <div class="button2">
        <a-input-search class="button" placeholder="Tìm kiếm" enter-button />
      </div>
    </div>
    <a-table
      :row-key="(record) => record._id"
      :columns="columns2"
      :data-source="data"
      bordered
      :pagination="pagination"
      @change="handleTableChange"
      ref="table"
    >
      <a-span slot="province" slot-scope="province">
        <p class="blue" @click="() => (this.province = province.name)">
          {{ province.name }}
        </p>
      </a-span>
    </a-table>
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
      console.log(pagination);
      console.log(filters);
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
    // console.log(this.$refs.tab);
  },
};
</script>
