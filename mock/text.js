
export default [
  // user login
  {
    url: '/vue-element-admin/text/aaa',
    type: 'post',
    response: config => {
      // const { username } = config.body

      // mock error

      return {
        code: 20000,
        data: '注册成功'
      }
    }
  },
  // 添加企业
  {
    url: '/vue-element-admin/text/RegisteredEnterprise',
    type: 'post',
    response: config => {
      // const { username } = config.body

      console.log(config.body)

      return {
        code: 20000,
        data: '企业添加成功。'
      }
    }
  },
  // 添加产品
  {
    url: '/vue-element-admin/text/addProduct',
    type: 'post',
    response: config => {
      // const { username } = config.body

      // mock error

      return {
        code: 20000,
        data: '产品注册成功'
      }
    }
  },

  // 申请合格证
  {
    url: '/vue-element-admin/text/applycertificate',
    type: 'post',
    response: config => {
      // const { username } = config.body
      // mock error
      const list = [{
        number: '414601001002',
        name: '白菜',
        packing: '箱式',
        company: '湘阴县合湖蔬菜专业合作社',
        address: '西安市长安区西塔路120号',
        tele: '024-76655566',
        date: '2020年 5月 19日' }]
      return {
        code: 20000,
        data: list
      }
    }
  },
  // 搜索合格证
  {
    url: '/vue-element-admin/text/queryCertificate',
    type: 'post',
    response: config => {
      // const { activeProductName } = config.body
      // mock error
      const list = [{
        number: '414601001002',
        name: '白菜',
        packing: '箱式',
        company: '湘阴县合湖蔬菜专业合作社',
        address: '西安市长安区西塔路120号',
        tele: '024-76655566',
        date: '2020年 5月 19日' }]
      return {
        code: 20000,
        data: list
      }
    }
  },
  // 产品列表
  {
    url: '/vue-element-admin/text/producList',
    type: 'post',
    response: config => {
      // const { username } = config.body
      // mock error
      const list = [{
        tabeLabel: '大白菜'
      },
      {
        tabeLabel: '辣椒'
      },
      {
        tabeLabel: '土豆'
      }]
      return {
        code: 20000,
        data: list
      }
    }
  },
  // 企业列表
  {
    url: '/vue-element-admin/text/enterpriseList',
    type: 'post',
    response: config => {
      // const { username } = config.body
      // mock error
      const list = [
        {
          enterpriseName: '企业名称一',
          industry: '种植业',
          address: '西安市长安区西塔路120号',
          contacts: '张杉杉',
          phone: '18778776911'
        },
        {
          enterpriseName: '企业名称二',
          industry: '种植业',
          address: '西安市长安区西塔路130号',
          contacts: '张杉杉',
          phone: '18778776911'
        },
        {
          enterpriseName: '企业名称三',
          industry: '种植业',
          address: '西安市长安区西塔路145号',
          contacts: '张杉杉',
          phone: '18778776911'
        }
      ]
      return {
        code: 20000,
        data: list
      }
    }
  },
  // 合格证列表
  {
    url: '/vue-element-admin/text/certificateList',
    type: 'post',
    response: config => {
      const { proName } = config.body
      //  console.log('activeProductName' + activeProductName)
      console.log('config.body' + proName)
      // mock error
      const list = [
        {
          number: '414601001002',
          name: '白菜',
          packing: '箱式',
          company: '湘阴县合湖蔬菜专业合作社',
          address: '西安市长安区西塔路120号',
          tele: '024-76655566',
          date: '2020年 5月 19日'
        },
        {
          number: '414601001003',
          name: '白菜',
          packing: '箱式',
          company: '湘阴县合湖蔬菜专业合作社',
          address: '西安市长安区西塔路120号',
          tele: '024-76655566',
          date: '2020年 5月 22日'
        },
        {
          number: '414601001004',
          name: '白菜',
          packing: '箱式',
          company: '湘阴县合湖蔬菜专业合作社',
          address: '西安市长安区西塔路120号',
          tele: '024-76655566',
          date: '2020年 5月 25日'
        }
      ]
      const list2 = [
        {
          number: '414601001333',
          name: '辣椒',
          packing: '箱式',
          company: '湘阴县合湖蔬菜专业合作社',
          address: '西安市长安区西塔路120号',
          tele: '024-76655566',
          date: '2020年 4月 22日'
        }

      ]
      const list3 = [
        {
          number: '414601001366',
          name: '土豆',
          packing: '箱式',
          company: '湘阴县合湖蔬菜专业合作社',
          address: '西安市长安区西塔路120号',
          tele: '024-76655566',
          date: '2020年 6月 6日'
        },
        {
          number: '414601001367',
          name: '土豆',
          packing: '箱式',
          company: '湘阴县合湖蔬菜专业合作社',
          address: '西安市长安区西塔路120号',
          tele: '024-76655566',
          date: '2020年 6月 9日'
        }

      ]
      if (proName === '大白菜') {
        return {
          code: 20000,
          data: list
        }
      } else if (proName === '辣椒') {
        return {
          code: 20000,
          data: list2
        }
      } else if (proName === '土豆') {
        return {
          code: 20000,
          data: list3
        }
      } else {
        return {
          code: 20000,
          data: list
        }
      }
    }
  },
  // user login 用户登入
  {
    url: '/vue-element-admin/text/login',
    type: 'post',
    response: config => {
      // const { username } = config.body
      // const token = tokens[username]
      // mock error
      // if (!token) {
      //   return {
      //     code: 60204,
      //     message: '帐户和密码不正确.'
      //   }
      // }
      return {
        code: 20000,
        data: '登入成功'
      }
    }
  }
]
