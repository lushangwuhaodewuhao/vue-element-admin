<template>
  <div class="apply-content">
    <h2 class="h2">合格证申领</h2>
    <el-form :model="applycertificateForm">
      <el-row>
        <el-col :xs="12" :sm="12" :lg="12">
          <el-form-item label="申领日期：">
            <div class="block">
              <el-date-picker
                v-model="applycertificateForm.applicationData"
                align="right"
                type="date"
                placeholder="选择日期"
              />
              <!-- :picker-options="pickerOptions" -->
            </div>
          </el-form-item>
        </el-col>
        <el-col :xs="10" :sm="10" :lg="10">
          <el-form-item label="产品批号：">
            <span>
              {{ applycertificateForm.productBatchNumber }}
              <!-- 2020414601001002 -->
            </span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="12">
          <el-form-item prop="specs" label="所属规格：">
            <el-input
              ref="specs"
              v-model="applycertificateForm.specs"
              placeholder="输入规格"
              name="specs"
              type="text"
              tabindex="2"
              autocomplete="on"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="10" :sm="10" :lg="10">
          <el-form-item prop="productNum" label="产品数量：">
            <el-input
              ref="productNum"
              v-model="applycertificateForm.productNum"
              placeholder="输入数量"
              name="productNum"
              type="number"
              tabindex="2"
              autocomplete="on"
              @input="inputproductNum()"
            />

          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="包装类型：">
        <el-select v-model="applycertificateForm.industry" placeholder="选择包装类型" @change="industryChange()">
          <el-option v-for=" ( item, index ) in packingList" :key="index" :label="item.dictLabel" :value="item.dictValue" />
        </el-select>
      </el-form-item>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="12">
          <el-form-item label="申请张数：">
            <el-input
              ref="detailNum"
              v-model="applycertificateForm.detailNum"
              placeholder="输入张数"
              name="detailNum"
              type="number"
              tabindex="2"
              autocomplete="on"
              @input="input()"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="10" :sm="10" :lg="10">
          <el-form-item label="合格承诺：">

            <el-select v-model="applycertificateForm.qualifiedCommitment" placeholder="选择合格承诺" @change="industryChange()">
              <el-option v-for=" ( item, index ) in promiseList" :key="index" :label="item.dictLabel" :value="item.dictValue" />
            </el-select>
          </el-form-item>
        </el-col>

      </el-row>
      <el-button type="success" class="icon-message" @click="ConfirmApplication('确认申请')">确认申请</el-button>
      <el-button type="info" @click="ConfirmApplication('取消')">取消</el-button>
    </el-form>
  </div>
</template>

<script>
import { applycertificate } from '@/api/text'
export default {
  name: 'Apply',
  data() {
    return {
      applycertificateForm: {
        applicationData: '',
        productBatchNumber: '2020414601001002',
        specs: '',
        industry: '',
        productNum: '',
        detailNum: '',
        qualifiedCommitment: ''
      },
      pickerOptions: '',
      packingList: [{
        dictLabel: '散装',
        dictValue: '1'
      }, {
        dictLabel: '袋装',
        dictValue: '2'
      }, {
        dictLabel: '盒装',
        dictValue: '3'
      }, {
        dictLabel: '瓶装',
        dictValue: '4'
      }, {
        dictLabel: '箱装',
        dictValue: '5'
      }, {
        dictLabel: '其它',
        dictValue: '6'
      }],
      promiseList: [{
        dictLabel: '不使用禁限用农药兽药；',
        dictValue: '1'
      },
      {
        dictLabel: '不使用非法添加物；',
        dictValue: '2'
      },
      {
        dictLabel: '遵守农药安全间隔，兽药休药期规定；',
        dictValue: '3'
      },
      {
        dictLabel: '销售的食用农产品符合农药兽药残留食品安全国家标准；',
        dictValue: '4'
      }]
    }
  },
  methods: {
    ConfirmApplication(type) {
      if (type === '确认申请') {
        if (this.applycertificateForm.applicationData !== '' && this.applycertificateForm.productBatchNumber !== '' && this.applycertificateForm.specs !== '' && this.applycertificateForm.productNum !== '' && this.applycertificateForm.detailNum !== '' && this.applycertificateForm.qualifiedCommitment !== '') {
          applycertificate(this.applycertificateForm).then(response => {
            if (response.code === 20000) {
              this.$emit('ConfirmApplication', type)
              this.applycertificateForm = ''
            }
          })
            .catch(() => {
              this.loading = false
            })
        } else if (this.applycertificateForm.applicationData === '') {
          this.$message({
            showClose: true,
            message: '请填写申领日期',
            type: 'error',
            center: true,
            duration: 2000,
            offset: 200
          })
          return false
        } else if (this.applycertificateForm.industry === '') {
          this.$message({
            showClose: true,
            message: '请选择包装类型',
            type: 'error',
            center: true,
            duration: 2000,
            offset: 200
          })
          return false
        } else if (this.applycertificateForm.specs === '') {
          this.$message({
            showClose: true,
            message: '请填所属规格',
            type: 'error',
            center: true,
            duration: 2000,
            offset: 200
          })
          return false
        } else if (this.applycertificateForm.productNum === '') {
          this.$message({
            showClose: true,
            message: '请填写产品数量',
            type: 'error',
            center: true,
            duration: 2000,
            offset: 200
          })
          return false
        } else if (this.applycertificateForm.detailNum === '') {
          this.$message({
            showClose: true,
            message: '请填写申请张数',
            type: 'error',
            center: true,
            duration: 2000,
            offset: 200
          })
          return false
        } else if (this.applycertificateForm.qualifiedCommitment === '') {
          this.$message({
            showClose: true,
            message: '请选择承诺书',
            type: 'error',
            center: true,
            duration: 2000,
            offset: 200
          })
          return false
        }
      } else {
        this.$emit('ConfirmApplication', type)
      }
    },
    input() {
      if (this.applycertificateForm.detailNum < 0) {
        this.applycertificateForm.detailNum = 0
      }
    },
    inputproductNum() {
      if (this.applycertificateForm.productNum < 0) {
        this.applycertificateForm.productNum = 0
      }
    }
  }
}
</script>

<style >
  .el-dialog__body{
      word-break: inherit;
  }
  .el-input--suffix .el-input__inner{
        padding-right: 3px;
  }
</style>
