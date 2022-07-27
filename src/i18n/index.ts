import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

const i18n = createI18n({
   // 如果本地有语言标识就采用本地，没有就根据浏览器语言默认标识显示语言
   locale: localStorage.getItem('locale') || navigator.language.slice(0, 2),
   messages:{
      zh,
      en
   }
});
export default i18n;