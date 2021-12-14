<template>
  <div class="CitizenPage">
    <HeaderMenu header="Danh sách" type="default" :notShow="true" />
    <div class="CitizenPage-flex">
      <div class="backButton">
        <ButtonBackDrillDown
          :text="$route.query.provinceName"
          :disable="false"
          :onClick="() => getBack(0)"
          v-if="level >= 1"
        />
        <ButtonBackDrillDown
          :text="$route.query.districtName"
          :disable="false"
          :onClick="() => getBack(1)"
          v-if="level >= 2"
        />
        <ButtonBackDrillDown
          :text="$route.query.wardName"
          :disable="false"
          :onClick="() => getBack(2)"
          v-if="level >= 3"
        />
      </div>
      <div class="div-button">
        <a-input-search placeholder="Tìm kiếm" enter-button />
      </div>
    </div>
    <TableCitizen
      :columns="this.columns"
      :data="this.data"
      :pagination="this.pagination"
      :fetch="this.fetchData"
    />
  </div>
</template>

<script>
import _ from 'lodash';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableCitizen from '../moreclues/TableCitizen.vue';
import ButtonBackDrillDown from '../atoms/ButtonBackDrillDown.vue';
import {
  getProvince,
  getDistrict,
  getCitizen,
  getWard,
} from '../../services/getCitizen';
import {
  columnProvince,
  columnDistrict,
  columnWard,
} from '../utilities/constTableData';
import { level } from '../utilities/queryExtraction';
const perPage = 7;
export default {
  components: {
    HeaderMenu,
    TableCitizen,
    ButtonBackDrillDown,
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
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnProvince;
      });
    },
    fetchDistrictData(params = {}) {
      getDistrict({
        ...params,
        provinceName: this.queries.provinceName,
      }).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnDistrict;
      });
    },
    fetchWardData(params = {}) {
      getWard({
        ...params,
        districtName: this.queries.districtName,
      }).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnWard;
      });
    },
    fetchCitizenData(params = {}) {
      getCitizen({
        ...params,
      }).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnProvince;
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
    getBack(level) {
      if (level === 0)
        this.$router.push({
          query: {},
        });
      if (level === 1)
        this.$router.push({
          query: {
            provinceName: this.$route.query.provinceName,
          },
        });
      if (level === 2)
        this.$router.push({
          query: {
            provinceName: this.$route.query.provinceName,
            districtName: this.$route.query.districtName,
          },
        });
    },
  },
  created() {
    this.getQueries();
    this.fetchData(this.queries);
    (columnDistrict[0] = {
      ...columnDistrict[0],
      customRender: (text, record, index) => {
        return index + (this.pagination.current - 1) * perPage + 1;
      },
    }),
      (columnProvince[0] = {
        ...columnProvince[0],
        customRender: (text, record, index) => {
          return index + (this.pagination.current - 1) * perPage + 1;
        },
      }),
      (columnWard[0] = {
        ...columnWard[0],
        customRender: (text, record, index) => {
          return index + (this.pagination.current - 1) * perPage + 1;
        },
      });
  },
  watch: {
    $route() {
      this.getQueries();
      this.fetchData(this.queries);
    },
  },
  updated() {},
};
</script>
