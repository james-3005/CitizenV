<template>
  <div class="CitizenPage">
    <HeaderMenu header="Danh sách" type="default" :notShow="true" />
    <div class="CitizenPage-flex">
      <div class="backButton">
        <ButtonBackDrillDown
          :text="$route.query.provinceName"
          :disable="userLevel > 1"
          :onClick="() => getBack(0)"
          v-if="level >= 1"
        />
        <ButtonBackDrillDown
          :text="$route.query.districtName"
          :disable="userLevel > 2"
          :onClick="() => getBack(1)"
          v-if="level >= 2"
        />
        <ButtonBackDrillDown
          :text="$route.query.wardName"
          :disable="userLevel > 3"
          :onClick="() => getBack(2)"
          v-if="level >= 3"
        />
        <ButtonBackDrillDown
          :text="$route.query.quaterName"
          :disable="userLevel > 4"
          :onClick="() => getBack(3)"
          v-if="level >= 4"
        />
        <ButtonBackDrillDown
          text="Nhóm"
          :onClick="() => getBack(10)"
          v-if="isSearchingGroup"
        />
      </div>

      <div class="div-button">
        <a-button
          v-if="userLevel - 1 == level"
          type="primary"
          class="addUnitButton"
          @click="openUnitForm"
        >
          Thêm đơn vị</a-button
        >
        <a-dropdown-button
          style="margin-right: 10px"
          @click="searchGroup"
          v-if="level < 4"
        >
          Tìm kiếm theo nhóm
          <a-menu slot="overlay" v-if="groupSearch.length !== 0">
            <a-menu-item @click="clearGroup">
              Xoá hết
              <a-icon type="close" />
            </a-menu-item>
            <a-menu-item
              v-for="unit in this.groupSearch"
              :key="unit.name"
              @click="() => deleteItemGroup(unit.name)"
            >
              {{ unit.name }}
              <a-icon type="close" />
            </a-menu-item>
          </a-menu>
          <a-badge
            :count="groupSearch.length"
            slot="icon"
            :offset="[9, -6]"
            :number-style="{ backgroundColor: '#52c41a' }"
          >
            <a-icon type="profile" />
          </a-badge>
        </a-dropdown-button>
        <a-button
          v-if="userLevel >= 4"
          type="primary"
          icon="user-add"
          size="small"
          class="ListCitizen-header-button"
          @click="openCitizenForm"
        >
          Thêm người
        </a-button>
        <a-auto-complete
          :data-source="unitsName"
          style="width: 200px"
          placeholder="Đơn vị"
          @select="onSelectUnit"
          @change="getText"
          class="FormAddAccount-pair-input"
          v-model="search"
        >
          <a-input>
            <a-icon
              slot="suffix"
              type="close"
              v-if="search"
              @click="clearSearch"
              style="font-size: 12px; margin-right: 5px"
            />
            <a-icon
              slot="suffix"
              type="search"
              @click="() => onSearch(this.search)"
            /> </a-input
        ></a-auto-complete>
      </div>
    </div>
    <table-citizen
      :columns="this.columns"
      :data="this.data"
      :pagination="this.pagination"
      :fetch="this.fetchData"
      :groupSearch="this.groupSearch"
      :addGroup="this.addGroup"
      :clearGroup="this.clearGroup"
      :scroll="this.scroll"
    />
    <a-drawer
      title="Nhập thông tin don vi"
      width="auto"
      :visible="form_unit_visible"
      class="drawer"
      @close="closeUnitForm"
    >
      <form-add-unit />
    </a-drawer>
    <a-drawer
      title="Nhập thông tin công dân"
      width="auto"
      :visible="form_citizen_visible"
      class="drawer"
      @close="closeCitizenForm"
    >
      <form-add-citizen :address="queries" />
    </a-drawer>
  </div>
</template>

