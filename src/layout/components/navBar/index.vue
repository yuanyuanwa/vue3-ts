<template>
  <div style="display: flex; background: #eda7a7">
    <div
      style="background: #eda7a7; border-bottom: solid 1px #dcdfe6"
      class="flex-center"
    >
      <svg class="icon-font" style="width: 70px; height: 60px">
        <use xlink:href="#icon-maozhao" />
      </svg>
      <!-- <i class="iconfont icon-iconfontzhizuobiaozhun023143" style="font-size:64px"></i> -->
    </div>
    <el-menu
      style="flex-grow: 1"
      :default-active="route.matched[1].name"
      class="el-menu-demo top-menu"
      mode="horizontal"
      background-color="#eda7a7"
      text-color="#fff"
      active-text-color="#3D708f"
      @select="handleSelect"
    >
      <el-menu-item
        :index="item.name"
        v-for="(item, index) in navBar"
        :key="index"
        >{{ routeTitle(item.meta.name) }}</el-menu-item
      >
      <!-- <el-menu-item index="Dashboard">首页</el-menu-item>
      <el-menu-item index="CompDemo">组件</el-menu-item>
      <el-menu-item index="PageDemo">文章</el-menu-item>
      <el-menu-item index="Photos">端午photos</el-menu-item>
      <el-menu-item index="Todolist">TO DO LIST</el-menu-item> -->
    </el-menu>
    <div
      class="pr-20"
      style="
        display: flex;
        border-bottom: solid 1px #dcdfe6;
        color: white;
        line-height: 4;
        position: absolute;
        right: 0px;
      "
    >
      <div class="pr-10">
        <el-button @click="changeLange" size="small" type="primary"
          >中/英</el-button
        >
      </div>
      <el-popover placement="bottom-start" :width="150" trigger="hover">
        <template #reference>{{ $t("home.name") }}</template>
        <div style="border: 2px dashed #eda7a7">
          <div style="text-align: center" class="pt-5">
            <el-link type="primary" :underline="false">个人中心</el-link>
          </div>
          <div style="text-align: center" class="pt-5 pb-5">
            <el-link @click="logOut" type="primary" :underline="false"
              >退出登录</el-link
            >
          </div>
        </div>
      </el-popover>
    </div>
  </div>
  <div class="p-20" style="box-shadow: rgb(0 0 0 / 10%) 0px -2px 10px 0px">
    <Breadcrumb />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Breadcrumb from "./bread.vue";
import store from "@/store/index";
import i18n from "@/i18n/index";

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
    console.log(789, navBar);
    const router = useRouter();
    const activeIndex = ref("CompDemo");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
      router.push({ name: key });
    };

    const logOut = () => {
      localStorage.removeItem("token");
      window.location.reload();
      // router.push({ path: "/login" });
    };
    const changeLange = () => {
      // let index:number=ref(0)
      let index: Ref<number> = ref(0);
      if (localStorage.getItem("locale") == "zh") {
        index.value = 1;
      } else {
        index.value = 0;
      }
      const idx: any =
        ["zh", "en"][index.value] || navigator.language.slice(0, 2);
      localStorage.setItem("locale", idx);
      i18n.global.locale = idx;
      console.log(
        111,
        document.documentElement.style.getPropertyValue(`--reed`)
      );
      document.documentElement.style.setProperty(`--reed`, "blue");
    };
    const { t } = i18n.global;
    const routeTitle = (name: string) => {
      return t("route." + name);
    };
    onMounted(() => {});
    //返回一个对象
    return {
      activeIndex,
      handleSelect,
      logOut,
      route,
      navBar,
      changeLange,
      routeTitle,
    };
  },
});
</script>

<style lang="scss" scoped>
@media (max-width: 666px) {
  .top-menu {
    display: none;
  }
}
</style>
