<template>
  <div class="header-style-container">
    <el-row class="title-container" :gutter="5">
      <el-col :span="20">
        <h3 class="title">合格证管理信息系统</h3>
      </el-col>
      <el-col :span="1.5">
        <img src="../../assets/401_images/mascot.png" class="headimg">
      </el-col>
      <el-col :span="2">
        <el-dropdown>
          <el-button type="success" style="margin-top: 20px;">
            张杉杉<i class="el-icon-arrow-down el-icon--right" />
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="ChangePassword()">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="editUserInformation()">编辑用户信息</el-dropdown-item>
            <el-dropdown-item @click.native="logout()">安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-tooltip content="退出" placement="top" effect="light">
          <!-- <span class="el-button-username" >张杉杉</span> -->

        </el-tooltip>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HeaderStyle',
  data() {
    return {

    }
  },
  methods: {
    /**
     * 退出跳转
     */
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    ChangePassword() {
      this.$router.push({ path: '/reset-password?' })
    },
    editUserInformation() {
      this.$router.push({ path: '/edit-user-information?' })
    }
  }
}
</script>

<style lang="scss" scoped>
 .header-style-container{
    background-color: #36a3f7;
        height: 80px;
        color: #fff;
         font-size: large;
        margin-bottom: 30px;
        padding-left: 25px;
  }
  .headimg{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-top: 10px;
  }
   .el-button-username{
    color: #fff;
    line-height: 80px;
  }
</style>
