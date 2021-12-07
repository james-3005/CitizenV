<template>
  <a-button
    v-motion
    :initial="wipeRightToLeft.initial"
    :enter="wipeRightToLeft.enter"
    :leave="wipeRightToLeft.leave"
    class="button"
    type="primary"
    :disabled="disable"
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
