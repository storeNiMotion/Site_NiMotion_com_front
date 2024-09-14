import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI, getSelectNavAPI, getOneNavAPI } from '@/apis/layout'
import { getProductListAPI, getProductSKUListAPI } from "@/apis/product"


export const useCategoryStore = defineStore('category', () => {

    // 1.导航列表数据
    const getCategoryList = ref([])
    // 获取导航数据方法action
    const getCategory = async() => {

        const res = await getCategoryAPI()

        getCategoryList.value = res.data
    }

    // 2.一级导航列表数据
    const getOneCategoryList = ref([])
    // 获取一级导航数据方法action
    const getOneCategory = async() => {

        const res = await getOneNavAPI()

        getOneCategoryList.value = res.data
    }

    // 3.下拉产品导航列表数据
    const getSelectCategoryList = ref([])
    // 获取下拉导航数据方法action
    const getSelectNav = async() => {

        const res = await getSelectNavAPI()

        getSelectCategoryList.value = res.data
    }

    // 4.获取产品列表数据
    const ProductList = ref([])             // 产品列表
    const SelfData = ref({})                // 本身数据
    const getProductList = async(id) => {
        const res = await getProductListAPI(id)
        SelfData.value = res.self_data[0]
        ProductList.value = res.data                // 产品列表数据

        document.title = SelfData.value.name + ' - NiMotion - "Professional motion control service platform"!'
    }

    // 5.获取产品SKU列表数据
    const SKUList = ref([])                 //产品数据列表
    const SKUSelfData = ref({})                // 本身数据
    const getProductSKUList = async(id) => {
        const res = await getProductSKUListAPI(id)
        SKUSelfData.value = res.category[0]
        SKUList.value = res.data                // 产品列表数据

        document.title = SKUSelfData.value.name + ' - NiMotion - "Professional motion control service platform"!'
    }


    return {
        getCategoryList,
        getOneCategoryList,
        getSelectCategoryList,
        ProductList,
        SelfData,
        SKUList,
        SKUSelfData,

        getCategory,
        getOneCategory,
        getSelectNav,
        getProductList,
        getProductSKUList
    }

})
