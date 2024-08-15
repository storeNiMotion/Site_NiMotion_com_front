<script setup>
// 相关视频
import { onMounted, ref } from "vue"

import { getSupportVideosDetailAPI } from "@/apis/videos"
import { useRoute } from "vue-router"   // 引入路由

// 1.获取数据
const route = useRoute()                // 调用路由
const VideosDetail = ref({})            // 视频列表
const getVideosDetail = async(id = route.params.id) => {
    const res = await getSupportVideosDetailAPI(id)
    VideosDetail.value = res.data[0]

}

// 4.钩子生命周期函数
onMounted(() => getVideosDetail())

</script>

<template>

<!-- 03.相关视频 -->
<div class="Videos-related">
    <div class="result">
        <div class="result-item" v-for="item in VideosDetail.related_videos" :key="item.id">
            <div class="pic">
                <div class="pic-box">
                    <RouterLink :to="`/video/detail/${item.id}`" target="_blank" rel="noopener noreferrer">
                        <img v-img-lazy="item.default_image" :alt="item.name">
                    </RouterLink>
                </div>
            </div>
            <div class="detail">
                <RouterLink :to="`/viseo/detail/${item.id}`" target="_blank" rel="noopener noreferrer">
                    <h4>{{ item.name }}</h4>
                </RouterLink>
                <!-- <p v-html="item.description"></p> -->
                 <p class="tag">{{ item.tag }}</p>
                 <p class="time">{{ item.release_time }}</p>
            </div>
        </div>
    </div>

</div>
</template>

<style scoped lang='scss'>

// 03.相关视频
.Videos-related {
    margin: 0px 5px 10px 10px;
    .result {
        display: flex;
        flex-direction: column;
        .result-item {
            display: flex;
            margin: 5px 0;
            .pic {
                max-width: 150px;
                width: 43%;
                max-height: 200px;
                border-radius: 5px;
                overflow: hidden;
                .pic-box {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    overflow: hidden;
                    a {
                        display: flex;
                        align-items: center;
                    }
                    img {
                        width: 100%;
                        transition: all .3s;
                    }
                }
                &:hover {
                    img {
                        transform: scale(1.1);
                    }
                }
            }
            .detail {
                flex: 1;
                margin-left: 5px;
                padding: 8px 0 5px 5px;
                background-color: #fff;
                h4 {
                    color: #404040;
                    font-size: 14px;
                    font-weight: 400;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .tag {
                    margin: 4px 0;
                    color: #ff7c2d;
                    font-size: 12px;
                }

            }

            &:hover {
                .detail {
                    h4 {
                        color: #003abd;
                    }
                }

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