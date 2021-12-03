<template>
  <div class="HomePage">
    <HeaderMenu header="Cài đặt" type="default" :notShow="true" />
    <div class="c">
      <div class="d">
        <div class="a" :roll="switchDiv"></div>
        <div class="b"></div>
      </div>
    </div>
    <a-button @click="switchDiv = !switchDiv">toggle</a-button>
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
export default {
  components: { HeaderMenu },
  data: function () {
    return {
      switchDiv: true,
    };
  },
  methods: {},
  mounted() {
    let { query } = this.$route;
    console.log(query);
    // if(this._.get(query,'a')) this.switchDiv=true;
    // if(this._.get(query,'b')) this.switchDiv=false;
  },
};
</script>
