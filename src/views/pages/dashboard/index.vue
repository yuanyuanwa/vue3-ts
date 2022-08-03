<template>
  <div class="pl-20 pr-20 body">
    <!-- <div style="width: 100%; height: 100vh;"> -->
    <div  style="height: 100%;width:100%">
      <div class="flex-justify-between" style='width:100%;height: 100%;'>
        <div style="height: 380px; width: 380px" class="pl-20 pr-20">
          <el-image
            class="img"
            :src="duanwu"
            fit="fill"
            style="border-radius: 20%"
          />
        </div>
        <div style="position:relative;flex-grow:1">
          <div style="height: 100px; width: 100px;position:absolute;top:-60px;left:-20px">
            <el-image
              class="img"
              :src="imageUrl"
              fit="fill"
              style="border-radius: 20%"
            />
          </div>
          <div style="height: 100px; width: 100px;position:absolute;top:-60px;right:-20px">
            <el-image
              class="img"
              :src="imageUrl"
              fit="fill"
              style="border-radius: 20%"
            />
          </div>
          <div style="height: 100px; width: 100px;position:absolute;bottom:-60px;left:-20px">
            <el-image
              class="img"
              :src="imageUrl"
              fit="fill"
              style="border-radius: 20%"
            />
          </div>
          <div style="height: 100px; width: 100px;position:absolute;bottom:-60px;right:-20px">
            <el-image
              class="img"
              :src="imageUrl"
              fit="fill"
              style="border-radius: 20%"
            />
          </div>
          <div style="border: 5px dashed #FF8587;width:100%;height:300px;border-radius: 2%;">
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div>
    <div>123</div> -->
  </div>
</template>
<script lang="ts" setup>
const imageUrl = require("@/assets/img/GULULU.png");
const duanwu = require("@/assets/img/duanwu.jpg");
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