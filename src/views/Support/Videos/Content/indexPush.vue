<script setup>

import { watch, onMounted, ref, reactive } from "vue"
// import md5 from "js-md5"

import { getSupportVideosDetailAPI } from "@/apis/videos"
import { useRoute,useRouter, onBeforeRouteUpdate } from "vue-router"   // 引入路由

// 1.跳转路由
const route = useRoute()                //调用路由
const router = useRouter()                                              // 调用路由方法
const VideosDetail = ref({})             //产品数据列表
const getVideosDetail = async(id = route.params.id) => {
    const res = await getSupportVideosDetailAPI(id)
    VideosDetail.value = res.data[0].videos[0]
    router.push(`/video/detail/${id}/${VideosDetail.value.id}`)
}

// 4.钩子生命周期函数
onMounted(() => getVideosDetail())

</script>

<template>
    <!-- 面包屑区域 -->
    
</template>

<style scoped lang='scss'>


@media (max-width: 960px) {
    
}

@media (max-width: 768px) {

}

@media (max-width: 575px) {

}

</style>