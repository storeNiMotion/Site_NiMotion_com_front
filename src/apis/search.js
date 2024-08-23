
import httpInstance from "@/utils/http"

//封装和搜索相关的接口函数

//封装导航搜索
/**
 * @description: 全局搜索
 * @param {*}
 * @return {*}
 */
export const allsearchAPI = (key) => {
    return httpInstance({
        url: '/api/v2/allsearch/',
        params: {
            key
          }
    })
}


//封装产品搜索
/**
 * @description: 产品搜索
 * @param {*}
 * @return {*}
 */
export const searchAPI = (key) => {
    return httpInstance({
        url: '/api/v2/search/',
        params: {
            key
          }
    })
}


//封装方案搜索
/**
 * @description: 产品搜索
 * @param {*}
 * @return {*}
 */
export const solutionSearchAPI = (key) => {
    return httpInstance({
        url: '/api/v2/solution/search/',
        params: {
            key
          }
    })
}

