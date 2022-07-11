import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'
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
  console.log(99999)
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
  } catch (err) { }
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
    component: () => import('@/layout/index.vue'),
    name: "dashboard",
    redirect: 'compDemo',
    meta: {
      // requiresAuth: true,
      name: "首页",
    },
    children: [
      {
        path: "compDemo",
        component: () => import('@/views/pages/compDemo/index.vue'),
        name: "CompDemo",
        meta: {
          name: "组件",
          icon: "el-icon-s-home",
        },
        children: [
          {
            path: "test",
            component: () => import('@/views/pages/compDemo/test/index.vue'),
            name: "Test",
            meta: {
              name: "封装echarts",
              icon: "Aim",
            },
            children: [
              {
                path: "testchild1",
                component: () => import('@/views/pages/compDemo/test/child/child1.vue'),
                name: "Testchild1",
                meta: {
                  name: "组件一子组件1",
                  icon: "AlarmClock",
                },
              },
              {
                path: "testchild2",
                component: () => import('@/views/pages/compDemo/test/child/child2.vue'),
                name: "Testchild2",
                meta: {
                  name: "组件一子组件2",
                  icon: "AlarmClock",
                },
              },
            ]
          },
          {
            path: "test2",
            component: () => import('@/views/pages/compDemo/test2/index.vue'),
            name: "Test2",
            meta: {
              name: "组件二",
              icon: "AlarmClock",
            },
          },
        ]
      },
      {
        path: "pageDemo",
        component: () => import('@/views/pages/pageDemo/index.vue'),
        name: "PageDemo",
        meta: {
          name: "页面",
          icon: "el-icon-s-home",
        },
      },
      {
        path: "photos",
        component: () => import('@/views/pages/photos/index.vue'),
        name: "Photos",
        meta: {
          name: "日常",
          icon: "el-icon-s-home",
        },
      },
    ]

  }
];
export default router
