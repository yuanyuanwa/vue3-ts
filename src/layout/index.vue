<template>
  <div>
    <NavBar />
    <div style="display: flex">
      <div style="overflow: auto; height: 80vh;scrollbar-width: thin;">
        <SiderBar/>
      </div>

      <div style="overflow-y: auto;overflow-x: hidden; height: 80vh; flex-grow: 1;  scrollbar-width: thin;">
        <AppMain  />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import NavBar from "./components/navBar/index.vue";
import SiderBar from "./components/siderBar/index.vue";
import AppMain from "./components/AppMain/index.vue";
import store from '@/store/index'

export default defineComponent({
  name: "",
  components: {
    NavBar,
    SiderBar,
    AppMain,
  },
  setup() {
    const route = useRoute();
    //返回一个对象
    return {
      
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
