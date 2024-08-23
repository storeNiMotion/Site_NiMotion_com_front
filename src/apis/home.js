import httpInstance from "@/utils/http";

//封装banner
/**
 * @description: 获取首页banner推荐
 * @param {*}
 * @return {*}
 */
export function getBannerAPI(){
    return httpInstance({
        url: '/api/v2/home/banner/'
    })
}


//产品推荐
/**
 * @description: 获取产品推荐
 * @param {*}
 * @return {*}
 */
export const comproductAPI = () => {
    return httpInstance({
      url:'/api/v2/home/commproduct/'
    })
  }


//解决方案推荐
/**
 * @description: 获取解决方案
 * @param {*}
 * @return {*}
 */
export const solutionAPI = () => {
  return httpInstance({
    url:'/api/v2/home/commsol/'
  })
}

//新闻推荐
/**
 * @description: 获取新闻
 * @param {*}
 * @return {*}
 */
export const newsAPI = () => {
  return httpInstance({
    url:'/api/v2/home/commnews/'
  })
}