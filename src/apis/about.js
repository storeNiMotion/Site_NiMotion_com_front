import httpInstance from "@/utils/http";


//封装全部活动列表
/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */
export function getActivityListAPI(){
  return httpInstance({
      url: '/api/v2/about/activity/',
  })
}

//封装关于我们信息
/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */
export function getInfoAboutAPI(){
  return httpInstance({
      url: '/api/v2/about/info/',
  })
}