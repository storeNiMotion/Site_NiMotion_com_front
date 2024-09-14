import { ref } from 'vue'
import { defineStore } from 'pinia'

import { filterProductAPI } from "@/apis/product"

export const useFilterProductStore = defineStore('filter', () => {

    // 1.产品列表数据
    const getFilterProductList = ref([])
    // 获取列表数据方法action
    const getFilterProduct = async({series, Rated_voltage, bus, encoder, Brake, size}) => {
        const res = await filterProductAPI({series, Rated_voltage, bus, encoder, Brake, size})
        getFilterProductList.value = res.data
    }

    return {
        getFilterProductList,
        
        getFilterProduct,

    }

})
