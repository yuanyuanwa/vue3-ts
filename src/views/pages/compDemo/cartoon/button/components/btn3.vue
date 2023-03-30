<template>
  <div class="flex-center" style="height: 200px">
    <div class="box1 mr-20">
      <span class="hoverNone hover">1</span>
    </div>
    <div class="box mr-20">
      <span class="hoverNone hover">hover</span>
      <span class="hoverBlock item">上</span>
      <span class="line hoverBlock item"></span>
      <span class="hoverBlock item">下</span>
    </div>
    <div class="box1">
      <span class="hoverNone hover">2</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.hover {
  display: block;
  text-align: center;
  line-height: 50px;
  position: relative;
}
.item {
  display: none;
  text-align: center;
  line-height: 50px;
  position: relative;
  height: px;
}
.box {
  color: white;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  background: pink;
  overflow: hidden;
}
.box1 {
  color: white;
  height: 50px;
  width: 200px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  background: pink;
}
.box:hover {
  height: 100px;
  margin-top: -25px;
}
.box:hover .item {
  display: block;
}
.box:hover .hover {
  display: none;
}
</style>