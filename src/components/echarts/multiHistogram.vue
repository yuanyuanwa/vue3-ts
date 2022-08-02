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
          textStyle: {
            align: "left",
          },
          //修改提示框的顺序
          formatter: function (params:any) {
            let res = "";
            for (let i = params.length - 1; i > -1; i--) {
              var data:any = "" + params[i].name + "<br/>";
              res +=
                '<div style="display:flex;justify-content: space-between;">' +
                "<div>" +
                params[i].marker +
                '<span style="margin-right:20px;">' +
                params[i].seriesName +
                "</span>" +
                "</div>" +
                '<span style="font-weight:bold;">' +
                params[i].value +
                "</span>" +
                "</div>";
            }
            return data + res;
          },
        },
        xAxis: {
          data: [
            "北京",
            "广东",
            "上海",
            "天津",
            "广西",
            "重庆",
            "四川",
            "安徽",
          ],
          axisLine: { onZero: true },
          splitLine: { show: false },
          splitArea: { show: false },
        },
        yAxis: {},
        grid: {
          bottom: 100,
        },
        series: [
          {
            name: "DNN",
            type: "bar",
            stack: "one",
            data: [23,34,6,7,8],
            itemStyle: {
              normal: { color: "#5BD0F1" },
            },
          },
          {
            name: "人联卡",
            type: "bar",
            stack: "one",
            data: [432,34,434,76],
          },
          {
            name: "MEC",
            type: "bar",
            stack: "one",
            data: [32,43,65,87],
          },
          {
            name: "物联卡",
            type: "bar",
            stack: "one",
            data: [100,233,435,65],
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