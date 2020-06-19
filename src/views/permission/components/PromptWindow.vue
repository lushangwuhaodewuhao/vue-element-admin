<template>
  <div class="prompt-container">
    <!-- <el-card> -->
    <el-row>
      <el-col class="el-coll-text"> 您的企业注册成功</el-col>
    </el-row>
    <el-row>
      <div class="buttonbox">
        <el-button type="primary" @click="AddProduct()">开始添加产品</el-button>
      </div>
    </el-row>
    <!-- </el-card> -->
  </div>
</template>

<script>

export default {
  name: 'PromptWindow',
  data() {
    return {

    }
  },
  mounted() {
    this.getPath()
  },

  methods: {
    AddProduct() {
      this.$router.push({ path: '/add-product?' + +new Date() })
    },
    getPath() {
    }
  }
}
</script>

<style lang="scss">

.prompt-container {
  .el-title{
    font-size: x-large;
  }
  .el-coll-text{
     font-size: large;
     line-height: 60px;
     font-weight: 800;
      color: #36a3f7;
      text-align: center;
  }
  .el-button {
    font-size: X-large;
  }
  .buttonbox{
       margin-top: 6%;
    margin-left: 35%;
  }
  .is-bold{
    font-size: x-large;
  }
}
</style>
