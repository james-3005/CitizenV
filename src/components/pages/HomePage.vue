<template>
  <div class="HomePage">
    <HeaderMenu header="Màn hình chính" type="default" :notShow="true" />
    <div class="HomePage-wrapper">
      <div class="HomePage-wrapper-leftSide">
        <div class="HomePage-wrapper-leftSide__center">
          <p class="header">CitizenV</p>
          <p class="subheader">
            Hệ thống điều tra dân số dành cho người Việt Nam
          </p>

          <a-avatar :size="150" icon="user" class="avatar" />
          <div>
            <p>Nguyễn Thành Đô</p>
            <p>A1</p>
          </div>
          <a-button type="primary"
            >Bắt đầu làm việc ngay<a-icon type="right"
          /></a-button>
        </div>
      </div>
      <div class="HomePage-wrapper-rightSide">
        <img src="../../assets/svg/thumb1.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
export default {
  components: { HeaderMenu },
  props: function () {
    return {
      notShow: true,
    };
  },
};
</script>
