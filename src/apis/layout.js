import httpInstance from "@/utils/http";

//封装nav 简单一级
/**
 * @description: 获取简单一级
 * @param {*}
 * @return {*}
 */
export function getCategoryAPI(){
    return httpInstance({
        url: '/api/v1/category/headnav/'
    })
}


//封装一级二级导航
/**
 * @description: 获取一级二级导航
 * @param {*}
 * @return {*}
 */
export function getOneNavAPI(){
    return httpInstance({
        url: '/api/v1/category/nav/'
    })
}


//封装下拉产品导航
/**
 * @description: 获取下拉产品导航
 * @param {*}
 * @return {*}
 */
export function getSelectNavAPI(){
    return httpInstance({
        url: '/api/v1/category/selectproductnav/'
    })
}


//封装左侧产品列表导航
/**
 * @description: 获取二级三级导航
 * @param {*}
 * @return {*}
 */
export function getProductNavAPI(){
    return httpInstance({
        url: '/api/v1/category/productnav/'
    })
}