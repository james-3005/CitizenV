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
      <span slot="customTitle"
        ><a-icon type="plus-circle" theme="twoTone" class="add"
      /></span>
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
          :color="
            data.status == 'CLOSED'
              ? 'grey'
              : data.status == 'DOING' || data.status == 'PENDING'
              ? 'green'
              : data.status == 'DONE'
              ? 'orange'
              : ''
          "
          @dblclick="() => handleApprove(data)"
        >
          {{ data.status }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="data">
        <a class="adjust" @click="() => handleAdjust(data)">Chỉnh sửa</a><br />
        <a class="delete" @click="() => handleDelete(data)">Xoá</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
import { deleteCitizen } from '../../services/auth';
import { formApprove } from '../../services/survey';
import { getUser } from '../utilities/localStorage';
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
      console.log(rowData);
      deleteCitizen(rowData._id).then((res) => {
        if (res.success) {
          this.$message.info('Xoa thanh cong');
          console.log(res.data);
        } else {
          this.$message.error('Co loi xay ra');
          console.log(res.data);
        }
      });
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
        formApprove(this.id, form, this.status).catch((err) => {
          console.log(err);
        });
      }
    },
  },
};
</script>
