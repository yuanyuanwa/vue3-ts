<template>
  <div class="p-20">
    <h1>222</h1>
    <div style="display: grid;grid-template-columns: repeat(2, 50%);grid-row-gap: 10px;grid-column-gap: 10px;">
      <div>
        <lineChart :xData="[10,20,39,49,99]"/>
      </div>
      <div>
        <lineChart :xData="[10,20,39,49,40]" :yName="'yyyyyyyyy'"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import lineChart from '@/components/echarts/lineChart.vue'
import { defineComponent, ref,watch,toRefs ,onMounted} from 'vue';
export default defineComponent({
  name: '',
  props:{},
  components: {
    lineChart
  },
})
</script>