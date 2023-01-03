<template>
  <div class="p-20 flex-center">
    {{state.count}}
    <component
      :is="typeComponentMap.progress"
      :progress="progressData"
      :strokeWidth="10"
      :showInfo="true"
      @refrashTablee="aaa"
      ref="content"
    />
     <el-button @click="cccc">父获取子的值和方法</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
import { useStore } from 'vuex'
import store from "@/store/index";
 const storea = useStore()
 console.log('123465',storea,store)
//在引入子组件时，虽然不用注册，但是引入时，组件名称要与文件名称一致
import progress from "@/components/Progress/progress.vue";
const typeComponentMap = {
  progress: progress,
};

//<----父组件向子组件传值
let progressData: Ref<number> = ref(7);
const changeProgress = () => {
  setInterval(() => {
    progressData.value = progressData.value + 1;
  }, 100);
};
//---->

// <-----子组件调用父组件方法
const aaa = (data: string) => {
  console.log("子组件调用父组件方法", data,);
};
// ---->

// <-----父组件获取子组件的值和调用子组件的方法
const content = ref("content");
const cccc=()=>{
  console.log('父组件获取子组件的值',content.value.modelVisible)
  content.value.modelVisible=true//
  content.value.bbb('我是传参')
}
// ---->

const state = ref({
  count: 0
})

onMounted(() => {
  changeProgress();
  state.value.count=123
  console.log(999,state.value.count)
});
</script>
<style lang="scss" scoped>
</style>