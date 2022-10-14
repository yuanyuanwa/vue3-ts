<template>
  <div class="p-20">
    <div>
      <el-button @click="test">接口测试</el-button>
      <el-button @click="addDataa">新增测试</el-button>
      <el-button @click="search">查询测试</el-button>
      <el-button @click="deleteDataa">删除数据</el-button>
      <el-button @click="updateDataa">更新数据</el-button>
      <el-button text>123</el-button>
      <el-button color="#626aef" @click="dialogTableVisible = true"
        >弹窗</el-button
      >
    </div>

    <div
      style="
        display: grid;
        grid-template-columns: repeat(2, 50%);
        grid-row-gap: 10px;
        grid-column-gap: 10px;
      "
    >
      <div>
        <lineChart :xData="[10, 20, 39, 49, 99]" />
      </div>
      <div>
        <lineChart :xData="[10, 20, 39, 49, 40]" :yName="'yyyyyyyyy'" />
      </div>
    </div>

    <el-dialog v-model="dialogTableVisible" title="Shipping address">
      <el-table :data="tableData" max-height="250">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
      <div class="flex-end">
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import lineChart from "@/components/echarts/lineChart.vue";
import { defineComponent, ref, watch, toRefs, onMounted } from "vue";
import { Timer } from "@element-plus/icons-vue";
import { ceshi, addData, searchData, deleteData,updateData } from "@/api/index";
import { ElMessage } from "element-plus";
export default defineComponent({
  name: "",
  props: {},
  components: {
    lineChart, //不用在return返回
    Timer,
  },
  setup() {
    const dialogTableVisible = ref(false);
    const currentPage4 = ref(4);
    const pageSize4 = ref(100);
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
    const tableData1 = ref(null);
    const test = () => {
      console.log(123123123);
      ceshi().then((res) => {
        console.log(123123, res.data);
        ElMessage({
          message: "测试接口:" + res.data.content,
          type: "success",
        });
      });
    };
    const addDataa = () => {
      let data = {
        id: 1231,
        name: "abc",
        flag: false,
      };
      addData(data).then((res) => {
        console.log(res);
      });
    };
    const updateDataa = () => {
      let data = {
        id: 1231,
        name: "hahahahah",
        flag: false,
      };
      updateData(data).then((res) => {
        console.log(res);
      });
    };
    const search = () => {
      searchData().then((res) => {
        console.log(res);
      });
    };
    const deleteDataa = () => {
      deleteData('1231').then(res=>{
        console.log(111,res)
      })
    };
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`);
    };
    return {
      tableData,
      tableData1,
      dialogTableVisible,
      currentPage4,
      pageSize4,
      test,
      handleSizeChange,
      handleCurrentChange,
      addDataa,
      search,
      deleteDataa,
      updateDataa,
    };
  },
});
</script>
<style lang="scss" scoped>
::v-deep .el-scrollbar {
  // --el-scrollbar-opacity: 0.3;
  --el-scrollbar-bg-color: orange;
  // --el-scrollbar-hover-opacity: 0.5;
  --el-scrollbar-hover-bg-color: skyblue;
}

::v-deep .el-scrollbar__bar.is-vertical {
  width: 10px;
}
::v-deep .el-pagination {
  overflow: auto;
}
::v-deep .el-pagination::-webkit-scrollbar-thumb {
  background-color: pink;
  border-radius: 3px;
}
::v-deep .el-pagination::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
</style>