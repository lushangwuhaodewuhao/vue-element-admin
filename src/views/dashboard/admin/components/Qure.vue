/* eslint-disable vue/require-prop-types */
<template>
  <div class="qure-container">
    <el-form :model="qureForms">
      <el-row :gutter="5">
        <el-col :span="5">
          <el-form-item label="包装类型：">
            <el-select v-model="qureForms.industry" placeholder="选择包装类型" @change="industryChange()">
              <el-option v-for=" ( item, index ) in packingList" :key="index" :label="item.dictLabel" :value="item.dictValue" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申领日期：">
            <div class="block">
              <el-date-picker
                v-model="qureForms.applStartdata"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              />
              <span class="span">至</span>

              <el-date-picker
                v-model="qureForms.applyEnddata"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              />
            </div>
          </el-form-item>
        </el-col>
        <el-col :xs="3" :sm="3" :lg="3">
          <el-button icon="el-icon-search" type="primary" @click="query()">查询</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog :visible.sync="dialogTVisible">
      <Apply @ConfirmApplication="ConfirmApplication" />
    </el-dialog>
    <div>
      <span class="h2title">{{ activeProductName }}实用农产品合格证</span>
      <el-button type="success" class="apply-el-button" @click="dialogTVisible = true">合格证申领</el-button>
    </div>
    <el-row :gutter="10" style="display: flex;">
      <el-col :span="7" />
      <el-col :span="6" />
    </el-row>

    <div class="el-tablebox">
      <el-table

        :data="tableData"
        style="width: 100%"
        max-height="330"
        border
      >

        <el-table-column
          prop="number"
          label="编号："
        />
        <el-table-column
          prop="name"
          label="食用农产品名称："
        />
        <el-table-column
          prop="packing"
          label="包装规格"
        />
        <el-table-column
          prop="company"
          label="生产单位"
        />
        <el-table-column
          prop="address"
          label="生产地址"
        />
        <el-table-column
          prop="tele"
          label="联系电话"
        />
        <el-table-column
          prop="date"
          label="开具日期"
        />
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
          <el-button icon="el-icon-printer" type="warning" size="small" @click="handlePrint()">打印</el-button>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
      />
    </div>
  </div>
</template>

<script>
import Apply from '../components/Apply'
import { string } from 'jszip/lib/support'
import { queryCertificate } from '@/api/text'
import { certificateList } from '@/api/text'
export default {
  name: 'Qure',
  components: {
    Apply
  },
  // props: ['active-product-name'],
  // 也可以指定默认类型和默认值
  props: {
    activeProductName: {
      type: string,
      default: ''
    }
  },
  data() {
    return {
      dialogTVisible: false,
      qureForms: {
        industry: '',
        applStartdata: '',
        applyEnddata: ''
      },
      print: '',
      packingList: [],
      pickerOptions: '',
      tableData: []
    }
  },
  watch: {
    activeProductName: {
      handler(newVal, objVal) {
        this.certificateListapi()
      },
      deep: true,
      immediate: true
    }
  },
  created() {
    // this.certificateListapi()
  },
  mounted() {
    this.certificateListapi()
  },
  methods: {
    /**
     * 打印跳转
     */
    handlePrint() {
      this.$router.push({ path: '/print?' + +new Date() })
    },
    // tab
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    /**
     * 申请合格证成功
     */
    ConfirmApplication(type) {
      if (type === '确认申请') {
        this.$message({
          showClose: true,
          message: '恭喜你，合格证申领成功了',
          type: 'success',
          center: true,
          duration: 2000,
          offset: 200
        })
        this.dialogTVisible = false
      } else {
        this.dialogTVisible = false
      }
    },
    /**
     *  查询合格证
     * */
    query() {
      const that = this
      queryCertificate(this.addProductForm).then(response => {
        if (response.code === 20000) {
          that.tableData = response.data
        }
      })
        .catch(() => {
          this.loading = false
        })
    },
    /**
     * 合格证列表
     */
    certificateListapi() {
      const that = this
      const prams = {}
      prams.proName = this.activeProductName
      certificateList(prams).then(response => {
        if (response.code === 20000) {
          that.tableData = response.data
        }
      })
        .catch(() => {
          this.loading = false
        })
    }

  }
}
</script>
<style lang="scss" >
 .qure-container{
   .block{
     display: flex;
   }
   .el-date-editor.el-input, .el-date-editor.el-input__inner {
     width: 136px;
   }
   .span{
     margin-right: 5px;
   }
   .h2title{
    margin-right: 20px;
    font-size: larger;
   }
   .apply-el-button {
     margin-bottom: 20px;
   }
   .el-pagination {
     margin-top: 10px;
   }
   .el-tablebox{
     padding: 10px;
     border:1px solid #ccc;
   }

 }
</style>
