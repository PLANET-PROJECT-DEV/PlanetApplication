<template>
<div>
  <van-search v-model="value" placeholder="请输入搜索关键词" />
</div>
  <div>
    <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item >热门</van-tabbar-item>
      <van-tabbar-item >我的</van-tabbar-item>
      <van-tabbar-item >发现</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const active=ref(2);
const value = ref('');
</script>

<style scoped>

</style>
