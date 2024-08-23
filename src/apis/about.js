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