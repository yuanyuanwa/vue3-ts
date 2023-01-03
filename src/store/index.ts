const modules: any = {}
//一般用于加载某个目录下的多个文件
// require.context()接收三个参数，第一个参数是要加载的文件目录地址，
//第二个参数是true或false，表示是否需要加载子目录，
//第三个参数是个正则表达式，表示要加载哪些文件，
//const modulesFiles = require.context("./modules", true, /\.js$/)
//上面代码表示要加载modules目录下的.js文件。
const files = require.context("./modules", true);
files.keys().forEach((key) => {
    const fileName = key.split("/")[1].split(".")[0];
    console.log('modules',files(key))//下面截图
    modules[fileName] = files(key).default;
});

import { createStore } from "vuex";
import getters from "./getters";
export default createStore({
    getters,
    modules,
});
