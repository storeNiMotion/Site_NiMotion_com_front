<script setup>

import BreadNav from './components/Bread.vue'
import Option from './components/Option.vue'
import Result from './components/Result.vue'

import { downAPI, downloadAPI } from "@/apis/download"
import { ElMessage,  } from "element-plus"
import { Delete } from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-message.css'
import { onMounted, ref } from "vue"
import { useUserStore } from '@/stores/user'    // 导入pinia
import { useRouter } from "vue-router"            //调用路由 => “方法”

const userStore = useUserStore()                // 实例化
const router = useRouter()                      // 调用路由方法

// 一、调用接口
const sendData = ref({
    category: '',
    type: '',
    keyword: ''
})

//需注意请求超时问题
const loading = ref(true)
//1.get请求获取前10条 => Done
const getdata = async() => {
    loading.value = true
    const resdata = await downAPI()
    tableData.value = resdata.data
    loading.value = false

}

//2.post请求 获取筛选对象 => Unfinished
const postdata = async() => {
    loading.value = true
    const result = await downloadAPI(sendData.value)
    tableData.value = result.data
    loading.value = false
    // console.log(res)
    
}

//二、准备条件对象
//1.条件
const categoryvalue = ref('')   //类别下拉
const productvalue = ref('')    //产品类别下拉
const searchinput = ref('')     //搜索框iconvalue
const iconvalue = ref(null)


//2.结果对象
const tableData = ref([])


//三、事件处理
//1.下拉1
const categoryselect = () => {
    sendData.value.category = categoryvalue.value
    // console.log(sendData.value)
    postdata()

}
//2.下拉2
const productselect = () => {
    sendData.value.type = productvalue.value
    postdata()
}
//3.搜索
const clicksearch = () => {
    sendData.value.keyword = searchinput.value
    postdata()
}

//4.enter事件
//5.快捷条件点击
const clickselect = (value) => {
    sendData.value.category = value
    // console.log(value)
    postdata()
}


onMounted(() => {
    // getdata()
})

</script>
<template> 
    <!-- 面包屑区域 -->
    <BreadNav />
    <!-- 条件1 -->
    <Option />
    <!-- 结果 -->
    <!-- <Result /> -->
</template>

<style scoped lang='scss'>


</style>