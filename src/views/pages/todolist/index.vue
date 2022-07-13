<template>
  <div>
    <div class="text-center">
      <h1>-- TO DO LIST --</h1>
    </div>
    <div class="flex-center">
      <div>
        <div>
          <el-checkbox v-model="checked1" label="Option 1" size="large"
            >搭建项目</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked1" label="Option 1" size="large"
            >引入element plus、设置全局主题、设置全局统一样式</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked1" label="Option 1" size="large"
            >router、vuex模块化</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked1" label="Option 1" size="large"
            >搭建项目结构：顶部一级菜单，旁边二级菜单</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked1" label="Option 1" size="large"
            >顶部一级菜单根据router动态变化</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked2" label="Option 1" size="large"
            >顶部一级菜单根据router动态变化</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked2" label="Option 1" size="large"
            >页面平滑滚动到自定位置</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked2" label="Option 1" size="large"
            >首页</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked2" label="Option 1" size="large"
            >照片墙瀑布流</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked2" label="Option 1" size="large"
            >vue3两种写法的总结</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked2" label="Option 1" size="large"
            >ts写法总结</el-checkbox
          >
        </div>
        <div>
          <el-checkbox v-model="checked2" label="Option 1" size="large"
            >vue3的vuex模块化后用法总结</el-checkbox
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const checked1 = ref(true);
const checked2 = ref(false);
</script>

<style lang="scss" scoped>
</style>