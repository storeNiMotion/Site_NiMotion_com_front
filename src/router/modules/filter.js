// 产品选型.js
/**
 * @param  需要遍历的目录路径
 * @return  返回一个key为文件相对路径，value为对应文件模块导出的内容的对象集合
 */

export const Filter = {
  path: '/product/filter',
  component: import('@/views/Filter/index.vue'),
  name: '产品选型',
  meta: { title: '产品选型' }
}