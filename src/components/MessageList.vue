<template>
<div>
  <br>
  <van-divider style="background: rgba(67,67,67,0.24); "/>
  <p style="font-size: 18px; margin-bottom: 0 ;font-family: '微软雅黑 Light' ,serif">&nbsp;&nbsp;&nbsp;私信</p>
        <van-swipe-cell v-for="value in 10" style="top: 10px">
          <van-cell title="张恒" value="内容" label="吃了吗" style="font-family: '微软雅黑 Light',sans-serif" >
            <van-image
                position="left"
                round
                width="1.5rem"
                height="1.5rem"
                src="/static/images/icon2.jpeg"
            />
          </van-cell>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
</div>
</template>

<script setup>
const themeVars={
  cellIconSize:'80px',
}
</script>

<style scoped>
.icon{
  font-size: 100px;
}
.delete-button {
  height: 100%;
}
</style>
