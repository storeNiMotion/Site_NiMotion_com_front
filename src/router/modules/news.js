// 新闻.js
/**
 * @param  需要遍历的目录路径
 * @return  返回一个key为文件相对路径，value为对应文件模块导出的内容的对象集合
 */

export const NewsList = {
  path: '/news',
  component: import('@/views/News/NewsList.vue'),
  name: '新闻资讯',
  meta: { title: '新闻资讯' }
}

export const NewsDetail = {
  path: '/news/detail/:id',
  component: import('@/views/News/NewsDetail.vue'),
  name: '内容详情',
  meta: { title: '内容详情' }
}