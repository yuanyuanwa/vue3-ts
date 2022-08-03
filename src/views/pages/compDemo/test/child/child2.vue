<template>
  <div class="p-10">
    <div class="flex-align-center pb-20">
      <div class="react" />
      <span class="font-bold">柱状图</span>
    </div>
    <component :is="typeComponentMap.histogram" :xData="[10, 20, 39, 49, 99]" />

    <div class="flex-align-center pb-20 pt-20">
      <div class="react" />
      <span class="font-bold">堆叠柱状图</span>
    </div>
    <component
      :is="typeComponentMap.multiHistogram"
      :xData="[10, 20, 39, 49, 99]"
    />
  </div>
</template>
<script lang="ts" setup>
import histogram from "@/components/echarts/histogram.vue";
import multiHistogram from "@/components/echarts/multiHistogram.vue";

// import { defineComponent, ref, watch, toRefs, onMounted } from "vue";
// export default defineComponent({
//   components: {
//     lineChart,
//   },
// });
const typeComponentMap = {
  histogram: histogram,
  multiHistogram: multiHistogram,
};
</script>

<style lang="scss" scoped>
</style>
