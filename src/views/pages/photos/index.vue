<template>
  <div style="background-color: rgb(244, 244, 244); overflow: scroll">
    <div>
      <el-image style="width: 100%; height: 300px" :src="bannerUrl" fit="cover" />
    </div>
    <div class="flex-justify-around" style="background: white">
      <div class="flex-center">
        <div>
          <el-image style="
              width: 150px;
              height: 150px;
              border-radius: 50%;
              border: 1px dashed pink;
            " :src="headUrl" fit="cover" />
        </div>
        <div class="pl-20" style="
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 150px;
            width: 100%;
          ">
          <div>
            <span class="font-24 pr-20 font-bold">喵喵喵</span>
            <span class="pl-20" style="
                padding: 5px 15px;
                border: 1px solid rgb(221, 221, 221);
                border-radius: 15px;
              ">喵龄:1岁3个月</span>
          </div>
          <div>睡觉 | 罐头 | 小鱼干</div>
        </div>
      </div>
      <div @click="isLike">
        <svg class="icon-font" style="width: 60px; height: 60px" v-if="like">
          <use xlink:href="#icon-aixin" />
        </svg>
        <svg class="icon-font" style="width: 60px; height: 60px" v-else>
          <use xlink:href="#icon-aixin1" />
        </svg>
        <!-- <i class="iconfont icon-aixin" style="font-size:60px"></i> -->
      </div>
    </div>
    <div class="flex-justify-around m-20">
      <div style="background: white; height: 180px; width: 300px;border-radius: 5px;" class="mr-20 p-20" id="box">
        <div>最近访客</div>
        <div class="flex-center pt-20">
          <div class="p-10" id="children">
            <div>
              <el-image style="
                  width: 80px;
                  height: 80px;
                  border-radius: 50%;
                  border: 1px dashed pink;
                " :src="xiaohuangUrl" fit="cover" />
              <div style="text-align:center;" @click="aaa">
                小黄
              </div>
            </div>
          </div>
          <div class="p-10">
            <el-image style="
                  width: 80px;
                  height: 80px;
                  border-radius: 50%;
                  border: 1px dashed pink;
                " :src="xiaoheiUrl" fit="cover" />
            <div style="text-align:center;">
              <span class="span">789</span>
              小黑
            </div>
          </div>
          <div class="p-10">
            <el-image style="
                  width: 80px;
                  height: 80px;
                  border-radius: 50%;
                  border: 1px dashed pink;
                " :src="xiaobaiUrl" fit="cover" />
            <div style="text-align:center;">
              <span style="color:var(--reed)">
                123
              </span>
              小白
            </div>
          </div>
        </div>
      </div>
      <div style="background: white; flex-grow: 1" class="ml-20">111</div>
      <!-- <el-card shadow="never">
        <div>123</div>
      </el-card> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from "vue";
const bannerUrl = require("@/assets/bgImg/banner.webp");
const headUrl = require("@/assets/bgImg/head.jpeg");
const xiaohuangUrl = require("@/assets/img/xiaohuang.webp");
const xiaoheiUrl = require("@/assets/img/xiaohei.jpeg");
const xiaobaiUrl = require("@/assets/img/xiaobai.jpeg");

let like: Ref<boolean> = ref(false);

const isLike = () => {
  like.value = !like.value;
  console.log(789, like.value);
};

const aaa = () => {
  var box:any = document.getElementById("box")
  var children:any = document.getElementById("children")
  // console.log('box.offsetWidth', box.offsetWidth)
  // console.log('box.offsetHeight', box.offsetHeight)
  console.log('box.offsetTop', box.offsetTop)
  // console.log('box.offsetLeft', box.offsetLeft)
  // console.log('children.offsetWidth', children.offsetWidth)
  // console.log('children.offsetHeight', children.offsetHeight)
  console.log('children.offsetTop', children.offsetTop)
  // console.log('children.offsetLeft', children.offsetLeft);
}
</script>

<style lang="scss" scoped>
@import "@/style/variable.scss";

.span {
  color: $base-menu-background;
}
</style>