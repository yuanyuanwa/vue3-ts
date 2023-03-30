<template>
  <div>
    <component :is="compGrounp.btn1" ref="btn1" />
    <component :is="compGrounp.btn2" ref="btn2" />
    <component :is="compGrounp.btn3" ref="btn3" />
    <component :is="compGrounp.btn4" ref="btn4" />
    <component :is="compGrounp.btn5" ref="btn5" />
  </div>
</template>
<script lang="ts" setup>
//在引入子组件时，虽然不用注册，但是引入时，组件名称要与文件名称一致
import btn1 from "./components/btn1.vue";
import btn2 from "./components/btn2.vue";
import btn3 from "./components/btn3.vue";
import btn4 from "./components/btn4.vue";
import btn5 from "./components/btn5.vue";

const compGrounp = {
  btn1: btn1,
  btn2: btn2,
  btn3: btn3,
  btn4: btn4,
  btn5: btn5,
};
</script>
<style lang="scss" scoped>
</style>