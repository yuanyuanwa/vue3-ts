<template>
  <div class="p-20">
    <canvas id="canvasDome" ref="canvasDome"></canvas>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

//获取dom
const canvasDome = ref<HTMLCanvasElement>();
let ctx: CanvasRenderingContext2D;

const initCanvas = () => {
  ctx = canvasDome.value!.getContext("2d") as CanvasRenderingContext2D;
  ctx.moveTo(0, 0); // moveTo(x,y) 定义线条开始坐标
  ctx.lineTo(200, 100); // lineTo(x,y) 定义线条结束坐标
  ctx.stroke();
  ctx.fillText("Hello World", 10, 150); // 实心文字
  ctx.strokeText("Hello World", 10, 180); // 空心文字
};
onMounted(() => {
  initCanvas();
});
</script>
<style lang="scss" scoped>
</style>