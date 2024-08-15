<script setup>
// 相关产品

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

<!-- 03.相关产品 -->
<div class="Product-related">
    <el-carousel 
    arrow="always" 
    trigger="click" 
    :autoplay="false" 
    loop="false" 
    class="card-bd" 
    @change="slideChange"
    >
        <el-carousel-item class="card-item" v-for="(item, index) in VideosDetail.related_pro" :key="item.id">
            <el-card class="card" shadow="hover">
                <RouterLink :to="`/product/${item.router}/detail/${item.id}`" target="_blank" rel="noopener noreferrer">
                    <img
                        :src="item.default_image"
                    />
                </RouterLink>
            </el-card>
        </el-carousel-item>
    </el-carousel>
</div>

</template>

<style scoped lang='scss'>

// 03.相关产品
.Product-related {
    margin: 10px 5px 10px 0;

    // 3.1 重新定义跑马灯css
    ::v-deep(.el-carousel) {
        height: 240px;
        overflow: hidden;
        // 3.1.1 主体内容
        .el-carousel__arrow {       //左右按钮
            background-color: rgba($color: #303030, $alpha: .5);
            border-radius: 6px;
            &:hover {
                background-color: #003abc;
            }
        }
        .el-carousel__container {
            // height: 150px;
            height: 100%;
            .el-carousel__item {
                width: 100%;
                height: 100%;
                display: flex;
                flex: 1;
                margin:0 5px;
                .el-card {
                    width: 100%;
                    height: 100%;
                    padding: 0 5px;
                    border: none; // 去掉边框

                    .el-card__body {
                        padding: 0;
                        height: 100%;
                        a {
                            display: flex;
                            align-items: center;
                            width: 100%;
                            max-height: 240px;
                            border-radius: 6px;
                            overflow: hidden;
                        }
                        img {
                            display: block;
                            width: 100%;
                            opacity: 1;
                            transition: all 0.3s;
                        }
                    }
                    &:hover {
                        img {
                            transform: scale(1.05);
                        }
                        a {
                            color: #003abd !important;
                        }
                    }
                }
            }
        }

        // 3.1.3 指示器#B4B4B5
        .el-carousel__indicators {
            margin-top: 10px;
            .el-carousel__indicator {
                .el-carousel__button {
                    background-color:#B4B4B5;
                    width: 15px;
                    height: 2.5px;
                    border-radius: 2px;
                }

            }
            .is-active {
                .el-carousel__button {
                    background-color:#003abd;
                    width: 30px;
                }
            }
        }
    }

}


@media (max-width: 1024px) {
    .Product-related {
        margin: 10px 5px 10px 0;
        width: 260px;

        // 3.1 重新定义跑马灯css
        ::v-deep(.el-carousel) {
            height: 150px;
            overflow: hidden;
            // 3.1.1 主体内容
            .el-carousel__arrow {       //左右按钮
                background-color: rgba($color: #303030, $alpha: .5);
                border-radius: 6px;
                &:hover {
                    background-color: #003abc;
                }
            }
            .el-carousel__container {
                // height: 150px;
                height: 100%;
                .el-carousel__item {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex: 1;
                    margin:0 5px;
                    .el-card {
                        width: 100%;
                        height: 100%;
                        padding: 0 5px;
                        border: none; // 去掉边框

                        .el-card__body {
                            padding: 0;
                            height: 100%;
                            a {
                                display: flex;
                                align-items: center;
                                width: 100%;
                                max-height: 150px;
                                border-radius: 6px;
                                overflow: hidden;
                            }
                            img {
                                display: block;
                                width: 100%;
                                opacity: 1;
                                transition: all 0.3s;
                            }
                        }
                        &:hover {
                            img {
                                transform: scale(1.05);
                            }
                            a {
                                color: #003abd !important;
                            }
                        }
                    }
                }
            }

            // 3.1.3 指示器#B4B4B5
            .el-carousel__indicators {
                margin-top: 10px;
                .el-carousel__indicator {
                    .el-carousel__button {
                        background-color:#B4B4B5;
                        width: 15px;
                        height: 2.5px;
                        border-radius: 2px;
                    }

                }
                .is-active {
                    .el-carousel__button {
                        background-color:#003abd;
                        width: 30px;
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