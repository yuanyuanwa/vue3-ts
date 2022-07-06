<template>
    <div style="height: 100%; width: 100%; overflow: auto">
      <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "",
  components: {},
  setup() {
    //返回一个对象
    return {};
  },
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
