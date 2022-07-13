<template>
  <component :is="typeComponentMap.carousel" :foo="11123" :imageList='imageList'/>
</template>
<script lang="ts" setup>
import carousel from "@/components/carousel/index.vue";
const typeComponentMap = {
  carousel: carousel,
};
const imageList = [
  { url:require('@/assets/img/1.webp') },
  { url:require('@/assets/img/2.webp') },
  { url:require('@/assets/img/3.webp') },
  { url:require('@/assets/img/4.webp') },
  { url:require('@/assets/img/1.webp') },
  { url:require('@/assets/img/2.webp') },
  { url:require('@/assets/img/3.webp') },
  { url:require('@/assets/img/4.webp') },
  { url:require('@/assets/img/1.webp') },
  { url:require('@/assets/img/2.webp') },
  { url:require('@/assets/img/3.webp') },
  { url:require('@/assets/img/4.webp') },

];
</script>
