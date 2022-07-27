<template>
  <div><div>柱状图</div></div>
</template>
<script lang="ts" setup>
import axios from "axios";
const login = () => {
  axios.get("/api/login").then((response) => {
    if (response.data) {
      console.log(response.data);
      alert(response.data.success + "," + response.data.message);
    }
  });
};
login()
</script>
