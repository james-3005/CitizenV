const perPage = 7;
const columnsCitizen = [
  {
    title: 'STT',
    dataIndex: 'key',
    className: 'Table-key',
    fixed: 'left',
  },
  {
    title: 'Họ và Tên',
    key: 'fullname',
    dataIndex: 'fullname',
    sorter: (a, b) => {
      const [a1, b1] = [a.fullname, b.fullname];
      return a1.localeCompare(b1);
    },
    className: 'Table-fullname',
    fixed: 'left',
  },
  {
    title: 'Giới tính',
    dataIndex: 'gender',
    customRender: (text, record, index) => {
      return record.gender === 'male' ? 'Nam' : 'Nữ';
    },
    className: 'Table-gender',
  },
  {
    title: 'Ngày sinh',
    slots: { title: 'dob' },
    scopedSlots: { customRender: 'dob' },
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
    className: 'Table-address',
  },
  {
    title: 'Địa chỉ thường trú',
    dataIndex: 'placeOfResidence',
    // key: 'address',
    className: 'Table-address',
  },
  {
    title: 'Địa chỉ tạm trú',
    dataIndex: 'shelterAddress',
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
    width: 150,
  },
  {
    title: 'Hành động',
    // key: 'action',
    scopedSlots: { customRender: 'action' },
    className: 'Table-action',
    fixed: 'right',
  },
];

const columnProvince = [
  {
    className: 'Table-add',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'add' },
  },
  {
    title: 'STT',
    slots: { title: 'stt' },
    className: 'Table-key',
  },
  {
    title: 'Tỉnh / Thành phố',
    slots: { title: 'province' },
    scopedSlots: { customRender: 'province' },
  },
  {
    title: 'Trạng thái',
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
    slots: { title: 'district' },
    scopedSlots: { customRender: 'district' },
  },
  {
    title: 'Trạng thái',
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
    slots: { title: 'ward' },
    scopedSlots: { customRender: 'ward' },
  },
  {
    title: 'Trạng thái',
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
const columnQuarter = [
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
    slots: { title: 'quarter' },
    scopedSlots: { customRender: 'quarter' },
  },
  {
    title: 'Trạng thái',
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
  columnQuarter,
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
  columnQuarter[1] = {
    ...columnQuarter[1],
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
  columnQuarter,
  columnsAccount,
  addSTTcolumnsAccount,
};
