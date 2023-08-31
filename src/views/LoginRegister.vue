<template>
    <div>
      <van-tabs v-model:active="active">
        <van-tab title="账号登录">
          <div>
          <LoginForm
              :loginUser="loginUser"
              :rules="rules"
          />
        </div>
        </van-tab>
        <van-tab title="验证码登录">
          <div>
            <RegisterForm
                :registerUser="registerUser"
                :registerRules="registerRules"
            />
          </div>
        </van-tab>

      </van-tabs>


  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {loginUser, rules} from "@/utils/loginVaildators";
import {registerUser, registerRules} from "@/utils/RegisterVaildators";
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from '@/components/LoginForm.vue'

const signUpMode = ref<boolean>(false)


</script>

<style scoped>
</style>