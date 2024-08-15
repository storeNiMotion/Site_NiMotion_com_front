<script setup>

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

    <div class="Video-panel-Overview">
        <div class="container">
            <div class="Video-title" >
                <!-- 标题 -->
                <div class="info">
                    <!-- <h2>{{ ContentStoreOver.productDetail.name }}</h2> -->
                    <h2>{{ VideosDetail.name }}</h2>
                    <div class="time">
                        <span class="iconfont icon-shijian"></span>
                        <span>{{ VideosDetail.release_time }}</span>
                        <!-- <div style="margin-top: 20px;color: #454545;font-size: 14px;"></div> -->
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

//产品内容
.Video-panel-Overview {
    width: 100vw;
    background-color: #fff;

    .Video-title {
        display: flex;
        justify-content: space-between;
        padding: 20px 15px 5px;

        .info {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            // margin-left: 28px;
            // padding-left: 28px;
            h2 {
                color: #3a3a3a;
                font-size: 22px;
            }

            .time {
                display: flex;
                justify-content: left;
                align-items: center;
                margin: 10px 0;
                color: #797979;
                font-size: 14px;
                .iconfont {
                    margin: 1px 5px 0;
                }

            }

        }
    }

}


@media (max-width: 1024px) {
    
    .product-panel-detail {
        // 01.产品图文概述
        .Product-detail {
            // height: 400px;
            // 1.1 图片卡片容器
            // 1.2 重新定义跑马灯css
            // 1.3 产品概述（右侧区域）
            .Product-info {
                margin-left: 18px;
                padding-left: 18px;
                h2 {
                    font-size: 26px;
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