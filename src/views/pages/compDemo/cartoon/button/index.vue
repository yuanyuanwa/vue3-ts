<template>
  <div @scroll="scrolling" id="content">
    <component :is="compGrounp.btn1" ref="btn1" />
    <component :is="compGrounp.btn2" ref="btn2" />

    <component :is="compGrounp.btn3" ref="btn3" />
    <component :is="compGrounp.btn4" ref="btn4" />

    <component :is="compGrounp.btn5" ref="btn5" />
    <component :is="compGrounp.btn6" ref="btn6" />
    <div id="animal_div"></div>
    <component :is="compGrounp.btn7" ref="btn7" />
    
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
//在引入子组件时，虽然不用注册，但是引入时，组件名称要与文件名称一致
import btn1 from "./components/btn1.vue";
import btn2 from "./components/btn2.vue";
import btn3 from "./components/btn3.vue";
import btn4 from "./components/btn4.vue";
import btn5 from "./components/btn5.vue";
import btn6 from "./components/btn6.vue";
import btn7 from "./components/btn7.vue";

const compGrounp = {
  btn1: btn1,
  btn2: btn2,
  btn3: btn3,
  btn4: btn4,
  btn5: btn5,
  btn6: btn6,
  btn7: btn7,
};

const bottom = ref(false);

// 获取网页被滚动走的距离（这里的距离是相对于父元素的）
// 判断元素父集是否有已定位元素,有的话叠加所有父元素的offsetTop
const getOffsetTop = (e: any) => {
  var top = e.offsetTop;
  var parent = e.offsetParent;
  while (parent != null) {
    top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return top;
};
onMounted(() => {
  // 获取浏览器可见区域高度
  // console.log("window_height", window_height);
  // 获取所需执行动画的div
});
const scrolling = (e: any) => {
  console.log(999);
  var window_height = document.documentElement.clientHeight;
  var animal_div = document.getElementById("animal_div");
  const clientHeight = e.target.clientHeight;
  const scrollHeight = e.target.scrollHeight;
  const scrollTop = e.target.scrollTop;

  // if (scrollTop + clientHeight >= scrollHeight) {
  //   console.log("到底了!");
  //   bottom.value = true;
  // } else {
  //   bottom.value = false;
  // }
  var _scrollTop = e.target.scrollTop;
  console.log(
    1,
    _scrollTop >= getOffsetTop(animal_div) - window_height &&
      _scrollTop <= getOffsetTop(animal_div)
  );
  if (
    _scrollTop >= getOffsetTop(animal_div) - window_height &&
    _scrollTop <= getOffsetTop(animal_div)
  ) {
    console.log(9, animal_div?.style);
    document.getElementById("animal_div").style.animation =
      "slideUp 1s forwards";
  }
};
</script>
<style lang="scss" scoped>
#content {
  height: 100%;
  overflow: auto;
}
#animal_div {
  height: 100px;
  width: 100px;
  background: palevioletred;
  transform: translateY(100%);
  // animation: slideUp 3s forwards;
  /* 动画持续1秒，过程无限循环，由下向上滑动 */
}

</style>
<style>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>