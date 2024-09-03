<template>
  <div v-if="sidebarMenu && sidebarMenu.length > 0" style="height: 100%;">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->

    <el-menu
      :default-active="route.name"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      style="flex-shrink: 0;height: 100%;"
    >
      <div v-for="(item, index) in sidebarMenu" :key="index">
        <div v-if="haveChild(item)">
          <el-sub-menu :index="item.path">
            <template #title>
              <component
                :is="item.meta.icon"
                style="width: 1.5em; height: 1.5em; margin-right: 8px"
              ></component>
              <span>{{ routeTitle(item.meta.name) }}</span>
            </template>
            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.name"
              :index="subItem.name"
              @click="changePage(subItem.name)"
            >
              <component
                :is="subItem.meta.icon"
                style="width: 1.5em; height: 1.5em; margin-right: 8px"
              ></component>
              <template #title>{{ routeTitle(subItem.meta.name) }}</template>
            </el-menu-item>
          </el-sub-menu>
        </div>
        <div v-else>
          <el-menu-item :index="item.name" @click="changePage(item.name)">
            <component
              :is="item.meta.icon"
              style="width: 1.5em; height: 1.5em; margin-right: 8px"
            ></component>
            <template #title>{{ routeTitle(item.meta.name) }}</template>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, reactive, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import store from "@/store/index";
import i18n from "@/i18n/index";

export default defineComponent({
  name: "",
  components: {},
  props: {
    // sidebarMenu: {
    //   type: String,
    //   required: true,
    //   default: "wqeeq",
    // },
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    let sidebarMenu:any= ref("");
    watch(
      () => store.state.login.sidebarMenu, // 注意这里
      (val, old) => {
        sidebarMenu.value = val;
      },
      {
        deep: true, // 深度监听
        immediate: true, // 立即执行
      }
    );

    const isCollapse = ref(false);
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    const changePage = (name: string) => {
      router.push({ name: name });
    };
    const haveChild = (item: any) => {
      if (item.children && item.children.length > 0) {
        return true;
      } else {
        return false;
      }
    };
    const { t } = i18n.global;
    const routeTitle = (name: string) => {
      // return name
      let a="route." + name
      return t(a);
    };
    //返回一个对象
    return {
      isCollapse,
      handleOpen,
      handleClose,
      sidebarMenu,
      route,
      changePage,
      haveChild,
      routeTitle,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>