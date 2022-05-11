<template>
  <div class="about">
    <h1>222</h1>
    <div>
      <lineChart :xData="[10,20,39,49,99]"/>
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