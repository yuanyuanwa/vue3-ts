<template>
  <div class="p-20">
    <div class="circle" ref="circle">
      <div class="ratate" ref="ratate">
        <div class="font" ref="font">
          <img :src="src1" alt="" />
        </div>
        <div class="back" ref="back">
          <img :src="src2" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { nextTick, ref } from "vue";

const circle = ref();
const font = ref();
const back = ref();
let flag = ref(true);
let src1 = ref("");
let src2 = ref("");
const changeTrafficLight = (duration: any, color: any, num1: string) => {
  return new Promise(function (resolve, reject) {
    nextTick(() => {
      circle.value.style.backgroundColor = color;
      if (flag.value) {
        src1.value = require("@/assets/img/btn8/" + num1 + ".png");
      } else {
        src2.value = require("@/assets/img/btn8/" + num1 + ".png");
      }
      flag.value = !flag.value;
    });
    setTimeout(resolve, duration);
  });
};

const trafficLightFun = async () => {
  await changeTrafficLight(1000, "rgb(2, 222, 54)", "icon1");
  await changeTrafficLight(1000, "rgb(232, 239, 255)", "icon2");
  await changeTrafficLight(1000, "rgb(1, 221, 108)", "icon3");
  trafficLightFun();
};
trafficLightFun();


const ratate = ref();
const changeTrafficLight2 = (duration: any, color: any) => {
  return new Promise(function (resolve, reject) {
    nextTick(() => {
      ratate.value.style.transform = color;
    });
    setTimeout(resolve, duration);
  });
};
const trafficLightFun2 = async () => {
  await changeTrafficLight2(1000, "rotateY(0deg)");
  await changeTrafficLight2(1000, "rotateY(180deg)");
  trafficLightFun2();
};
trafficLightFun2();
</script>
<style lang="scss" scoped>
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: background-color 0.5s linear;
  //   animation: rotate 3s ease-in-out infinite;
}
.ratate {
  width: 100px;
  height: 100px;
  background: transparent;
  position: relative;
  // border: 1px solid pink;
  top: 0px;
  transition: transform 0.5s linear, -webkit-transform 0.5s linear;
  transform-style: preserve-3d;
}
.ratate img {
  width: 66px;
  height: 66px;
}
.font {
  z-index: 20;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.back {
  transform: rotateY(180deg);
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

// @keyframes rotate {
//   0% {
//     background: rgb(2, 222, 54);
//   }
//   33% {
//     background: rgb(232, 239, 255);
//   }
//   66% {
//     background: rgb(1, 221, 108);
//   }
//   100% {
//     background: rgb(2, 222, 54);
//   }
// }
</style>
