<script setup>
// 右侧内容

import { onMounted, ref, reactive } from "vue"

import { getSupportVideosDetailAPI } from "@/apis/videos"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

// 1.获取数据
const VideosUrl = ref('')               // 视频id
const VideosUrlList = ref('')           // 视频id列表
const num = ref('0')                    // 数量条数
const idl = ref('')                     // 视频内容页id 
const route = useRoute()                // 调用路由

const VideosDetail = ref({})            // 视频列表
const getVideosDetail = async(id = route.params.id) => {
    const res = await getSupportVideosDetailAPI(id)
    idl.value = id
    VideosUrl.value = parseInt(route.params.url)
    VideosDetail.value = res.data[0]
    VideosUrlList.value = VideosDetail.value.videos.map((item)=>item.id)
    // console.log(VideosUrlList.value)
    num.value = VideosDetail.value.videos.length
    getIndex()
}

// 2.获取视频索引
const index = ref(0)
const getIndex = () => {
    index.value = VideosUrlList.value.indexOf(VideosUrl.value)
    // console.log(index);
}

// 3.获取视频时长

// 4.钩子生命周期函数
onMounted(() => getVideosDetail())

</script>

<template>

<div class="video-list">
    <div class="title">
        <!-- <span>视频列表</span> -->
        <h3>视频列表</h3>
        <span class="num"> (</span>
        <span class="num">{{ index + 1 }}</span>
        <span class="num">/</span>
        <span class="num">{{ num }}</span>
        <span class="num">) </span>
    </div>
    <div class="title-item" >
        <ul class="list" >
            <li v-for="(item,index) in VideosDetail.videos" :key="index">
                <RouterLink active-class="active" :to="`/video/detail/${idl}/${item.id}`" v-if="item.id===VideosUrl">
                    <div class="link-content">
                        <img src="@/assets/images/playing.gif" alt="">
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="duration">{{ item.duration }}</div>
                </RouterLink>
                <RouterLink :to="`/video/detail/${idl}/${item.id}`" v-else>
                    <div class="link-content">
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="duration">{{ item.duration }}</div>
                </RouterLink>
            </li>
        </ul>
    </div>
</div>

</template>

<style scoped lang='scss'>

.video-list {
    // flex: 1;
    position: relative;
    margin: 0 5px 0 10px;
    border-radius: 6px;
    margin-bottom: 18px;
    background-color: #f1f2f3;
    .title {
        display: flex;
        padding: 14px 16px 10px 16px;
        align-items: center;
        // justify-content: space-between;
        h3 {
            font-size: 15px;
            line-height: 20px;
            font-weight: 500;
            margin-right: 4px;
        }
        span {
            font-size: 12px;
            color: #9499a0;
            line-height: 16px;
        }
    }
    .title-item {
        padding: 4px 0;
        max-height: 340px;
        overflow: hidden;
        .list {
            padding: 0 6px;
            li {
                margin: 4px 0;
                border-radius: 2px;
                color: #18191c;
                overflow: hidden;
                font-size: 13px;
                a {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    overflow: hidden;
                    padding: 6px 10px;
                    width: 100%;
                    height: 30px;
                    img {
                        margin-right: 2px;
                        height: 100%;
                        max-height: 16px;
                    }
                }
                &:hover {
                    background-color: #fff;
                }
                .active {
                    background-color: #fff;
                }
            }
        }
    }
}


@media (max-width: 1024px) {
    .video-list {
        // flex: 1;
        background-color: #ffffff;
        .title {
            display: none;
        }
        .title-item {
            .list {
                display: flex;
                flex-wrap: wrap;
                li {
                    margin: 5px 5px 5px 0;
                    background-color: #f1f2f3;
                    a {
                        .duration {
                            display: none;
                        }
                    }
                    &:hover {
                        background-color: #f1f2f3;
                        
                        a {
                            color: #003abd;
                        }
                    }
                    .active {
                        background-color: #f1f2f3;
                        color: #003abd;
                    }
                }
            }
        }
    }

}


@media (max-width: 960px) {
    
    .product-panel-detail {

        // 01.产品图文概述
        .Product-detail {
            // height: 400px;
            // 1.1 图片卡片容器
            // 1.2 重新定义跑马灯css
            // 1.3 产品概述（右侧区域）
            .Product-info {
                .description {
                    p {
                        margin-top: 10px;
                    }
                }
            }
        }

    }

}

@media (max-width: 768px) {
    .product-panel-detail {

        // 01.产品图文概述
        .Product-detail {
            display: flex;
            flex-direction: column;
            align-items: center;
            // height: 400px;

            // 1.1 图片卡片容器
            .card-bd{
                padding: 10px;
                width: 96%; //定义宽度
            }
            // 1.2 重新定义跑马灯css

            // 1.3 产品概述（右侧区域）
            .Product-info {
                margin-top: 16px;
                .description {
                    p {
                        margin-top: 0px;
                    }
                }
            }

        }

    }
}

@media (max-width: 575px) {

}

</style>