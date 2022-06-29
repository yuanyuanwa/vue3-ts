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


import '@/style/uniformStyle.scss'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
