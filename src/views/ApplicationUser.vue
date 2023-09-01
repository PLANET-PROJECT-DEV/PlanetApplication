<template>
<div>
  <div>
    <van-cell @click="showPopup" style="padding: 0">
      <img src="/static/images/setup.png"
           style="width: 30px;
           height: 30px;
           position: fixed;
           right: 20px;top: 20px"
           alt="setup">
    </van-cell>
    <van-popup v-model:show="show"
               position="bottom"
               round
               style="height: 50%">
      <setUp></setUp>
    </van-popup>

  </div>
      <van-image
          round
          click=""
          width="2.5rem"
          height="2.5rem"
          src="/static/images/icon1.png"
          style="position: fixed;left: 176px;top: 50px"
      />
      <van-row justify="center" >
        <van-col style="font-size: 22px;
                 font-family: '微软雅黑 Light',serif;
                 position: fixed;top: 160px">
          陈睿
        </van-col>
      </van-row>
      <van-row justify="center" >
        <van-col style="position: fixed;
                 top: 180px">
          <p style="font-size: 14px;
                 font-family: '微软雅黑 Light',serif;color: rgba(43,43,43,0.9)">
            喜欢的话就坚持吧|加入Plane520天
          </p>
        </van-col>
      </van-row>
</div>
  <div>
    <message-list style="position: fixed;left: 70px;top: 200px;width: 8.35rem;"/>
  </div>
</template>

<script setup lang="ts">
import MessageList from "/src/components/MessageList";
import {ref} from "vue";
import SetUp from "@/components/SetUp.vue";
let show = ref(false);
const showPopup = () => {
  show.value = true;
}
</script>

<style scoped>

</style>
