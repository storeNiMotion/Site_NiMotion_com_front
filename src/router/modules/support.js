// 技术支持.js
/**
 * @param  需要遍历的目录路径
 * @return  返回一个key为文件相对路径，value为对应文件模块导出的内容的对象集合
 */

//技术支持
export const TechChannel = {
  path: '/support',
  component: import('@/views/Support/Category/TechChannel.vue'),
  name: '',
  meta: { title: '' }
}
//技术支持问答列表
export const ProblemList = {
  path: '/problems',
  component: import('@/views/Support/Problems/List/TechList.vue'),
  name: '',
  meta: { title: '' }
}
//技术支持问答详情页
export const ProblemDetail = {
  path: '/problems/:id',
  component: import('@/views/Support/Problems/Content/TechDetail.vue'),
  name: '',
  meta: { title: '' }
}
//技术支持视频列表
export const VideoList = {
  path: '/video',
  component: import('@/views/Support/Videos/List/index.vue'),
  name: '',
  meta: { title: '' }
}
//技术支持视频详情页
export const VideoDetail = {
  path: '/video/:id',
  component: import('@/views/Support/Videos/Content/index.vue'),
  name: '',
  meta: { title: '' }
}
//技术支持售后详情页
export const AftersalesDetail = {
  path: '/aftersales',
  component: import('@/views/Support/Aftersales/index.vue'),
  name: '',
  meta: { title: '' }
}
//技术支持合同详情页
export const PactDetail = {
  path: '/pact',
  component: import('@/views/Support/Pact/index.vue'),
  name: '',
  meta: { title: '' }
}
//技术支持合作详情页
export const CooperateDetail = {
  path: '/cooperate',
  component: import('@/views/Support/Cooperate/index.vue'),
  name: '',
  meta: { title: '' }
}