<template>
  <div class="AnalyticsPage">
    <HeaderMenu header="Thống kê" type="default" :notShow="true" />
    <div class="AnalyticsPage-unitsSelectors">
      <a-select
        v-model="units_values[0]"
        mode="multiple"
        :placeholder="unitTitle.province"
        default-value="lucy"
        option-label-prop="label"
        class="unitsSelector"
        :disabled="isDisabled[0]"
        @change="handleUnitsChange(0)"
      >
        <a-select-option
          v-for="province in provinces"
          :key="province.code"
          :value="province.code"
          :label="province.name"
        >
          {{ province.name }}
        </a-select-option>
      </a-select>
      <a-select
        v-model="units_values[1]"
        mode="multiple"
        :placeholder="unitTitle.district"
        option-label-prop="label"
        class="unitsSelector"
        :disabled="isDisabled[1]"
        @change="handleUnitsChange(1)"
      >
        <a-select-option
          v-for="district in districts"
          :key="district.code"
          :value="district.code"
          :label="district.name"
        >
          {{ district.name }}
        </a-select-option>
      </a-select>
      <a-select
        v-model="units_values[2]"
        mode="multiple"
        :placeholder="unitTitle.ward"
        option-label-prop="label"
        :disabled="isDisabled[2]"
        @change="handleUnitsChange(2)"
        class="unitsSelector"
      >
        <a-select-option
          v-for="ward in wards"
          :key="ward.code"
          :value="ward.code"
          :label="ward.name"
        >
          {{ ward.name }}
        </a-select-option>
      </a-select>
      <a-select
        v-model="units_values[3]"
        mode="multiple"
        :placeholder="unitTitle.quarter"
        option-label-prop="label"
        :disabled="isDisabled[3]"
        @change="handleUnitsChange(3)"
        class="unitsSelector"
      >
        <a-select-option
          v-for="quarter in quarters"
          :key="quarter.code"
          :value="quarter.code"
          :label="quarter.name"
        >
          {{ quarter.name }}
        </a-select-option>
      </a-select>
      <a-button type="primary" @click="handleClick" class="AnalyticsPage-button"
        >Xem thống kê</a-button
      >
    </div>
    <div class="AnalyticsPage-charts">
      <chart-age-pyramid
        :ageCategories="ageCategories"
        :maleAges="maleAges"
        :femaleAges="femaleAges"
      />
      <a-divider />
      <chart-birth-rate
        :childrenYears="chidrenYears"
        :childrenBorn="childrenBorn"
      />
      <a-divider />
      <chart-population-growth
        :populationYears="populationYears"
        :population="population"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import _ from 'lodash';
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import { getUser } from '../utilities/localStorage';
import ChartAgePyramid from '../moreclues/ChartAgePyramid.vue';
import ChartPopulationGrowth from '../moreclues/ChartPopulationGrowth.vue';
import ChartBirthRate from '../moreclues/ChartBirthRate.vue';
import EventBus from '../utilities/eventBus';
import {
  getProvince,
  getDistrict,
  getWard,
  getQuarter,
} from '../../services/getCitizen';
import Vue from 'vue';

