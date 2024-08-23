import httpInstance from "@/utils/http";



//封装新闻列表
/**
 * @description: 获取方案列表
 * @param {*}
 * @return {*}
 */
export function getNewsListAPI(){
  return httpInstance({
      url: '/api/v2/news/list/',

  })
}


//方案内容
/**
 * @description: 获取新闻详情
 * @param {*}
 * @return {*}
 */
export const getNewDetailAPI = (id) => {
  return httpInstance({
    url:'/api/v2/news/detail/',
    params: {
      id
    }
  })
}
