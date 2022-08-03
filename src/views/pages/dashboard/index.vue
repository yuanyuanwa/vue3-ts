<template>
  <div class="pl-20 pr-20 body">
    <!-- <div style="width: 100%; height: 100vh;"> -->
    <div  style="height: 100%;width:100%">
      <div class="flex-justify-around" style='width:100%;height: 100%;'>
        <div class="pl-20 pr-20">
          <el-image
            class="img"
            :src="duanwu"
            fit="cover"
            style="border-radius: 20%;height: 300px; width: 300px;border:5px dashed #EDA7A7"
          />
        </div>
        <div class="pl-20 pr-20">
          <el-image
            class="img"
            :src="duanwu2"
            fit="cover"
            style="border-radius: 20%;height: 300px; width: 300px;border:5px dashed #EDA7A7"
          />
        </div>
        <div class="pl-20 pr-20">
          <el-image
            class="img"
            :src="duanwu3"
            fit="cover"
            style="border-radius: 20%;height: 300px; width: 300px;border:5px dashed #EDA7A7"
          />
        </div>
      </div>
    </div>
    <!-- </div> -->
    <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
  </div>
</template>
<script lang="ts" setup>
const imageUrl = require("@/assets/img/GULULU.png");
const duanwu = require("@/assets/img/duanwu.jpg");
const duanwu2 = require("@/assets/img/duanwu2.jpg");
const duanwu3 = require("@/assets/img/duanwu3.jpg");
</script>
<style lang="scss" scoped>
.body {
  background: white;
  background-image: linear-gradient(
      90deg,
      rgba(217, 212, 212, 0.5) 50%,
      transparent 0
    ),
    linear-gradient(rgba(217, 212, 212, 0.5) 50%, transparent 0);
  background-size: 70px 70px;
  overflow: scroll;
}
.img {
  transition: all 0.3s ease;
}
.img:hover {
  transform: scale(1.1);
}
</style>