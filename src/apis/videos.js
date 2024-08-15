import httpInstance from "@/utils/http";

//封装服务支持-视频教程
/**
 * @description: 获取视频教程分类
 * @param {*}
 * @return {*}
 */
export function getSupportVideosChannelAPI() {
  return httpInstance({
    url: '/api/v1/videos/all/'
  })
}

//封装视频教程分类列表
/**
 * @description: 获取技术问答列表
 * @param {url}
 * @param {get}
 */
export function getSupportVideosListAPI(id) {
  return httpInstance({
    url: '/api/v1/videos/list/',
    params: {
      id
    }
  })
}

//技术视频教程内容
/**
 * @description: 获取视频教程详情
 * @param {id}
 * @return {get}
 */
export const getSupportVideosDetailAPI = (id) => {
  return httpInstance({
    url: '/api/v1/videos/detail/',
    params: {
      id
    }
  })
}

//技术视频教程内容某个链接
/**
 * @description: 获取某个列表视频链接
 * @param {id}
 * @return {get}
 */
export const getSupportVideosURLAPI = (url) => {
  return httpInstance({
    url: '/api/v1/videos/detail/url/',
    params: {
      url
    }
  })
}

//封装视频教程搜索
/**
 * @description: 视频教程搜索
 * @param {*}
 * @return {*}
 */
export const getSupportVideoSearchAPI = (key) => {
  return httpInstance({
      url: '/api/v1/videos/search/',
      params: {
          key
        }
  })
}