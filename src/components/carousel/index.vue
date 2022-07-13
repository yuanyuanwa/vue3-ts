<template>
  <el-carousel :interval="2000" type="card" height="300px">
    <el-carousel-item v-for="item in imageList" :key="item">
      <el-image style="width: 100%; height: 100%" :src="item.url" fit="fill" />
      <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
    </el-carousel-item>
  </el-carousel>
  <div class="flex-center">
    <el-button @click="handleClick">123</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
const props = defineProps<{
  foo: string;
  bar?: number;
  imageList: [];
}>();

const emit = defineEmits(["getMapData"]);

const handleClick = () => {
  emit("getMapData", props.foo);
  console.log(789,props.foo)
  ElMessage({
    message: 'F12查看控制台信息',
    type: 'success',
  })
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>