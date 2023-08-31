<template>
<div>
  <van-config-provider :theme-vars="themeVars">
        <van-swipe-cell>

          <van-cell icon="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" title="单元格" value="内容" label="描述信息" >
          </van-cell>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
  <van-swipe-cell>

    <van-cell icon="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" title="单元格" value="内容" label="描述信息"/>

    <template #right>
      <van-button square text="删除" type="danger" class="delete-button" />
    </template>
  </van-swipe-cell>
  </van-config-provider>
</div>
</template>

<script setup>
const themeVars={
  cellIconSize:'80px',
}
</script>

<style scoped>
.van-cell-icon{

}
.delete-button {
  height: 100%;
}
</style>