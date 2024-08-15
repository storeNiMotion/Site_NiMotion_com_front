// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstore'         //导入插件
// import VueWechatTitle from 'vue-wechat-title'

import vue3videoPlay from "vue3-video-play"
import "vue3-video-play/dist/style.css"

import App from './App.vue'
import router from './router'

//引入初始化样式文件
import '@/styles/base.css'
// import '@/styles/bootstrap.min.css'
import '@/styles/common.scss'
//引入懒加载
import { lazyPlugin } from '@/directives'
import { useOffsetPagination } from '@vueuse/core'


router.beforeEach((to, from, next) => {
    // console.log(to)
    if (to.meta.title) {
        document.title = to.meta.title + ' - 立迈胜(NiMotion)官方网站 - 专业的运动控制服务平台'
    } else {
        document.title = '立迈胜(NiMotion)官方网站 - 专业的运动控制服务平台'
    }
    next()
})

const app = createApp(App)
const pinia = createPinia()

//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
// app.use(VueWechatTitle)
app.use(vue3videoPlay)
app.mount('#app')
