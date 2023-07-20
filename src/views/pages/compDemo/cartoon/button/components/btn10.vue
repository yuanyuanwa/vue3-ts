<template>
  <div class="flex-center">
    <section>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </div>
</template>
<style scoped lang='scss'>
section {
  position: relative;
  width: 452px;
  height: 302px;
  margin: 200px auto;
  background: url("@/assets/img/5.webp") no-repeat;
  animation: rotate 15s linear infinite;
  transform-style: preserve-3d;
}
section:hover {
  animation-play-state: paused;
}
@keyframes rotate {
  0% {
    transform: rotateY(0) rotatex(-20deg);
  }
  100% {
    transform: rotateY(360deg) rotatex(-20deg);
  }
}
section div {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: url("@/assets/img/5.webp") no-repeat;
}
div:first-child {
  transform: translateZ(400px);
}
div:nth-child(2) {
  transform: rotateY(60deg) translateZ(400px);
}
div:nth-child(3) {
  transform: rotateY(120deg) translateZ(400px);
}
div:nth-child(4) {
  transform: rotateY(180deg) translateZ(400px);
}
div:nth-child(5) {
  transform: rotateY(240deg) translateZ(400px);
}
div:last-child {
  transform: rotateY(300deg) translateZ(400px);
}
</style>