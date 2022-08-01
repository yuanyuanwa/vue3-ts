//柱状图 
<template>
  <div ref="mapBox" style="width: 100%; height: 100%">
    <div ref="echart" style="height: 500px"></div>
  </div>
  <!-- <div>{{xData}}--{{nextAge}}</div> -->
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
    grid: {
      type: Object,
      default: {
        top: "15%",
        left: "16%",
        right: "2%",
        bottom: "20%",
      },
    },
  },
  components: {},
  setup(props: any) {
    const { xData, xName, yName, grid } = toRefs(props);
    watch([xData], (newValue, aldValue) => {
      //
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
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: xData,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
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