<template>
  <!-- <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" style="height: 100%" />
    </transition>
  </section> -->
  <router-view v-slot="{ Component }" style="height: 100%">
    <transition name="fade-transform" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const key = computed(() => {
  return route.path;
});

//本来是想写一个页面滚动的动效，希望有天能实现
// let x: number;
// let y: number;
// function getMP(e: any) {
//   var e: any = e || window.event;
//   x =
//     e.clientX +
//     (document.documentElement.scrollLeft || document.body.scrollLeft);
//   y =
//     e.clientY + (document.documentElement.scrollTop || document.body.scrollTop);
// }
// const scrollWindow = (x, y) => {
//   console.log(789);
//   window.scrollTo({
//     top: 10,
//     behavior: "smooth",
//   });
// };

// var moveWheel1 = true;
// var moveWheel2 = false;
// var wheelClock: any;
// const stopWheel = () => {
//   if (moveWheel2 == true) {
//     console.log("滚轮停止了", x, y);
//     scrollWindow(x, y);
//     moveWheel2 = false;
//     moveWheel1 = true;
//   }
// };
// const moveWheel = (e: any) => {
//   var e = e || window.event;
//   if (moveWheel1 == true) {
//     if (e.wheelDelta) {
//       if (e.wheelDelta > 0) {
//         getMP(e);
//         console.log("鼠标滚轮向上滚动");
//       }
//       if (e.wheelDelta < 0) {
//         getMP(e);
//         console.log("鼠标滚轮向下滚动");
//       }
//     }
//     moveWheel1 = false;
//     moveWheel2 = true;
//     wheelClock = setTimeout(stopWheel, 200);
//   } else {
//     clearTimeout(wheelClock);
//     wheelClock = setTimeout(stopWheel, 150);
//   }
//   e.cancelBubble = true;
//   e.stopPropagation(); //既可以阻止事件冒泡，也可以阻止事件捕获，也可以阻止处于目标阶段
// };
// document.addEventListener("wheel", moveWheel, false);
</script>

<style lang='scss' scoped>
.app-main {
  width: 100%;
  position: relative;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
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

