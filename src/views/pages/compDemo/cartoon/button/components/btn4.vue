<template>
  <div class="flex-center" style="height: 200px">
    <span class="dot">
      <i class="dotItem"></i>
      <i class="dotItem"></i>
      <i class="dotItem"></i>
      <i class="dotItem"></i>
    </span>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.dot {
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  transform: rotate(0deg);
  animation: antRotate 1.2s linear infinite;
}
@keyframes antRotate {
  100% {
    transform: rotate(405deg);
  }
}
.dotItem {
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: #1890ff;
  border-radius: 100%;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  opacity: 0.3;
  animation: antSpinMove 1s linear infinite alternate;
}
.dotItem:first-child {
  top: -1px;
  left: 0;
}
.dotItem:nth-child(2) {
  top: 0;
  right: 0;
  animation-delay: 0.4s;
}
.dotItem:nth-child(3) {
  right: 0;
  bottom: 0;
  animation-delay: 0.8s;
}
.dotItem:nth-child(4) {
  bottom: 0;
  left: 0;
  animation-delay: 1.2s;
}
</style>