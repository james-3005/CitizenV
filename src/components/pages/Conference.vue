<template>
  <div class="Conference">
    <SideBar />
    <div class="leftSide">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from '../moreclues/SideBar.vue';
export default {
  components: {
    SideBar,
  },
};
</script>
