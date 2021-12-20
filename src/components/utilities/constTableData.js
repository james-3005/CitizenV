const perPage = 7;
const columnsCitizen = [
  {
    title: 'STT',
    // key: 'key',
    dataIndex: 'key',
    // className: 'Table-key',
    // slots: { title: 'STT' },
    // scopedSlots: { customRender: 'key' },
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Họ và Tên',
    key: 'fullname',
    dataIndex: 'fullname',
    sorter: (a, b) => {
      const [a1, b1] = [a.surname + a.lastname, b.surname + b.lastname];
      return a1.localeCompare(b1);
    },
    className: 'Table-fullname',
    fixed: 'left',
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender',
    width: 100,
  },
  {
    title: 'Ngày sinh',
    slots: { title: 'dob' },
    scopedSlots: { customRender: 'dob' },
    width: 100,
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
    width: 300,
  },
  {
    title: 'Địa chỉ thường trú',
    dataIndex: 'placeOfResidence',
    // key: 'address',
    className: 'Table-address',
    width: 300,
  },
  {
    title: 'Địa chỉ tạm trú',
    dataIndex: 'shelterAddress',
    className: 'Table-address',
    width: 300,
  },
  {
    title: 'Tôn giáo',
    dataIndex: 'religion',
    className: 'Table-religion',
    width: 100,
  },
  {
    title: 'Nghề nghiệp',
    dataIndex: 'job',
    className: 'Table-job',
    width: 120,
  },
  {
    title: 'Trạng thái',
    // key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    className: 'Table-status',
    width: 150,
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
    className: 'Table-add',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'add' },
    // width: 100,
  },
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
    // width: 100,
  },
  {
    title: 'Tỉnh / Thành phố',
    // dataIndex: 'name',
    slots: { title: 'province' },
    scopedSlots: { customRender: 'province' },
    // className: 'Table-name',
    // width: 500
  },
  {
    title: 'Trạng thái',
    // key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    className: 'Table-status',
    // width: 200
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
    className: 'Table-add',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'add' },
  },
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
    width: 100,
  },
  {
    title: 'Quận / Huyện',
    // dataIndex: 'name',
    slots: { title: 'district' },
    scopedSlots: { customRender: 'district' },
    // className: 'Table-name',
  },
  {
    title: 'Trạng thái',
    // key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    className: 'Table-status',
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
    className: 'Table-add',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'add' },
  },
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
    width: 100,
  },
  {
    title: 'Phường / Xã',
    // dataIndex: 'name',
    slots: { title: 'ward' },
    scopedSlots: { customRender: 'ward' },
  },
  {
    title: 'Trạng thái',
    // key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    className: 'Table-status',
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
    className: 'Table-add',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'add' },
  },
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
    width: 100,
  },
  {
    title: 'Thôn / Bản / Tổ dân phố',
    // dataIndex: 'name',
    slots: { title: 'quater' },
    scopedSlots: { customRender: 'quater' },
  },
  {
    title: 'Trạng thái',
    // key: 'status',
    dataIndex: 'status',
    scopedSlots: { customRender: 'status' },
    className: 'Table-status',
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
) {
  (columnDistrict[1] = {
    ...columnDistrict[1],
    customRender: (text, record, index) => {
      return index + (this.pagination.current - 1) * perPage + 1;
    },
  }),
    (columnProvince[1] = {
      ...columnProvince[1],
      customRender: (text, record, index) => {
        return index + (this.pagination.current - 1) * perPage + 1;
      },
    }),
    (columnWard[1] = {
      ...columnWard[1],
      customRender: (text, record, index) => {
        return index + (this.pagination.current - 1) * perPage + 1;
      },
    });
  columnQuater[1] = {
    ...columnQuater[1],
    customRender: (text, record, index) => {
      return index + (this.pagination.current - 1) * perPage + 1;
    },
  };
  columnsCitizen[0] = {
    ...columnsCitizen[0],
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
    slots: { title: 'permission' },
    className: 'Table-permission',
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'Table-action',
  },
];
module.exports = {
  columnsCitizen,
  columnProvince,
  columnDistrict,
  columnWard,
  addSTTcolumns,
  columnQuater,
  columnsAccount,
  addSTTcolumnsAccount,
};
