<template>
  <div class="p-10">
    <div class="flex-align-center pb-20">
      <div class="react" />
      <span class="font-bold">input框</span>
    </div>
    <div>
      <div class="search">
        <el-button type="primary">搜索</el-button>
        <el-input class="input"></el-input>
      </div>
      <div class="pt-10">鼠标移动上去</div>
    </div>

    <div class="flex-align-center pt-20">
      <div class="react" />
      <span class="font-bold">图片动效</span>
    </div>
    <div class="img pb-40 pt-40">
       <el-image  :src="imageUrl" fit="fill" />
       <span>鼠标移动上去</span>      
    </div>
    <div class="pb-40 pt-40">
       <el-image   class="rotate" style="width:100px;height:100px" :src="imageUrl" fit="fill" />
    </div>
    <div class="pb-40 pt-40">
       <el-image   class="rotatehover" style="width:100px;height:100px" :src="imageUrl" fit="fill" />
      <span>鼠标移动上去</span>  
    </div>
  </div>
</template>
<script lang="ts" setup>
const imageUrl=require("@/assets/img/6.webp")
</script>
<style lang="scss" scoped>

.input {
  width: 0px;
  //虽然transition写了all，但是如果不写input没写高度，input:hover的写的高度是瞬间变化的
  transition: all 1s ease;
}
.search:hover .input {
  width: 200px;
}


.img{
  width: 100px; 
  height: 100px;
  transition: all 0.5s ease;
}
.img:hover{
  transform:scale(1.1);
}


.rotate {
  animation: rotate 4s linear infinite;
  -moz-animation: rotate 4s linear infinite;  /* Firefox */
  -webkit-animation: rotate 4s linear infinite; /* Safari 和 Chrome */
  -o-animation: rotate 4s linear infinite; /* Opera */
}
/*  值rotate改为rotateY为3D立体旋转  */
@keyframes rotate {
  0% {transform:rotate(0deg);}
  50% {transform:rotate(180deg);}
  100% {transform:rotate(360deg);}
}

.rotatehover:hover {
  animation: rotatehover 4s linear infinite;
  -moz-animation: rotatehover 4s linear infinite;  /* Firefox */
  -webkit-animation: rotatehover 4s linear infinite; /* Safari 和 Chrome */
  -o-animation: rotatehover 4s linear infinite; /* Opera */
}
/*  值rotate改为rotateY为3D立体旋转  */
@keyframes rotatehover {
  0% {transform:rotateY(0deg);}
  50% {transform:rotateY(180deg);}
  100% {transform:rotateY(360deg);}
}





::v-deep .el-input__wrapper{
 padding:0px
}
</style>