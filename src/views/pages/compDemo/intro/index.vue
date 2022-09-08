<template>
    <div :class="mask">
    </div>
    <div :class="box" style="z-index:999999999999">1</div>
    <div class="btn" style="z-index:999999999999">
        <el-button @click="btn" style="z-index:999999999999">2</el-button>
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, Ref, onMounted } from "vue";
const box: Ref<string> = ref('box1')
const mask: Ref<string> = ref('')
const num: Ref<number> = ref(1)

const btn = () => {
    num.value = num.value + 1
    if (num.value < 4) {
        box.value = 'box' + num.value.toString()
        mask.value ='Mask'
    }else{
        mask.value=''
    }
}

</script>
<style lang="scss" scoped>
.box1 {
    position: absolute;
    top: 400px;
    left: 200px;
    width: 100px;
    height: 100px;
    background-color: pink;
    // transition: all 2s ease-in;
}

.box2 {
    position: absolute;
    top: 600px;
    left: 400px;
    width: 100px;
    height: 100px;
    background-color: pink;
    transition: all 0.2s ease;
}
.box3 {
    position: absolute;
    top: 400px;
    left: 500px;
    width: 100px;
    height: 100px;
    background-color: pink;
    transition: all 0.2s ease;
}

.btn {
    position: absolute;
    top: 150px;
    left: 400px;
    width: 100px;
    height: 100px;
    // background-color: pink;
    transition: all 0.2s ease;
}

.Mask {
    z-index: 999999;
    background-color: #000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    opacity: 0.5;
}
</style>
