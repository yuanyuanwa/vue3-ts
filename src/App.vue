<template>
  <router-view/>
</template>

<style lang="scss">
@import '../src/style/uniformStyle.scss';
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  font-family:Arial,'Times New Roman','幼圆',sans-serif;/* 中英文设置不同的字体 */
}
*{
  padding: 0px;
  margin: 0px;
}
 ::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
 ::-webkit-scrollbar-thumb {
		background-color: skyblue;
		border-radius: 3px;
	}
</style>
