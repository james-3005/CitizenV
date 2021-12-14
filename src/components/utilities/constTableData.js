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
    className: 'Table-key',
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
    className: 'Table-fullname',
  },
  {
    title: 'Giới tính',
    dataIndex: 'sex',
    className: 'Table-sex',
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'dob',
    width: 120,
    className: 'Table-dob',
  },
  {
    title: 'CMND/CCCD',
    dataIndex: 'identification',
    width: 150,
    className: 'Table-identification',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    // key: 'address',
    className: 'Table-address',
  },
  {
    title: 'Trạng thái',
    // key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    className: 'Table-status',
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'Table-action',
  },
];

const columnProvince = [
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
  },
  {
    title: 'Tỉnh / Thành phố',
    // dataIndex: 'name',
    slots: { title: 'province' },
    scopedSlots: { customRender: 'province' },
    // className: 'Table-name',
  },
  {
    title: 'Mã',
    dataIndex: 'code',
    className: 'Table-key',
    slots: { title: 'code' },
    scopedSlots: { customRender: 'code' },
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'Table-action',
  },
];

const columnDistrict = [
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
  },
  {
    title: 'Quận / Huyện',
    // dataIndex: 'name',
    slots: { title: 'district' },
    scopedSlots: { customRender: 'district' },
    // className: 'Table-name',
  },
  {
    title: 'Mã',
    dataIndex: 'code',
    className: 'Table-key',
    slots: { title: 'code' },
    scopedSlots: { customRender: 'code' },
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'Table-action',
  },
];
const columnWard = [
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
  },
  {
    title: 'Phường / Xã',
    // dataIndex: 'name',
    slots: { title: 'ward' },
    scopedSlots: { customRender: 'ward' },
  },
  {
    title: 'Mã',
    dataIndex: 'code',
    className: 'Table-key',
    scopedSlots: { customRender: 'code' },
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'Table-action',
  },
];
const columnQuater = [
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
  },
  {
    title: 'Thôn / Bản / Tổ dân phố',
    // dataIndex: 'name',
    slots: { title: 'quater' },
    scopedSlots: { customRender: 'quater' },
  },
  {
    title: 'Mã',
    dataIndex: 'code',
    className: 'Table-key',
    scopedSlots: { customRender: 'code' },
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'Table-action',
  },
];

const columnsAccount = [
  {
    title: 'Họ và Tên',
    key: 'fullname',
    slots: { title: 'name' },
    scopedSlots: { customRender: 'name' },
    sorter: (a, b) => {
      const [a1, b1] = [a.surname + a.lastname, b.surname + b.lastname];
      return a1.localeCompare(b1);
    },
    className: 'Table-fullname',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    className: 'Table-username',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    className: 'Table-phone',
  },
  {
    title: 'Địa phương',
    dataIndex: 'locality',
    className: 'Table-locality',
  },
  {
    title: 'Quyền khai báo',
    scopedSlots: { customRender: 'permission' },
    className: 'Table-permission',
  },
];
module.exports = {
  data,
  columnsCitizen,
  columnProvince,
  columnDistrict,
  columnWard,
  columnQuater,
  columnsAccount,
};
