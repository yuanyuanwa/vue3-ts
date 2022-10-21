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
    <div class="p-20">
      <el-table :data="addTableData" max-height="250">
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
      </el-table>
    </div>

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
    <el-dialog v-model="addDataDialogVisible" title="Shipping address">
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        :rules="rules"
        style="max-width: 460px"
        ref="ruleFormRef"
      >
        <el-form-item label="Date" prop="date">
          <el-input v-model="formLabelAlign.date" />
        </el-form-item>
        <el-form-item label="Name" prop="name">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="Address" prop="address">
          <el-input v-model="formLabelAlign.address" />
        </el-form-item>
      </el-form>
      <div class="flex-center">
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >新增</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { ElMessage } from "element-plus";
import type { FormInstance, FormRules } from "element-plus";
import lineChart from "@/components/echarts/lineChart.vue";
import {
  defineComponent,
  ref,
  Ref,
  reactive,
  watch,
  toRefs,
  onMounted,
} from "vue";
import { Timer } from "@element-plus/icons-vue";
import {
  ceshi,
  addData,
  searchData,
  deleteData,
  updateData,
} from "@/api/index";
export default defineComponent({
  name: "",
  props: {},
  components: {
    lineChart, //不用在return返回
    Timer,
  },
  setup() {
    const ruleFormRef = ref<FormInstance>();
    const formLabelAlign = reactive({
      date: "",
      name: "",
      address: "",
    });
    const rules = reactive<FormRules>({
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
        { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
      ],
      date: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
      address: [
        {
          required: true,
          message: "Please select Activity count",
          trigger: "change",
        },
      ],
    });
    const resetForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          addData({
            id: 1231,
            ...formLabelAlign,
          }).then((res) => {
            ElMessage({
              message: "插入成功！",
              type: "success",
            });
            addDataDialogVisible.value = false;
            search();
          });
        } else {
          console.log("error submit!", fields);
        }
      });
    };
    const dialogTableVisible: Ref<boolean> = ref(false);
    const addDataDialogVisible: Ref<boolean> = ref(false);
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
    const addTableData = ref([
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ]);
    const tableData1 = ref(null);
    const test = () => {
      ceshi().then((res) => {
        ElMessage({
          message: "测试接口:" + res.data.content,
          type: "success",
        });
      });
    };
    const addDataa = () => {
      addDataDialogVisible.value = true;
      // let data = {
      //   id: 1231,
      //   name: "abc",
      //   date: false,
      //   address: "fsdufkasgfjasdgfjsdjkfgjakfjgffgfjfgjfjksafgkj",
      // };
      // addData(data).then((res) => {
      //   console.log(res);
      // });
    };
    const updateDataa = () => {
      let data = {
        id: 1231,
        name: "hahahahah",
        date: false,
        address: "123123123",
      };
      updateData(data).then((res) => {
        console.log(res);
      });
    };
    const search = () => {
      searchData().then((res) => {
        if (res.status == 200) {
          let resData = res.data.data;
          addTableData.value = resData;
        }
      });
    };
    const deleteDataa = () => {
      deleteData("1231").then((res) => {
        ElMessage({
              message: "删除成功！",
              type: "success",
            });
        search()
      });
    };
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`);
    };

    onMounted(() => {
      search();
    });

    return {
      tableData,
      addTableData,
      tableData1,
      dialogTableVisible,
      addDataDialogVisible, //新增数据弹窗
      currentPage4,
      pageSize4,
      test,
      handleSizeChange,
      handleCurrentChange,
      addDataa,
      search,
      deleteDataa,
      updateDataa,
      formLabelAlign,
      ruleFormRef,
      rules,
      submitForm,
      resetForm,
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