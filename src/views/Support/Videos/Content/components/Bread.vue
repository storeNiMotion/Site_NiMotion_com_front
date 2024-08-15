<script setup>

// 次导航
import { onMounted, ref } from "vue"
import { getSupportVideosDetailAPI } from "@/apis/videos"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由
const VideosDetail = ref({})             //产品数据列表
const getVideosDetail = async(id = route.params.id) => {
    const res = await getSupportVideosDetailAPI(id)
    // SelfData.value = res.category[0]
    VideosDetail.value = res.data[0]                // 产品列表数据
    // console.log(VideosChannel.value);
}


onMounted(() => getVideosDetail())

</script>

<template>
    <!-- 面包屑区域 -->
    <div class="product-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <RouterLink to="/">首页</RouterLink>
                <span> > </span>
                <RouterLink to="/video">视频教程</RouterLink>
                <span> > </span>
                <span class="active">{{ VideosDetail.name }}</span>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
//面包屑
.nav-bread {
    width: 100vw;
    padding: 0 20px;
    height: 36px;
    // background-color: #f2f3f4;
    a {
        color: #1d1d1f;
        font-size: 12px;
        line-height: 36px;
        &:hover {
            color: #003abd;
        }
    }
    .active {
        color: #003abd;
    }
}

@media (max-width: 960px) {
    //面包屑
    .nav-bread {
        display: none;
    }

}

@media (max-width: 768px) {

}


@media (max-width: 575px) {

}

</style>