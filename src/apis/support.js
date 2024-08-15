import httpInstance from "@/utils/http";

//封装服务支持
/**
 * @description: 获取服务分类
 * @param {*}
 * @return {*}
 */
export function getSupportChannelAPI() {
  return httpInstance({
    url: '/api/v1/support/category/'
  })
}

//封装技术问答列表
/**
 * @description: 获取技术问答列表
 * @param {url}
 * @param {get}
 */
export function getSupportProblemsListAPI() {
  return httpInstance({
    url: '/api/v1/support/list/',
  })
}

//技术问答内容
/**
 * @description: 获取技术问答详情
 * @param {id}
 * @return {get}
 */
export const getSupportProblemsDetailAPI = (id) => {
  return httpInstance({
    url: '/api/v1/support/detail/',
    params: {
      id
    }
  })
}

//封装技术问答搜索
/**
 * @description: 技术问答搜索
 * @param {*}
 * @return {*}
 */
export const getSupportProblemSearchAPI = (key) => {
  return httpInstance({
      url: '/api/v1/technology/search/',
      params: {
          key
        }
  })
}

//售后维修
/**
 * @description: 获取售后维修内容
 * @param {id}
 * @return {get}
 */
export const getAftersalesDetailAPI = () => {
  return httpInstance({
    url: '/api/v1/support/aftersaledetail/',
  })
}