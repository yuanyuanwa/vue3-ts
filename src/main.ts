import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/style/element-variables.scss'
import ElementPlus from 'element-plus'
//需要去掉引入index.css，在覆盖scss变量的文件中引入主题样式
// import 'element-plus/dist/index.css'


import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'


// import '@/style/uniformStyle.scss'

import vueI18n from './i18n'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


//为了全局引入icon改了一下写法
const app = createApp(App)
app.use(store).use(router).use(ElementPlus).use(vueI18n).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
