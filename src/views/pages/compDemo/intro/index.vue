<template>
  <div>
    <div class="content" style="margin-top: 20px">
      <div class="text">测试测试</div>
    </div>
    <div :class="mask"></div>
    <div :class="box" style="z-index: 999999999999">
      指引指引指引指引指引指引指引
    </div>
    <div class="btnn" style="z-index: 999999999999">
      <el-button @click="btn" style="z-index: 999999999999">click</el-button>
    </div>
    <!-- https://juejin.cn/post/7129788202335862791 -->
    <div style="width: 100%; height: 100%" class="flex-center">
      <div id="btnWrapper">
        <div class="btn active">按钮1</div>
        <div class="btn">按钮2</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, Ref, onMounted } from "vue";
const box: Ref<string> = ref("box1");
const mask: Ref<string> = ref("");
const num: Ref<number> = ref(1);

const btn = () => {
  num.value = num.value + 1;
  if (num.value < 5) {
    box.value = "box" + num.value.toString();
    mask.value = "Mask";
  } else {
    mask.value = "";
  }
};
const resetBtn = (btns: any) => {
  for (let i = 0; i < btns.length; i++) {
    setTimeout(() => {
      btns[i].className = "btn";
    }, 100);
  }
};
const aa = () => {
  let wrapper: any = document.getElementById("btnWrapper");
  wrapper.style.setProperty("--groove-left", "12px");
  let btns = document.getElementsByClassName("btn"); //数组
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
      wrapper.style.setProperty("--groove-left", `calc(12px + ${i * 50}%)`);
      resetBtn(btns); // 初始化所有按钮类名
      setTimeout(() => {
        btns[i].className = "btn active"; // 给被点击的按钮添加选中样式，注意不要丢了原始样式
      }, 500);
      wrapper.style.setProperty(
        "--wraper-origin",
        `${i === 0 ? "80% top" : "20% top"}`
      ); // 动态修改原点位置
      wrapper.style.setProperty("--wraper-rotate", `${i === 0 ? -35 : 35}deg`); // 按钮1为-8°，按钮2为8°
      wrapper.className = "rotateWrap"; // 点击添加类名
      setTimeout(() => {
        wrapper.className = ""; // 清除类名
      }, 550); // 注意小细节！！！
    });
  }
};

onMounted(() => {
  aa();
});
</script>
<style lang="scss" scoped>
.box1 {
  position: absolute;
  top: 400px;
  left: 200px;
  width: 100px;
  height: 100px;
  background-color: pink;
  // transition: all 2s ease-in;
}

.box2 {
  position: absolute;
  top: 600px;
  left: 400px;
  width: 100px;
  height: 100px;
  background-color: pink;
  transition: all 0.2s ease;
}

.box3 {
  position: absolute;
  top: 400px;
  left: 500px;
  width: 100px;
  height: 100px;
  background-color: pink;
  transition: all 0.2s ease;
}
.box4 {
  position: absolute;
  top: 200px;
  left: 500px;
  width: 100px;
  height: 100px;
  background-color: pink;
  transition: all 0.2s ease;
}

.btnn {
  position: absolute;
  top: 150px;
  left: 400px;
  width: 100px;
  height: 100px;
  // background-color: pink;
  transition: all 0.2s ease;
}

.Mask {
  z-index: 999999;
  background-color: #000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  opacity: 0.5;
}

#btnWrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;
  width: 380px;
  height: 80px;
  padding: 12px 16px;
  border-radius: 12px; // 圆角
  overflow: hidden; // 超出隐藏
  background-color: #e2e6eb; // 背景色
  box-shadow: -10px -10px 15px #f5f9fd, 10px 10px 15px #d8dbe5; // 阴影（阴影可以添加多条，别告诉我你不知道！！）

  transform-origin: center; // 添加转换原点
  transition: transform 0.4s cubic-bezier(0, 0, 0.48, 1); // 添加过渡效果
}

.rotateWrap {
  transform: rotateY(var(--wraper-rotate)); // 添加Y轴旋转
}

#btnWrapper::before {
  content: "";
  position: absolute;
  left: 16px; // 要考虑到父盒子的内边距
  top: 12px; // 同上
  width: calc(50% - 16px - 8px);
  height: calc(100% - 24px);
  border-radius: 12px;
  box-shadow: inset 8px 8px 6px #d9dce6, inset -5px -5px 15px #f5f9fd,
    inset -5px -5px 15px #f5f9fd, inset 7px 7px 6px #d9dce6;
}

.content {
  height: 50px;
  width: 100%;
  background: linear-gradient(
    0.753turn,
    rgba(255, 67, 106, 0.1) 4.68%,
    rgba(255, 160, 71, 0.1) 99.75%
  );
  position: relative;
}
.text {
  text-align: center;
  line-height: 50px;
  color: pink;
  transition: 0.3s;
  opacity: 0;
}
.content:hover .text {
  opacity: 1;
  transform: translateX(-30px);
}

/* 按钮选中缩放动画 */
@keyframes txtEnterScale {
  0% {
    transform: scale(1);
  }

  80% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1.1);
  }
}

/* 按钮未选中缩放动画 */
@keyframes txtOutScale {
  0% {
    transform: scale(1.1);
  }

  80% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
}

.btn {
  // float: left;
  // display: flex; // 弹性布局
  // align-items: center; // 列居中
  // justify-content: center; // 行居中
  // width: 50%;
  // height: 100%;
  // padding: inherit; // 偷懒内边距继承了父元素，也可以自己修改
  color: #aaa; // 默认文字颜色是灰色，随便选了个色号
  cursor: pointer; // 鼠标经过图标为小手
  transition: color 0.4s linear; // 添加文字颜色过渡效果
  animation: txtOutScale 0.6s linear; // 添加按钮未选中动画，注意时间
}

.active {
  color: #111; // 选中颜色
  transform: scale(1.1); // 修改选中状态原始缩放为1.1
  animation: txtEnterScale 0.4s linear; // 添加按钮选中动画，注意时间
}

#btnWrapper::before {
  content: "";
  /* ...其他属性 */
  left: var(--groove-left); // 使用css变量
  /* ...其他属性 */
  transition: left 1s cubic-bezier(0.82, 0.12, 0.18, 0.88); // 添加过渡效果，贝塞尔曲线,盒子的过渡效果
}
</style>
