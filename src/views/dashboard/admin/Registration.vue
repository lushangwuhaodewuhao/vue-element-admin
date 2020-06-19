<template>
  <div class="registration-container">
    <HeadStyle />
    <div class="imgbox">
      <img src="../../../assets/401_images/mascot.png">
      <span> 您还没有注册企业，快来注册您的企业开始使用</span>
      <div class="buttonbox">
        <el-button type="button" @click="registButton()">注册企业</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import HeadStyle from '../../components-demo/head-style'
export default {
  name: 'Registration',
  components: { HeadStyle },
  data() {
    return {
    }
  },
  methods: {
    registButton() {
      this.$router.push({ path: '/directive?' + +new Date() })
    }
  }
}
</script>

<style lang="scss" scoped>

.registration-container {
  .imgbox{
    border:1px solid #ccc;
     width: 60%;
    margin: auto;
    height: 260px;
    border-radius: 10px;
    color: #fff;
    background-color: #40c9c6;
    //border-show:global-variable-exists($name: )

  }
  .imgbox span{
    font-size: X-large;
    margin-right: 40px;
  }
  .imgbox img{
    width: 120px;
     height: 120px;
     border-radius: 50%;
     margin: 8px
  }
  .el-button {
    font-size: X-large;
    margin-left: -30%;
  }
  .buttonbox{
    width: 14%;
    margin: 20px auto;
  }
}
</style>
