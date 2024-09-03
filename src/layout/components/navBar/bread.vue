<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="font-14">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index == levelList.length - 1"
          class="no-redirect"
          >{{ routeTitle(item.meta.name) }}</span
        >
        <a v-else @click.prevent="handleLink(item)">{{ routeTitle(item.meta.name) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { ref, watch, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as pathToRegexp from 'path-to-regexp'
import store from "@/store/index";
import i18n from "@/i18n/index";

// beforeCreate -> use setup()
// created -> use setup()
// beforeMount -> onBeforeMount
// mounted -> onMounted
// beforeUpdate -> onBeforeUpdate
// updated -> onUpdated
// beforeDestroy -> onBeforeUnmount
// destroyed -> onUnmounted
// errorCaptured -> onErrorCaptured

let levelList: any = ref(null);
const isDashboard = (route: any) => {
  const name = route && route.name;
  if (!name) {
    return false;
  }
  return name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase();
};
const getBreadcrumb = () => {
  console.log(999,route.matched)
  store.commit("login/SET_MENU", route.matched[1].children);
  let matched: any = route.matched.filter(
    (item) => item.meta && item.meta.name
  );
  const first = matched[0];
  if (!isDashboard(first)) {
    matched = [{ path: "/dashboard", meta: { title: "Dashboard" } }].concat(
      matched
    );
  }
  levelList.value = matched.filter(
    (item:any) => item.meta && item.meta.name && item.meta.breadcrumb !== false
  );
};
const route = useRoute();
const router = useRouter();
watch(
  () => route, // 注意这里
  (val, old) => {
    console.log(111,route.path.startsWith("/redirect/"))
    if (route.path.startsWith("/redirect/")) {
      return;
    }
    getBreadcrumb();
  },
  {
    deep: true, // 深度监听
    immediate: true, // 立即执行
  }
);

const pathCompile = (path: any) => {
  // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
  const { params } = route;
  var toPath = pathToRegexp.compile(path);
  return toPath(params);
};
const handleLink = (item: any) => {
  const { redirect, path } = item;
  if (redirect) {
    router.push(redirect);
    return;
  }
  router.push(pathCompile(path));
};
const { t } = i18n.global;
const routeTitle = (name: string) => {
  // return name
  let a = "route." + name;
  return t(a);
};
</script>


<style lang="scss" scoped>
/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter-from,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(30px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}

.no-redirect {
  color: #97a8be;
  cursor: text;
}
</style>