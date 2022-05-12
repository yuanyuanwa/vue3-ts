// 堆叠折线图 ---vue2来的要改写法
<template>
  <div ref="mapBox" style="width:100%;height:100%">
    <div ref="echart" style="height:300px;"></div>
  </div>
</template>
<script lang="ts">
// import * as echarts from 'echarts';
// export default {
//   props: {
//     xData: {
//       type: Array,
//       default: () => {
//         return [
//           {
//             name: 'a',
//             data: [120, 132, 101, 134, 90, 230, 210]
//           },
//           {
//             name: 'b',
//             data: [220, 182, 191, 234, 290, 330, 310]
//           }
//         ]
//       },
//     },
//     xName: {
//       type: Array,
//       default: () => {
//         return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//       }
//     },
//     yName: {
//       type: String,
//       default: 'y轴名称',
//     },
//   },
//   watch: {
//     xData: {
//       handler(newVal:any, oldVal:any) {
//         this.handleData(newVal)
//       },
//       immediate: true,
//       deep: true
//     }
//   },
//   data() {
//     return {
//       mapChart: '',
//       series: [],
//       legend:[]
//     }
//   },
//   mounted() {
//     this.initMap()
//   },
//   methods: {
//     handleData(data) {
//       data.map((item, index) => {
//         this.series.push({
//           showAllSymbol: true,
//           connectNulls: true,
//           name: item.name,
//           type: 'line',
//           data: item.data
//         })
//         this.legend.push(item.name)
//       })
//     },
//     initMap() {
//       if (this.mapChart != null && this.mapChart != "" && this.mapChart != undefined) {
//         this.mapChart.dispose(); //销毁
//       }
//       let chartDom = this.$refs.echart
//       this.mapChart = echarts.init(chartDom);
//       let option;

//       option = {
//         tooltip: {
//           trigger: 'axis'
//         },
//         legend: {
//           data: this.legend,
//           y: 'bottom',
//         },
//         grid: {
//           top: '15%',
//           left: '7%',
//           right: '2%',
//           bottom: '20%',
//           containLabel: true
//         },
//         xAxis: {
//           type: 'category',
//           boundaryGap: false,
//           data: this.xName
//         },
//         yAxis: {
//           type: 'value',
//           name: this.yName,
//         },
//         series:  this.series
//       };

//       option && this.mapChart.setOption(option);

//       let dom = this.$refs.mapBox
//       let ro = new ResizeObserver((entries) => {
//         this.mapChart.resize();
//       });
//       ro.observe(dom);
//     },
//   }
// }
</script>

<style scoped>
</style>