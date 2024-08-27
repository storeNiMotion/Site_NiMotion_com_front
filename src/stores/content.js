import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getProductDetailAPI, getProductScrewDetailAPI } from "@/apis/product"   //导入API

export const useContentStore = defineStore('content', () => {

    // 1.产品内容数据
    const productDetail = ref({})
    const productImages = ref([])
    const numberSpecData = ref([])          // 型号规格数据
    const specListData = ref([])            // 规格列表
    const specImgListData = ref([])         // 规格列表
    const drawImgListData = ref([])         // 图纸尺寸 => 多图

    // 获取内容数据方法action
    const getProductDetail = async(id) => {
        const res = await getProductDetailAPI(id)
        productDetail.value = res.data[0]
        productImages.value = productDetail.value.images.filter((ele) => ele.tag === '产品图')
        numberSpecData.value = productDetail.value.product_number
        
        specListData.value = productDetail.value.product_Detailspec
        specImgListData.value = productDetail.value.images.filter((ele) => ele.tag === '规格参数')
        drawImgListData.value = productDetail.value.images.filter((ele) => ele.tag === '图纸尺寸')

        document.title = productDetail.value.name + ' - NiMotion - Professional motion control service platform'
    }



    // 2.产品内容数据
    const productScrewDetail = ref({})
    const productScrewImages = ref([])
    const numberScrewSpecData = ref([])          // 型号规格数据
    const specScrewListData = ref([])            // 规格列表
    const specScrewImgListData = ref([])         // 规格列表
    // 获取丝杆电机内容数据方法action
    const getProductScrewDetail = async(id) => {
        const res = await getProductScrewDetailAPI(id)
        productScrewDetail.value = res.data[0]
        productScrewImages.value = productScrewDetail.value.images.filter((ele) => ele.tag === '产品图')
        numberScrewSpecData.value = productScrewDetail.value.product_screw_number
        
        specScrewListData.value = productScrewDetail.value.product_Detailspec
        specScrewImgListData.value = productScrewDetail.value.images.filter((ele) => ele.tag === '规格参数')

        document.title = productScrewDetail.value.name + ' - NiMotion - Professional motion control service platform'
    }

    return {
        productDetail,
        numberSpecData,
        productImages,
        specListData,
        specImgListData,
        drawImgListData,

        productScrewDetail,
        numberScrewSpecData,
        productScrewImages,
        specScrewListData,
        specScrewImgListData,
        
        getProductDetail,
        getProductScrewDetail,

    }

})
