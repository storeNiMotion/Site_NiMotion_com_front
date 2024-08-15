// 方案.js
/**
 * @param  需要遍历的目录路径
 * @return  返回一个key为文件相对路径，value为对应文件模块导出的内容的对象集合
 */

export const SolutionChannel = {
  path: '/solution',
  component: import('@/views/Solution/Category/SolutionChannel.vue'),
  name: '',
  meta: { title: '' }
}

export const SolutionList = {
  path: '/solution/:id',
  component: import('@/views/Solution/List/SolutionList.vue'),
  name: '',
  meta: { title: '' }
}

export const SolutionDetail = {
  path: '/solution/detail/:id',
  component: import('@/views/Solution/Content/SolutionDetail.vue'),
  name: '',
  meta: { title: '' }
}