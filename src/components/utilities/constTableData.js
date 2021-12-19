const data = [];
const dataA1 = [];
const dataA2 = [];
const perPage = 7;
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
    dataIndex: 'gender',
    className: 'Table-gender',
  },
  {
    title: 'Ngày sinh',
    slots: { title: 'dob' },
    scopedSlots: { customRender: 'dob' },
    width: 120,
    className: 'Table-dob',
  },
  {
    title: 'CMND/CCCD',
    dataIndex: 'citizenId',
    width: 150,
    className: 'Table-identification',
  },
  {
    title: 'Quê quán',
    dataIndex: 'placeOfOrigin',
    // key: 'address',
    className: 'Table-address',
  },
  {
    title: 'Địa chỉ thường trú',
    dataIndex: 'placeOfResidence',
    // key: 'address',
    className: 'Table-address',
  },
  {
    title: 'Tôn giáo',
    dataIndex: 'religion',
    className: 'Table-religion',
  },
  {
    title: 'Nghề nghiệp',
    dataIndex: 'job',
    className: 'Table-job',
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
    className: 'Table-code',
    slots: { title: 'code' },
    scopedSlots: { customRender: 'code' },
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
    className: 'Table-code',
    slots: { title: 'code' },
    scopedSlots: { customRender: 'code' },
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
    className: 'Table-code',
    scopedSlots: { customRender: 'code' },
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
    className: 'Table-code',
    scopedSlots: { customRender: 'code' },
  },
];
function addSTTcolumns(
  columnDistrict,
  columnProvince,
  columnWard,
  columnQuater,
  columnAccount,
) {
  (columnDistrict[0] = {
    ...columnDistrict[0],
    customRender: (text, record, index) => {
      return index + (this.pagination.current - 1) * perPage + 1;
    },
  }),
    (columnProvince[0] = {
      ...columnProvince[0],
      customRender: (text, record, index) => {
        return index + (this.pagination.current - 1) * perPage + 1;
      },
    }),
    (columnWard[0] = {
      ...columnWard[0],
      customRender: (text, record, index) => {
        return index + (this.pagination.current - 1) * perPage + 1;
      },
    });
  columnQuater[0] = {
    ...columnQuater[0],
    customRender: (text, record, index) => {
      return index + (this.pagination.current - 1) * perPage + 1;
    },
  };
  columnAccount[0] = {
    ...columnAccount[0],
    customRender: (text, record, index) => {
      return index + (this.pagination.current - 1) * perPage + 1;
    },
  };
}

function addSTTcolumnsAccount(columnAccount) {
  columnAccount[0] = {
    ...columnAccount[0],
    customRender: (text, record, index) => {
      return index + (this.pagination.current - 1) * perPage + 1;
    },
  };
}
const columnsAccount = [
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
  },
  {
    title: 'Họ và Tên',
    dataIndex: 'name',
    // className: 'Table-fullname',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    className: 'Table-username',
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'phoneNumber',
    className: 'Table-phone',
  },
  {
    title: 'Địa phương',
    dataIndex: 'resourceName',
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
  addSTTcolumns,
  columnQuater,
  columnsAccount,
  addSTTcolumnsAccount,
};
