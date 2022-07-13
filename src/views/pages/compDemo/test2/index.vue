<template>
  <div class="p-10">
    <div class="flex-align-center pb-20">
      <div class="react" />
      <span class="font-bold">轮播图</span>
    </div>
    <component
      :is="typeComponentMap.carousel"
      :foo="11123"
      :imageList="imageList"
      @getMapData='getMapData'
    />

    <div class="flex-align-center pb-20">
      <div class="react" />
      <span class="font-bold">表格</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import carousel from "@/components/carousel/index.vue";
const typeComponentMap = {
  carousel: carousel,
};
const imageList = [
  { url: require("@/assets/img/1.webp") },
  { url: require("@/assets/img/2.webp") },
  { url: require("@/assets/img/3.webp") },
  { url: require("@/assets/img/4.webp") },
  { url: require("@/assets/img/1.webp") },
  { url: require("@/assets/img/2.webp") },
  { url: require("@/assets/img/3.webp") },
  { url: require("@/assets/img/4.webp") },
  { url: require("@/assets/img/1.webp") },
  { url: require("@/assets/img/2.webp") },
  { url: require("@/assets/img/3.webp") },
  { url: require("@/assets/img/4.webp") },
];
//子组件调用父组件的方法
const getMapData=(data:unknown)=>{
  console.log('getMapData',data)
}
</script>
