<template>
  <div class="body">
    <div class="left">
      <p style="font-size: 16px;font-family: '微软雅黑 Light',serif; margin-bottom: 0">&nbsp;#内测版</p>
        <van-grid  :gutter="0" style="top: 30px">
          <van-grid-item   to="/application/user" style="border-color: aqua" >
                      <van-image
                        round
                        width="1.4rem"
                        height="1.4rem"
                        src="/static/images/icon1.png"
                    />
          </van-grid-item>
          <van-grid-item   to="/application/index" style="left: -1px;" >
            <van-image
                width="1.5rem"
                height="1.5rem"
                src="/static/images/home3.png"
            />
          </van-grid-item>
        </van-grid>
      <br>
        <van-divider style="background: rgba(27,27,27,0.66); margin: 5px; width: 50px;position: fixed;left: 2px"/>
      <br>
        <van-grid :column-num="1" style="top: 10px">
          <van-grid-item v-for="value in 6" :key="value" >
            <van-image
                round
                width="1.4rem"
                height="1.4rem"
                src="/static/images/icon2.jpeg"></van-image>
          </van-grid-item>
        </van-grid>
      <van-divider/>
      <van-space>
      </van-space>
    </div>
    <div class="right">
      <router-view>
      </router-view>
    </div>


    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const active=ref(0);


</script>

<style scoped>
.body{
  margin: 0;
}
.left{
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 17%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}
.right{
  margin-left: 17%;
  height: 100%;
}
/deep/.van-grid-item__content{
  background: #f1f1f1;
  padding: 10px;
}

</style>
