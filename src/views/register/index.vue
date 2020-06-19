<template>
  <div class="register-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">注册合格证管理信息系统账号</h3>
        <!-- 已注册 去登入
        <el-button @click="showlogin">登入</el-button> -->
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <span>用户名：</span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="phone">
        <span class="svg-container">
          <i class="el-icon-phone" />
        </span>
        <label>手机号：</label>
        <el-input
          ref="userpone"
          v-model="loginForm.phone"
          placeholder="请输入手机号码"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item prop="email">
        <span class="svg-container">
          <i class="el-icon-message" />
        </span>
        <label>电子邮箱：</label>
        <el-input
          id="email"
          ref="useremail"
          v-model="loginForm.email"
          placeholder="请输入电子邮箱"
          name="useremail"
          type="email"
          tabindex="1"
          auto-complete="on"
          pattern=".+@globex.com"
          size="30"
          required
        />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <span>密码：</span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <span>确认密码：</span>
        <el-input
          :key="passwordType"
          ref="repassword"
          v-model="loginForm.repassword"
          :type="passwordType"
          placeholder="确认密码"
          name="repassword"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="logout()">注册</el-button>

    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import { aaa } from '@/api/text'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    const validatephone = (rule, value, callback) => {
      if (value.length < 11) {
        callback(new Error('手机号不正确'))
      } else {
        callback()
      }
    }
    const validatemail = (rule, value, callback) => {
      if (value.length < 11) {
        callback(new Error('邮件格式不正确'))
      } else {
        callback()
      }
    }
    const validaterepassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111',
        phone: '18779887796',
        email: '1309994056@qq.com',
        repassword: '111111'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        phone: [{ required: true, trigger: 'blur', validator: validatephone }],
        email: [{ required: true, trigger: 'blur', validator: validatemail }],
        repassword: [{ required: true, trigger: 'blur', validator: validaterepassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    // $route: {
    //   handler: function(route) {
    //     this.redirect = route.query && route.query.redirect
    //   },
    //   immediate: true
    // }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    async logout() {
      await this.$store.dispatch('user/register', this.loginForm)
      // aaa(this.loginForm).then(response => {
        .then(response => {
          this.$router.push(`/login?redirect=${this.$route.fullPath}`)
          this.loading = false
        })
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
    // showlogin() {
    //   this.$store.dispatch('user/login', this.loginForm).then(() => {
    //     this.$router.push('/register')
    //   })
    // }
  }
}
</script>

<style lang="scss" >
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.register-container {
  .el-input {
    display: inline-block;
    height: 40px;
    width: 70%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 0px 5px 12px 15px;
      color: $light_gray;
      height: 40px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item__content{
    color: #eee;
  }
 .el-input__inner{
    border: 0 !important;
    background: none !important;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" >
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.register-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 0 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 36px;
    display: inline-block;
  }
  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
