<template>
  <div class="flex-center" style="height: 200px">
    <!-- https://code.juejin.cn/pen/7168265896345993247 -->
    <div class="container_wrap">
      <button class="btn-pill-nb">
        <span>Pill NB</span>
      </button>
      <button class="btn-slide-line-nb">
        <span>Slideline NB</span>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container_wrap {
  width: 40%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  position: relative;
  margin: 0;
  padding: 5px 10px;
  height: 60px;
  width: 150px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  border: 1px solid rgba(22, 76, 167, 0.6);
  border-radius: 10px;
  color: #1d89ff;
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.02, 0.01, 0.47, 1);
}
button span {
  color: #164ca7;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.7px;
}
button:hover {
  animation: rotate 0.7s ease-in-out both;
}
button:hover span {
  animation: storm 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}
@keyframes storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}
.btn-pill-nb:before,
.btn-pill-nb:after {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #1d89ff;
  content: "";
  opacity: 0;
  transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
    opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
  z-index: -1;
  transform: translate(100%, -25%) translate3d(0, 0, 0);
}
.btn-pill-nb:hover:before,
.btn-pill-nb:hover:after {
  opacity: 0.15;
  transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
    opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
}
.btn-pill-nb:hover:before {
  transform: translate3d(50%, 0, 0) scale(0.9);
}
.btn-pill-nb:hover:after {
  transform: translate(50%, 0) scale(1.1);
}
.btn-shine {
  border: 1px solid;
  overflow: hidden;
  position: relative;
}
.btn-shine span {
  z-index: 20;
}
.btn-shine:after {
  background: #38ef7d;
  content: "";
  height: 155px;
  left: -75px;
  opacity: 0.4;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}
.btn-shine:hover:after {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}

.btn-slide-line-nb:after {
  position: absolute;
  right: 0;
  left: auto;
  transition: 0.3s;
  content: "";
  width: 0;
  bottom: 0;
  height: 3px;
  background: #164ca8;
}
.btn-slide-line-nb:hover {
  cursor: pointer;
}
.btn-slide-line-nb:hover:after {
  width: 100%;
  left: 0;
}
.inspire a {
  text-decoration: none;
}
</style>