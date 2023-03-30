<template>
  <div
    style="display: flex; justify-content: space-between; height: 200px"
    class="p-20"
  >
    <div class="box">
      <div class="itemImg scroll"></div>
      <div class="text">开发实例 开发文档</div>
    </div>
    <div class="box">
      <div class="itemImg scroll1"></div>
      <div class="text">开发实例 开发文档</div>
    </div>
    <div class="box">
      <div class="itemImg scroll2"></div>
      <div class="text">开发实例 开发文档</div>
    </div>
    <div class="box">
      <div class="itemImg scroll3"></div>
      <div class="text">开发实例 开发文档</div>
    </div>
    <div class="box">
      <div class="itemImg scroll4"></div>
      <div class="text">开发实例 开发文档</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.scroll {
  background-image: url("@/assets/img/scrollImg/compass.png");
}
.scroll1 {
  background-image: url("@/assets/img/scrollImg/scroll1.png");
}
.scroll2 {
  background-image: url("@/assets/img/scrollImg/scroll2.png");
}
.scroll3 {
  background-image: url("@/assets/img/scrollImg/scroll3.png");
}
.scroll4 {
  background-image: url("@/assets/img/scrollImg/scroll4.png");
}
.itemImg {
  width: 150px;
  height: 150px;
  background-repeat: no-repeat;
  background-position-y: 0;
  background-size: 100%;
  animation: imgScroll___2cXWg 1.2s steps(12) infinite;
}
@keyframes imgScroll___2cXWg {
  0% {
    background-position-y: 0;
  }
  100% {
    background-position-y: -1800px;
  }
}
.text {
  display: none;
}
.box:hover .text {
  animation: fadeInUp___ntg1y 0.5s;
  display: block;
}
@keyframes fadeInUp___ntg1y {
  0% {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
}
</style>