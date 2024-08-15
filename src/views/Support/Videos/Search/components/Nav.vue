<script setup>

import { onMounted, ref } from "vue"
import { getSupportVideosChannelAPI } from "@/apis/videos"

const VideosNav = ref([])             //产品数据列表
const getVideosChannel = async() => {
    const res = await getSupportVideosChannelAPI()
    // SelfData.value = res.category[0]
    VideosNav.value = res.category                // 产品列表数据
    // console.log(VideosChannel.value);
}


onMounted(() => getVideosChannel())

</script>

<template>

    <div class="Video-panel">
        <div class="container">
            <div class="video-nav">
                <div class="nav-item">
                    <p>搜索结果：</p>
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
        padding: 0 10px;
        width: 100%;
        .nav-item {
            margin: 5px;
            border: none;
            color: #232323;
            font-size: 14px;
            font-weight: 400;
            p {
                padding: 0 5px;
                font-size: 18px;
                font-weight: 500;
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