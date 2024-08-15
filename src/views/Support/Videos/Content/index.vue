<script setup>
import Bread from './components/Bread.vue'
import Title from './components/Title.vue'
import VideoView from './components/VideoView.vue'
import Info from './components/Info.vue'
import VideoList from './components/VideoList.vue'
import RelateProducts from './components/RelateProducts.vue'
import RelateVideos from './components/RelateVideos.vue'
// import Relate from './components/Relate.vue'

import { watch, onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"   // 引入路由

// 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentStore = useContentStore()                // 实例化

const route = useRoute()    //调用路由


// 4.钩子生命周期函数
onMounted(() => {
    ContentStore.getProductDetail(route.params.id)
})

</script>

<template>
    <!-- 面包屑区域 -->
    <Bread />
    <!-- 标题 -->
    <Title />

    <div class="video-panel-Overview">
        <div class="container">
            <div class="video-view" >
                <!-- 左侧 -->
                <div class="left">
                    <!-- 播放器 -->
                    <VideoView />
                    <!-- 内容简介 -->
                    <Info />
                </div>
                <!-- 右侧 -->
                <div class="right">
                    <!-- 列表 -->
                    <VideoList />
                    <!-- 相关产品 -->
                    <RelateProducts />
                    <!-- 相关视频 -->
                    <RelateVideos />
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
.video-panel-Overview {
    width: 100vw;
    background-color: #fff;

    .video-view {
        display: flex;
        justify-content: space-between;
        padding: 0px 10px;

        .left {
            padding: 1px;
            width: 72%;     //定义宽度
            height: 100%;
            
        }
        .right {
            flex: 1;

        }
    }
}

@media (max-width: 1024px) {
    .video-panel-Overview {
        .video-view {
            // display: flex;
            flex-direction: column;     // 切换纵向
            // justify-content: space-between;
            padding: 0px 15px;
            margin: 0 5px;
            .left {
                // padding: 1px;
                width: 100%;
                // height: 100%;
                
            }

        }
    }
}

@media (max-width: 960px) {
    
}

@media (max-width: 768px) {

}

@media (max-width: 575px) {

}

</style>