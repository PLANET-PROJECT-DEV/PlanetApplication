<template>
  <div class="content">
    <van-nav-bar
        title="标题"
        left-arrow
        @click-left="onClickLeft"
    >
      <template #right>
        <van-icon name="ellipsis" size="18" />
      </template>
    </van-nav-bar>

  <div class="chat">
    <div class="chat-main">
      <div class="chat-ls">
        <div class="chat-time">12:30</div>
        <div class="msg-m mag-left">
          <image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" class="user-img"></image>
          <div class="massage">
            <div class="msg-text">你好</div>
          </div>
        </div>
      </div>
      <div class="chat-ls">
        <div class="chat-time">12:30</div>
        <div class="msg-m mag-right">
          <image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" class="user-img"></image>
          <div class="massage">
            <div class="msg-text">我测你们妈</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
const onClickLeft = () => history.back();
</script>

<style scoped lang="less">
.content{
  height: 100%;
}
.chat {
  height: 100%;
  background-color: #f1f1f1;
  .chat-main{
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 50px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
}
  .chat-ls{
    .chat-time{
      font-size: 12px;
      line-height: 17px;
      padding: 10px 0;
      text-align: center;
    }
    .msg-m{
       display: flex;
       padding: 10px 0;
      .user-img{
        flex: none;
        width: 80px;
        height: 80px;
        border-radius: 20px;
      }
      .massage{
         flex: auto;
         max-width: 480px;
       }
      .msg-text{
          font-size: 32px;
          line-height: 44px;
          padding: 18px 24px;
        }
     }
    .mag-left{
        flex-direction: row;
        .msg-text{
          margin-left: 16px;
          background-color: #ffffff;
          border-radius: 0 20px 20px 20px;
        }
      }
    .mag-right{
      flex-direction: row-reverse;
         .msg-text{
           margin-right: 16px;
           background-color: deepskyblue;
           border-radius: 20px 0 20px 20px;
           text-align: right;

         }
       }
 }
}
</style>