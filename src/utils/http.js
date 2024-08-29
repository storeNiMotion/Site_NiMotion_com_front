//axios基础的封装
import axios from "axios"

import { ElMessage } from "element-plus"                //引入提示
import 'element-plus/theme-chalk/el-message.css'        //引入提示样式
import { useUserStore } from '@/stores/user'    // 导入pinia
import { useRouter } from "vue-router"            //调用路由 => “方法”
const router = useRouter()                      // 调用路由方法

const httpInstance = axios.create({
    //示例深入理解行业工艺，丰富的综合工业自动化产品，我们提供的方案更加灵活可靠，更加贴近您的需求。https://api.nimotion.cn/
    // baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    // baseURL: 'http://www.nimotion.cn:8000',
    baseURL: 'https://api.nimotion.cn',
    // baseURL: 'http://127.0.0.1:8000',
    // baseURL: 'http://47.94.152.160:8000/',
    timeout: 50000
})

//拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    //1.从pinia获取token
    const userStore = useUserStore()                // 实例化
    //2.拼接token数据
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = token
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    const userStore = useUserStore()                // 实例化
    // 统一错误提示
    ElMessage({
        type: 'warning',    //提示框类型
        message: e.response.data.msg
    })
    // 401token 失效处理
    // console.log(e.response.status);
    if (e.response.status === 401) {
        userStore.clearUseInfo()                      //清除用户信息 触发
        router.push('/')
    }
    // else if (e.response.status === 403) {
    //     userStore.clearUseInfo()
    // }

    return Promise.reject(e)
})

export default httpInstance