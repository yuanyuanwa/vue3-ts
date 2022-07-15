<template>
  <div class="p-10">
    <div class="flex-align-center pb-20">
      <div class="react" />
      <span class="font-bold">单折线图</span>
    </div>
    <div
      style="
        display: grid;
        grid-template-columns: repeat(auto-fill, 45%);
        grid-row-gap: 10px;
        grid-column-gap: 10px;
      "
    >
      <component
        :is="typeComponentMap.lineChart"
        :xData="[10, 20, 39, 49, 99]"
      />
      <component
        :is="typeComponentMap.lineChart"
        :xData="[10, 20, 39, 49, 40]"
        :yName="'yyyyyyyyy'"
      />
    </div>

    <div class="flex-align-center pb-20 pt-20">
      <div class="react" />
      <span class="font-bold">堆叠折线图</span>
    </div>
    <component
      :is="typeComponentMap.stackedLineChart"
      :xData="[10, 20, 39, 49, 99]"
    />
  </div>
</template>
<script lang="ts" setup>
import lineChart from "@/components/echarts/lineChart.vue";
import stackedLineChart from "@/components/echarts/stackedLineChart.vue";
// import { defineComponent, ref, watch, toRefs, onMounted } from "vue";
// export default defineComponent({
//   components: {
//     lineChart,
//   },
// });
const typeComponentMap = {
  lineChart: lineChart,
  stackedLineChart: stackedLineChart,
};


</script>