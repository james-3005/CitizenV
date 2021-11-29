const data = [];
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

const columns = [
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

module.exports = {
  data,
  columns,
};
