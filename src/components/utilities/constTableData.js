const data = [];
for (let i = 1; i <= 50; i++)
  data.push({
    key: i,
    surname: i % 2 == 1 ? 'John' : 'Will',
    lastname: i % 3 == 0 ? 'Brown' : 'Ali',
    dob: '1/1/2001',
    sex: i % 4 == 0 ? 'Nam' : 'Nữ',
    identification: 12331132,
    address: 'New York',
    status: i % 3 === 0 ? 'Chưa điền' : 'Đã điền',
  });

const columns = [
  {
    title: 'STT',
    // key: 'key',
    dataIndex: 'key',
    className: 'TableCitizen-table-center',
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
  },
  {
    title: 'Giới tính',
    dataIndex: 'sex',
    width: 70,
  },
  {
    title: 'Ngày sinh',
    dataIndex: 'dob',
    // minWidth: 400
    // key: 'age',
  },
  {
    title: 'CMND/CCCD',
    dataIndex: 'identification',
  },
  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    // key: 'address',
  },
  {
    title: 'Trạng thái',
    // key: 'status',
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

module.exports = {
  data,
  columns,
};
