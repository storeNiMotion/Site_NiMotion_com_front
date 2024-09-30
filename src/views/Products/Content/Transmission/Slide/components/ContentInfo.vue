<script setup>
// 规格参数 => 文字
import { watch, onMounted, ref } from "vue"

// 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentInfo = useContentStore()                // 实例化

// 2.处理数据

// 折叠面板
const activeNames = ref(['spec-Info'])     // 默认显示面板



// 4.钩子生命周期函数


</script>

<template>

    <!-- 产品主体 -->
    <div class="product-panel-SpecTxt">
        <div class="container">

            <!-- 02.产品规格 -->
            <div class="Product-spec">
                <el-collapse v-model="activeNames" @change="handleChange">

                    <el-collapse-item title="Specifications" name="spec-Info">
                        <!-- 这里使用文本域content -->
                        <div v-html="ContentInfo.productDetail.content" class="io-info"></div>
                    </el-collapse-item>

                </el-collapse>
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>
//产品内容
.product-panel-SpecTxt {
    width: 100vw;
    background-color: #fff;
    // padding-bottom: 30px;

    // 02.产品规格
    .Product-spec {
        // margin-bottom: 10px;
        padding: 0 15px;

        // 2.1 重新定义折叠面板el样式
        ::v-deep(.el-collapse) {
            border: none; // 去掉边框

            .el-collapse-item {

                // 2.1.1 头部
                .el-collapse-item__header {
                    margin-top: 5px;
                    padding: 0 30px;
                    background-color: #f2f3f4;
                    border: none;
                    font-weight: 600;

                    &:hover {
                        background-color: #b5c6ee;
                        color: #003abd;
                    }
                }

                // 2.1.2 激活状态
                .is-active {
                    background-color: #b5c6ee;
                    color: #003abd;
                }

                // 2.1.3 内容区
                .el-collapse-item__wrap {
                    border: none;

                    // 2.1.3.1 重新定义表格el
                    .io-info {
                        padding: 10px;

                        table,
                        th,
                        td {
                            border: 1px solid #000;
                            border-collapse: collapse;
                        }
                    }


                }
            }

        }
    }

    // 03.相关产品
    .Product-related {
        padding: 20px 15px;

        h2 {
            margin: 10px 0;
            color: #003abd;
            font-size: 32px;
        }

        .card-bd {
            padding: 0 5px;
        }

        // 3.1 重新定义跑马灯css
        ::v-deep(.el-carousel) {

            // 3.1.1 主体内容
            .el-carousel__arrow {
                //左右按钮
                background-color: #e4e4e4;
                border-radius: 4px;

                &:hover {
                    background-color: #003abc;
                }
            }

            .el-carousel__container {
                // height: 320px;
                height: auto;

                .el-carousel__item {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex: 1;
                    justify-content: space-between;
                    margin: 0 5px;

                    .el-card {
                        width: 24%;
                        height: fit-content;
                        border: none; // 去掉边框

                        .el-card__body {
                            padding: 0;

                            a {
                                display: block;
                                height: 100%;
                            }

                            h3 {
                                position: absolute;
                                // top: 290px;
                                // margin: 10px;
                                padding: 5px;
                                transform: translateY(-100%);
                                width: 100%;
                                background-color: #fff;
                            }

                            img {
                                display: block;
                                height: 100%;
                                opacity: 1;
                                transition: all 0.3s;
                            }
                        }

                        .el-card__footer {
                            position: absolute;
                            display: block;
                            // margin-bottom: 2px;
                            padding: 8px 4px;
                            height: 40px;
                            border: none;

                            a {
                                font-size: 14px;
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

            // 3.1.2 左右箭头
            .el-carousel__arrow {
                top: 40%;
            }

            // 3.1.3 指示器#B4B4B5
            .el-carousel__indicators {
                margin-top: 20px;

                .el-carousel__indicator {
                    .el-carousel__button {
                        background-color: #B4B4B5;
                        width: 20px;
                    }

                }

                .is-active {
                    .el-carousel__button {
                        background-color: #003abd;
                        width: 30px;
                    }
                }
            }
        }

    }
}

@media (max-width: 960px) {}

@media (max-width: 768px) {
    .product-panel-SpecTxt {
        // 02.产品规格
        .Product-spec {
            // 2.1 重新定义折叠面板el样式
            ::v-deep(.el-collapse) {
                .el-collapse-item {
                    // 2.1.1 头部
                    .el-collapse-item__header { 
                        padding: 0 10px;
                        font-size: 16px;
                        font-weight: 650;
                    }
                    // 2.1.2 激活状态

                    // 2.1.3 内容区
                    .el-collapse-item__wrap {
                        border: none;
                        // 2.1.3.2 通用图片
                        .spec-img {
                            margin: 0 auto;
                            padding: 5px;
                            text-align: center;
                        }
                    }
                }

            }
        }

    }
}


@media (max-width: 575px) {}
</style>