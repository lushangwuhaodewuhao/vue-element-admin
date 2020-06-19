<template>
  <div class="edit-user-information-container">
    <el-form ref="editUserInformationForm" :model="editUserInformationForm" class="editUserInformation-form" :rules="editUserInformationRules">
      <el-form-item>
        <h2>我的信息</h2>
      </el-form-item>
      <el-form-item label="用户名:" prop="useryzcode">
        <span v-if="isblock!=true">张杉杉</span>
        <el-input
          v-if="isblock==true"
          ref="useryzcode"
          v-model="editUserInformationForm.useryzcode"
          placeholder="张杉杉"
          name="useryzcode"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item prop="businessLicense" label="用户头像:">
        <img v-if="isblock!=true" src="../../assets/401_images/mascot.png" class="headimg">
        <el-upload
          v-if="isblock==true"
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-people">
              <img src="../../assets/401_images/mascot.png" class="headimg">
              <i class="el-icon-upload2" />
            </div>
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="手机号:">
        <span v-if="isblock!=true">18779887796</span>

        <el-input
          v-if="isblock==true"
          ref="Verificationcode"
          v-model="editUserInformationForm.Verificationcode"
          placeholder="17879887796"
          name="Verificationcode"
          type=""
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-form-item label="邮箱:">
        <span v-if="isblock!=true">1309994056@qq.com</span>
        <el-input
          v-if="isblock==true"
          id="email"
          ref="useremail"
          v-model="editUserInformationForm.email"
          placeholder="1309994056@qq.com"
          name="useremail"
          type="email"
          tabindex="1"
          auto-complete="on"
          pattern=".+@globex.com"
          size="30"
          required
        />
      </el-form-item>
      <el-button v-if="isblock!=true" type="primary" style="width:100%;margin-bottom:30px;" @click="editwordbutton()">编辑</el-button>
      <el-button v-if="isblock==true" type="primary" style="width:100%;margin-bottom:30px;" @click="ResetEdit()">确认</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'EditUserInformation',
  data() {
    return {
      editUserInformationForm: {
        useryzcode: ''
      },
      editUserInformationRules: {
        useryzcode: [{ required: false, trigger: 'blur' }]
      },
      isblock: false,
      imageUrl: ''
    }
  },
  methods: {
    /**
     * 重置密码跳转
     */
    ResetEdit() {
      this.isblock = false
      this.$router.push({ path: '/index?' + +new Date() })
    },
    /**
     * 图片上传
     */
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleAvatarSuccess() {

    },
    editwordbutton() {
      this.isblock = true
    }
  }
}
</script>
<style lang="scss">
 .edit-user-information-container{
    min-height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    overflow: hidden;
    color: #fff;
    .editUserInformation-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 20px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid #eee;
    margin-top: 140px;
    border-radius: 10px;
}
.headimg{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-top: -10px;
  }
   .el-form-item__label{
      color: #eee;
  }
  .el-form-item__content{
       display: flow-root;
  }
}

</style>
