//封装和用户相关的接口函数
import httpInstance from "@/utils/http"


//封装注册
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
export const resigterAPI = ({username, password, phone, code}) => {
    return httpInstance({
        url: '/api/v2/register/',
        method: 'POST',
        data: {
            username,
            password,
            phone,
            code
        }
    })
}

//封装忘记密码
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
export const forgetAPI = ({phone, password, code}) => {
    return httpInstance({
        url: '/api/v2/forget/',
        method: 'POST',
        data: {
            password,
            phone,
            code
        }
    })
}

//校验用户名存在
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
export const isUsenameResigterAPI = ({username}) => {
    return httpInstance({
        url: '/api/v2/isusenameregister/',
        method: 'POST',
        data: {
            username
        }
    })
}

//校验手机号存在
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
export const isresigterAPI = ({phone}) => {
    return httpInstance({
        url: '/api/v2/isregister/',
        method: 'POST',
        data: {
            phone
        }
    })
}

//发送手机短信
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
export const sendCodeAPI = ({phone}) => {
    return httpInstance({
        url: '/api/v2/sendsms/',
        method: 'POST',
        data: {
            phone
        }
    })
}

//封装账号登录
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
export const loginAPI = ({username, password, code}) => {
    return httpInstance({
        url: '/api/v2/login/',
        method: 'POST',
        data: {
            username,
            password,
            code
        }
    })
}

//封装短信登录
/**
 * @description: 
 * @param {*}
 * @return {*}
 */
export const smsloginAPI = ({phone, code}) => {
    return httpInstance({
        url: '/api/v2/smslogin/',
        method: 'POST',
        data: {
            phone,
            code
        }
    })
}