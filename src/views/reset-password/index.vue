<template>
  <div class="reset-password-container">

    <el-form ref="ResetPasswordForm" :model="ResetPasswordForm" class="ResetPassword-form" :rules="ResetPasswordRules" auto-complete="on" label-position="left">
      <el-row class="buttom">
        <h2 v-if="ifblock==true">第二步</h2>
        <h2 v-if="ifblock !=true">修改密码</h2>
        <p v-if="ifblock==true">请重新编辑您的密码</p>
      </el-row>
      <el-form-item v-if="ifblock!=true" prop="passwordTypeOriginal">
        <el-input
          ref="passwordTypeOriginal"
          :key="passwordType"
          v-model="ResetPasswordForm.passwordTypeOriginal"
          placeholder="请输入你的原密码"
          name="passwordTypeOriginal"
          :type="passwordType"
          tabindex="1"
          autocomplete="on"
        />
        <!-- <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span> -->
      </el-form-item>
      <el-form-item prop="password">
        <!-- <el-input
          :key="passwordType"
          ref="passwordType"
          v-model="ResetPasswordForm.passwordType"
          placeholder="请输新入密码"
          name="Verificationcode"
          :type="passwordType"
          tabindex="2"
          autocomplete="on"
        /> -->
        <el-input
          :key="passwordType"
          ref="password"
          v-model="ResetPasswordForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
        />
        <!-- <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span> -->
      </el-form-item>
      <el-form-item prop="repasswordType">
        <el-input
          :key="passwordType"
          ref="repasswordType"
          v-model="ResetPasswordForm.repasswordType"
          placeholder="确认密码"
          name="repasswordType"
          :type="passwordType"
          tabindex="3"
          autocomplete="on"
        />

      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="logout()">下一步</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'ResetPassword',
  data() {
    const TypeOriginal = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入正确密码'))
      } else {
        callback()
      }
      return 'zh'
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入正确密码'))
      } else {
        callback()
      }
    }
    const repasswordType = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入正确密码'))
      } else {
        callback()
      }
    }
    return {
      ResetPasswordForm: {
        passwordTypeOriginal: '',
        password: '',
        repasswordType: ''
      },
      ResetPasswordRules: {
        passwordTypeOriginal: [{ required: true, trigger: 'blur', validator: TypeOriginal }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        repasswordType: [{ required: true, trigger: 'blur', validator: repasswordType }]
      },
      passwordType: 'password',
      ifblock: false,
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  created() {
    // 接收参数
    // debugger
    if (this.$route.query.mark === '忘记密码') {
      this.ifblock = true
    } else {
      this.ifblock = false
    }
    window.addEventListener('storage', this.afterQRScan)
  },
  destroyed() {
    window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    /**
     * 重置密码跳转
     */
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    checkCapslock(e) {
      // debugger
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss" scoped>
 .reset-password-container{
    min-height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
    color: #fff;
}
 .ResetPassword-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
}
.el-form-item {
  width: 442px;
}
.buttom{
  margin-bottom: 20px;
}
</style>

