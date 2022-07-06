<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" style="height: 100%" />
    </transition>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute} from "vue-router"

const route = useRoute()
const key = computed(() => {
  return route.path;
});
</script>

<style lang='scss' scoped>
.app-main {
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
}

.fixed-header + .app-main {
  padding-top: 50px;
}
 
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}
 
.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
 
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
 
</style>

