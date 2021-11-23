<template>
  <div
    class="ProgressChart"
    v-motion
    :initial="popUp.initial"
    :enter="popUp.enter"
    :leave="popUp.leave"
  >
    <HeaderMenu
      header="Tiến độ điền phiếu"
      :onExit="handleToggleProgress"
      type="small"
    />
    <div class="ProgressChart-progress">
      <div>
        <a-progress
          :percent="100"
          :success-percent="sign"
          type="circle"
          :format="(percent) => ''"
          strokeWidth="10"
        />
      </div>
      <div class="ProgressChart-progress-explain">
        <div></div>
        <p>{{ sign }}% (Đã điền)</p>
      </div>
      <div class="ProgressChart-progress-explain__notsign">
        <div></div>
        <p>{{ notSign }}% (Chưa điền)</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue';
import { popUp } from '../utilities/constAnimation';
export default {
  props: {
    handleToggleProgress: Function,
    list: Array,
  },
  data: function () {
    return {
      sign: null,
      notSign: null,
      popUp,
    };
  },
  mounted() {
    this.sign =
      (this.list.filter((item) => item.status === 'Đã điền').length /
        this.list.length) *
      100;
    this.notSign = 100 - this.sign;
  },
  methods: {},
  components: {
    HeaderMenu,
  },
};
</script>
