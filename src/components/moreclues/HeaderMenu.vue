<template>
  <div class="HeaderMenu">
    <h1>{{ header }}</h1>
    <a-button
      v-if="!notShow"
      type="default"
      icon="close"
      size="default"
      @click="onExit"
      >{{ type === 'default' ? 'Trở về' : '' }}</a-button
    >
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    onExit: Function,
    type: String,
    notShow: Boolean,
  },
  mounted() {
    console.log(this.notShow);
  },
};
</script>
