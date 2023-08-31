<template>
<div>
  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
</div>
</template>

<script setup>
const onClickLeft = () => history.back();
</script>

<style scoped>

</style>