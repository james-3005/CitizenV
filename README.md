# citizenv
- không dùng npm
- yarn install tải dev
- yarn serve để chạy
- tận dụng scss
# update
- services folder là để chứa hết các api call từ backend, không viết ở những file khác
- không dùng trực tiếp axios, mà import {request, requestWithToken} từ services/axios.vue, khi dùng không cần gọi cả url (vd localhost:8021/user) mà chỉ gọi /user
- TH BE thay đổi url thì sửa lại trong env.js
- global state sẽ dùng vuex (xem trong store.js)
- cần dùng token thì viết trong utilites/localstorage rồi dùng