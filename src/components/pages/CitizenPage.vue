<template>
  <div class="CitizenPage">
    <HeaderMenu header="Danh sách" type="default" :notShow="true" />
    <div class="CitizenPage-flex">
      <div class="backButton">
        <ButtonBackDrillDown
          :text="$route.query.provinceName"
          :disable="userLevel > 2"
          :onClick="() => getBack(0)"
          v-if="level >= 1"
        />
        <ButtonBackDrillDown
          :text="$route.query.districtName"
          :disable="userLevel > 3"
          :onClick="() => getBack(1)"
          v-if="level >= 2"
        />
        <ButtonBackDrillDown
          :text="$route.query.wardName"
          :disable="userLevel > 4"
          :onClick="() => getBack(2)"
          v-if="level >= 3"
        />
      </div>

      <div class="div-button">
        <a-button
          v-if="level >= 3"
          type="primary"
          icon="user-add"
          size="small"
          class="ListCitizen-header-button"
          @click="openForm"
        >
          Thêm người
        </a-button>
        <a-button v-if="search" style="margin-right: 10px" @click="clearSearch"
          ><a-icon type="close"
        /></a-button>
        <a-input-search
          placeholder="Tìm kiếm"
          v-model="search"
          @search="onSearch"
          @keydown.enter="onSearch"
        />
      </div>
    </div>
    <table-citizen
      :columns="this.columns"
      :data="this.data"
      :pagination="this.pagination"
      :fetch="this.fetchData"
    />
    <a-drawer
      title="Nhập thông tin công dân"
      width="auto"
      :visible="form_visible"
      class="drawer"
      @close="closeForm"
    >
      <form-add-citizen :address="queries" />
    </a-drawer>
  </div>
</template>

<script>
import _ from 'lodash';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableA1 from '../moreclues/TableA1.vue';
import TableA2 from '../moreclues/TableA2.vue';
import TableCitizen from '../moreclues/TableCitizen.vue';
import ButtonBackDrillDown from '../atoms/ButtonBackDrillDown.vue';
import FormAddCitizen from '../moreclues/FormAddCitizen.vue';

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
  addSTTcolumns,
} from '../utilities/constTableData';
import { level } from '../utilities/queryExtraction';
import { getUser } from '../utilities/localStorage';
const perPage = 7;
export default {
  components: {
    HeaderMenu,
    TableA1,
    TableA2,
    TableCitizen,
    ButtonBackDrillDown,
    FormAddCitizen,
  },
  data: () => ({
    form_visible: false,
    columns: [],
    data: [],
    pagination: {},
    province: null,
    queries: [],
    level,
    user: getUser().levelInfo,
    userLevel: getUser().level,
    search: '',
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
    openForm() {
      this.form_visible = true;
    },
    closeForm() {
      this.form_visible = false;
    },
    navigate() {
      if (_.get(this, 'user.code.length') == 2) {
        this.$router.push({
          query: {
            provinceName: this.user.name,
          },
        });
        return;
      }
      if (_.get(this, 'user.code.length') == 4) {
        this.$router.push({
          query: {
            provinceName: this.user.provinceName,
            districtName: this.user.name,
          },
        });
        return;
      }
      if (_.get(this, 'user.code.length') == 6) {
        this.$router.push({
          query: {
            provinceName: this.user.provinceName,
            districtName: this.user.districtName,
            wardName: this.user.name,
          },
        });
        return;
      }
    },
    onSearch(value) {
      this.fetchData({ ...this.queries, name: value });
    },
    clearSearch() {
      this.search = '';
      this.fetchData(this.queries);
    },
  },
  computed: {
    checkDisable(value) {
      console.log(_.get(this.user, 'code.length'));
      return _.get(this.user, 'code.length') > 2 * value;
    },
  },
  mounted() {
    this.navigate();
    this.getQueries();
    this.fetchData(this.queries);
    addSTTcolumns.bind(this)(columnProvince, columnDistrict, columnWard);
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
