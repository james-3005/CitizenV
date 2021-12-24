<template>
  <div class="TableCitizen">
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      :pagination="pagination"
      @change="handleTableChange"
      :row-key="(record) => record._id"
      :scroll="scroll"
    >
      <span slot="customTitle" @click="handleAddAll">
        <a-icon type="plus-circle" theme="twoTone" class="add" />
      </span>
      <span slot="add" slot-scope="data">
        <a-icon
          type="plus-circle"
          theme="twoTone"
          class="add"
          @click="() => handleAddGroup({ name: data.name, code: data.code })"
        />
      </span>
      <span slot="province" slot-scope="province">
        <p class="blue" @click="() => handleClickProvince(province.name)">
          <a-tooltip>
            <template slot="title"> Đi đến {{ province.name }} </template>
            {{ province.name }}
          </a-tooltip>
        </p>
      </span>
      <span slot="name" slot-scope="data">
        {{ data.fullname }}
      </span>
      <span slot="district" slot-scope="district">
        <p class="blue" @click="() => handleClickDistrict(district.name)">
          <a-tooltip>
            <template slot="title"> Đi đến {{ district.name }} </template>
            {{ district.name }}
          </a-tooltip>
        </p>
      </span>
      <span slot="dob" slot-scope="data">
        <p>
          {{ moment(data.dob).format('DD-MM-YYYY') }}
        </p>
      </span>
      <span slot="ward" slot-scope="ward">
        <p class="blue" @click="() => handleClickWard(ward.name)">
          <a-tooltip>
            <template slot="title"> Đi đến {{ ward.name }} </template>
            {{ ward.name }}
          </a-tooltip>
        </p>
      </span>
      <span slot="quarter" slot-scope="quarter">
        <p
          class="blue"
          @click="() => handleClickQuarter(quarter.code, quarter.name)"
        >
          <a-tooltip>
            <template slot="title"> Đi đến {{ quarter.name }} </template>
            {{ quarter.name }}
          </a-tooltip>
        </p>
      </span>
      <span slot="code" slot-scope="code">
        <a-tag color="blue">
          {{ code }}
        </a-tag>
      </span>
      <span slot="status" slot-scope="data">
        <a-tag
          :class="user.level == 4 ? 'clickable' : ''"
          :color="
            data.status == 'CLOSED'
              ? 'grey'
              : data.status == 'DOING' || data.status == 'PENDING'
              ? 'green'
              : data.status == 'DONE'
              ? 'orange'
              : ''
          "
          @click="() => handleApprove(data)"
        >
          {{ data.status }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="data" class="action">
        <a-icon
          type="edit"
          v-if="data.code"
          class="adjust"
          @click="() => handleAdjustUnit(data)"
        />
        <a-icon
          type="edit"
          v-if="!data.code"
          class="adjust"
          @click="() => handleAdjust(data)"
        />

        <a-icon
          type="delete"
          v-if="data.code"
          class="delete"
          @click="() => handleDeleteUnit(data)"
        />
        <a-icon
          type="delete"
          v-if="!data.code"
          class="delete"
          @click="() => handleDelete(data)"
        />
      </span>
    </a-table>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import {
  deleteCitizen,
  deleteDistrict,
  deleteProvince,
  deleteQuarter,
  deleteUnit,
  deleteWard,
} from '../../services/auth';
import { formApprove } from '../../services/survey';
import { getUser } from '../utilities/localStorage';
import { message } from '../utilities/messageValidate';
export default {
  name: 'TableCitizen',
  props: [
    'columns',
    'data',
    'pagination',
    'fetch',
    'groupSearch',
    'addGroup',
    'clearGroup',
    'scroll',
    'handleAddAll',
    'removeValue',
  ],
  data: () => {
    return {
      moment: moment,
      status: '',
      id: '',
      user: getUser(),
    };
  },
  methods: {
    handleAdjust(rowData) {
      this.$emit('adjustCitizen', rowData);
    },
    handleDelete(rowData) {
      const self = this;
      console.log(rowData);
      this.$confirm({
        title: 'Bạn có muốn xoá thông tin công dân này không',
        okText: 'Có',
        okType: 'danger',
        cancelText: 'Huỷ',
        onOk() {
          deleteCitizen(rowData._id).then((res) => {
            if (res.success) {
              self.$message.info(message.DELETE_CITIZEN_SUCCESS);
              self.removeValue(rowData);
              console.log(res.data);
            } else {
              self.$message.error(message.DELETE_CITIZEN_FAIL);
              console.log(res.data);
            }
          });
        },
        onCancel() {},
      });
    },
    handleAdjustUnit(rowData) {
      console.log(this.data);
    },

    handleDeleteUnit(rowData) {
      const self = this;
      this.$confirm({
        title: 'Bạn có muốn xoá đơn vị này không',
        okText: 'Có',
        okType: 'danger',
        cancelText: 'Huỷ',
        onOk() {
          self.deleteUnit(rowData);
        },
        onCancel() {},
      });
    },
    handleDeleteProvince(rowData) {
      console.log(rowData);
      deleteProvince(rowData._id).then((res) => {
        this.handleResponse(res, rowData);
      });
    },
    handleDeleteDistrict(rowData) {
      deleteDistrict(rowData._id).then((res) => {
        this.handleResponse(res, rowData);
      });
    },
    handleDeleteWard(rowData) {
      deleteWard(rowData._id).then((res) => {
        this.handleResponse(res, rowData);
      });
    },
    handleDeleteQuarter(rowData) {
      deleteQuarter(rowData._id).then((res) => {
        this.handleResponse(res, rowData);
      });
    },

    deleteUnit(rowData) {
      const userLevel = getUser().level;
      switch (userLevel) {
        case 1:
          return this.handleDeleteProvince(rowData);
        case 2:
          return this.handleDeleteDistrict(rowData);
        case 3:
          return this.handleDeleteWard(rowData);
        case 4:
          return this.handleDeleteQuarter(rowData);
        default:
          break;
      }
    },

    handleResponse(res, rowData) {
      if (res.success) {
        this.$message.success(message.DELETE_UNIT_SUCCESS);
        this.removeValue(rowData);
      } else {
        this.$message.error(message.DELETE_UNIT_FAIL);
      }
    },

    handleTableChange(pagination, filters, sorter) {
      this.fetch({
        page: pagination.current,
      });
    },
    handleClickProvince(provinceName) {
      this.$router.push({
        query: {
          ...this.$route.query,
          provinceName,
        },
      });
    },
    handleClickDistrict(districtName) {
      this.$router.push({
        query: {
          ...this.$route.query,
          districtName,
        },
      });
    },
    handleClickWard(wardName) {
      this.$router.push({
        query: {
          ...this.$route.query,
          wardName,
        },
      });
    },
    handleClickQuarter(resourceCode, quarterName) {
      this.$router.push({
        query: {
          ...this.$route.query,
          quarterName,
          resourceCode,
        },
      });
    },
    handleAddGroup(name) {
      this.$props.addGroup(name);
    },
    handleApprove(form) {
      if (this.user.level == 4) {
        this.id = form._id;
        delete form.__v;
        delete form._id;
        this.status = form.status == 'PENDING' ? 'DONE' : 'PENDING';
        formApprove(this.id, form, this.status)
          .then((res) => {
            this.fetch();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
