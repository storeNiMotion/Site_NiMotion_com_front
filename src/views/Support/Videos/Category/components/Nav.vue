<script setup>

import { onMounted, ref } from "vue"
import { getSupportVideosChannelAPI } from "@/apis/videos"

const VideosNav = ref([])             // 数据列表
const getVideosChannel = async() => {
    const res = await getSupportVideosChannelAPI()
    VideosNav.value = res.category
}

onMounted(() => getVideosChannel())

</script>

<template>
    <div class="Video-panel">
        <div class="container">
            <div class="video-nav">
                <div class="nav-item">
                    <RouterLink active-class="active" to="">全部</RouterLink>
                </div>
                <div class="nav-item" v-for="i in VideosNav" :key="i.id">
                    <RouterLink active-class="active" :to="`/video/${i.id}`">{{ i.name }}</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>

.Video-panel {
    margin: 20px 10px;
    width: 100vw;
    .video-nav {
        display:flex;
        flex-wrap: wrap;
        padding: 0 10px;
        width: 100%;
        .nav-item {
            margin: 5px;
            border: none;
            color: #232323;
            font-size: 14px;
            font-weight: 400;
            a {
                display: block;
                padding: 6px 20px;
                width: 100%;
                height: 100%;
                border-radius: 10px;
                color: #333;
                background-color: #d0d0d0;
            }
            &:hover {
                // color: #003abd;
                a {
                    color: #fff;
                    // font-size: 15px;
                    font-weight: 500;
                    background-color: #003abd;
                    // border-bottom: 1px solid #a8a8a8;
                }
            }
            .active {
                color: #fff;
                background-color: #003abd;
                // font-weight: 600;
            }
        }
    }
}


@media (max-width: 1200px) {


}

@media (max-width: 960px) {
    //面包屑
    .nav-bread {
        display: none;
    }


}

@media (max-width: 768px) {

}

</style>