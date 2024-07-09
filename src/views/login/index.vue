<template>
  <div class="login-wrapper">
    <div class="login-container">
      <n-space justify="center">
        <n-avatar size="large" :src="userAvatarImage" />
      </n-space>
      <n-form class="login-form" ref="formRef" :model="form" :rules="rules" label-placement="left">
        <n-form-item path="account" label="">
          <n-input :account="form.account" placeholder="账号" />
        </n-form-item>
        <n-form-item path="password" label="">
          <n-input :password="form.password" type="password" placeholder="密码" show-password-on="mousedown" />
        </n-form-item>
        <n-form-item class="login-button">
          <n-button type="info" @click="$router.push('/index')">登录</n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="js">
import { ref, reactive, toRefs, onMounted, defineComponent } from 'vue'
import userAvatarImage from '@/assets/images/saber.png'

export default defineComponent({
  setup() {
    const formRef = ref(null);
    const form = ref({
      account: null,
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
    return {
      formRef,
      form,
      rules,
      userAvatarImage,
    }
  }
})
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
