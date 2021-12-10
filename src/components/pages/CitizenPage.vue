<template>
  <div class="HomePage">
    <HeaderMenu header="Danh sách" type="default" :notShow="true" />
    <div class="flex">
      <div class="button2">
        <a-input-search class="button" placeholder="Tìm kiếm" enter-button />
      </div>

      <!-- <ButtonBackDrillDown text="Sài gòn" :disable="true" onClick />
      <ButtonBackDrillDown text="NTL" :disable="false" onClick /> -->
    </div>
    <!-- <table-a-1/> -->
    <!-- <table-a-2/> -->
    <table-citizen
      v-bind:columns="this.columns"
      :data="this.data"
      :pagination="this.pagination"
      :fetch="this.fetchData"
    />
  </div>
</template>

<script>
import _ from 'lodash';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableA1 from '../moreclues/TableA1.vue';
import TableA2 from '../moreclues/TableA2.vue';
import TableCitizen from '../moreclues/TableCitizen.vue';
// import ButtonBackDrillDown from '../atoms/ButtonBackDrillDown.vue';
import {
  getProvince,
  getDistrict,
  getCitizen,
  getWard,
} from '../../services/getCitizen';
import { columns1, columns2, columns3 } from '../utilities/constTableData';
import { level } from '../utilities/queryExtraction';

export default {
  components: {
    HeaderMenu,
    TableA1,
    TableA2,
    TableCitizen,
    // ButtonBackDrillDown,
  },
  data: () => ({
    columns: [],
    data: [],
    pagination: {},
    province: null,
    queries: [],
    level,
  }),
  methods: {
    fetchProvinceData(params = {}) {
      getProvince({
        ...params,
      }).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columns2;
      });
    },
    fetchDistrictData(params = {}) {
      getDistrict({
        ...params,
        provinceName: this.queries.provinceName,
      }).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columns3;
      });
    },
    // fetchWardData(params = {}) {
    //   getWard({
    //     ...params,
    //   }).then((data) => {
    //     const pagination = _.cloneDeep(this.pagination);
    //     pagination.total = data.total;
    //     this.data = data.data;
    //     this.pagination = pagination;
    //     this.columns = columns3;
    //   })
    // },
    fetchCitizenData(params = {}) {
      getCitizen({
        ...params,
      }).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columns1;
      });
    },
    fetchData(params = {}) {
      if (this.level == 0) {
        return this.fetchProvinceData(params);
      } else if (this.level == 1) {
        return this.fetchDistrictData(params);
      } else if (this.level == 2) {
        return this.fetchWardData(params);
      } else {
        return this.fetchCitizenData(params);
      }
    },
    getQueries() {
      this.queries = this.$route.query;
      this.level = level(this.queries);
    },
  },
  created() {
    this.getQueries();
    this.fetchData(this.queries);
  },
  watch: {
    $route() {
      this.getQueries();
      this.fetchData(this.queries);
    },
  },
  updated() {
    // this.queries = this.$route.query;
    // this.level = level(this.queries);
    // this.fetchData(this.queries);
  },
};
</script>
