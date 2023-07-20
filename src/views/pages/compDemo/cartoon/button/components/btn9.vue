<template>
  <div class="flex-center">
    <div class="content p-20">
      <div style="position: relative" class="pb-10">
        <span class="official"></span>
        <span class="official2"></span>
      </div>
      <div class="title">iOS版</div>
      <div class="des">扫描二维码下载</div>
    </div>
    <div class="content p-20">
      <div style="position: relative" class="pb-10">
        <span class="official"></span>
        <span class="official2"></span>
      </div>
      <div class="title">iOS版</div>
      <div class="des">扫描二维码下载</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style scoped lang='scss'>
.content {
  width: 120px;
}
.content:hover .official {
  opacity: 0;
}
.content:hover .official2 {
  transform: scale(1);
  opacity: 0.5;
}
.content:hover .title {
  transform: translateY(-17px);
}
.content:hover .des {
  opacity: 1;
  transform: translateY(-17px);
}
.des {
  text-align: center;
  color: #c0c0c0;
  font-size: 12px;
  opacity: 0;
  transition: all 0.4s;
}
.title {
  text-align: center;
  margin-bottom: 4px;
  color: #000;
  font-size: 14px;
  transition: all 0.4s;
}
.official {
  display: inline-block;
  overflow: hidden;
  background-image: url("@/assets/img/btn9/img.svg");
  background-position: -120px 0;
  width: 120px;
  height: 120px;
  transition: all 0.3s;
}
.official2 {
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0;
  display: inline-block;
  background-image: url("@/assets/img/btn9/genqrcode.png");
  background-size: 100%;
  //   background-position: 0 -89px;
  width: 120px;
  height: 120px;
  transform: scale(1.333, 1.333);
  transition: all 0.4s;
}
</style>