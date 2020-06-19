import request from '@/utils/request'

export function aaa(data) {
  return request({
    url: '/vue-element-admin/text/aaa',
    method: 'post',
    data
  })
}
// 添加产品
export function addProduct(data) {
  return request({
    url: '/vue-element-admin/text/addProduct',
    method: 'post',
    data
  })
}
// 添加企业
export function RegisteredEnterprise(data) {
  return request({
    url: '/vue-element-admin/text/RegisteredEnterprise',
    method: 'post',
    data
  })
}
// 申请合格证
export function applycertificate(data) {
  return request({
    url: '/vue-element-admin/text/applycertificate',
    method: 'post',
    data
  })
}
// 搜索合格证
export function queryCertificate(data) {
  return request({
    url: '/vue-element-admin/text/queryCertificate',
    method: 'post',
    data
  })
}
// 产品列表
export function producList(data) {
  return request({
    url: '/vue-element-admin/text/producList',
    method: 'post',
    data
  })
}
// 企业列表
export function enterpriseList(data) {
  return request({
    url: '/vue-element-admin/text/enterpriseList',
    method: 'post',
    data
  })
}
// 合格证列表
export function certificateList(data) {
  return request({
    url: '/vue-element-admin/text/certificateList',
    method: 'post',
    data
  })
}
// 获取验证码
export function validateCode(data) {
  return request({
    url: '/validate-code',
    method: 'get',
    data
  })
}

