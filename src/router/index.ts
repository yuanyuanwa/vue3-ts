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
  const routerList = to.matched;
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
    name: "/",
    redirect: 'dashboard',
    meta: {
      // requiresAuth: true,
      name: "喵喵喵",
    },
    children: [
      {
        path: "dashboard",
        component: () => import('@/views/pages/dashboard/index.vue'),
        name: "Dashboard",
        meta: {
          name: "首页",
          icon: "",
        },
      },
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
                  name: "折线图",
                  icon: "Watermelon",
                },
              },
              {
                path: "testchild2",
                component: () => import('@/views/pages/compDemo/test/child/child2.vue'),
                name: "Testchild2",
                meta: {
                  name: "柱状图",
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
              name: "element",
              icon: "Chicken",
            },
          },
          {
            path: "plugins",
            component: () => import('@/views/pages/compDemo/plugins/index.vue'),
            name: "PlugIns",
            meta: {
              name: "插件",
              icon: "Cherry",
            },
            children: [
              {
                path: "richText",
                component: () => import('@/views/pages/compDemo/plugins/richText.vue'),
                name: "RichText",
                meta: {
                  name: "富文本",
                  icon: "Tickets",
                },
              }
            ]
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
      {
        path: "todolist",
        component: () => import('@/views/pages/todolist/index.vue'),
        name: "Todolist",
        meta: {
          name: "项目任务清单",
          icon: "el-icon-s-home",
        },
      },
    ]

  }
];
export default router
