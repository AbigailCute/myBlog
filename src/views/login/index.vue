<template>
  <div class="login-wrapper">
    <div class="login-container">
      <n-space justify="center">
        <n-avatar size="large" :src="userAvatarImage" />
      </n-space>
      <n-form class="login-form" ref="formRef" :model="model" :rules="rules" label-placement="left">
        <n-form-item path="account" label="">
          <n-input v-model:value="model.age" @keydown.enter.prevent placeholder="输入账号" />
        </n-form-item>
        <n-form-item path="password" label="">
          <n-input v-model:value="model.password" type="password" @keydown.enter.prevent placeholder="输入密码" />
        </n-form-item>
        <n-form-item class="login-button">
          <n-button type="info" @click="$router.push('/index')">登录</n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, reactive, toRefs, onMounted } from 'vue'
import userAvatarImage from '@/assets/images/saber.png'

const formRef = ref(null);
const model = ref({
  age: null,
  password: null,
  reenteredPassword: null
})
const rules = {
  age: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error("需要账号");
        }
        return true;
      },
      trigger: ["input", "blur"]
    }
  ],
  password: [
    {
      required: true,
      message: "请输入密码"
    }
  ],
}
</script>

<style scoped lang="less">
.login-wrapper {
  width: 100%;
  height: 100%;
  // background-image: url("@/assets/images/login.jpg");
  display: flex;
  justify-content: center;
  position: relative;

  .login-container {
    top: 40%;
    position: absolute;
    color: #fff;

    .login-form {
      margin: 3vh;

      .login-button {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
