<template>
  <div class="p-20">
    <ul class="tabs">
      <li
        v-for="(item, index) in tabsList"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click.stop="toContent(item, index)"
      >
        {{ item.name }}
      </li>
    </ul>

    <div></div>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
</style>