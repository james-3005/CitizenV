<template>
  <a-button
    v-motion
    :initial="wipeRightToLeft.initial"
    :enter="wipeRightToLeft.enter"
    class="button"
    type="primary"
    :disabled="disable"
    @click="onClick"
    >{{ text }}</a-button
  >
</template>

<script>
import { wipeRightToLeft } from '../utilities/constAnimation';
export default {
  props: {
    text: String,
    disable: Boolean,
    onClick: Function,
  },
  data: () => ({
    wipeRightToLeft,
  }),
  mounted() {},
};
</script>
