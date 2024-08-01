<template>
  <div style="display: flex;" class="p-20">
    <!-- https://blog.csdn.net/huai42717/article/details/129152743 -->
    <div style="width: 200px">
      <p
        v-for="(item, index) in list"
        :key="index"
        @click="clicks(index)"
        :class="{ green: indexs == index }"
      >
        {{ item.title }}
      </p>
    </div>
    <div
      style="width: 1000px; height: 50vh; overflow: scroll"
      @scroll="handScroll"
    >
      <div v-for="ite in list" :key="ite.id" class="a">
        <p style="">{{ ite.title }}</p>
        <p>{{ ite.answer }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let list = [
  {
    id: 1,
    title: "1.什么是html",
    answer:
      "1.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 2,
    title: "2.什么是css",
    answer:
      "2.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 3,
    title: "3.什么是html",
    answer:
      "3.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 4,
    title: "4.什么是html",
    answer:
      "4.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 5,
    title: "5.什么是html",
    answer:
      "5.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 6,
    title: "6.什么是html",
    answer:
      "6.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 7,
    title: "7.什么是html",
    answer:
      "7.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 8,
    title: "8.什么是html",
    answer:
      "8.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 9,
    title: "9.什么是html",
    answer:
      "9.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 10,
    title: "10.什么是html",
    answer:
      "8.超文本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
  {
    id: 11,
    title: "11.什么是html",
    answer:
      "9.超文超文本标记语言定义了超文本标记语言定义了超文本标记语言定义了超文本标记语言定义了超文本标记语言定义了超文本标记语言定义了超文本标记语言定义了本标记语言定义了多种数据类型的元素内容，如脚本数据和样式表的数据，和众多类型的属性值，包括ID、名称、URI、数字、长度单位、语言、媒体描述符、颜色、字符编码、日期和时间等。所有这些数据类型都是专业的字符数据",
  },
];

const indexs = ref(0);
const clicks = (index) => {
  indexs.value = index;
  document.getElementsByClassName("a")[index].scrollIntoView({
    behavior: "smooth", // 平滑过渡
    block: "start", // 上边框与视窗顶部平齐。默认值
  });
};
//  同步改样式
const handScroll = (e) => {
  let scrollItems = document.querySelectorAll(".a");
  for (let i = scrollItems.length - 1; i >= 0; i--) {
    // 判断滚动条滚动距离是否大于当前滚动项可滚动距离
    let judge =
      e.target.scrollTop >= scrollItems[i].offsetTop - scrollItems[0].offsetTop;
    if (judge) {
      indexs.value = i;
      break;
    }
  }
};
</script>
<style >
.green {
  font-weight: 700;
  color: green;
}
</style>