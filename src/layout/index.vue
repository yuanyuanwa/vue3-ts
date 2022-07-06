<template>
  <div>
    <NavBar />
    <div style="display: flex">
      <div style="overflow: scroll; height: 80vh" >
        <SiderBar />
      </div>

      <div style="overflow: scroll; height: 80vh;flex-grow:1">
        <AppMain/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./components/navBar/index.vue";
import SiderBar from "./components/siderBar/index.vue";
import AppMain from "./components/AppMain/index.vue";

export default defineComponent({
  name: "",
  components: {
    NavBar,
    SiderBar,
    AppMain
  },
  setup() {
    //返回一个对象
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
