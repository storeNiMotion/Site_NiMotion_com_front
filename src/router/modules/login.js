// 注册登录.js
/**
 * @param  需要遍历的目录路径
 * @return  返回一个key为文件相对路径，value为对应文件模块导出的内容的对象集合
 */

export const Login = {
  path: '/login',
  component: import('@/views/Login/index.vue'),
  name: '登录',
  meta: { title: '' }
}

export const Resigter = {
  path: '',
  component: import('@/views/Resigter/index.vue'),
  name: '注册',
  meta: { title: '' }
}

export const Forget = {
  path: '/forget',
  component: import('@/views/Login/components/forget.vue'),
  name: '忘记密码',
  meta: { title: '' }
}