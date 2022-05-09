import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from "@/store/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to: any, from: any, next: any) => {
  //未登陆
  if (!window.localStorage.getItem("token") && to.path !== "/login") {
    next({ path: "/login" });
  }
  //已登陆
  if (window.localStorage.getItem("token") && to.path == "/login") return next({ path: "/" });
  // 重新加载动态路由
  if (!store.state.login.permissionList && to.path != '/login') {
    return store.dispatch("login/FETCH_PERMISSION").then(() => {
      next({ ...to, replace: true });
    });
  } else {
    next();
  }

});
router.afterEach((to: any, from: any, next: any) => {
  try {
      //设置标题
      if (to.meta.name) {
          document.title = to.meta.name;
      }
  } catch (err) {}
  let routerList = to.matched;
  //顶部面包屑
  store.commit("login/setCrumbList", routerList);
  //目前左边导航选中的active
  store.commit("login/SET_CURRENT_MENU", to.name);
  // next()
});

//固定的路由
export const DynamicRoutes = [
  {
    path: "/",
    component: () => import('@/views/main.vue'),
    name: "container",
    redirect: 'home',
    meta: {
      // requiresAuth: true,
      name: "首页",
    },
    children: [
      {
        path: "home",
        component: () => import('@/views/AboutView.vue'),
        name: "home",
        meta: {
          name: "首页",
          icon: "el-icon-s-home",
        },
      }

    ]

  }
];
export default router
