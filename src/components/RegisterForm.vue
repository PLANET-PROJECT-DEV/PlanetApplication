<template>
  <div>
    <van-form
        @submit="handleRegister"
    >
      <van-cell-group inset>
        <van-field
            left-icon="envelop-o"
            placeholder="电子邮件地址"
            v-model="registerUser.email"
            :rules="registerRules.email"

        />
        <van-field
            left-icon="other-pay"
            placeholder="请输入验证码"
            v-model="registerUser.code"
            :rules="registerRules.code"
        >
        <template #button>
        <van-button size="small" type="primary" @click="handleSendCode">发送验证码</van-button>
      </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登录/注册
        </van-button>
      </div>


    </van-form>
    <van-row gutter="20" justify="end">
      <van-col span="8"><a href=""></a></van-col>
    </van-row>


  </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {registerUser,registerRules} from "@/utils/RegisterVaildators";
import {sendcode,register} from "@/api/user";

const router = useRouter()
// 触发注册登录
const handleRegister = async () => {
  const res=await register(registerUser)
  if (res.data.code===0){
    console.log("success")
    router.push('/application/index')
  }else {
    console.log("submit error")
  }
}
const handleSendCode=async ()=> {
  await sendcode(registerUser);
}

</script>

<style scoped>

</style>