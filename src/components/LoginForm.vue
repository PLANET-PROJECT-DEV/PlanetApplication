<template>
  <div>
    <van-form
        @submit="handleLogin"
    >
      <van-cell-group inset>
        <van-field
            left-icon="envelop-o"
            placeholder="电子邮件地址"
            v-model="loginUser.email"
            :rules="rules.email"

        />
        <van-field
            left-icon="lock"
            type="password"
            placeholder="请输入密码"
            v-model="loginUser.password"
            :rules="rules.password"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>


    </van-form>
    <van-row gutter="20" justify="end">
      <van-col span="8"><a href="">忘记密码？</a></van-col>
    </van-row>


  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {loginUser, rules} from "@/utils/loginVaildators";
import {login} from "@/api/user";
import {useStore} from "vuex";


const router = useRouter();
const store=useStore();
const handleLogin = async() => {
  const res = await login(loginUser.value);
  if(res.data){
      store.commit('setUser',res.data);
      console.log(res);
      router.push('/application/index');
  }else {
    console.log("submit error");
  }
}
</script>

<style scoped>

</style>