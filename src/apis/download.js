//文件下载
import httpInstance from "@/utils/http"
/**
 * @description: 获取下载列表
 * @param {*}
 * @return {*}
 */
export const downAPI = () => {
    return httpInstance({
      url:'/api/v1/download/list/'
    })
  }


export const downloadAPI = ({ category, type, keyword }) => {
    return httpInstance({
        url: '/api/v1/download/list/',
        method: 'POST',
        data: {
            category,
            type,
            keyword,
        }
    })
}