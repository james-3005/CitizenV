<template>
  <div class="HomePage">
    <HeaderMenu header="Danh sách" type="default" :notShow="true" />
    <!-- <div class="flex">
      <div class="button2">
        <a-input-search class="button" placeholder="Tìm kiếm" enter-button />
      </div>

      <ButtonBackDrillDown text="Sài gòn" :disable="true" onClick />
      <ButtonBackDrillDown text="NTL" :disable="false" onClick />
    </div> -->
    <!-- <table-a-1/> -->
    <!-- <table-a-2/> -->
    <table-citizen />
  </div>
</template>

<script>
import HeaderMenu from '../moreclues/HeaderMenu.vue';
import TableA1 from '../moreclues/TableA1.vue';
import TableA2 from '../moreclues/TableA2.vue';
import TableCitizen from '../moreclues/TableCitizen.vue';
import ButtonBackDrillDown from '../atoms/ButtonBackDrillDown.vue';

export default {
  components: {
    HeaderMenu,
    TableA1,
    TableA2,
    TableCitizen,
    ButtonBackDrillDown,
  },
  data: function () {
    return {};
  },
  methods: {},
};
</script>
