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
          name: "dashboard",
          icon: "",
        },
      },
      {
        path: "compDemo",
        component: () => import('@/components/view/view.vue'),
        name: "CompDemo",
        meta: {
          name: "assembly",
          icon: "el-icon-s-home",
        },
        children: [
          {
            path: "test",
            component: () => import('@/components/view/view.vue'),
            name: "Test",
            meta: {
              name: "encapsulate",
              icon: "Aim",//应该是直接用的，找不到笔记了2022/10/10
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
            component: () => import('@/components/view/view.vue'),
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
          {
            path: "cartoon",
            component: () => import('@/components/view/view.vue'),
            name: "Cartoon",
            meta: {
              name: "动画",
              icon: "Cherry",
            },
            children: [
              {
                path: "button",
                component: () => import('@/views/pages/compDemo/cartoon/button/index.vue'),
                name: "Button",
                meta: {
                  name: "按钮类",
                  icon: "Tickets",
                },
              }
            ]
          },
          {
            path: "components",
            component: () => import('@/components/view/view.vue'),
            name: "Components",
            meta: {
              name: "封装组件",
              icon: "Cherry",
            },
            children: [
              {
                path: "progress",
                component: () => import('@/views/pages/compDemo/componentPages/progress/index.vue'),
                name: "Progress",
                meta: {
                  name: "进度条",
                  icon: "Progress",
                },
              },
              {
                path: "maodian",
                component: () => import('@/views/pages/compDemo/componentPages/maodian/index.vue'),
                name: "Maodian",
                meta: {
                  name: "锚点滚动",
                  icon: "Cherry",
                },
              },
            ]
          },
          {
            path: "animation",
            component: () => import('@/views/pages/compDemo/animation/index.vue'),
            name: "Animation",
            meta: {
              name: "动效",
              icon: "Chicken",
            },
          },
          {
            path: "compDemo",
            component: () => import('@/views/pages/compDemo/intro/index.vue'),
            name: "新手指引",
            meta: {
              name: "新手指引",
              icon: "Chicken",
            },
          },
          {
            path: "edit",
            component: () => import('@/views/pages/compDemo/edit/index.vue'),
            name: "可视化编辑",
            meta: {
              name: "可视化编辑",
              icon: "Chicken",
            },
          },
        ]
      },
      {
        path: "pageDemo",
        component: () => import('@/views/pages/pageDemo/index.vue'),
        name: "PageDemo",
        meta: {
          name: "pages",
          icon: "el-icon-s-home",
        },
      },
      {
        path: "photos",
        component: () => import('@/views/pages/photos/index.vue'),
        name: "Photos",
        meta: {
          name: 'photo',
          icon: "el-icon-s-home",
        },
      },
      // {
      //   path: "todolist",
      //   component: () => import('@/views/pages/todolist/index.vue'),
      //   name: "Todolist",
      //   meta: {
      //     name: "项目任务清单",
      //     icon: "el-icon-s-home",
      //   },
      // },
    ]

  }
];
export default router
