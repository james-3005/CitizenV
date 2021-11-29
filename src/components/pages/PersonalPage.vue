<template>
  <div class="PersonalPage">
    <HeaderMenu
      header="Cá nhân"
      :onExit="
        () => {
          this.$router.go(-1);
        }
      "
      type="default"
    />
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
export default {
  props: {},
  data: () => ({}),
  methods: {},
  components: {
    HeaderMenu,
  },
};
</script>