<script>
import _ from 'lodash';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableCitizen from '../moreclues/TableCitizen.vue';
import ButtonBackDrillDown from '../atoms/ButtonBackDrillDown.vue';
import FormAddCitizen from '../moreclues/FormAddCitizen.vue';
import FormAddUnit from '../moreclues/FormAddUnit.vue';
import {
  getProvince,
  getDistrict,
  getCitizen,
  getWard,
  getQuarter,
  getStatus,
} from '../../services/getCitizen';
import {
  columnProvince,
  columnDistrict,
  columnWard,
  addSTTcolumns,
  columnQuater,
  columnsCitizen,
} from '../utilities/constTableData';
import { getName, level } from '../utilities/queryExtraction';
import { getUser } from '../utilities/localStorage';
export default {
  components: {
    HeaderMenu,
    TableCitizen,
    ButtonBackDrillDown,
    FormAddCitizen,
    FormAddUnit,
  },
  data: () => ({
    form_citizen_visible: false,
    form_unit_visible: false,
    columns: [],
    data: [],
    pagination: { pageSize: 7 },
    queries: [],
    scroll: {},
    level,
    user: getUser().levelInfo,
    userLevel: getUser().level,
    search: '',
    groupSearch: [],
    timeOutSearch: null,
    unitsName: [],
    localStorage: localStorage,
    isSearchingGroup: false,
  }),
  methods: {
    fetchProvinceData(params = {}) {
      getProvince({
        ...params,
      }).then((data) => {
        data.data.forEach((row) => {
          getStatus(row.resourceCode).then((res) => {
            row['status'] = res.data;
          });
        });
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = 63;
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnProvince;
        this.scroll = {};
      });
    },
    fetchDistrictData(params = {}) {
      getDistrict({
        ...params,
        provinceName: this.queries.provinceName,
      }).then((data) => {
        data.data.forEach((row) => {
          getStatus(row.resourceCode).then((res) => {
            row['status'] = res.data;
          });
        });
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnDistrict;
        this.scroll = {};
      });
    },
    fetchWardData(params = {}) {
      getWard({
        ...params,
        districtName: this.queries.districtName,
      }).then((data) => {
        data.data.forEach((row) => {
          getStatus(row.resourceCode).then((res) => {
            row['status'] = res.data;
          });
        });
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnWard;
        this.scroll = {};
      });
    },
    fetchQuaterData(params = {}) {
      getQuarter({
        ...params,
        wardName: this.queries.wardName,
      }).then((data) => {
        data.data.forEach((row) => {
          getStatus(row.resourceCode).then((res) => {
            row['status'] = res.data;
          });
        });
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnQuater;
        this.scroll = {};
      });
    },
    fetchCitizenData(params = {}) {
      getCitizen(params).then((data) => {
        const pagination = _.cloneDeep(this.pagination);
        pagination.total = data.total;
        pagination.current = data.page;
        this.data = data.data;
        this.pagination = pagination;
        this.columns = columnsCitizen;
        this.scroll = { x: 2000 };
      });
    },
    fetchData(params = {}) {
      if (this.level == 0) {
        return this.fetchProvinceData(params);
      } else if (this.level == 1) {
        return this.fetchDistrictData(params);
      } else if (this.level == 2) {
        return this.fetchWardData(params);
      } else if (this.level == 3) {
        return this.fetchQuaterData(params);
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
      if (level === 3)
        this.$router.push({
          query: {
            provinceName: this.$route.query.provinceName,
            districtName: this.$route.query.districtName,
            wardName: this.$route.query.wardName,
          },
        });
      if (level === 10) {
        this.fetchData(this.queries);
        this.isSearchingGroup = false;
      }
    },
    openUnitForm() {
      this.form_unit_visible = true;
    },
    closeUnitForm() {
      this.form_unit_visible = false;
    },
    openCitizenForm() {
      this.form_citizen_visible = true;
    },
    closeCitizenForm() {
      this.form_citizen_visible = false;
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
      if (_.get(this, 'user.code.length') == 8) {
        this.$router.push({
          query: {
            provinceName: this.user.provinceName,
            districtName: this.user.districtName,
            wardName: this.user.wardName,
            quaterName: this.user.name,
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
      // this.fetchData(this.queries);
    },
    addGroup(value) {
      this.groupSearch = [...new Set(this.groupSearch).add(value)];
    },
    clearGroup() {
      this.groupSearch = [];
    },
    searchGroup() {
      const param = getName(this.level);
      this.fetchCitizenData({
        [param]: this.groupSearch.map((item) => item.code).toString(),
      });
      this.isSearchingGroup = true;
    },
    deleteItemGroup(value) {
      this.groupSearch = this.groupSearch.filter((item) => item.name !== value);
    },
    getText(text) {
      clearTimeout(this.timeOutSearch);
      this.timeOutSearch = setTimeout(async () => {
        let data;
        if (this.level == 0) {
          data = await getProvince(
            { ...this.queries, name: this.search },
            false,
          );
        } else if (this.level == 1) {
          data = await getDistrict(
            { ...this.queries, name: this.search },
            false,
          );
        } else if (this.level == 2) {
          data = await getWard({ ...this.queries, name: this.search }, false);
        } else if (this.level == 3) {
          data = await getQuarter(
            { ...this.queries, name: this.search },
            false,
          );
        }
        this.unitsName = data.data.map((item) => item.name);
      }, 500);
    },
    onSelectUnit(value) {
      if (this.level == 0) {
        this.$router.push({
          query: {
            ...this.$route.query,
            provinceName: value,
          },
        });
      } else if (this.level == 1) {
        this.$router.push({
          query: {
            ...this.$route.query,
            districtName: value,
          },
        });
      } else if (this.level == 2) {
        this.$router.push({
          query: {
            ...this.$route.query,
            wardName: value,
          },
        });
      } else if (this.level == 3) {
        this.$router.push({
          query: {
            ...this.$route.query,
            quaterName: value,
          },
        });
      }
    },
  },
  mounted() {
    this.navigate();
    this.getQueries();
    this.fetchData(this.queries);
    addSTTcolumns.bind(this)(
      columnProvince,
      columnDistrict,
      columnWard,
      columnQuater,
      columnsCitizen,
    );
  },
  watch: {
    $route() {
      this.getQueries();
      this.fetchData(this.queries);
      this.unitsName = [];
      this.search = '';
      this.clearGroup();
    },
  },
  updated() {},
};
</script>
