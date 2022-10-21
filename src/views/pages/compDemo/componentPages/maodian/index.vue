<template>
  <div
    style="
      display: flex;
      justify-content: space-between;
      overflow: auto;
      position: relative;
    "
    ref="scrollview"
    class="aaa"
  >
    <div class="content" :style="{ 'margin-right': whether ? '95px' : '0px' }">
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div>123</div>
    </div>
    <div :class="whether ? 'isFixed' : ''">

      <ul class="tabs list" :style="{'margin-top':whether?'0px':'40px'}">
        <li
          style="list-style-type: none"
          v-for="(item, index) in tabsList2"
          :key="index"
          :class="{ active: index === activeIndex }"
          @click.stop="toContent(item, index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { number } from "echarts";
import {
  ref,
  Ref,
  reactive,
  watch,
  toRefs,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue";
const tabsList2 = reactive([
  { name: "课程简介", value: "content" },
  { name: "研制背景", value: "background" },
  { name: "课程目标", value: "goal" },
  { name: "课程内容", value: "content" },
  { name: "课程实施", value: "operationInfo" },
  { name: "课程评价", value: "eval" },
  { name: "建设经验", value: "exp" },
  { name: "建设成效", value: "effect" },
  { name: "存在问题", value: "problem" },
  { name: "课程体系框架", value: "structure" },
  { name: "教学案例", value: "teacherCaseInfo" },
]);
const activeIndex: Ref<number> = ref(1);
const whether: Ref<boolean> = ref(false);
const handleScroll = () => {
  //计算滚动条位置
  var scrollTop =
    document.querySelector(".aaa").pageYOffset ||
    document.querySelector(".aaa").scrollTop ||
    document.querySelector(".aaa").scrollTop;
  //计算绑定div位置
  var offsetTop = document.querySelector(".list").offsetTop;
  console.log(999, scrollTop,offsetTop);
  //进行比较设置位置fixed
  whether.value = scrollTop > offsetTop;
};
const scrollview = ref(null);

onMounted(() => {
  nextTick(() => {
    console.log(898989, document.querySelector(".aaa"), scrollview);
    document.querySelector(".aaa").addEventListener("scroll", handleScroll);
  });
});
onBeforeUnmount(() => {
  document.querySelector(".aaa").removeEventListener("scroll", handleScroll);
});
</script>
<style lang="scss" scoped>
.active {
  color: pink;
}
.content {
  background: pink;
  flex-grow: 1;
  height: 80vh;
}
.content::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.content::-webkit-scrollbar-thumb {
  background-color: skyblue;
  border-radius: 3px;
}
.isFixed {
  position: fixed;
  top: 119px;
  right: 5px;
  z-index: 1000;
}
</style>