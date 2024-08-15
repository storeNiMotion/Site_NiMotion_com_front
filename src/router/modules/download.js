// 下载中心.js
/**
 * @param  需要遍历的目录路径
 * @return  返回一个key为文件相对路径，value为对应文件模块导出的内容的对象集合
 */

export const Download = {
  path: '/download',
  component: import('@/views/Download/DownChannel.vue'),
  name: '下载中心',
  meta: { title: '下载中心' }
}

export const DownloadID = {
  path: '/download/:id',
  component: import('@/views/Download/DownChannel.vue'),
  name: '下载中心',
  meta: { title: '下载中心' }
}