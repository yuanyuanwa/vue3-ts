<template>
  <div style="display: flex">
    <div style="background: #eda7a7; border-bottom: solid 1px #dcdfe6">
      <svg class="icon-font" style="width: 70px; height: 60px">
        <use xlink:href="#icon-mao" />
      </svg>
    </div>
    <el-menu
      style="flex-grow: 1"
      :default-active="route.matched[1].name"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#eda7a7"
      text-color="#fff"
      active-text-color="#3D708f"
      @select="handleSelect"
    >
    <el-menu-item :index="item.name" v-for="(item,index) in navBar" :key="index">{{item.meta.name}}</el-menu-item>
      <!-- <el-menu-item index="Dashboard">首页</el-menu-item>
      <el-menu-item index="CompDemo">组件</el-menu-item>
      <el-menu-item index="PageDemo">文章</el-menu-item>
      <el-menu-item index="Photos">端午photos</el-menu-item>
      <el-menu-item index="Todolist">TO DO LIST</el-menu-item> -->
    </el-menu>
    <div
      class="pr-20"
      style="
        background: #eda7a7;
        border-bottom: solid 1px #dcdfe6;
        color: white;
        line-height: 4;
      "
    >
      <el-popover placement="bottom-start" :width="150" trigger="hover">
        <template #reference>hi~欢迎回来</template>
        <div style="border: 2px dashed #eda7a7">
          <div style="text-align: center">
            <el-link type="primary" :underline="false">个人中心</el-link>
          </div>
          <div style="text-align: center">
            <el-link @click="logOut" type="primary" :underline="false"
              >退出登录</el-link
            >
          </div>
        </div>
      </el-popover>
    </div>
  </div>
  <div class="p-20" style="box-shadow: rgb(0 0 0 / 10%) 0px -2px 10px 0px;">
    <Breadcrumb />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Breadcrumb from "./bread.vue";
import store from "@/store/index";

export default defineComponent({
  name: "",
  components: {
    Breadcrumb,
  },
  setup() {
    const route = useRoute();
    store.commit("login/SET_NAVBAR", route.matched[0].children);
    let navBar = ref("");
    navBar.value = store.state.login.navBar;
    console.log(789,navBar)
    const router = useRouter();
    const activeIndex = ref("CompDemo");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
      router.push({ name: key });
    };

    const logOut = () => {
      localStorage.removeItem("token");
      router.push({ name: "login" });
    };
    onMounted(() => {});
    //返回一个对象
    return {
      activeIndex,
      handleSelect,
      logOut,
      route,
      navBar,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
