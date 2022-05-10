// 单折线图
<template>
  <div ref="mapBox" style="width:100%;height:100%">
    <div ref="echart" style="height:300px;"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
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
  watch: {
    xData: {
      handler(newVal, oldVal) {
        console.log('oldVal:', oldVal)
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      mapChart: '',
    }
  },
  mounted() {
    console.log('组件组件组件')
    this.initMap()
  },
  methods: {
    initMap() {
      if (this.mapChart != null && this.mapChart != "" && this.mapChart != undefined) {
        this.mapChart.dispose(); //销毁
      }
      let chartDom = this.$refs.echart
      // let chartDom = document.getElementById('map11');
      this.mapChart = echarts.init(chartDom);
      let option;

      option = {
        grid: {
          top: '15%',
          left: '16%',
          right: '2%',
          bottom: '20%',
        },
        xAxis: {
          type: 'category',
          data: this.xName
        },
        yAxis: {
          name: this.yName,
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
            data: this.xData,
            type: 'line',
            name: 'CPU使用率'
          }
        ]
      };

      option && this.mapChart.setOption(option);

      let dom = this.$refs.mapBox
      let ro = new ResizeObserver((entries) => {
        this.mapChart.resize();
      });
      ro.observe(dom);
    },
  }
}
</script>

<style scoped>
</style>