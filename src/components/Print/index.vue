<template>
  <div class="qure-container">
    <h2 class="h2">实用农产品合格证</h2>
    <el-row>
      <span>编号：</span>
      <span>414601001002</span>
    </el-row>
    <el-row>
      <el-col>
        食用农产品名称：<span>白菜</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        包装规格（重量/数量）：<span>箱式</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        生产单位（盖章）：<span>湘阴县合湖蔬菜专业合作社</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        生产单位（盖章）：<span>湘阴县合湖蔬菜专业合作社</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        生产地址 ：<span>西安市长安区西塔路120号</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        联系电话 ：<span>024-76655566</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        联系电话 ：<span>024-76655566</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        抽样检测结果 ：<span>速测【 】定量检测【 】合格【 】</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        开具日期 ：<span>2020年 5月 19日</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        ---------------------------------------
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        我承诺对产品质量安全及合格真实性负责：
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-checkbox checked="=true">不使用禁限用农药兽药；</el-checkbox>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-checkbox checked="=true">不使用非法添加物；</el-checkbox>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-checkbox checked="=true">遵守农药安全间隔，兽药休药期规定；</el-checkbox>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-checkbox checked="=true"> 销售的食用农产品符合农药兽药残留食</el-checkbox><span class="el-checkbox__label">品安全国家标准；</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Print',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss"  scoped>
  .qure-container{
    width: 382px;
    border: 4px solid #67c23a;
   border-bottom: 10px solid #67c23a;
    padding: 0% 4% 5% 4%;
    border-radius: 10px;
    .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #222;
  }
  .el-checkbox__inner{
      background-color: #222;
      border-color: #222;
    }
    .h2{
    width: 376px;
    background-color: #67c23a;
    margin-left: -12%;
    margin-top: 0px;
    padding: 0;
    line-height: 60px;
    text-align: center;
    color: #fff;
    }
  }
</style>
