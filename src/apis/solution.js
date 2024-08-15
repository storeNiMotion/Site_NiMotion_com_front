import httpInstance from "@/utils/http";

//封装产品分类
/**
 * @description: 获取方案分类
 * @param {*}
 * @return {*}
 */
export function getSolutionChannelAPI(){
    return httpInstance({
        url: '/api/v1/solution/category/'
    })
}

//封装产品列表
/**
 * @description: 获取方案列表
 * @param {*}
 * @return {*}
 */
export function getSolutionListAPI(id){
  return httpInstance({
      url: '/api/v1/solution/list/',
      params: {
        id
      }
  })
}


//方案内容
/**
 * @description: 获取方案详情
 * @param {*}
 * @return {*}
 */
export const getSolutionDetailAPI = (id) => {
  return httpInstance({
    url:'/api/v1/solution/detail/',
    params: {
      id
    }
  })
}