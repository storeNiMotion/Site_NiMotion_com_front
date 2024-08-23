import httpInstance from "@/utils/http";

//封装产品分类
/**
 * @description: 获取产品分类
 * @param {*}
 * @return {*}
 */
export function getProductChannelAPI(){
    return httpInstance({
        url: '/api/v2/product/channel/'
    })
}

//封装产品分类列表
/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */
export function getProductListAPI(id){
  return httpInstance({
      url: '/api/v2/product/category/',
      params: {
        id
      }
  })
}

//封装全部产品列表
/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */
export function getAllProductListAPI(){
  return httpInstance({
      url: '/api/v2/product/allcategory/',
  })
}



//封装产品列表
/**
 * @description: 获取产品列表
 * @param {*}
 * @return {*}
 */
export function getProductSKUListAPI(id){
  return httpInstance({
      url: '/api/v2/product/list/',
      params: {
        id
      }
  })
}

//产品选型
/**
 * @description: 获取产品
 * @param {*}
 * @return {*}
 */
export const filterProductAPI = () => {
  return httpInstance({
    url:'/api/v2/product/filter/'
  })
}  

//产品内容
/**
 * @description: 获取产品详情
 * @param {*}
 * @return {*}
 */
export const getProductDetailAPI = (id) => {
  return httpInstance({
    url:'/api/v2/product/detail/',
    params: {
      id
    }
  })
}

//产品内容：丝杆专用
/**
 * @description: 获取产品详情：丝杆专用
 * @param {*}
 * @return {*}
 */
export const getProductScrewDetailAPI = (id) => {
  return httpInstance({
    url:'/api/v2/product/screwdetail/',
    params: {
      id
    }
  })
}
