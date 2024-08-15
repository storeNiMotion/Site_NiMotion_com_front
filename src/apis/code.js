import httpInstance from "@/utils/http";

//封装图形验证码
/**
 * @description: 获取首页banner推荐
 * @param {*}
 * @return {*}
 */
export function getCodeAPI(){
    return httpInstance({
        url: '/api/v1/sendcode/'
    })
}