export default {
  components: {
    HeaderMenu,
    ChartAgePyramid,
    ChartPopulationGrowth,
    ChartBirthRate,
  },
  data: function () {
    return {
      level: getUser().level,
      provinces: [],
      districts: [],
      wards: [],
      quarters: [],

      // units selected

      units_values: [[], [], [], []],
      // lock
      isDisabled: [false, false, false, false],
      levelToSend: -1,

      unitTitle: {
        province: 'Tỉnh/Thành phố',
        district: 'Quận/Huyện',
        ward: 'Phường/Xã',
        quarter: 'Tổ dân phố',
      },

      // analytics
      bus: new Vue(),
      ageCategories: [],
      maleAges: [],
      femaleAges: [],

      populationYears: [],
      population: [],

      chidrenYears: [],
      childrenBorn: [],
    };
  },
  methods: {
    getUnit(level, resourceCode) {
      switch (level) {
        case 1:
          getProvince({ perPage: 99999 }).then((res) => {
            this.provinces = res.data;
          });
          break;
        case 2:
          getDistrict({ perPage: 99999, provinceCode: resourceCode }).then(
            (res) => {
              this.districts = res.data;
            },
          );
          break;
        case 3:
          getWard({ perPage: 99999, districtCode: resourceCode }).then(
            (res) => {
              this.wards = res.data;
            },
          );
          break;
        case 4:
          getQuarter({ perPage: 99999, wardCode: resourceCode }).then((res) => {
            this.quarters = res.data;
          });
          break;
        default:
          break;
      }
    },
    handleUnitsChange(level) {
      this.levelToSend = level;
      const unitsCount = 4;
      const unitsSelectedCount = this.units_values[level].length;
      if (unitsSelectedCount === 1) {
        this.getUnit(level + 2, this.units_values[level][0]);
        for (let i = level + 1; i < unitsCount; i++) {
          this.isDisabled[i] = false;
        }
      } else if (unitsSelectedCount === 0) {
        for (let i = level + 1; i < unitsCount; i++) {
          this.units_values[i] = [];
          this.getUnit(i + 1, 'zzzzz');
          this.isDisabled[i] = false;
        }
      } else if (unitsSelectedCount === 2) {
        for (let i = level + 1; i < unitsCount; i++) {
          this.units_values[i] = [];
          this.getUnit(i + 1, 'zzzzz');
          this.isDisabled[i] = true;
        }
      }
    },
    handleClick() {
      console.log('params to send:', this.units_values[this.levelToSend]);
      this.ageCategories = [
        '85+',
        '80-84',
        '75-79',
        '70-74',
        '65-69',
        '60-64',
        '55-59',
        '50-54',
        '45-49',
        '40-44',
        '35-39',
        '30-34',
        '25-29',
        '20-24',
        '15-19',
        '10-14',
        '5-9',
        '0-4',
      ];
      this.maleAges = [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
        4.5, 3.9, 3.5, 3,
      ];
      this.femaleAges = [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
        -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
      ];

      this.populationYears = [
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
        2012,
      ];
      this.population = [
        60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120,
      ];

      this.chidrenYears = [
        2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
        2012, 2013, 2014, 2015, 2016, 2017, 2018,
      ];
      this.childrenBorn = [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
        4.5, 3.9, 3.5, 3,
      ];
      this.showStats();
    },

    showStats() {
      EventBus.$emit('hello', {
        ageCategories: this.ageCategories,
        maleAges: this.maleAges,
        femaleAges: this.femaleAges,
        populationYears: this.populationYears,
        population: this.population,
        childrenYears: this.chidrenYears,
        childrenBorn: this.childrenBorn,
      });
      console.log('dcmm');
    },
  },
  mounted() {
    this.$watch(
      () => this.$route.query,
      (query) => {
        // xử lý query params
        console.log(query);
      },
    );
    const userLevel = getUser().level;
    this.getUnit(getUser().level, getUser().resourceCode);
    const unitCodes = getUser().resourceCode.match(/(.{1,2})/g);
    if (userLevel >= 2) {
      getProvince({ code: unitCodes[0] }).then((res) => {
        this.unitTitle.province = res.data[0].name;
        this.isDisabled[0] = true;
      });
    }
    if (userLevel >= 3) {
      getDistrict({ code: unitCodes[0] + unitCodes[1] }).then((res) => {
        this.unitTitle.district = res.data[0].name;
        this.isDisabled[1] = true;
      });
    }
    if (userLevel >= 4) {
      getWard({ code: unitCodes[0] + unitCodes[1] + unitCodes[2] }).then(
        (res) => {
          this.unitTitle.ward = res.data[0].name;
          this.isDisabled[2] = true;
        },
      );
    }
    if (userLevel >= 5) {
      getQuarter({
        code: unitCodes[0] + unitCodes[1] + unitCodes[2] + unitCodes[3],
      }).then((res) => {
        this.unitTitle.quarter = res.data[0].name;
        this.isDisabled[3] = true;
      });
    }
  },
  updated() {
    console.log('updated');
  },
  watch: {},
};
</script>
