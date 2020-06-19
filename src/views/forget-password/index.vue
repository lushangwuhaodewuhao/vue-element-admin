<template>
  <div class="forget-password-container">

    <el-form ref="ForgetPasswordForm" :model="ForgetPasswordForm" :rules="ForgetPasswordRules" class="ForgetPassword-form">
      <el-row class="buttom">
        <h2>第一步</h2>
        <el-col :span="24">请填写手机号或邮箱</el-col>
      </el-row>
      <el-form-item prop="useryzcode">
        <el-input
          ref="useryzcode"
          v-model="ForgetPasswordForm.useryzcode"
          placeholder="请输入邮箱/手机号"
          name="useryzcode"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="Verificationcode">
        <el-row :gutter="5" style="width: 442px;">
          <el-col :span="17">
            <el-input
              ref="Verificationcode"
              v-model="ForgetPasswordForm.Verificationcode"
              placeholder="请输入验证码"
              name="Verificationcode"
              type=""
              tabindex="1"
              autocomplete="on"
            />
          </el-col>
          <el-col :span="3" style="margin-left:15px">
            <el-button>
              {{ VerificationCode }}
            </el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-button type="primary" style="width:100%;margin-bottom:30px;" @click="ResetPassword()">下一步</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'ForgetPassword',
  data() {
    const validuseryzcode = (rule, value, callback) => {
      if (value.length < 11) {
        callback(new Error('手机号或邮箱不能为空'))
      } else {
        callback()
      }
    }
    return {
      ForgetPasswordForm: {
        useryzcode: '',
        Verificationcode: ''
      },
      ForgetPasswordRules: {
        useryzcode: [{ required: true, trigger: 'blur', validator: validuseryzcode }]
      },
      VerificationCode: '获取验证码'
    }
  },
  methods: {
    /**
     * 重置密码跳转
     */
    ResetPassword() {
      this.$router.push({ path: '/reset-password', query: { mark: '忘记密码' }})
    }
  }
}
</script>

<style lang="scss" scoped>
 .forget-password-container{
    min-height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
    color: #fff;
    .ForgetPassword-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
}
.buttom{
  margin-bottom: 20px;
}
.el-form-item {
  width: 442px;
}
}

</style>

