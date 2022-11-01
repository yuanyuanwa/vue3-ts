<template>
  <div class="p-10">
    <div class="flex-align-center pb-20">
      <div class="react" />
      <span class="font-bold">轮播图</span>
    </div>
    <component
      :is="typeComponentMap.carousel"
      :foo="'11123'"
      :imageList="imageList"
      @getMapData="getMapData"
    />

    <div class="flex-align-center pb-20">
      <div class="react" />
      <span class="font-bold">表格</span>
    </div>

    <div>
      <el-table :data="tableData" style="width: 100%">
        <template #empty>
          <el-empty description="暂无数据" />
        </template>

        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="address" label="Address">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              {{scope}}
              <el-icon>
                <timer />
              </el-icon>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import carousel from "@/components/carousel/index.vue";
const typeComponentMap = {
  carousel: carousel,
};
const imageList = [
  { url: require("@/assets/img/1.webp") },
  { url: require("@/assets/img/2.webp") },
  { url: require("@/assets/img/3.webp") },
  { url: require("@/assets/img/4.webp") },
  { url: require("@/assets/img/1.webp") },
  { url: require("@/assets/img/2.webp") },
  { url: require("@/assets/img/3.webp") },
  { url: require("@/assets/img/4.webp") },
  { url: require("@/assets/img/1.webp") },
  { url: require("@/assets/img/2.webp") },
  { url: require("@/assets/img/3.webp") },
  { url: require("@/assets/img/4.webp") },
];
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
//子组件调用父组件的方法
const getMapData = (data: unknown) => {
  console.log("getMapData", data);
};
</script>
