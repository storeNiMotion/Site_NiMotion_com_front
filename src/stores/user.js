


// 管理用户数据相关 <= Pinia


import { defineStore } from "pinia"
import { ref } from "vue"

import { loginAPI, smsloginAPI, resigterAPI, forgetAPI } from "@/apis/user"                       // 导入登录接口

export const useUserStore = defineStore('user', ()=>{
    
    const userInfo = ref({})                                // 1.定义管理数据state
    
    const getUserInfo = async({username, password, code})=> {      // 2.定义获取接口数据的action函数   => 登录
        const res = await loginAPI({username, password, code})
        userInfo.value = res
    }

    const getSmsUserInfo = async({phone, code})=> {      // 2.定义获取接口数据的action函数   => 短信登录
        const res = await smsloginAPI({phone, code})
        userInfo.value = res
    }

    // 注册
    const postUserInfo = async({username, password, email, code})=> {      // 2.定义获取接口数据的action函数  => 注册
        const res = await resigterAPI({username, password, email, code})
        userInfo.value = res
    }

    const forgetUserInfo = async({password, email, code})=> {      // 2.定义获取接口数据的action函数  => 忘记密码
        const res = await forgetAPI({password, email, code})
        userInfo.value = res
    }

    const clearUseInfo = () => {                            // 3.退出清除用户信息 置空
        userInfo.value = {}
    }
    return {                                                // 4.以对象的格式吧state和action return
        userInfo,
        getUserInfo,
        getSmsUserInfo,
        postUserInfo,
        forgetUserInfo,
        clearUseInfo
    }
}, {
    persist :true                                           // 在设置state时会自动把数据存储本地，会优先从本地获取
})