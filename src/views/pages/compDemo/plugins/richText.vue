<template>
  <div class="p-10">
    <div class="flex-align-center pb-20">
      <div class="react" />
      <span class="font-bold">使用wangeditor</span>
    </div>
    <span
      >官网：
      <el-link
        href="https://www.wangeditor.com/"
        :underline="false"
        target="_blank"
        >https://www.wangeditor.com/</el-link
      ></span
    >
    <div style="display: flex; align-items: center; justify-content: center">
      <div style="border: 1px solid #ccc; width: 500px">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          :mode="mode"
        />

        <Editor
          style="height: 200px; overflow-y: hidden"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          :mode="mode"
          @onCreated="handleCreated"
        />
      </div>
    </div>
    <div class="flex-center pt-20">
      <el-button @click="handelValue">获取文本框内容</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import {
  defineComponent,
  onBeforeUnmount,
  ref,
  shallowRef,
  onMounted,
} from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { ElMessage } from 'element-plus'
export default defineComponent({
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef();

    // 内容 HTML
    const valueHtml = ref("<p>hello</p>");

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>";
      }, 1500);
    });

    const toolbarConfig = {};
    const editorConfig = { placeholder: "请输入内容..." };

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value;
      if (editor == null) return;
      editor.destroy();
    });

    const handleCreated = (editor: any) => {
      editorRef.value = editor; // 记录 editor 实例，重要！
    };

    const handelValue = () => {
      ElMessage({
        message: "F12查看控制台信息",
        type: "success",
      });
      console.log(111, editorRef.value.getText());
      console.log(123, editorRef.value.getHtml());
    };

    return {
      editorRef,
      valueHtml,
      mode: "default",
      toolbarConfig,
      editorConfig,
      handleCreated,
      handelValue,
    };
  },
});
</script>