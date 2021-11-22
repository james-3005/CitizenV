<template>
  <div class="TableCitizen">
    <a-table :columns="columns" :data-source="data">
      <span slot="customTitle"> Tên </span>
      <span slot="STT"> STT </span>
      <span slot="status" slot-scope="status">
        <a-tag :color="status === 'Chưa điền' ? 'volcano' : 'green'">
          {{ status }}
        </a-tag>
      </span>
      <span slot="action">
        <a>Thêm</a>
        <a-divider type="vertical" />
        <a>Xoá</a>
      </span>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    tilte: 'STT',
    key: 'key',
    dataIndex: 'key',
    slots: { title: 'STT' },
    // scopedSlots: { customRender: 'key' },
  },
  {
    tilte: 'Tên',
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Trạng thái',
    key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    className: 'status',
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    status: 'Chưa điền',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    status: 'Đã điền',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    status: 'Đã điền',
  },
];
export default {
  name: 'TableCitizen',
  props: {},
  data: () => ({
    data,
    columns,
  }),
};
</script>

<style>
.TableCitizen {
  width: 70vw;
  border: 0.5px solid black;
}
</style>
