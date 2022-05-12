<template>
  <div class="p-20">
    <div>
      <el-button @click="test">123</el-button>
      <el-button text>123</el-button>
    </div>
    <div
      style="display: grid;grid-template-columns: repeat(2, 50%);grid-row-gap: 10px;grid-column-gap: 10px;"
    >
      <div>
        <lineChart :xData="[10, 20, 39, 49, 99]" />
      </div>
      <div>
        <lineChart :xData="[10, 20, 39, 49, 40]" :yName="'yyyyyyyyy'" />
      </div>
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
              <el-icon>
                <timer />
              </el-icon>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="tableData1" style="width: 100%" class="pt-20">
        <template #empty>
          <el-empty description="暂无数据" />
        </template>

        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
        <el-table-column prop="address" label="Address">
          <template #default="scope">
            <div style="display: flex; align-items: center">
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
<script lang="ts">
import lineChart from '@/components/echarts/lineChart.vue'
import { defineComponent, ref, watch, toRefs, onMounted } from 'vue';
import { Timer } from '@element-plus/icons-vue'
import {ceshi} from '@/api/index'
export default defineComponent({
  name: '',
  props: {},
  components: {
    lineChart,
    Timer
  },
  setup() {
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
      },
    ]
    const tableData1 = ref(null)
    const test=()=>{
      console.log(123123123)
      ceshi().then(res=>{
        console.log(123123,res)

      })
    }
    return {
      tableData,
      tableData1,
      test
    }
  }
})
</script>