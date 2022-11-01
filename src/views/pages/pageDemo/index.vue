<template>
  <div class="p-20">
    <div style="display: flex" class="pb-20">
      <el-input
        v-model="idData"
        clearable
        class="inputWidth pr-10"
        placeholder="请输入id"
      />
      <el-button @click="search">查询测试</el-button>
    </div>
    <div ref="aaa">
      <el-button @click="test">接口测试</el-button>
      <el-button @click="addDataa">新增测试</el-button>
      <el-button text>123</el-button>
      <el-button color="#626aef" @click="dialogTableVisible = true"
        >弹窗</el-button
      >
    </div>
<!-- 
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
    </div> -->
    <div class="p-20">
      <el-table :data="addTableData" max-height="500">
        <el-table-column property="id" label="id" width="150" />
        <el-table-column property="date" label="Date" width="150" />
        <el-table-column property="name" label="Name" width="200" />
        <el-table-column property="address" label="Address" />
        <el-table-column prop="address" label="操作">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-button @click="deleteDataa(scope.row.id)"
                ><el-icon> <timer /> </el-icon>删除</el-button
              >
              <el-button @click="updateDataa(scope.row.id)">更新</el-button>
            </div>
          </template>
        </el-table-column>
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
    <el-dialog v-model="addDataDialogVisible" title="啦啦啦啦啦">
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        :rules="rules"
        style="max-width: 460px"
        ref="ruleFormRef"
      >
        <el-form-item label="ID" prop="id">
          <el-input v-model="formLabelAlign.id" :disabled="dataType=='update'"/>
        </el-form-item>
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
        <el-button @click="resetForm(ruleFormRef)" v-if="dataType!=='update'">重置</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >{{dataType=='update'?'更新':'新增'}}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { ElMessage, ElMessageBox } from "element-plus";
import type { Action } from "element-plus";
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
    let idData = ref("");
    let dataType = ref("");
    const aaa = ref<null>();
    const ruleFormRef = ref<FormInstance>();
    const formLabelAlign = reactive({
      id: "",
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
        // { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
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
          if (dataType.value == "add") {
            addData({
              // id: 1231,
              ...formLabelAlign,
            }).then((res) => {
              ElMessage({
                message: "插入成功！",
                type: "success",
              });
              resetForm(ruleFormRef.value);
              addDataDialogVisible.value = false;
              idData.value = "";
              search();
            });
          } else {
            updateData({
              ...formLabelAlign,
            }).then((res) => {
              console.log(res);
              ElMessage({
                message: "更新成功！",
                type: "success",
              });
              resetForm(ruleFormRef.value);
              addDataDialogVisible.value = false;
              idData.value = "";
              search();
            });
          }
          dataType.value = "";
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
      dataType.value = "add";
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
    const updateDataa = (id: any) => {
      dataType.value = "update";
      addDataDialogVisible.value = true;
      searchData(id)
        .then((res) => {
          if (res.status == 200) {
            let resData = res.data.data[0];
            console.log(789789, resData);
            // const formLabelAlign = reactive({
            //   id: "",
            //   date: "",
            //   name: "",
            //   address: "",
            // });
            formLabelAlign.id = resData.id;
            formLabelAlign.date = resData.date;
            formLabelAlign.name = resData.name;
            formLabelAlign.address = resData.address;
          }
        })
        .catch((err) => {});
    };
    const search = () => {
      searchData(idData.value)
        .then((res) => {
          if (res.status == 200) {
            let resData = res.data.data;
            addTableData.value = resData;
          }
        })
        .catch((err) => {});
    };
    const deleteDataa = (id: any) => {
      ElMessageBox.confirm(
        "proxy will permanently delete the file. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          deleteData(id).then((res) => {
            ElMessage({
              message: "删除成功！",
              type: "success",
            });
            idData.value = "";
            search();
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Delete canceled",
          });
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
      //打印dom元素
      console.log(7819, aaa.value);
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
      aaa,
      idData,
      dataType,
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