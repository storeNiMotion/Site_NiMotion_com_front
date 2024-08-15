import httpInstance from "@/utils/http";

//封装短信接口
/**
 * @description: 发送短信
 * @param {*}
 * @return {*}
 */
export function sendCodeAPI({phone}){
    return httpInstance({
        url: '/api/v1/sendcode/',
        method: 'POST',
        data: {
            phone
        }
    })
}

