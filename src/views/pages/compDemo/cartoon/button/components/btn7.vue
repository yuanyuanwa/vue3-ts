<template>
  <div ref="test" style="width: 600px; height: 500px"></div>
</template>
<script>
import * as echart from "echarts";
import cq from "./chongqing.json"; //地图的json文件
import { ref, onMounted } from "vue";
export default {
  name: "Echart1",
  setup() {
    let test = ref(null); //获取div元素，这里与vue2.x的写法不一样了
    let myChart = null;
    function pie() {
      myChart.setOption({
        series: [
          {
            type: "map",
            map: "cq",
            itemStyle: {
              areaColor: "white",
              borderColor: "skyblue",
              borderType: "solid",
              borderWidth: 1,
            },
          },
        ],
      });
    }
    onMounted(() => {
      myChart = echart.init(test.value);
      echart.registerMap("cq", { geoJSON: cq });
      pie();
    });
    return {
      test, //test变量必须要写，如果没写，就拿不到div元素
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>