<template>
  <div class="add-product">
    <HeadStyle />
    <h3 claass="h3" style="padding-left: 10%;">新增产品</h3>
    <el-form ref="loginForm" :model="addProductForm" :rules="addProductRules" class="login-form" autocomplete="on" label-position="left">
      <el-row class="frombox">
        <el-form-item prop="enterpriseName">
          <el-col :span="3">
            <span class="svg-container">
              产品名称：
            </span>
          </el-col>

          <el-col :span="12">
            <el-input
              ref="enterpriseName"
              v-model="addProductForm.enterpriseName"
              placeholder="输入企业名称"
              name="enterpriseName"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-col>

        </el-form-item>
        <el-form-item prop="businessLicense">
          <span class="svg-container">
            品牌商标：
          </span>

          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <div class="card-panel">
              <div class="card-panel-icon-wrapper icon-people">
                <i class="el-icon-platform-eleme" />
                <i class="el-icon-upload2" />
              </div>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item prop="businessLicense">
          <span class="svg-container">
            产品图片：
          </span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <div class="card-panel">
              <div class="card-panel-icon-wrapper icon-people">
                <i class="el-icon-picture" />
                <i class="el-icon-upload2" />
              </div>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item prop="certification">
          <span class="svg-container">
            三品一标认证情况：
          </span>
          <el-select v-model="addProductForm.certification" placeholder="选择认证情况" @change="selectProvinceChange()">
            <el-option v-for=" ( item, index ) in certificationList" :key="index" :label="item.provinceLabel" :value="item.provinId" />
          </el-select>
        </el-form-item>
        <el-form-item prop="detailedAddress">
          <span class="svg-container">
            认证证本：
          </span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <div class="card-panel" @click="handleSetLineChartData()">
              <div class="card-panel-icon-wrapper icon-people">
                <i class="el-icon-postcard" />
                <i class="el-icon-upload2" />
              </div>
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item prop="contactsName">
          <span class="svg-container">
            是否转基因：
          </span>
          <el-radio v-model="addProductForm.radio" label="1">是</el-radio>
          <el-radio v-model="addProductForm.radio" label="2">否</el-radio>
        </el-form-item>
        <el-button type="" class="icon-message" @click="AddProductSuccess()">注册</el-button>
        <el-button type="" @click="cancel()">取消</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import HeadStyle from '../components-demo/head-style'
import { addProduct } from '@/api/text'
export default {
  name: 'AddProduct',
  components: {
    HeadStyle
  },
  data() {
    const enterpriseName = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('产品名称不能为空'))
      } else {
        callback()
      }
    }
    return {
      imageUrl: '',
      addProductRules: {
        enterpriseName: [{ required: true, trigger: 'blur', validator: enterpriseName }]
      },
      addProductForm: {
        enterpriseName: '',
        certification: '',
        radio: ''
      },
      certificationList: [{
        provinceLabel: '合格',
        provinId: '1'
      },
      {
        provinceLabel: '不合格',
        provinId: '2'
      }]
    }
  },
  methods: {
    handleAvatarSuccess() {
    },
    /**
     * 注册产品
     */
    AddProductSuccess() {
      if (this.addProductForm.enterpriseName !== '' && this.addProductForm.certification !== '' && this.radio !== '') {
        addProduct(this.addProductForm).then(response => {
          if (response.code === 20000) {
            this.$message({
              showClose: true,
              message: '保存成功，产品添加成功了',
              type: 'success',
              center: true,
              duration: 2000,
              offset: 200
            })
            this.$router.push({ path: '/index?' + +new Date() })
          }
        })
          .catch(() => {
            this.loading = false
          })
      } else if (this.addProductForm.enterpriseName === '') {
        this.$message({
          showClose: true,
          message: '请填产品业名称',
          type: 'error',
          center: true,
          duration: 2000,
          offset: 200
        })
        return false
      } else if (this.addProductForm.certification === '') {
        this.$message({
          showClose: true,
          message: '请选择三品一标认证情况',
          type: 'error',
          center: true,
          duration: 2000,
          offset: 200
        })
        return false
      } else if (this.addProductForm.radio === '') {
        this.$message({
          showClose: true,
          message: '请选择是否是转基因',
          type: 'error',
          center: true,
          duration: 2000,
          offset: 200
        })
        return false
      }
    },
    cancel() {
      this.$router.go(-1)
    },
    /**
     * 关闭弹窗
     */
    onClose() {

    },
    selectProvinceChange() {
      console.log('selectProvinceChange')
    },
    industryChange() {
      console.log('industryChange')
    },
    handleSetLineChartData() {
      console.log('handleSetLineChartData')
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
    }
  }
}
</script>

<style lang="scss" scoped>
.add-product {
  //  padding: 8px 16px;
   margin-top: 15px;
   background-color: rgb(240, 242, 245);
  /deep/ .permission-sourceCode {
    margin-left: 10%;
  }
  /deep/ .permission-tag {
    background-color: #ecf5ff;
  }
  .frombox{
    width: 80%;
    margin:5px auto;
    padding: 15px;
  }
  .svg-container {
    line-height: 36px;
    color: #333;
    vertical-align: middle;
    width: 140px;
    display: inline-block;
  }
  .el-form-item__content{
        display: flex;
  }
  .login-form{
    width: 80%;
    margin: auto;
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;
  }
  .el-select{
      margin-right: 5px;
  }
  .el-button{
    padding: 12px 49px;
  }
  .icon-message {
        background: #36a3f7;
        color:#fff;
        font-weight: 800;
        margin: 10% 20%;
      }
    .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
         background: #36a3f7
      }

      .icon-shopping {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 0;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
       font-size: xxx-large;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
