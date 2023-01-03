<template>
  <div>{{data.modelVisible}}</div>
  <div class="m-progress" :style="`width:${width}px;`">
    <div class="m-progress-outer">
      <div class="m-progress-inner">
        <div
          :class="['u-progress-bg', { 'u-success-bg': progress >= 100 }]"
          :style="`width: ${
            progress >= 100 ? 100 : progress
          }%; height: ${strokeWidth}px;`"
        ></div>
      </div>
    </div>
    <template v-if="showInfo">
      <svg
        class="u-success"
        v-if="progress >= 100"
        viewBox="64 64 896 896"
        data-icon="check-circle"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
        ></path>
      </svg>
      <p class="u-progress-text" v-else>
        {{ progress >= 100 ? 100 : progress }}%
      </p>
    </template>
  </div>
  <el-button @click="refrashTable">123</el-button>
</template>
<script lang="ts" setup>
import { reactive,toRefs } from "vue";
interface Props {
  // either: '必传且限定'|'其中一个'|'值', // 利用TS：限定父组件传 either 的值
  // child: string|number,
  // sda?: string, // 未设置默认值，为 undefined
  // strData: string,
  // msg?: string;
  // labels?: string[],
  // obj?:{a:number}
  width?: number; //vue2的props，类型是大写字母开头的，这里是小写
  progress?: number;
  strokeWidth?: number;
  showInfo?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  // msg: "hello",
  // labels: () => ['one', 'two'],
  // obj: () => { return {a:2} }
  width: 600,
  progress: 36,
  strokeWidth: 8,
  showInfo: true,
});

// <-----子组件调用父组件方法
const emit = defineEmits({
    'refrashTablee': null
})
const refrashTable = () => {
    emit("refrashTablee",'aaa')
}
// ----->

const data = reactive({
  modelVisible: '1111',
  historyVisible: false, 
  reportVisible: false, 
})
const bbb=(data:any)=>{
  console.log('父组件调用子组件的方法',data)
}
defineExpose({
  ...toRefs(data),
  bbb
})
</script>
<style lang="scss" scoped>
.m-progress {
  height: 24px;
  margin: 0 auto;
  display: flex;
  .m-progress-outer {
    width: 100%;
    .m-progress-inner {
      display: inline-block;
      width: 100%;
      background: #f5f5f5;
      border-radius: 100px;
      .u-progress-bg {
        // background: #1890FF;
        background: linear-gradient(
          to right,
          #f5f5f5,
          #eda7a7
        );
        border-radius: 100px;
        transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);
      }
      .u-success-bg {
        background: #52c41a;
      }
    }
  }
  .u-success {
    width: 16px;
    height: 16px;
    fill: #52c41a;
    margin-left: 8px;
    // margin-top: 4px;
  }
  .u-progress-text {
    font-size: 16px;
    line-height: 24px;
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.45);
  }
}
</style>