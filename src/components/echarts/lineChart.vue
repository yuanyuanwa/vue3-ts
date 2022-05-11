// 单折线 ---vue2来的要改写法 
<template>
  <div ref="mapBox" style="width:100%;height:100%">
    <div ref="echart" style="height:300px;"></div>
  </div>
  <div>{{xData}}</div>
</template>
<script lang="ts">
import { defineComponent, ref,reactive,watch,toRefs ,onMounted} from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: '',
    props: {
    xData: {
      type: Array,
      default: ()=>{
        return [150, 230, 224, 218, 135, 147, 260]
      },
    },
    xName: {
      type: Array,
      default: ()=>{
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    },
    yName: {
      type: String,
      default: 'y轴名称',
    },
  },
  components: {},
  setup(props:any) {
    const {xData,xName,yName} = toRefs(props)
    watch([xData],(newValue,aldValue)=>{
       console.log('新值：'+newValue,'原值：'+aldValue)
       initMap()
     })
    onMounted(()=>{
      initMap()
    })

      let mapChart:any=null //如果需要自适应，这里就不能用ref或者reactive定义
      let mapBox = ref<any>()
      let echart = ref<any>();  //也可以用const echart = ref<any>();

      const  initMap=() =>{
      if (mapChart != null && mapChart != "" && mapChart != undefined) {
        mapChart.dispose(); //销毁
      }
      let chartDom = echart.value
      mapChart = echarts.init(chartDom);
      let option=reactive({grid: {
          top: '15%',
          left: '16%',
          right: '2%',
          bottom: '20%',
        },
        xAxis: {
          type: 'category',
          data: xName
        },
        yAxis: {
          name: yName,
          type: 'value',
          nameGap: 25
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['CPU使用率'],
          y: 'bottom',
        },
        series: [
          {
            showAllSymbol: true,//显示所有数据点
            connectNulls: true,//折线图拼接空数据
            data:xData,
            type: 'line',
            name: 'CPU使用率'
          }
        ]});


      option && mapChart.setOption(option);

      let dom =mapBox.value
      let ro = new ResizeObserver((entries:any) => {
        mapChart.resize();
      });
      ro.observe(dom);
    }
    //返回一个对象
    return {
      mapChart,
      echart,
      mapBox,
      initMap
    }
  }
});
</script>

<style scoped>
</style>