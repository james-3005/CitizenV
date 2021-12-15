<template>
  <div class="Loading">
    <div class="Loading-message">
      <a-result
        :status="$store.state.isErr"
        :title="$store.state.isErr"
        sub-title="Có lỗi xảy ra, vui lòng thử lại"
      >
        <template #extra>
          <a-button type="primary" @click="close"> Quay về </a-button>
        </template>
      </a-result>
    </div>
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
