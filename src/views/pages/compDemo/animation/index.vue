<template>
  <div>
    <div style="width: 600px" class="p-20">
      <!-- <marquee
      ><span style="font-weight: bolder; font-size: 20px"
        >1233215423187447345171431245231874873251421</span
      ></marquee
    > -->
    </div>
    <div class="p-10">
      <div class="flex-align-center pb-20">
        <div class="react" />
        <span class="font-bold a-shake">input框</span>
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
            <div class="pt-20">321</div>
            <div class="pt-20">321</div>
            <div class="pt-20">321</div>
          </div>
        </div>
        <div class="pt-10">鼠标移动上去{{ searchText }}</div>
      </div>

      <div class="flex-align-center pt-20">
        <div class="react" />
        <span class="font-bold a-fadeinT">图片动效</span>
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
        <span class="font-bold a-rotateinRT">其他例子</span>
      </div>
      <div
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
        "
      >
        <div class="light flex-center">
          <svg class="icon-font" style="width: 70px; height: 60px">
            <use xlink:href="#icon-mianhuatang" />
          </svg>
        </div>
        <div class="pb-40">
          <el-image
            class="xuanzhuan"
            style="width: 100px; height: 100px"
            :src="imageUrl"
          />
          <div class="pt-10">鼠标移动上去{{ searchText }}</div>
        </div>
        <div>
          <div class="fangkuai"></div>
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

      <div class="pt-20 pb-10">
        <div class="flex-align-center pb-20">
          <div class="react" />
          <span class="font-bold">过渡（transition ）& 动画（animation）</span>
        </div>
        <div>1、区别：animation不需要触发事件，transition需要触发事件</div>
        <div class="pt-10">
          <div class="pb-10 pb-10">2、transition</div>
          <div class="pl-20 pb-10">
            transition: property name | duration | timing function | delay
          </div>
          <div class="pl-20 pb-10">
            property name：指定CSS属性的name，transition效果 / all
          </div>
          <div class="pl-20 pb-10">
            duration：transition效果需要指定多少秒或毫秒才能完成
          </div>
          <div class="pl-20 pb-10">
            timing function：指定transition效果的转速曲线 /linear / ease /
            ease-in / ease-out / ease-in-out / cubic-bezier(n,n,n,n) /
          </div>
          <div class="pl-20 pb-10">delay：定义transition效果开始的时候</div>
          <div class="pl-20 pb-10">
            多个属性用逗号隔开:transition: height .8s, color .8s;
          </div>
        </div>
        <div class="pb-10">
          <div class="pb-10 pb-10">3、animation</div>
          <div class="pl-20 pb-10">
            animation: name | duration | timing-function | delay |
            iteration-count | direction | fill-mode | play-state;
          </div>
          <div class="pl-20 pb-10">@keyframes 用来定义动画</div>
          <div class="pl-20 pb-10">
            animation-name 规定 @keyframes 动画的名称（必须的）
          </div>
          <div class="pl-20 pb-10">
            animation-timingfunction 规定动画的速度曲线，默认是“ease”
          </div>
          <div class="pl-20 pb-10">
            animation-delay 规定动画何时开始，默认是 0
          </div>
          <div class="pl-20 pb-10">
            animation-iteration-count 规定动画被播放的次数，默认是 1，还有
            infinite
          </div>
          <div class="pl-20 pb-10">
            animation-direction 规定动画是否在下一周期逆向播放，默认是 "normal",
            alternate 逆播放
          </div>
          <div class="pl-20 pb-10">
            animation-play-state 规定动画是否正在运行或暂停。默认是 "running",
            还有 "paused"
          </div>
          <div class="pl-20 pb-10">
            animation 所有动画属性的简写属性，除了animation-play-state 属性
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const imageUrl = require("@/assets/img/6.webp");

let inputText = ref("");
let searchText = ref("");

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
  -moz-animation: rotate 4s linear infinite;
  /* Firefox */
  -webkit-animation: rotate 4s linear infinite;
  /* Safari 和 Chrome */
  -o-animation: rotate 4s linear infinite;
  /* Opera */
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
  -moz-animation: rotatehover 4s linear infinite;
  /* Firefox */
  -webkit-animation: rotatehover 4s linear infinite;
  /* Safari 和 Chrome */
  -o-animation: rotatehover 4s linear infinite;
  /* Opera */
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

@keyframes light {
  from {
    box-shadow: 0px 0px 4px white;
  }

  to {
    box-shadow: 0px 0px 16px skyBlue;
  }
}

.light {
  margin: 300px;
  width: 100px;
  height: 100px;
  margin: 20px;
  border-radius: 50%;
  animation: light 2s ease-in-out infinite alternate;
}

.xuanzhuan:hover {
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
}

@keyframes cuIcon-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}

.fangkuai {
  background-color: #ffffff;
  border-radius: 50%;
  width: 104px;
  height: 104px;
  font-size: 10px;
  border-top: 3px solid rgba(0, 0, 0, 0.05);
  border-right: 3px solid rgba(0, 0, 0, 0.05);
  border-bottom: 3px solid rgba(0, 0, 0, 0.05);
  border-left: 3px solid #f37b1d;

  animation: cuIcon-spin 2s infinite linear;
}
</style>