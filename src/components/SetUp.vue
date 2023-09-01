<template>
<div>
  <P style="font-family: '微软雅黑 Light' ,sans-serif;font-size: 15px;color: rgba(43,43,43,0.76)">&nbsp;&nbsp;&nbsp;私信设置</P>
  <van-cell center title="允许发我私信">
    <template #right-icon>
      <van-switch v-model="checked1" size="24" />
    </template>
  </van-cell>
  <van-cell center title="消息通知">
    <template #right-icon>
      <van-switch v-model="checked2" size="24" />
    </template>
  </van-cell>
  <P  style="font-family: '微软雅黑 Light' ,sans-serif;
      font-size: 15px;
      color: rgba(43,43,43,0.76)">
    &nbsp;&nbsp;&nbsp;隐私设置
  </P>
  <van-cell center title="允许加我好友">
    <template #right-icon>
      <van-switch v-model="checked3" size="24" />
    </template>
  </van-cell>
  <van-cell center title="允许查看资料卡">
    <template #right-icon>
      <van-switch v-model="checked4" size="24" />
    </template>
  </van-cell>
  <a  href="#" style="font-family: '微软雅黑 Light' ,sans-serif;
      font-size: 15px;
      color: #2f9fd0;
      position:fixed;
      left: 148px;
      bottom: 25px;
      ">
    &nbsp;&nbsp;&nbsp;帮助与反馈
  </a>
</div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Dialog} from "vant";

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const onUpdateValue1 = (newValue: boolean) => {
  Dialog.confirm({
    title: '提醒',
    message: '是否切换开关？',
  }).then(() => {
    checked1.value = newValue;
  })
}
const onUpdateValue2 = (newValue: boolean) => {
  Dialog.confirm({
    title: '提醒',
    message: '是否切换开关？',
  }).then(() => {
    checked2.value = newValue;
  })
}
const onUpdateValue3 = (newValue: boolean) => {
  Dialog.confirm({
    title: '提醒',
    message: '是否切换开关？',
  }).then(() => {
    checked3.value = newValue;
  })
}
const onUpdateValue4 = (newValue: boolean) => {
  Dialog.confirm({
    title: '提醒',
    message: '是否切换开关？',
  }).then(() => {
    checked4.value = newValue;
  })
}
</script>

<style scoped>

</style>
