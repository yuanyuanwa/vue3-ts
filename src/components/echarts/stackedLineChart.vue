// 堆叠折线图 ---vue2来的要改写法
<template>
  <div ref="mapBox" style="width: 100%; height: 100%">
    <div ref="echart" style="height: 300px"></div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  watch,
  computed,
  onMounted,
} from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "",
  props: {
    xData: {
      type: Array,
      default: () => {
        return [150, 230, 224, 218, 135, 147, 260];
      },
    },
    xName: {
      type: Array,
      default: () => {
        return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      },
    },
    yName: {
      type: String,
      default: "y轴名称",
    },
  },
  components: {},
  setup(props: any) {
    const { xData, xName, yName } = toRefs(props);
    watch([xData], (newValue, aldValue) => {
      // console.log("新值：" + newValue, "原值：" + aldValue);
      initMap();
    });
    //如果想监听多个值,在多写几个watch
    //  watch(()=> state.radioIndex,(newVal,oldVal)=>{
    //     console.log(newVal,oldVal,'测试')
    //  },,{immediate: true, deep: true})

    const nextAge = computed(() => {
      return 1;
    });
    onMounted(() => {
      initMap();
    });

    let mapChart: any = null; //如果需要自适应，这里就不能用ref或者reactive定义
    let mapBox = ref<any>();
    let echart = ref<any>(); //也可以用const echart = ref<any>();

    const initMap = () => {
      if (mapChart != null && mapChart != "" && mapChart != undefined) {
        mapChart.dispose(); //销毁
        // mapChart.clear(); //销毁
      }
      let chartDom = echart.value;
      mapChart = echarts.init(chartDom);
      let option = reactive({
        title: {
          text: "Stacked Line",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            showAllSymbol: true,//显示所有数据点
            connectNulls: true,//连接所有点
            name: "Email",
            type: "line",
            // stack: "Total",这个是累计
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            showAllSymbol: true,
            connectNulls: true,
            name: "Union Ads",
            type: "line",
            // stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            showAllSymbol: true,
            connectNulls: true,
            name: "Video Ads",
            type: "line",
            // stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            showAllSymbol: true,
            connectNulls: true,
            name: "Direct",
            type: "line",
            // stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            showAllSymbol: true,
            connectNulls: true,
            name: "Search Engine",
            type: "line",
            // stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      });

      option && mapChart.setOption(option);

      let dom = mapBox.value;
      let ro = new ResizeObserver((entries: any) => {
        mapChart.resize();
      });
      ro.observe(dom);
    };
    //返回一个对象
    return {
      mapChart,
      echart,
      mapBox,
      nextAge,
      initMap,
    };
  },
});
</script>

<style scoped>
</style>