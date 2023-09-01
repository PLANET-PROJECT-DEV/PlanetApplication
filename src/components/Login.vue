<template>
  <el-form
      ref="loginForm"
      :model="loginUser"
      :rules="rules"
      label-width="100px"
      class="loginForm sign-in-form"
  >
    <el-form-item
        label="邮箱"
        prop="email"
    >
      <el-input
          v-model="loginUser.email"
          placeholder="请输入邮箱..."
      />
    </el-form-item>
    <el-form-item
        label="密码"
        prop="password"
    >
      <el-input
          v-model="loginUser.password"
          type="password"
          placeholder="请输入密码..."
      />
    </el-form-item>
    <el-form-item>
      <el-button
          type="primary"
          class="submit_btn"
          @click="handleLogin('loginForm')"
      >
        登录
      </el-button>
    </el-form-item>
    <div class="tipareaLeft">
      <p><a href="">验证码登录</a></p>
    </div>
    <div class="tiparea">
      <p><a href="">忘记密码？</a></p>
    </div>
  </el-form>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
