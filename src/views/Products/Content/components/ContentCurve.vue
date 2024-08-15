<script setup>

// 矩频曲线

import { watch, onMounted, ref } from "vue"

// 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
// const ContentCurve = useContentStore()                // 实例化
const ContentCurve = ref('')

const getContentCurve = () => {
    const res = useContentStore()                // 实例化
    ContentCurve.value = res.productDetail.curve_image
}

const handleChange = () => {
    getContentCurve()
}

// 4.钩子生命周期函数


</script>

<template>
    <div class="product-panel-Curve">
        <div class="container">
            <div class="Product-spec">
                <el-collapse v-model="activeNames" @change="handleChange">

                    <el-collapse-item title="矩频曲线" name="spec-4">
                        <div class="spec-img">
                            <img
                                :src="ContentCurve"
                                style="width: 100%"
                                />
                        </div>
                    </el-collapse-item>

                </el-collapse>
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>

//产品内容
.product-panel-Curve {
    width: 100vw;
    background-color: #fff;
    // padding-bottom: 30px;

    // 02.产品规格
    .Product-spec {
        // margin-bottom: 10px;
        padding: 0 15px;
        // 2.1 重新定义折叠面板el样式
        ::v-deep .el-collapse {
            border: none; // 去掉边框
            .el-collapse-item {
                // 2.1.1 头部
                .el-collapse-item__header { 
                    margin-top: 5px;
                    padding: 0 30px;
                    background-color:#f2f3f4;
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
                    // 2.1.3.2 通用图片
                    .spec-img {
                        margin: 0 auto;
                        padding: 0 20px;
                        text-align: center;
                    }

                }
            }

        }
    }

}


@media (max-width: 960px) {

}

@media (max-width: 768px) {
    .product-panel-Curve {
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


@media (max-width: 575px) {

}

</style>