<template>
  <div class="p-10">
    <div class="flex-align-center pb-20">
      <div class="react" />
      <span class="font-bold">input框</span>
    </div>
    <div>
      <div class="search">
        <el-button type="primary">搜索</el-button>
        <el-input class="input"></el-input>
      </div>
      <div class="pt-20" style="position: relative">
        <input
          class="search1"
          type="text"
          placeholder="hover"
          v-model="inputText"
          :class="[searchText ? 'searchtext' : 'search1']"
          @input="search"
        />
      </div>
      <div class="pt-20">
        <input class="search2" type="text" placeholder="focus" />
      </div>
      <div class="pt-20">
        <div class="search3">
          <div class="pt-10">123</div>
          <div class="pt-20">321</div>
        </div>
      </div>
      <div class="pt-10">鼠标移动上去{{ searchText }}</div>
    </div>

    <div class="flex-align-center pt-20">
      <div class="react" />
      <span class="font-bold">图片动效</span>
    </div>
    <div style="display: flex; justify-content: space-around">
      <div class="img pb-40 pt-40">
        <el-image :src="imageUrl" fit="fill" />
        <span>鼠标移动上去</span>
      </div>
      <div class="pb-40 pt-40">
        <el-image
          class="rotate"
          style="width: 100px; height: 100px"
          :src="imageUrl"
          fit="fill"
        />
      </div>
      <div class="pb-40 pt-40">
        <el-image
          class="rotatehover"
          style="width: 100px; height: 100px"
          :src="imageUrl"
          fit="fill"
        />
        <span>鼠标移动上去</span>
      </div>
    </div>

    <div class="flex-align-center pb-20 pt-20">
      <div class="react" />
      <span class="font-bold">一些网址</span>
    </div>
    <div>
      <el-link
        href="https://animate.style/"
        :underline="false"
        target="_blank"
        >https://animate.style</el-link
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const imageUrl = require("@/assets/img/6.webp");

let inputText: string = ref("");
let searchText: string = ref("");

//获取输入框正在输入的值，包括没有还没有输入到输入框但是正在输入的值
//@input=‘search’
const search = (event: any) => {
  searchText.value = event.target.value;
};
</script>
<style lang="scss" scoped>
.input {
  width: 0px;
  //虽然transition写了all，但是如果不写input没写高度，input:hover的写的高度是瞬间变化的
  transition: all 1s ease;
}
.search:hover .input {
  width: 200px;
}

.img {
  width: 100px;
  height: 100px;
  transition: all 0.5s ease;
}
.img:hover {
  transform: scale(1.1);
}

.rotate {
  animation: rotate 4s linear infinite;
  -moz-animation: rotate 4s linear infinite; /* Firefox */
  -webkit-animation: rotate 4s linear infinite; /* Safari 和 Chrome */
  -o-animation: rotate 4s linear infinite; /* Opera */
}
/*  值rotate改为rotateY为3D立体旋转  */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotatehover:hover {
  animation: rotatehover 4s linear infinite;
  -moz-animation: rotatehover 4s linear infinite; /* Firefox */
  -webkit-animation: rotatehover 4s linear infinite; /* Safari 和 Chrome */
  -o-animation: rotatehover 4s linear infinite; /* Opera */
}
/*  值rotate改为rotateY为3D立体旋转  */
@keyframes rotatehover {
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

::v-deep .el-input__wrapper {
  padding: 0px;
}

.search1 {
  width: 80px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid lightblue;
  position: absolute;
  right: 200px;
  outline: none;
  text-indent: 12px;
  color: #666;
  font-size: 16px;
  padding: 0;
  -webkit-transition: width 0.5s;
}
.search1:hover {
  width: 200px;
}
.searchtext {
  width: 200px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid lightblue;
  position: absolute;
  right: 200px;
  outline: none;
  text-indent: 12px;
  color: #666;
  font-size: 16px;
  padding: 0;
  -webkit-transition: width 0.5s;
}
.search2 {
  width: 80px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid lightblue;
  outline: none;
  text-indent: 12px;
  color: #666;
  font-size: 16px;
  padding: 0;
  -webkit-transition: width 0.5s;
}
.search2:focus {
  width: 200px;
}
.search3 {
  width: 50px;
  height: 50px;
  border-radius: 40px;
  border: 2px solid lightblue;
  outline: none;
  text-indent: 12px;
  color: #666;
  font-size: 16px;
  padding: 0;
  -webkit-transition: all 0.5s;
  overflow: hidden;
}
.search3:hover {
  height: 200px;
}
</style>