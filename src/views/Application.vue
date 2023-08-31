<template>
  <van-config-provider :theme-vars="themeVars">
  <div class="body">
    <div class="left">
      <van-space direction="vertical">

        <van-grid clickable="ture">
          <van-grid-item   to="/application/user" >
                      <van-image
                        round
                        width="1.5rem"
                        height="1.5rem"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                    />
          </van-grid-item>
        </van-grid>
      </van-space>
      <van-divider/>
      <van-space>
      </van-space>

    </div>
    <div class="right">
      <router-view>
      </router-view>
    </div>


    </div>
  </van-config-provider>
</template>

<script setup lang="ts">
const themeVars={
  cellIconSize: '1rem',
  cellFontSize:'80px',

}
</script>

<style scoped>
.body{
  margin: 0;
}
.left{
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 25%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}
.right{
  margin-left: 25%;
  height: 100%;
}
</style>