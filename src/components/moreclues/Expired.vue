<template>
  <div class="Loading">
    <div class="Loading-message">
      <a-result
        status="403"
        title="Phiên làm việc của bạn đã hết, vui lòng đăng nhập lại"
      >
        <template #extra>
          <a-button key="console" type="primary" @click="close">
            Đăng nhập
          </a-button>
        </template>
      </a-result>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$router.push('/login');
      this.$store.commit('turnOffIsExpiredToken');
    },
  },
};
</script>
