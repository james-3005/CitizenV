<template>
  <div class="Loading">
    <a-alert
      message="Lỗi"
      type="error"
      show-icon
      closable
      @close="close"
      description="Có lỗi xảy ra, vui lòng thử lại"
    />
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.commit('turnOffErr');
    },
  },
};
</script>
