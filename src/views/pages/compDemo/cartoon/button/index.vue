<template>
  <component :is="compGrounp.btn1" ref="btn1" />
</template>
<script lang="ts" setup>
//在引入子组件时，虽然不用注册，但是引入时，组件名称要与文件名称一致
import btn1 from "./components/btn1.vue";
const compGrounp = {
  btn1: btn1,
};
</script>
<style lang="scss" scoped>
</style>