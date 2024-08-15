// 关于我们.js
/**
 * @param  需要遍历的目录路径
 * @return  返回一个key为文件相对路径，value为对应文件模块导出的内容的对象集合
 */

export const ABout = {
    path: '/about',
    component: import('@/views/About/AboutView.vue'),
    name: '关于我们',
    meta: { title: '关于我们' }
}

export const Contact = {
  path: '/contact',
  component: import('@/views/About/ContactView.vue'),
  name: '联系我们',
  meta: { title: '联系我们' }
}
