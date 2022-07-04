<template>
  <div>
    <NavBar />
    <div style="overflow:scroll;height:92vh;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './components/navBar/index.vue';

export default defineComponent({
  name: '',
  components: {
    NavBar,
  },
  setup() {
    //返回一个对象
    return {

    }
  }
});
</script>

<style lang="scss" scoped>
</style>
