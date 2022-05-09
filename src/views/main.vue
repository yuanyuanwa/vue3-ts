<template>
  <div >
    <div style="display:flex">
      <div style="background: #eda7a7;border-bottom: solid 1px #dcdfe6;">
        <svg class="icon-font" style="width: 70px;height: 60px;">
          <use xlink:href="#icon-mao" />
        </svg>
      </div>
      <el-menu
        style="flex-grow: 1;"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#eda7a7"
        text-color="#fff"
        active-text-color="#3D708f"
        @select="handleSelect"
      >
        <el-menu-item index="1">组件</el-menu-item>
        <el-menu-item index="5">页面</el-menu-item>
        <el-menu-item index="6">日常photos</el-menu-item>
        <!-- <el-sub-menu index="2">
          <template #title>页面</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4">Orders</el-menu-item>-->
      </el-menu>
      <div
        class="pr-10"
        style="background: #eda7a7;border-bottom: solid 1px #dcdfe6;color:white;line-height:4;"
      >hi~端午</div>
    </div>
    <el-button type="primary">Primary</el-button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    const activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    //返回一个对象
    return {
      activeIndex,
      handleSelect
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
