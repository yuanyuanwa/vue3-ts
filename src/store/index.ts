let modules: any = {}
const files = require.context("./modules", true);
files.keys().forEach((key) => {
    const fileName = key.split("/")[1].split(".")[0];
    modules[fileName] = files(key).default;
});
console.log(123123,modules)

import { createStore } from "vuex";
import getters from "./getters";
export default createStore({
    getters,
    modules,
});
