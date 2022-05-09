<template>
  <div>
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
        <el-menu-item index="CompDemo">组件</el-menu-item>
        <el-menu-item index="PageDemo">页面</el-menu-item>
        <el-menu-item index="Photos">日常photos</el-menu-item>
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
        class="pr-20"
        style="background: #eda7a7;border-bottom: solid 1px #dcdfe6;color:white;line-height:4;"
      >
        <el-popover placement="bottom-start" :width="150" trigger="hover">
          <template #reference>hi~端午</template>
          <div style="border:2px dashed pink">
            <div style="text-align:center;">
              <el-button type="text">个人中心</el-button>
            </div>
            <div style="text-align:center;">
              <el-button type="text" @click="logOut">退出登录</el-button>
            </div>
          </div>
        </el-popover>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from "vue-router";
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    const router = useRouter();
    const activeIndex = ref('CompDemo')
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
      router.push({ name: key })

    }

    const logOut=()=>{
      	localStorage.removeItem('token')
        router.push({ name: 'login' })
    }
    //返回一个对象
    return {
      activeIndex,
      handleSelect,
      logOut
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
