<template>
  <div class="HeaderMenu">
    <h1>{{ header }}</h1>
    <a-button type="default" icon="close" size="default" @click="onExit">{{
      type === 'default' ? 'Trở về' : ''
    }}</a-button>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    onExit: Function,
    type: String,
  },
};
</script>
