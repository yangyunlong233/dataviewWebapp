<template>
  <div class="page login" id="Login">
    <div class="tt"><img src="../../assets/images/login_tt.png"></div>
    <div class="login-form">
      <input type="text" placeholder="用户名">
      <input type="password" placeholder="密码">
      <button @click="to_home">登录</button>
    </div>
    <div class="copy">
      <p>copyright ©️2022 all rights reserved. </p>
      <p>版权所有：汉中市茶叶产业大数据平台</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    to_home () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.login {
    background-image: url("../../assets/images/login_bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    .tt {
      margin: 0 auto;
      padding: 200px 0 0;
      width: 420px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .login-form {
      margin: 50px auto;
      padding: 30px;
      width: 360px;
      background: rgba(#264226, .6);
      input {
        box-sizing: border-box;
        margin: 0 0 20px;
        padding: 0 20px;
        width: 360px;
        height: 46px;
        background: #FFFFFF;
        border-radius: 4px;
        border: 0;
        font-size: 20px;
      }
      button {
        width: 360px;
        height: 52px;
        background: #4D9973;
        border-radius: 4px;
        border: 0;
        font-size: 20px;
        color: #fff;
      }
    }
  .copy {
    margin: 80px 0;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
    text-transform: uppercase;
    color: #fff;
  }
}
</style>
