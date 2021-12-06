<template>
  <div class="HomePage">
    <HeaderMenu header="Cài đặt" type="default" :notShow="true" />
    <div class="flex">
      <div class="button2">
        <a-input-search class="button" placeholder="Tìm kiếm" enter-button />
      </div>

      <ButtonBackDrillDown text="Sài gòn" :disable="true" onClick />
      <ButtonBackDrillDown text="NTL" :disable="false" onClick />
    </div>
    <a-table
      :row-key="(record) => record._id"
      :columns="columns2"
      :data-source="data"
      bordered
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
      ref="table"
    >
      <a-span slot="province" slot-scope="province">
        <p class="blue">{{ province.name }}</p>
      </a-span>
    </a-table>
  </div>
</template>

<script>
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
      pagination: {},
      loading: false,
      wipeRightToLeft,
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      console.log(filters);
      this.fetch({
        page: pagination.current,
      });
    },
    fetch(params = {}) {
      this.loading = true;
      getProvince({
        ...params,
      }).then(({ data }) => {
        const pagination = this._.cloneDeep(this.pagination);
        pagination.total = data.total;
        this.loading = false;
        this.data = data.data;
        this.pagination = pagination;
      });
    },
  },
  mounted() {
    this.fetch();
    console.log(this.$refs.tab);
  },
};
</script>
