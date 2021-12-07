const data = [];
const dataA1 = [];
const dataA2 = [];
for (let i = 1; i <= 50; i++)
  data.push({
    key: i,
    surname: i % 2 == 1 ? 'John' : 'Will',
    lastname: i % 3 == 0 ? 'Brown' : 'Ali',
    dob: '1/1/2001',
    sex: i % 4 == 0 ? 'Nam' : 'Nữ',
    identification: 12331132,
    address: 'New York, 1 Dinistric, 369 ',
    status: i % 3 === 0 ? true : false,
  });

for (let i = 1; i <= 50; i++)
  dataA1.push({
    key: i,
    name: 'Hà Nội',
    code: i % 2,
  });

for (let i = 1; i <= 50; i++)
  dataA2.push({
    key: i,
    name: 'Cầu Giấy',
    code: i % 2,
  });
const columnsCitizen = [
  {
    title: 'STT',
    // key: 'key',
    dataIndex: 'key',
    className: 'TableCitizen-table-center Table-key',
    width: 50,
    // slots: { title: 'STT' },
    // scopedSlots: { customRender: 'key' },
  },
  {
    title: 'Họ và Tên',
    key: 'fullname',
    slots: { title: 'name' },
    scopedSlots: { customRender: 'name' },
    sorter: (a, b) => {
      const [a1, b1] = [a.surname + a.lastname, b.surname + b.lastname];
      return a1.localeCompare(b1);
    },
    className: 'TableCitizen-table-center Table-fullname',
  },
  {
    title: 'Giới tính',
    dataIndex: 'sex',
    className: 'TableCitizen-table-center Table-sex',
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'dob',
    width: 120,
    className: 'TableCitizen-table-center Table-dob',
  },
  {
    title: 'CMND/CCCD',
    dataIndex: 'identification',
    width: 150,
    className: 'TableCitizen-table-center Table-identification',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    // key: 'address',
    className: 'TableCitizen-table-center Table-address',
  },
  {
    title: 'Trạng thái',
    // key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    className: 'TableCitizen-table-center Table-status',
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'TableCitizen-table-center Table-action',
  },
];

const columnsA1 = [
  {
    title: 'STT',
    dataIndex: 'key',
    className: 'TableA1-table-center Table-key',
  },
  {
    title: 'Tỉnh/TP',
    dataIndex: 'name',
    className: 'TableA1-table-center Table-city',
  },
  {
    title: 'Mã tỉnh/TP',
    dataIndex: 'code',
    className: 'TableA1-table-center Table-code',
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'TableA1-table-center Table-action',
  },
];

const columnsA2 = [
  {
    title: 'STT',
    dataIndex: 'key',
    className: 'TableA2-table-center Table-key',
  },
  {
    title: 'Quận/Huyện',
    dataIndex: 'name',
    className: 'TableA2-table-center Table-district',
  },
  {
    title: 'Mã quận/huyện',
    dataIndex: 'code',
    className: 'TableA2-table-center Table-code',
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'TableA2-table-center Table-action',
  },
];

module.exports = {
  data,
  dataA1,
  dataA2,
  columnsCitizen,
  columnsA1,
  columnsA2,
};
