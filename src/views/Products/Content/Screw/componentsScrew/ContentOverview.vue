<script setup>
// 图文概述

import { watch, onMounted, ref } from "vue"

// 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentStoreOver = useContentStore()                // 实例化

// 2.处理数据

// 4.钩子生命周期函数

</script>

<template>
  
    <!-- 产品图文概述 -->
    <div class="product-panel-Overview">
        <div class="container">
            <!-- 01.产品图文概述 -->
            <div class="Product-detail">
                <!-- 产品图片 -->
                <el-carousel trigger="click"  :autoplay="false" loop="false" class="card-bd" >
                    <el-carousel-item class="card-item" v-for="item in ContentStoreOver.productScrewImages" :key="item.id">
                        <el-card class="card" shadow="hover" >
                            <img
                                v-img-lazy="item.image"
                                style="width: 100%"
                             />
                        </el-card>
                        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
                    </el-carousel-item>
                </el-carousel>
                <!-- 产品概述 -->
                <div class="Product-info">
                    <h2>{{ ContentStoreOver.productScrewDetail.name }}</h2>
                    <!-- <h3>一体化步进电机</h3> -->
                    <div class="description">
                        <div v-html="ContentStoreOver.productScrewDetail.description" style="margin-top: 20px;color: #454545;font-size: 14px;"></div>
                    </div>
                    <a href="https://affim.baidu.com/unique_30577829/chat?siteId=15043094&userId=30577829&siteToken=8b9903f017898a80ab853887d15b9743" class="btn-face" target="_blank">立即咨询</a>
                    <!-- <div class="btn-face">立即咨询</div> -->
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>

//产品内容
.product-panel-Overview {
    width: 100vw;
    background-color: #fff;
    // padding-bottom: 30px;
    // 01.产品图文概述
    .Product-detail {
        display: flex;
        justify-content: space-between;
        padding: 40px 10px;
        height: 600px;

        // 1.1 图片卡片容器
        .card-bd{
            padding: 0px 5px;
            width: 46%; //定义宽度
        }
        // 1.2 重新定义跑马灯css
        ::v-deep(.el-carousel) {
            // height: 100%;
            // 1.2.1 图片区
            .el-carousel__arrow {       //左右按钮
                background-color: #e4e4e4;
                border-radius: 4px;

                &:hover {
                    background-color: #003abc;
                }
            }
            .el-carousel__container{
                width: 100%;
                // height: 360px;
                height: 100%;
                
                .el-carousel__item {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex: 1;
                    justify-content: space-between;
                    margin:0 5px;
                    .el-card {
                        border: none;
                        width: 100%;
                        height: auto;
                        .el-card__body {
                            padding: 0;
                        }
                    }
                }
            }
            // 1.2.2 指示器
            .el-carousel__indicators {
                margin-bottom: 15px;    // 距离底部高度
                .el-carousel__indicator {
                    .el-carousel__button {
                        transition: all .3s;
                        margin: 0 2px;              // 默认间距宽度
                        background-color:#B4B4B5; // 默认颜色
                        width: 10px;                // 默认宽度
                    }
                }
                .is-active {
                    .el-carousel__button {
                        background-color:#003abd; // 激活颜色
                        width: 30px;                // 激活宽度
                    }
                }
            }
        }

        // 1.3 产品概述（右侧区域）
        .Product-info {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            margin-left: 28px;
            padding-left: 28px;
            h2 {
                color: #003abd;
                font-size: 32px;
            }
            h3 {
                margin-top: 15px;
                color: #454545;
                font-size: 16px;
            }
            .description {
                margin: 10px 0;
                p {
                    margin-top: 30px;
                    color: #454545;
                    font-size: 14px;
                }
            }

            .btn-face {
                display: block;
                margin-top: 30px;
                width: 80px;
                height: 26px;
                border: 1px solid #003abd;
                border-radius: 5px;
                font-size: 12px;
                color: #003abd;
                text-align: center;
                line-height: 26px;
                &:hover {
                    background-color: #003abd;
                    color: #fff;
                }
            }
        }
    }

}


@media (max-width: 960px) {
    
    .product-panel-detail {

        // 01.产品图文概述
        .Product-detail {
            height: 400px;

            // 1.1 图片卡片容器
            .card-bd{
                padding: 0px 5px;
                width: 46%; //定义宽度
            }
            // 1.2 重新定义跑马灯css


            // 1.3 产品概述（右侧区域）
            .Product-info {
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;
                margin-left: 28px;
                padding-left: 28px;
                h2 {
                    color: #003abd;
                    font-size: 26px;
                }
                h3 {
                    margin-top: 15px;
                    color: #454545;
                    font-size: 16px;
                }
                .description {

                    
                    margin: 10px 0;
                    p {
                        margin-top: 30px;
                        color: #454545;
                        font-size: 14px;
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
            height: 400px;

            // 1.1 图片卡片容器
            .card-bd{
                padding: 0px 5px;
                width: 100%; //定义宽度
            }
            // 1.2 重新定义跑马灯css

            // 1.3 产品概述（右侧区域）

        }

    }
}


@media (max-width: 575px) {
    .product-panel-detail {

        // 01.产品图文概述
        .Product-detail {
            display: flex;
            flex-direction: column;
            height: 400px;

            // 1.1 图片卡片容器
            .card-bd{
                padding: 0px 5px;
                width: 100%; //定义宽度
            }
            // 1.2 重新定义跑马灯css


            // 1.3 产品概述（右侧区域）

        }

    }
}

</style>