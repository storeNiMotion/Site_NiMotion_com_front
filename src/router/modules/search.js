// 搜索.js
/**
 * @param  需要遍历的目录路径
 * @return  返回一个key为文件相对路径，value为对应文件模块导出的内容的对象集合
 */

// 全局搜索
export const Search = {
  path: '/search/:key',
  component: import('@/views/Search/index.vue'),
  name: '',
  meta: { title: '' }
}
// 产品搜索
export const ProductSearch = {
  path: '/product/search/:key',
  component: import('@/views/Products/Category/Search.vue'),
  name: '',
  meta: { title: '' }
}